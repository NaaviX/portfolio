import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import { Project } from '../projects.type'
import { BentoProjectCard } from './card/BentoProjectCard'

interface OtherProjectsProps {
    projects: Project[]
}

type FilmstripItemA11yProps = React.HTMLAttributes<HTMLDivElement> & {
    inert?: ''
}

const getFilmstripItems = (viewport: HTMLDivElement) =>
    Array.from(viewport.querySelectorAll<HTMLElement>('[data-filmstrip-item]'))

const getItemTargetLeft = (viewport: HTMLDivElement, item: HTMLElement) =>
    item.offsetLeft + item.offsetWidth / 2 - viewport.clientWidth / 2

const getClosestTrackIndex = (
    viewport: HTMLDivElement,
    items = getFilmstripItems(viewport)
) => {
    if (!items.length) return -1

    const center = viewport.scrollLeft + viewport.clientWidth / 2
    return items.reduce(
        (best, item, i) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2
            const distance = Math.abs(itemCenter - center)
            return distance < best.distance ? { index: i, distance } : best
        },
        { index: 0, distance: Infinity }
    ).index
}

const getCloneA11yProps = (isClone: boolean): FilmstripItemA11yProps =>
    isClone ? { 'aria-hidden': true, inert: '' } : {}

type DragState = {
    isDown: boolean
    engaged: boolean
    startX: number
    startScroll: number
    lastX: number
    lastT: number
    velocity: number
    momentumRaf: number
    pointerId: number
}

const POINTER_THRESHOLD_PX = 6
const MOMENTUM_FRAME_MS = 16
const MOMENTUM_STOP_VELOCITY = 0.15
const MOMENTUM_FRICTION = 0.93

const createDragState = (): DragState => ({
    isDown: false,
    engaged: false,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
    momentumRaf: 0,
    pointerId: -1,
})

const stopFilmstripMomentum = (state: DragState) => {
    if (!state.momentumRaf) return
    cancelAnimationFrame(state.momentumRaf)
    state.momentumRaf = 0
}

const decayFilmstripMomentum = (viewport: HTMLDivElement, state: DragState) => {
    if (Math.abs(state.velocity) < MOMENTUM_STOP_VELOCITY) {
        state.momentumRaf = 0
        return
    }
    viewport.scrollLeft -= state.velocity
    state.velocity *= MOMENTUM_FRICTION
    state.momentumRaf = requestAnimationFrame(() =>
        decayFilmstripMomentum(viewport, state)
    )
}

const beginFilmstripDrag = (
    event: PointerEvent,
    viewport: HTMLDivElement,
    state: DragState,
    pointerActiveRef: React.MutableRefObject<boolean>
) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    stopFilmstripMomentum(state)
    pointerActiveRef.current = true
    state.isDown = true
    state.engaged = false
    state.startX = event.clientX
    state.startScroll = viewport.scrollLeft
    state.lastX = event.clientX
    state.lastT = performance.now()
    state.velocity = 0
    state.pointerId = event.pointerId
}

const captureFilmstripPointer = (
    viewport: HTMLDivElement,
    pointerId: number
) => {
    try {
        viewport.setPointerCapture(pointerId)
    } catch {
        // Pointer capture can fail if the pointer has already been released.
    }
}

const engageFilmstripDrag = (
    viewport: HTMLDivElement,
    state: DragState,
    dx: number
) => {
    if (state.engaged) return true
    if (Math.abs(dx) < POINTER_THRESHOLD_PX) return false

    state.engaged = true
    viewport.dataset.dragging = 'true'
    captureFilmstripPointer(viewport, state.pointerId)
    return true
}

const updateFilmstripVelocity = (event: PointerEvent, state: DragState) => {
    const now = performance.now()
    const dt = Math.max(1, now - state.lastT)
    state.velocity = ((event.clientX - state.lastX) / dt) * MOMENTUM_FRAME_MS
    state.lastX = event.clientX
    state.lastT = now
}

const moveFilmstripDrag = (
    event: PointerEvent,
    viewport: HTMLDivElement,
    state: DragState
) => {
    if (!state.isDown) return

    const dx = event.clientX - state.startX
    if (!engageFilmstripDrag(viewport, state, dx)) return

    viewport.scrollLeft = state.startScroll - dx
    updateFilmstripVelocity(event, state)
}

const releaseFilmstripDrag = (
    viewport: HTMLDivElement,
    state: DragState,
    pointerActiveRef: React.MutableRefObject<boolean>,
    normalizeLoopPosition: () => void,
    scheduleLoopReset: () => void
) => {
    if (!state.isDown) return

    state.isDown = false
    const shouldStartMomentum = state.engaged
    state.engaged = false
    pointerActiveRef.current = false
    viewport.dataset.dragging = 'false'

    if (shouldStartMomentum) {
        state.momentumRaf = requestAnimationFrame(() =>
            decayFilmstripMomentum(viewport, state)
        )
        scheduleLoopReset()
        return
    }

    normalizeLoopPosition()
}

export const OtherProjects = (props: OtherProjectsProps) => {
    const { projects } = props
    const viewportRef = useRef<HTMLDivElement>(null)
    const rootRef = useRef<HTMLElement>(null)
    const pointerActiveRef = useRef(false)
    const loopResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const total = projects.length
    const isLooping = total > 1
    const slides = isLooping
        ? [
              {
                  project: projects[total - 1],
                  projectIndex: total - 1,
                  key: `loop-start-${projects[total - 1].name}`,
                  isClone: true,
              },
              ...projects.map((project, i) => ({
                  project,
                  projectIndex: i,
                  key: `project-${project.name}`,
                  isClone: false,
              })),
              {
                  project: projects[0],
                  projectIndex: 0,
                  key: `loop-end-${projects[0].name}`,
                  isClone: true,
              },
          ]
        : projects.map((project, i) => ({
              project,
              projectIndex: i,
              key: `project-${project.name}`,
              isClone: false,
          }))

    const getProjectIndexFromTrackIndex = useCallback(
        (trackIndex: number) => {
            if (!isLooping) return trackIndex
            if (trackIndex === 0) return total - 1
            if (trackIndex === total + 1) return 0
            return trackIndex - 1
        },
        [isLooping, total]
    )

    const getTrackIndexFromTarget = useCallback(
        (target: number) => {
            if (!total) return 0
            if (!isLooping) return Math.max(0, Math.min(total - 1, target))
            if (target < 0) return 0
            if (target >= total) return total + 1
            return target + 1
        },
        [isLooping, total]
    )

    const centerTrackItem = useCallback(
        (trackIndex: number, behavior: ScrollBehavior = 'smooth') => {
            const viewport = viewportRef.current
            if (!viewport) return

            const items = getFilmstripItems(viewport)
            const item = items[trackIndex]
            if (!item) return

            const targetLeft = getItemTargetLeft(viewport, item)
            if (behavior === 'auto') {
                viewport.scrollLeft = targetLeft
                return
            }
            viewport.scrollTo({ left: targetLeft, behavior })
        },
        []
    )

    const normalizeLoopPosition = useCallback(() => {
        const viewport = viewportRef.current
        if (!viewport || !isLooping) return

        const best = getClosestTrackIndex(viewport)
        if (best < 0) return

        if (best === 0) centerTrackItem(total, 'auto')
        if (best === total + 1) centerTrackItem(1, 'auto')
    }, [centerTrackItem, isLooping, total])

    const scheduleLoopReset = useCallback(() => {
        if (!isLooping) return
        if (loopResetTimerRef.current) clearTimeout(loopResetTimerRef.current)
        loopResetTimerRef.current = setTimeout(() => {
            loopResetTimerRef.current = null
            if (!pointerActiveRef.current) normalizeLoopPosition()
        }, 140)
    }, [isLooping, normalizeLoopPosition])

    useLayoutEffect(() => {
        if (!isLooping) return
        centerTrackItem(1, 'auto')
        setActiveIndex(0)
    }, [centerTrackItem, isLooping, total])

    useEffect(() => {
        const viewport = viewportRef.current
        const root = rootRef.current
        if (!viewport || !root) return

        let raf = 0
        const compute = () => {
            raf = 0
            const items = getFilmstripItems(viewport)
            const best = getClosestTrackIndex(viewport, items)
            if (best < 0) return

            const projectIndex = getProjectIndexFromTrackIndex(best)
            setActiveIndex(projectIndex)

            const progress =
                total > 1 ? projectIndex / Math.max(1, total - 1) : 0
            root.style.setProperty('--filmstrip-p', progress.toFixed(4))
        }

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(compute)
            scheduleLoopReset()
        }

        compute()
        viewport.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        return () => {
            viewport.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (raf) cancelAnimationFrame(raf)
            if (loopResetTimerRef.current) {
                clearTimeout(loopResetTimerRef.current)
                loopResetTimerRef.current = null
            }
        }
    }, [getProjectIndexFromTrackIndex, scheduleLoopReset, total])

    useEffect(() => {
        const viewport = viewportRef.current
        if (!viewport) return

        const dragState = createDragState()
        const onDown = (e: PointerEvent) =>
            beginFilmstripDrag(e, viewport, dragState, pointerActiveRef)
        const onMove = (e: PointerEvent) =>
            moveFilmstripDrag(e, viewport, dragState)
        const release = () =>
            releaseFilmstripDrag(
                viewport,
                dragState,
                pointerActiveRef,
                normalizeLoopPosition,
                scheduleLoopReset
            )

        viewport.addEventListener('pointerdown', onDown)
        viewport.addEventListener('pointermove', onMove)
        viewport.addEventListener('pointerup', release)
        viewport.addEventListener('pointercancel', release)
        viewport.addEventListener('pointerleave', release)

        return () => {
            stopFilmstripMomentum(dragState)
            viewport.removeEventListener('pointerdown', onDown)
            viewport.removeEventListener('pointermove', onMove)
            viewport.removeEventListener('pointerup', release)
            viewport.removeEventListener('pointercancel', release)
            viewport.removeEventListener('pointerleave', release)
        }
    }, [normalizeLoopPosition, scheduleLoopReset])

    const goTo = (target: number) => {
        if (!total) return
        centerTrackItem(getTrackIndexFromTarget(target))
        scheduleLoopReset()
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault()
            goTo(activeIndex + 1)
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            goTo(activeIndex - 1)
        } else if (e.key === 'Home') {
            e.preventDefault()
            goTo(0)
        } else if (e.key === 'End') {
            e.preventDefault()
            goTo(projects.length - 1)
        }
    }

    const fmt = (n: number) => String(n).padStart(2, '0')

    return (
        <section
            ref={rootRef}
            className='filmstrip'
            aria-roledescription='carousel'
            aria-label='Other projects'
        >
            <style>{FILMSTRIP_CSS}</style>

            <div
                ref={viewportRef}
                className='filmstrip__viewport'
                tabIndex={0}
                onKeyDown={onKeyDown}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.key}
                        data-filmstrip-item
                        data-loop-clone={slide.isClone ? 'true' : undefined}
                        data-active={
                            slide.projectIndex === activeIndex
                                ? 'true'
                                : 'false'
                        }
                        {...getCloneA11yProps(slide.isClone)}
                        aria-label={
                            slide.isClone
                                ? undefined
                                : `${slide.project.name}, project ${
                                      slide.projectIndex + 1
                                  } of ${total}`
                        }
                        aria-roledescription={
                            slide.isClone ? undefined : 'slide'
                        }
                    >
                        <BentoProjectCard
                            project={slide.project}
                            variant='compact'
                            index={slide.projectIndex}
                        />
                    </div>
                ))}
            </div>

            <div className='filmstrip__chrome' aria-hidden='false'>
                <button
                    type='button'
                    className='filmstrip__nav'
                    onClick={() => goTo(activeIndex - 1)}
                    disabled={total < 2}
                    aria-label='Previous project'
                >
                    <span aria-hidden>←</span>
                </button>

                <div className='filmstrip__meter'>
                    <span
                        className='filmstrip__count'
                        aria-live='polite'
                        aria-atomic='true'
                    >
                        <span className='filmstrip__count-current'>
                            {fmt(activeIndex + 1)}
                        </span>
                        <span className='filmstrip__count-sep'>/</span>
                        <span className='filmstrip__count-total'>
                            {fmt(total)}
                        </span>
                    </span>
                    <div className='filmstrip__rail' aria-hidden>
                        <span className='filmstrip__progress' />
                    </div>
                </div>

                <button
                    type='button'
                    className='filmstrip__nav'
                    onClick={() => goTo(activeIndex + 1)}
                    disabled={total < 2}
                    aria-label='Next project'
                >
                    <span aria-hidden>→</span>
                </button>
            </div>
        </section>
    )
}

const FILMSTRIP_CSS = `
@property --filmstrip-glow {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
}

.filmstrip {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    margin-top: 2rem;
    --filmstrip-p: 0;
    --filmstrip-card-width: min(26rem, calc(100vw - 2rem));
    --filmstrip-edge-pad: max(
        1rem,
        calc((100% - var(--filmstrip-card-width)) / 2)
    );
}

.filmstrip__viewport {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-block: 3rem;
    padding-inline: var(--filmstrip-edge-pad);
    cursor: grab;
    touch-action: pan-y;
    outline: none;
}

.filmstrip__viewport::-webkit-scrollbar {
    display: none;
}

.filmstrip__viewport:focus-visible {
    box-shadow: 0 0 0 1px rgb(0 162 199 / 0.4) inset;
    border-radius: 1rem;
}

.filmstrip__viewport[data-dragging='true'] {
    cursor: grabbing;
    scroll-snap-type: none;
    scroll-behavior: auto;
}

.filmstrip__viewport {
    align-items: stretch;
}

[data-filmstrip-item] {
    flex: 0 0 var(--filmstrip-card-width);
    width: var(--filmstrip-card-width);
    display: flex;
    align-items: stretch;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    position: relative;
    transform-origin: center center;
    will-change: transform, opacity, filter;
    /* Pre-supports fallback: visible, normal */
    transform: scale(0.92);
    opacity: 0.75;
    filter: saturate(0.85);
    transition:
        transform 600ms cubic-bezier(0.25, 1, 0.5, 1),
        opacity 600ms cubic-bezier(0.25, 1, 0.5, 1),
        filter 600ms cubic-bezier(0.25, 1, 0.5, 1);
}

[data-filmstrip-item][data-active='true'] {
    transform: scale(1);
    opacity: 1;
    filter: saturate(1);
}

[data-filmstrip-item]::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 0.75rem;
    pointer-events: none;
    box-shadow:
        0 0 calc(36px * var(--filmstrip-glow, 0))
            rgb(0 162 199 / calc(0.32 * var(--filmstrip-glow, 0))),
        0 0 calc(80px * var(--filmstrip-glow, 0))
            rgb(0 162 199 / calc(0.16 * var(--filmstrip-glow, 0)));
    transition: box-shadow 320ms cubic-bezier(0.25, 1, 0.5, 1);
}

[data-filmstrip-item][data-active='true']::after {
    --filmstrip-glow: 1;
}

@supports (animation-timeline: view()) {
    [data-filmstrip-item] {
        animation: filmstrip-focus linear both;
        animation-timeline: view(inline);
        animation-range: cover 0% cover 100%;
        transition: none;
    }

    @keyframes filmstrip-focus {
        0% {
            transform: scale(0.84);
            opacity: 0.32;
            filter: saturate(0.35);
            --filmstrip-glow: 0;
        }
        45% {
            transform: scale(0.99);
            opacity: 0.96;
            filter: saturate(0.95);
            --filmstrip-glow: 0.85;
        }
        50% {
            transform: scale(1);
            opacity: 1;
            filter: saturate(1);
            --filmstrip-glow: 1;
        }
        55% {
            transform: scale(0.99);
            opacity: 0.96;
            filter: saturate(0.95);
            --filmstrip-glow: 0.85;
        }
        100% {
            transform: scale(0.84);
            opacity: 0.32;
            filter: saturate(0.35);
            --filmstrip-glow: 0;
        }
    }

    [data-filmstrip-item]::after {
        transition: none;
    }
}

.filmstrip__chrome {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 0.5rem;
    margin-top: -0.25rem;
}

.filmstrip__nav {
    flex: 0 0 auto;
    width: 2.25rem;
    height: 2.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background: transparent;
    border: 1px solid rgb(4 84 104 / 0.7);
    color: rgb(182 236 247 / 0.7);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.875rem;
    cursor: pointer;
    transition:
        border-color 320ms cubic-bezier(0.25, 1, 0.5, 1),
        color 320ms cubic-bezier(0.25, 1, 0.5, 1),
        background-color 320ms cubic-bezier(0.25, 1, 0.5, 1);
}

.filmstrip__nav:hover:not(:disabled) {
    border-color: rgb(17 128 156 / 1);
    color: rgb(182 236 247 / 1);
    background: rgb(0 53 67 / 0.4);
}

.filmstrip__nav:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.filmstrip__nav:focus-visible {
    outline: 2px solid rgb(0 162 199);
    outline-offset: 4px;
}

.filmstrip__meter {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    column-gap: 0.875rem;
    row-gap: 0.5rem;
    align-items: center;
}

.filmstrip__count {
    grid-column: 1;
    grid-row: 1 / span 2;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: rgb(182 236 247 / 0.55);
    display: inline-flex;
    align-items: baseline;
    gap: 0.25rem;
    font-variant-numeric: tabular-nums;
}

.filmstrip__count-current {
    color: rgb(0 162 199);
    font-size: 1.125rem;
    line-height: 1;
    transition: color 320ms cubic-bezier(0.25, 1, 0.5, 1);
}

.filmstrip__count-sep {
    color: rgb(4 84 104);
    font-size: 1rem;
}

.filmstrip__count-total {
    color: rgb(182 236 247 / 0.45);
    font-size: 0.875rem;
}

.filmstrip__rail {
    grid-column: 2;
    grid-row: 1;
    position: relative;
    height: 1px;
    background: rgb(4 84 104 / 0.55);
    overflow: hidden;
    border-radius: 999px;
}

.filmstrip__progress {
    display: block;
    height: 100%;
    width: 100%;
    background: rgb(0 162 199);
    transform: scaleX(var(--filmstrip-p, 0));
    transform-origin: left center;
    will-change: transform;
}

@media (max-width: 640px) {
    .filmstrip {
        margin-top: 1.5rem;
    }

    .filmstrip__viewport {
        gap: 0.875rem;
        padding-block: 2rem;
        padding-inline: var(--filmstrip-edge-pad);
        scroll-padding-inline: var(--filmstrip-edge-pad);
    }

    [data-filmstrip-item] {
        transform: scale(0.97);
        opacity: 0.9;
        filter: none;
    }

    [data-filmstrip-item][data-active='true'] {
        transform: scale(1);
        opacity: 1;
    }

    .filmstrip__chrome {
        padding-inline: 1rem;
        gap: 0.625rem;
        margin-top: 0.25rem;
    }

    .filmstrip__nav {
        width: 2.75rem;
        height: 2.75rem;
        font-size: 1rem;
    }

    .filmstrip__meter {
        column-gap: 0.625rem;
        row-gap: 0.375rem;
    }

    .filmstrip__count {
        letter-spacing: 0.16em;
    }

    .filmstrip__count-current {
        font-size: 1rem;
    }

    .filmstrip__count-total {
        font-size: 0.75rem;
    }

}

@media (hover: none) and (pointer: coarse) {
    .filmstrip__viewport {
        cursor: auto;
    }
}

@media (prefers-reduced-motion: reduce) {
    [data-filmstrip-item] {
        animation: none !important;
        transition: none !important;
        transform: none !important;
        opacity: 1 !important;
        filter: none !important;
    }
    [data-filmstrip-item]::after {
        --filmstrip-glow: 0 !important;
    }
    .filmstrip__viewport {
        scroll-behavior: auto;
    }
    .filmstrip__progress {
        animation: none !important;
        transform: scaleX(var(--filmstrip-p, 0)) !important;
    }
}
`
