import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { skillsData } from './skills.data'
import { SKILL_TYPE, type Skill } from './skills.type'
import { useLanguage } from '@/i18n'

import { EASE_OUT_QUART, EASE_OUT_QUART_CSS } from '@/lib/motion'

const MAG_RADIUS = 140
const MAG_STRENGTH = 0.35
const RESET_TRANSFORM = 'translate3d(0px, 0px, 0px)'

type FlatSkill = Skill & { category: SKILL_TYPE }
type Group = {
    category: SKILL_TYPE
    skills: FlatSkill[]
}

const buildGroups = (): Group[] => {
    const seen = new Set<string>()
    const groups: Group[] = []
    for (const cat of skillsData) {
        const skills: FlatSkill[] = []
        for (const skill of cat.skills) {
            if (seen.has(skill.name)) continue
            seen.add(skill.name)
            skills.push({ ...skill, category: cat.nameKey })
        }
        skills.sort((a, b) => {
            if (a.isImportant !== b.isImportant) return a.isImportant ? -1 : 1
            return a.name.localeCompare(b.name)
        })
        groups.push({
            category: cat.nameKey,
            skills,
        })
    }
    return groups
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

export const Skills = () => {
    const { t } = useLanguage()
    const groups = useMemo(buildGroups, [])
    const reduce = useReducedMotion() ?? false

    const chipRefs = useRef<Array<HTMLDivElement | null>>([])
    const rectsRef = useRef<DOMRect[]>([])
    const rafRef = useRef<number | null>(null)

    const totalChips = useMemo(
        () => groups.reduce((acc, g) => acc + g.skills.length, 0),
        [groups]
    )

    const recomputeRects = useCallback(() => {
        rectsRef.current = chipRefs.current.map(
            (el) => el?.getBoundingClientRect() ?? new DOMRect()
        )
    }, [])

    useEffect(() => {
        recomputeRects()
        let scheduled = 0
        const onResize = () => {
            if (scheduled) return
            scheduled = requestAnimationFrame(() => {
                scheduled = 0
                recomputeRects()
            })
        }
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
            if (scheduled) cancelAnimationFrame(scheduled)
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
            } else if (el.style.transform !== RESET_TRANSFORM) {
                el.style.transform = RESET_TRANSFORM
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
            if (el) el.style.transform = RESET_TRANSFORM
        })
    }

    let chipIndex = 0
    chipRefs.current = new Array(totalChips).fill(null)

    return (
        <div className='w-full max-w-6xl mx-auto px-4 lg:px-6'>
            <div
                onMouseEnter={recomputeRects}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className='flex flex-col gap-9 lg:gap-11'
            >
                {groups.map((group) => {
                    const start = chipIndex
                    chipIndex += group.skills.length
                    return (
                        <motion.section
                            key={group.category}
                            variants={groupVariants}
                            initial={reduce ? 'visible' : 'hidden'}
                            whileInView='visible'
                            viewport={{
                                once: true,
                                amount: 0.25,
                                margin: '-40px',
                            }}
                            className='grid grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-[10rem_1fr] lg:items-baseline'
                        >
                            <GroupHeader
                                label={t.skills.categories[group.category]}
                                count={group.skills.length}
                            />
                            <motion.ul
                                variants={groupVariants}
                                className='flex flex-wrap items-center gap-x-2 gap-y-2.5'
                            >
                                {group.skills.map((skill, i) => {
                                    const idx = start + i
                                    return (
                                        <motion.li
                                            key={skill.name}
                                            variants={chipVariants}
                                        >
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
            </div>
        </div>
    )
}

const GroupHeader = ({ label, count }: { label: string; count: number }) => (
    <motion.div
        variants={headerVariants}
        className='flex items-baseline justify-between gap-3 border-b border-border-subtle/45 pb-2 lg:flex-col lg:items-start lg:justify-start lg:gap-1 lg:border-b-0 lg:pb-0 lg:pt-1'
    >
        <span className='text-sm font-semibold text-primary-light/82'>
            {label}
        </span>
        <span className='text-xs tabular-nums text-primary-light/42'>
            {count}
        </span>
    </motion.div>
)

const CHIP_TRANSITION = `transform 520ms ${EASE_OUT_QUART_CSS}, background-color 240ms ease, color 240ms ease, border-color 240ms ease, box-shadow 280ms ease`

type ChipProps = {
    skill: FlatSkill
    setRef: (el: HTMLDivElement | null) => void
}

const getChipStyle = (important: boolean) => ({
    paddingInline: important ? '1.05rem' : '0.78rem',
    paddingBlock: important ? '0.55rem' : '0.4rem',
    fontSize: important ? '0.98rem' : '0.82rem',
    fontWeight: important ? 600 : 500,
    color: important ? 'var(--color-signal)' : 'rgba(214, 240, 247, 0.78)',
    background: important
        ? 'var(--color-signal-soft)'
        : 'rgba(47, 199, 223, 0.035)',
    borderColor: important
        ? 'rgb(244 177 90 / 0.58)'
        : 'rgb(47 199 223 / 0.22)',
    boxShadow: important
        ? '0 0 0 1px rgb(244 177 90 / 0.16), 0 14px 36px -24px rgb(244 177 90 / 0.95)'
        : undefined,
    letterSpacing: '-0.005em',
    transition: CHIP_TRANSITION,
    willChange: 'transform',
})

const getIconStyle = (important: boolean) => ({
    width: important ? 18 : 14,
    height: important ? 18 : 14,
    opacity: important ? 1 : 0.85,
})

const getTooltipStyle = (important: boolean) => ({
    background: 'rgba(6, 24, 29, 0.96)',
    borderColor: important
        ? 'rgb(244 177 90 / 0.38)'
        : 'rgb(47 199 223 / 0.34)',
    color: important ? 'var(--color-signal)' : 'var(--color-primary-light)',
    letterSpacing: '0',
})

const SkillChip = ({ skill, setRef }: ChipProps) => {
    const Icon = skill.icon
    const important = !!skill.isImportant

    return (
        <div
            ref={setRef}
            className='group/chip relative inline-flex items-center gap-2 rounded-full border'
            style={getChipStyle(important)}
        >
            {Icon ? <Icon aria-hidden style={getIconStyle(important)} /> : null}
            <span className='whitespace-nowrap'>{skill.name}</span>
            {skill.about && (
                <span
                    role='tooltip'
                    className='pointer-events-none absolute left-1/2 top-full z-30 mt-2.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border px-2.5 py-1.5 text-2xs opacity-0 transition-[opacity,transform] duration-200 group-hover/chip:translate-y-0 group-hover/chip:opacity-100'
                    style={getTooltipStyle(important)}
                >
                    {skill.about}
                </span>
            )}
        </div>
    )
}
