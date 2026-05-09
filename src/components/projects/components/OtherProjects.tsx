import { useEffect, useRef, useState } from 'react'
import { Project } from '../projects.type'
import { BentoProjectCard } from './card/BentoProjectCard'

interface OtherProjectsProps {
    projects: Project[]
}

export const OtherProjects = (props: OtherProjectsProps) => {
    const { projects } = props
    const viewportRef = useRef<HTMLDivElement>(null)
    const rootRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const viewport = viewportRef.current
        const root = rootRef.current
        if (!viewport || !root) return

        let raf = 0
        const compute = () => {
            raf = 0
            const items = Array.from(
                viewport.querySelectorAll<HTMLElement>('[data-filmstrip-item]')
            )
            if (!items.length) return

            const center = viewport.scrollLeft + viewport.clientWidth / 2
            let best = 0
            let bestDist = Infinity
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                const itemCenter = item.offsetLeft + item.offsetWidth / 2
                const d = Math.abs(itemCenter - center)
                if (d < bestDist) {
                    bestDist = d
                    best = i
                }
            }
            setActiveIndex(best)

            const max = viewport.scrollWidth - viewport.clientWidth
            const progress = max > 0 ? viewport.scrollLeft / max : 0
            root.style.setProperty('--filmstrip-p', progress.toFixed(4))
        }

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(compute)
        }

        compute()
        viewport.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        return () => {
            viewport.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [projects.length])

    useEffect(() => {
        const viewport = viewportRef.current
        if (!viewport) return

        let isDown = false
        let engaged = false
        let startX = 0
        let startScroll = 0
        let lastX = 0
        let lastT = 0
        let velocity = 0
        let momentumRaf = 0
        let pointerId = -1

        const stopMomentum = () => {
            if (momentumRaf) {
                cancelAnimationFrame(momentumRaf)
                momentumRaf = 0
            }
        }

        const decay = () => {
            if (Math.abs(velocity) < 0.15) {
                momentumRaf = 0
                return
            }
            viewport.scrollLeft -= velocity
            velocity *= 0.93
            momentumRaf = requestAnimationFrame(decay)
        }

        const onDown = (e: PointerEvent) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return
            stopMomentum()
            isDown = true
            engaged = false
            startX = e.clientX
            startScroll = viewport.scrollLeft
            lastX = e.clientX
            lastT = performance.now()
            velocity = 0
            pointerId = e.pointerId
        }

        const onMove = (e: PointerEvent) => {
            if (!isDown) return
            const dx = e.clientX - startX
            if (!engaged) {
                if (Math.abs(dx) < 6) return
                engaged = true
                viewport.dataset.dragging = 'true'
                try {
                    viewport.setPointerCapture(pointerId)
                } catch {}
            }
            viewport.scrollLeft = startScroll - dx
            const now = performance.now()
            const dt = Math.max(1, now - lastT)
            velocity = ((e.clientX - lastX) / dt) * 16
            lastX = e.clientX
            lastT = now
        }

        const release = () => {
            if (!isDown) return
            isDown = false
            const wasEngaged = engaged
            engaged = false
            viewport.dataset.dragging = 'false'
            if (wasEngaged) momentumRaf = requestAnimationFrame(decay)
        }

        viewport.addEventListener('pointerdown', onDown)
        viewport.addEventListener('pointermove', onMove)
        viewport.addEventListener('pointerup', release)
        viewport.addEventListener('pointercancel', release)
        viewport.addEventListener('pointerleave', release)

        return () => {
            stopMomentum()
            viewport.removeEventListener('pointerdown', onDown)
            viewport.removeEventListener('pointermove', onMove)
            viewport.removeEventListener('pointerup', release)
            viewport.removeEventListener('pointercancel', release)
            viewport.removeEventListener('pointerleave', release)
        }
    }, [])

    const goTo = (target: number) => {
        const viewport = viewportRef.current
        if (!viewport) return
        const items = viewport.querySelectorAll<HTMLElement>(
            '[data-filmstrip-item]'
        )
        const clamped = Math.max(0, Math.min(items.length - 1, target))
        const item = items[clamped]
        if (!item) return
        const target_left =
            item.offsetLeft + item.offsetWidth / 2 - viewport.clientWidth / 2
        viewport.scrollTo({ left: target_left, behavior: 'smooth' })
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

    const total = projects.length
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
                {projects.map((project, i) => (
                    <div
                        key={project.name}
                        data-filmstrip-item
                        data-active={i === activeIndex ? 'true' : 'false'}
                        aria-label={`${project.name}, project ${i + 1} of ${total}`}
                        aria-roledescription='slide'
                    >
                        <BentoProjectCard
                            project={project}
                            variant='compact'
                            index={i}
                        />
                    </div>
                ))}
            </div>

            <div className='filmstrip__chrome' aria-hidden='false'>
                <button
                    type='button'
                    className='filmstrip__nav'
                    onClick={() => goTo(activeIndex - 1)}
                    disabled={activeIndex === 0}
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
                    <span className='filmstrip__hint' aria-hidden>
                        DRAG · ← →
                    </span>
                </div>

                <button
                    type='button'
                    className='filmstrip__nav'
                    onClick={() => goTo(activeIndex + 1)}
                    disabled={activeIndex === total - 1}
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
    timeline-scope: --filmstrip-track;
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
    padding-inline: calc(50% - 10rem);
    cursor: grab;
    touch-action: pan-y;
    outline: none;
    scroll-timeline: --filmstrip-track inline;
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
    flex: 0 0 auto;
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

@supports (animation-timeline: scroll()) {
    .filmstrip__progress {
        animation: filmstrip-progress linear both;
        animation-timeline: --filmstrip-track;
        transform: scaleX(0);
    }

    @keyframes filmstrip-progress {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
}

.filmstrip__hint {
    grid-column: 2;
    grid-row: 2;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.625rem;
    letter-spacing: 0.25em;
    color: rgb(182 236 247 / 0.32);
    text-transform: uppercase;
    text-align: center;
    user-select: none;
}

@media (max-width: 640px) {
    .filmstrip {
        margin-top: 1.5rem;
    }

    .filmstrip__viewport {
        gap: 0.875rem;
        padding-block: 2rem;
        padding-inline: 1rem;
        padding-inline-end: max(1rem, calc(100% - 21rem));
        scroll-padding-inline: 1rem;
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

    .filmstrip__hint {
        display: none;
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
