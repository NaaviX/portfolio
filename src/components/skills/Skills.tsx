import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { skillsData } from './skills.data'
import { SKILL_TYPE, type Skill } from './skills.type'

type Palette = { hue: string; tint: string; ink: string }

const CATEGORY_PALETTE: Record<SKILL_TYPE, Palette> = {
    [SKILL_TYPE.WEBFRONT]: {
        hue: '#22d3ee',
        tint: 'rgba(34, 211, 238, 0.14)',
        ink: '#cffafe',
    },
    [SKILL_TYPE.WEBBACK]: {
        hue: '#f59e0b',
        tint: 'rgba(245, 158, 11, 0.13)',
        ink: '#fef3c7',
    },
    [SKILL_TYPE.DEVTOOLS]: {
        hue: '#a78bfa',
        tint: 'rgba(167, 139, 250, 0.13)',
        ink: '#ede9fe',
    },
    [SKILL_TYPE.MOBILE]: {
        hue: '#34d399',
        tint: 'rgba(52, 211, 153, 0.13)',
        ink: '#d1fae5',
    },
    [SKILL_TYPE.PRACTICES]: {
        hue: '#fb7185',
        tint: 'rgba(251, 113, 133, 0.13)',
        ink: '#ffe4e6',
    },
}

const CATEGORY_LABEL_FR: Record<SKILL_TYPE, string> = {
    [SKILL_TYPE.WEBFRONT]: 'Frontend',
    [SKILL_TYPE.WEBBACK]: 'Backend',
    [SKILL_TYPE.DEVTOOLS]: 'DevTools',
    [SKILL_TYPE.MOBILE]: 'Mobile',
    [SKILL_TYPE.PRACTICES]: 'Pratiques',
}

const TRACK_LABEL = '0.28em'
const EASE_OUT_QUART = [0.22, 1, 0.36, 1] as const
const MAG_RADIUS = 140
const MAG_STRENGTH = 0.35

type FlatSkill = Skill & { category: SKILL_TYPE; palette: Palette }
type Group = { category: SKILL_TYPE; palette: Palette; label: string; skills: FlatSkill[] }

const buildGroups = (): Group[] => {
    const seen = new Set<string>()
    const groups: Group[] = []
    for (const cat of skillsData) {
        const palette = CATEGORY_PALETTE[cat.nameKey]
        const skills: FlatSkill[] = []
        for (const skill of cat.skills) {
            if (seen.has(skill.name)) continue
            seen.add(skill.name)
            skills.push({ ...skill, category: cat.nameKey, palette })
        }
        skills.sort((a, b) => {
            if (a.isImportant !== b.isImportant) return a.isImportant ? -1 : 1
            return a.name.localeCompare(b.name)
        })
        groups.push({
            category: cat.nameKey,
            palette,
            label: CATEGORY_LABEL_FR[cat.nameKey],
            skills,
        })
    }
    return groups
}

const sectionVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.13, delayChildren: 0.05 },
    },
}

const groupVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.028, delayChildren: 0.08 },
    },
}

const headerVariants: Variants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: EASE_OUT_QUART },
    },
}

const chipVariants: Variants = {
    hidden: { opacity: 0, y: 8, x: -6 },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.42, ease: EASE_OUT_QUART },
    },
}

const dotVariants: Variants = {
    hidden: { scale: 1 },
    visible: {
        scale: [1, 1.7, 1],
        transition: { duration: 0.7, ease: EASE_OUT_QUART, times: [0, 0.4, 1] },
    },
}

export const Skills = () => {
    const groups = useMemo(buildGroups, [])
    const reduce = useReducedMotion() ?? false

    const chipRefs = useRef<Array<HTMLDivElement | null>>([])
    const rectsRef = useRef<DOMRect[]>([])
    const rafRef = useRef<number | null>(null)

    const totalChips = useMemo(
        () => groups.reduce((acc, g) => acc + g.skills.length, 0),
        [groups],
    )

    const recomputeRects = useCallback(() => {
        rectsRef.current = chipRefs.current.map(
            (el) => el?.getBoundingClientRect() ?? new DOMRect(),
        )
    }, [])

    useEffect(() => {
        recomputeRects()
        const onResize = () => recomputeRects()
        window.addEventListener('resize', onResize)
        window.addEventListener('scroll', onResize, { passive: true })
        return () => {
            window.removeEventListener('resize', onResize)
            window.removeEventListener('scroll', onResize)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [recomputeRects])

    const applyMagnet = useCallback((clientX: number, clientY: number) => {
        chipRefs.current.forEach((el, i) => {
            if (!el) return
            const r = rectsRef.current[i]
            if (!r || r.width === 0) return
            const cx = r.left + r.width / 2
            const cy = r.top + r.height / 2
            const dx = clientX - cx
            const dy = clientY - cy
            const dist = Math.hypot(dx, dy)
            if (dist < MAG_RADIUS) {
                const t = 1 - dist / MAG_RADIUS
                const ease = t * t
                el.style.transform = `translate3d(${dx * ease * MAG_STRENGTH}px, ${dy * ease * MAG_STRENGTH}px, 0)`
            } else if (el.style.transform !== 'translate3d(0px, 0px, 0px)') {
                el.style.transform = 'translate3d(0px, 0px, 0px)'
            }
        })
    }, [])

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (reduce) return
        const x = e.clientX
        const y = e.clientY
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => applyMagnet(x, y))
    }

    const onLeave = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        chipRefs.current.forEach((el) => {
            if (el) el.style.transform = 'translate3d(0px, 0px, 0px)'
        })
    }

    let chipIndex = 0
    chipRefs.current = new Array(totalChips).fill(null)

    return (
        <div className='w-full max-w-6xl mx-auto px-4 lg:px-6'>
            <motion.div
                onMouseEnter={recomputeRects}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                variants={sectionVariants}
                initial={reduce ? 'visible' : 'hidden'}
                whileInView='visible'
                viewport={{ once: true, amount: 0.12 }}
                className='flex flex-col gap-9 lg:gap-11'
            >
                {groups.map((group) => {
                    const start = chipIndex
                    chipIndex += group.skills.length
                    return (
                        <motion.section
                            key={group.category}
                            variants={groupVariants}
                            className='grid grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-[10rem_1fr] lg:items-baseline'
                        >
                            <GroupHeader
                                palette={group.palette}
                                label={group.label}
                                count={group.skills.length}
                            />
                            <motion.ul
                                variants={groupVariants}
                                className='flex flex-wrap items-center gap-x-2 gap-y-2.5'
                            >
                                {group.skills.map((skill, i) => {
                                    const idx = start + i
                                    return (
                                        <motion.li key={skill.name} variants={chipVariants}>
                                            <SkillChip
                                                skill={skill}
                                                setRef={(el) => {
                                                    chipRefs.current[idx] = el
                                                }}
                                            />
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </motion.section>
                    )
                })}
            </motion.div>
        </div>
    )
}

const GroupHeader = ({
    palette,
    label,
    count,
}: {
    palette: Palette
    label: string
    count: number
}) => (
    <motion.div
        variants={headerVariants}
        className='flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2 lg:pt-1'
    >
        <div className='flex items-center gap-2'>
            <motion.span
                aria-hidden
                variants={dotVariants}
                className='inline-block h-1.5 w-1.5 rounded-full'
                style={{ background: palette.hue, boxShadow: `0 0 10px ${palette.hue}` }}
            />
            <span
                className='text-2xs uppercase'
                style={{ letterSpacing: TRACK_LABEL, color: palette.ink }}
            >
                {label}
            </span>
        </div>
        <span
            className='text-2xs tabular-nums uppercase text-primary-dark/45'
            style={{ letterSpacing: TRACK_LABEL }}
        >
            {String(count).padStart(2, '0')}
        </span>
    </motion.div>
)

const CHIP_TRANSITION =
    'transform 520ms cubic-bezier(0.22, 1, 0.36, 1), background-color 240ms ease, color 240ms ease, border-color 240ms ease, box-shadow 280ms ease'

type ChipProps = {
    skill: FlatSkill
    setRef: (el: HTMLDivElement | null) => void
}

const SkillChip = ({ skill, setRef }: ChipProps) => {
    const Icon = skill.icon
    const important = !!skill.isImportant
    const { palette } = skill

    return (
        <div
            ref={setRef}
            className='group/chip relative inline-flex items-center gap-2 rounded-full border'
            style={{
                paddingInline: important ? '1.05rem' : '0.78rem',
                paddingBlock: important ? '0.55rem' : '0.4rem',
                fontSize: important ? '0.98rem' : '0.82rem',
                fontWeight: important ? 600 : 500,
                color: important ? palette.ink : 'rgba(214, 240, 247, 0.78)',
                background: important ? palette.tint : 'rgba(255, 255, 255, 0.022)',
                borderColor: important ? palette.hue : `${palette.hue}30`,
                boxShadow: important
                    ? `0 0 0 1px ${palette.hue}33, 0 14px 36px -24px ${palette.hue}`
                    : undefined,
                letterSpacing: '-0.005em',
                transition: CHIP_TRANSITION,
                willChange: 'transform',
            }}
        >
            {Icon ? (
                <Icon
                    aria-hidden
                    style={{
                        width: important ? 18 : 14,
                        height: important ? 18 : 14,
                        opacity: important ? 1 : 0.85,
                    }}
                />
            ) : (
                <span
                    aria-hidden
                    className='inline-block rounded-full'
                    style={{
                        width: 6,
                        height: 6,
                        background: palette.hue,
                        opacity: important ? 1 : 0.6,
                    }}
                />
            )}
            <span className='whitespace-nowrap'>{skill.name}</span>
            {skill.about && (
                <span
                    role='tooltip'
                    className='pointer-events-none absolute left-1/2 top-full z-30 mt-2.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border px-2.5 py-1 text-2xs uppercase opacity-0 transition-[opacity,transform] duration-200 group-hover/chip:translate-y-0 group-hover/chip:opacity-100'
                    style={{
                        background: 'rgba(6, 24, 29, 0.96)',
                        borderColor: `${palette.hue}55`,
                        color: palette.ink,
                        letterSpacing: '0.18em',
                    }}
                >
                    {skill.about}
                </span>
            )}
        </div>
    )
}
