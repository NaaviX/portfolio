import { GitLabCalendarRaw, normalizeDay } from '@/hooks/useGitLabStats'
import { useLanguage } from '@/i18n'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
    PointerEvent as ReactPointerEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'

type HeatCalendarProps = {
    calendar: GitLabCalendarRaw
}

const GAP = 3
const STEP_MIN = 14
const STEP_MAX = 24
const ROWS = 7
const WEEKS = 53
const HEADER_OFFSET = 12
const BREATH_PERIOD = 7.5
const REVEAL_STAGGER = 0.018
const REVEAL_DURATION = 0.5

const SCALE = [
    'oklch(0.18 0.012 220)',
    'oklch(0.42 0.072 215)',
    'oklch(0.55 0.110 210)',
    'oklch(0.68 0.130 205)',
    'oklch(0.82 0.150 200)',
] as const

const BREATH_AMP_BY_BUCKET = [0.0, 0.04, 0.07, 0.1, 0.14] as const
const SPOTLIGHT_BY_BUCKET = [0.18, 0.3, 0.4, 0.5, 0.6] as const

type Rgb = [number, number, number]
type CursorPoint = { x: number; y: number }
type HeatCell = {
    week: number
    dow: number
    count: number
    additions: number
    deletions: number
    day: string
    inFuture: boolean
    bucket: number
}

let CACHED_PALETTE: Rgb[] | null = null
const resolvePalette = (): Rgb[] => {
    if (CACHED_PALETTE) return CACHED_PALETTE
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    const ctx = c.getContext('2d')
    if (!ctx) {
        CACHED_PALETTE = SCALE.map(() => [10, 30, 36] as Rgb)
        return CACHED_PALETTE
    }
    CACHED_PALETTE = SCALE.map((color) => {
        ctx.fillStyle = color
        ctx.fillRect(0, 0, 1, 1)
        const data = ctx.getImageData(0, 0, 1, 1).data
        return [data[0], data[1], data[2]] as Rgb
    })
    return CACHED_PALETTE
}

const bucket = (count: number): number => {
    if (count <= 0) return 0
    if (count <= 1) return 1
    if (count <= 3) return 2
    if (count <= 6) return 3
    return 4
}

const startOfWeekSunday = (d: Date): Date => {
    const out = new Date(d)
    out.setHours(0, 0, 0, 0)
    out.setDate(out.getDate() - out.getDay())
    return out
}

const isoDay = (d: Date): string =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const MONTHS_FR = [
    'janv.',
    'févr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juil.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.',
]
const MONTHS_EN = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const WEEKDAYS_FR = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const WEEKDAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const formatTooltipDate = (iso: string, language: 'fr' | 'en'): string => {
    const [y, m, d] = iso.split('-').map(Number)
    const date = new Date(y, m - 1, d)
    const dow = (language === 'fr' ? WEEKDAYS_FR : WEEKDAYS_EN)[date.getDay()]
    const month = (language === 'fr' ? MONTHS_FR : MONTHS_EN)[date.getMonth()]
    return language === 'fr'
        ? `${dow} ${d} ${month} ${y}`
        : `${dow} ${month} ${d}, ${y}`
}

const easeOutQuart = (t: number): number => {
    const x = 1 - t
    return 1 - x * x * x * x
}

const smoothstep = (a: number, b: number, x: number): number => {
    const t = Math.max(0, Math.min(1, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)
}

const drawRoundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
) => {
    if (typeof ctx.roundRect === 'function') {
        ctx.beginPath()
        ctx.roundRect(x, y, w, h, r)
        ctx.fill()
        return
    }
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + w - r, y)
    ctx.quadraticCurveTo(x + w, y, x + w, y + r)
    ctx.lineTo(x + w, y + h - r)
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    ctx.lineTo(x + r, y + h)
    ctx.quadraticCurveTo(x, y + h, x, y + h - r)
    ctx.lineTo(x, y + r)
    ctx.quadraticCurveTo(x, y, x + r, y)
    ctx.closePath()
    ctx.fill()
}

const revealForCell = (
    cell: HeatCell,
    elapsed: number,
    reduce: boolean
): number => {
    if (reduce) return 1
    const localT = (elapsed - cell.week * REVEAL_STAGGER) / REVEAL_DURATION
    return easeOutQuart(Math.max(0, Math.min(1, localT)))
}

const breatheColor = (
    color: Rgb,
    cell: HeatCell,
    x: number,
    y: number,
    elapsed: number,
    reduce: boolean
): Rgb => {
    if (reduce) return color
    const phase = x * 0.04 + y * 0.07
    const breath =
        1 +
        BREATH_AMP_BY_BUCKET[cell.bucket] *
            Math.sin((elapsed / BREATH_PERIOD) * Math.PI * 2 + phase)
    return color.map((v) => Math.min(255, v * breath)) as Rgb
}

const spotlightColor = (
    color: Rgb,
    cell: HeatCell,
    cursor: CursorPoint | null,
    centerX: number,
    centerY: number,
    spotlightRadius: number,
    reduce: boolean
): Rgb => {
    if (!cursor || reduce) return color
    const dx = cursor.x - centerX
    const dy = cursor.y - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const lift =
        smoothstep(spotlightRadius, 0, dist) * SPOTLIGHT_BY_BUCKET[cell.bucket]
    return color.map((v) => v + (255 - v) * lift) as Rgb
}

const paintCell = ({
    ctx,
    cell,
    palette,
    step,
    cellSize,
    cursor,
    elapsed,
    reduce,
    spotlightRadius,
}: {
    ctx: CanvasRenderingContext2D
    cell: HeatCell
    palette: Rgb[]
    step: number
    cellSize: number
    cursor: CursorPoint | null
    elapsed: number
    reduce: boolean
    spotlightRadius: number
}) => {
    if (cell.inFuture) return

    const revealEase = revealForCell(cell, elapsed, reduce)
    if (revealEase <= 0) return

    const x = cell.week * step
    const y = cell.dow * step
    const paintY = y + HEADER_OFFSET
    const centerX = x + cellSize / 2
    const centerY = paintY + cellSize / 2
    const breathed = breatheColor(
        palette[cell.bucket],
        cell,
        x,
        y,
        elapsed,
        reduce
    )
    const spotlighted = spotlightColor(
        breathed,
        cell,
        cursor,
        centerX,
        centerY,
        spotlightRadius,
        reduce
    )
    const [r, g, b] = spotlighted.map((v) => v * revealEase)

    ctx.fillStyle = `rgb(${r | 0}, ${g | 0}, ${b | 0})`
    drawRoundRect(ctx, x, paintY, cellSize, cellSize, 2)
}

const drawCalendarFrame = ({
    ctx,
    cells,
    palette,
    width,
    height,
    step,
    cellSize,
    cursor,
    startedAt,
    now,
    reduce,
    intersecting,
    spotlightRadius,
}: {
    ctx: CanvasRenderingContext2D
    cells: HeatCell[]
    palette: Rgb[]
    width: number
    height: number
    step: number
    cellSize: number
    cursor: CursorPoint | null
    startedAt: { current: number | null }
    now: number
    reduce: boolean
    intersecting: boolean
    spotlightRadius: number
}) => {
    if (startedAt.current == null) startedAt.current = now
    const elapsed = (now - startedAt.current) / 1000

    ctx.clearRect(0, 0, width, height)
    for (const c of cells) {
        paintCell({
            ctx,
            cell: c,
            palette,
            step,
            cellSize,
            cursor,
            elapsed,
            reduce,
            spotlightRadius,
        })
    }

    return !reduce && intersecting
}

export const HeatCalendar = ({ calendar }: HeatCalendarProps) => {
    const { language, t } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const months = language === 'fr' ? MONTHS_FR : MONTHS_EN

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [step, setStep] = useState(STEP_MIN)
    const cell = step - GAP
    const spotlightRadius = step * 4

    useEffect(() => {
        const node = wrapperRef.current
        if (!node) return
        const apply = (w: number) => {
            const target = Math.max(
                STEP_MIN,
                Math.min(STEP_MAX, Math.floor((w - 2) / WEEKS))
            )
            setStep((prev) => (prev === target ? prev : target))
        }
        apply(node.clientWidth)
        const ro = new ResizeObserver((entries) => {
            for (const e of entries) apply(e.contentRect.width)
        })
        ro.observe(node)
        return () => ro.disconnect()
    }, [])

    const { cells, monthLabels, total } = useMemo(() => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const end = new Date(today)
        end.setDate(end.getDate() + (6 - today.getDay()))
        const start = new Date(end)
        start.setDate(end.getDate() - (WEEKS * ROWS - 1))

        const firstSunday = startOfWeekSunday(start)
        const totalDays = WEEKS * ROWS

        const cells: HeatCell[] = []
        let total = 0
        const cursor = new Date(firstSunday)
        for (let i = 0; i < totalDays; i++) {
            const week = Math.floor(i / ROWS)
            const dow = i % ROWS
            const day = isoDay(cursor)
            const entry = normalizeDay(calendar[day])
            total += entry.commits
            cells.push({
                week,
                dow,
                count: entry.commits,
                additions: entry.additions,
                deletions: entry.deletions,
                day,
                inFuture: cursor > today,
                bucket: bucket(entry.commits),
            })
            cursor.setDate(cursor.getDate() + 1)
        }

        const monthLabels: Array<{ week: number; label: string }> = []
        let lastMonth = -1
        for (let week = 0; week < WEEKS; week++) {
            const cell = cells[week * ROWS]
            const d = new Date(cell.day)
            if (d.getMonth() !== lastMonth) {
                lastMonth = d.getMonth()
                monthLabels.push({ week, label: months[lastMonth] })
            }
        }

        return { cells, monthLabels, total }
    }, [calendar, months])

    const width = WEEKS * step
    const height = ROWS * step + HEADER_OFFSET + 2
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const cursorRef = useRef<{ x: number; y: number } | null>(null)
    const startedAtRef = useRef<number | null>(null)
    const hoveredIndexRef = useRef<number>(-1)
    // Touch/pen pointers vanish after pointerup, which would dismiss the
    // tooltip immediately. We pin it open instead, until the next tap.
    const pinnedRef = useRef(false)

    const [intersecting, setIntersecting] = useState(false)
    const [canvasFailed, setCanvasFailed] = useState(false)
    const [hovered, setHovered] = useState<{
        cx: number
        cy: number
        count: number
        additions: number
        deletions: number
        day: string
    } | null>(null)

    useEffect(() => {
        const node = wrapperRef.current
        if (!node) return
        const observer = new IntersectionObserver(
            (entries) => {
                for (const e of entries) setIntersecting(e.isIntersecting)
            },
            { threshold: 0 }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) {
            setCanvasFailed(true)
            return
        }
        const dpr = window.devicePixelRatio || 1
        canvas.width = Math.round(width * dpr)
        canvas.height = Math.round(height * dpr)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        const palette = resolvePalette()
        let raf = 0
        let alive = true

        const draw = (now: number) => {
            if (!alive) return
            const shouldContinue = drawCalendarFrame({
                ctx,
                cells,
                palette,
                width,
                height,
                step,
                cellSize: cell,
                cursor: cursorRef.current,
                startedAt: startedAtRef,
                now,
                reduce,
                intersecting,
                spotlightRadius,
            })
            if (shouldContinue) raf = requestAnimationFrame(draw)
        }

        if (reduce) {
            startedAtRef.current = performance.now() - 9999
            draw(performance.now())
        } else if (intersecting) {
            raf = requestAnimationFrame(draw)
        } else if (startedAtRef.current != null) {
            // keep the last frame on canvas; redraw once with current elapsed
            draw(performance.now())
        }

        return () => {
            alive = false
            if (raf) cancelAnimationFrame(raf)
        }
    }, [
        cells,
        width,
        height,
        intersecting,
        reduce,
        step,
        cell,
        spotlightRadius,
    ])

    const handlePointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const scaleX = rect.width === 0 ? 1 : width / rect.width
        const scaleY = rect.height === 0 ? 1 : height / rect.height
        const lx = (e.clientX - rect.left) * scaleX
        const ly = (e.clientY - rect.top) * scaleY
        cursorRef.current = { x: lx, y: ly }
        if (e.pointerType !== 'mouse') pinnedRef.current = true

        const week = Math.floor(lx / step)
        const dow = Math.floor((ly - HEADER_OFFSET) / step)
        if (week < 0 || week >= WEEKS || dow < 0 || dow >= ROWS) {
            if (hoveredIndexRef.current !== -1) {
                hoveredIndexRef.current = -1
                setHovered(null)
            }
            return
        }
        const idx = week * ROWS + dow
        if (idx === hoveredIndexRef.current) return
        hoveredIndexRef.current = idx
        const c = cells[idx]
        if (!c || c.inFuture) {
            setHovered(null)
            return
        }
        setHovered({
            cx: c.week * step + cell / 2,
            cy: c.dow * step + HEADER_OFFSET,
            count: c.count,
            additions: c.additions,
            deletions: c.deletions,
            day: c.day,
        })
    }
    const handlePointerLeave = (e: ReactPointerEvent<SVGSVGElement>) => {
        // On touch/pen, the pointer dies after release and fires leave/cancel.
        // The tap-pinned tooltip survives until a tap-outside dismisses it
        // (handled by the effect below).
        if (pinnedRef.current && e.pointerType !== 'mouse') return
        cursorRef.current = null
        hoveredIndexRef.current = -1
        setHovered(null)
    }

    useEffect(() => {
        if (!hovered) return
        const dismiss = (e: PointerEvent) => {
            if (e.pointerType === 'mouse') return
            const wrapper = wrapperRef.current
            if (
                wrapper &&
                e.target instanceof Node &&
                wrapper.contains(e.target)
            ) {
                return
            }
            pinnedRef.current = false
            cursorRef.current = null
            hoveredIndexRef.current = -1
            setHovered(null)
        }
        window.addEventListener('pointerdown', dismiss)
        return () => window.removeEventListener('pointerdown', dismiss)
    }, [hovered])

    return (
        <div ref={wrapperRef} className='flex flex-col gap-3'>
            <header className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                <h4 className='text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/55 font-mono'>
                    {t.gitlab.calendarTitle}
                </h4>
                <span className='text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/40 font-mono tabular-nums'>
                    {total.toLocaleString(
                        language === 'fr' ? 'fr-FR' : 'en-US'
                    )}{' '}
                    {t.gitlab.contributions}
                </span>
            </header>

            <div
                className='-mx-1 overflow-x-auto pb-1'
                style={{
                    maskImage:
                        'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)',
                    WebkitMaskImage:
                        'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)',
                }}
            >
                <div className='relative' style={{ width, height }}>
                    <canvas
                        ref={canvasRef}
                        aria-hidden
                        className='absolute inset-0 block pointer-events-none'
                    />
                    <svg
                        role='img'
                        aria-label={t.gitlab.calendarAria}
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        className='absolute inset-0 block'
                        onPointerMove={handlePointerMove}
                        onPointerDown={handlePointerMove}
                        onPointerLeave={handlePointerLeave}
                        onPointerCancel={handlePointerLeave}
                    >
                        <g transform={`translate(0, ${HEADER_OFFSET})`}>
                            {monthLabels.map((m) => (
                                <text
                                    key={`m-${m.week}`}
                                    x={m.week * step}
                                    y={-2}
                                    className='fill-primary-light/35 font-mono'
                                    style={{
                                        fontSize: 9,
                                        letterSpacing: '0.1em',
                                    }}
                                >
                                    {m.label}
                                </text>
                            ))}
                            {cells.map((c) =>
                                c.inFuture ? null : (
                                    <rect
                                        key={c.day}
                                        x={c.week * step}
                                        y={c.dow * step}
                                        width={cell}
                                        height={cell}
                                        rx={2}
                                        fill={
                                            canvasFailed
                                                ? SCALE[c.bucket]
                                                : 'transparent'
                                        }
                                        pointerEvents='visible'
                                    />
                                )
                            )}
                        </g>
                    </svg>

                    <AnimatePresence>
                        {hovered &&
                            (() => {
                                const flipDown = hovered.cy < 60
                                return (
                                    <motion.div
                                        key='heat-tooltip'
                                        initial={{
                                            opacity: 0,
                                            y: flipDown ? -4 : 4,
                                        }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            y: flipDown ? -4 : 4,
                                        }}
                                        transition={{
                                            duration: 0.18,
                                            ease: [0.25, 1, 0.5, 1],
                                        }}
                                        role='tooltip'
                                        className={`pointer-events-none absolute z-10 -translate-x-1/2 ${
                                            flipDown ? '' : '-translate-y-full'
                                        } whitespace-nowrap rounded-md border border-border-subtle bg-bg/85 px-3 py-2 backdrop-blur-sm shadow-[0_0_18px_rgba(0,162,199,0.18),0_0_4px_rgba(0,162,199,0.12)]`}
                                        style={{
                                            left: Math.max(
                                                56,
                                                Math.min(width - 56, hovered.cx)
                                            ),
                                            top: flipDown
                                                ? hovered.cy + cell / 2 + 6
                                                : hovered.cy - 6,
                                        }}
                                    >
                                        <div className='font-mono text-[0.6rem] uppercase tracking-[0.18em] text-primary-light/55'>
                                            {formatTooltipDate(
                                                hovered.day,
                                                language
                                            )}
                                        </div>
                                        <div className='mt-0.5 text-[0.85rem] tabular-nums text-primary-light/90'>
                                            <span
                                                className={
                                                    hovered.count > 0
                                                        ? 'text-primary'
                                                        : 'text-primary-light/55'
                                                }
                                            >
                                                {hovered.count}
                                            </span>{' '}
                                            <span className='text-primary-light/55'>
                                                {hovered.count === 1
                                                    ? t.gitlab.commitSingular
                                                    : t.gitlab.commitPlural}
                                            </span>
                                        </div>
                                        {hovered.count > 0 &&
                                            (hovered.additions > 0 ||
                                                hovered.deletions > 0) && (
                                                <div className='mt-0.5 font-mono text-[0.7rem] tabular-nums flex items-center gap-2'>
                                                    <span className='text-emerald-400/85'>
                                                        +
                                                        {hovered.additions.toLocaleString(
                                                            language === 'fr'
                                                                ? 'fr-FR'
                                                                : 'en-US'
                                                        )}
                                                    </span>
                                                    <span className='text-rose-400/75'>
                                                        −
                                                        {hovered.deletions.toLocaleString(
                                                            language === 'fr'
                                                                ? 'fr-FR'
                                                                : 'en-US'
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                    </motion.div>
                                )
                            })()}
                    </AnimatePresence>
                </div>
            </div>

            <footer className='flex items-center justify-end gap-2 text-[0.6rem] tracking-[0.18em] uppercase text-primary-light/45 font-mono'>
                <span>{t.gitlab.less}</span>
                <span className='flex items-center gap-1'>
                    {SCALE.map((color, i) => (
                        <span
                            key={color}
                            aria-hidden
                            className='inline-block rounded-[2px]'
                            style={{
                                width: 9,
                                height: 9,
                                background: color,
                                outline:
                                    i === 0
                                        ? '1px solid rgba(214,240,247,0.08)'
                                        : 'none',
                            }}
                        />
                    ))}
                </span>
                <span>{t.gitlab.more}</span>
            </footer>
        </div>
    )
}
