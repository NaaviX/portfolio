import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useId, useRef } from 'react'
import { skillsData } from './skills.data'
import { SKILL_TYPE, type SkillCategory } from './skills.type'

type CategoryKey = SKILL_TYPE

const CATEGORY_PALETTE: Record<CategoryKey, { hue: string; tint: string; ink: string }> = {
    [SKILL_TYPE.WEBFRONT]: { hue: '#06b6d4', tint: 'rgba(6, 182, 212, 0.16)', ink: '#cffafe' },
    [SKILL_TYPE.WEBBACK]: { hue: '#f59e0b', tint: 'rgba(245, 158, 11, 0.14)', ink: '#fef3c7' },
    [SKILL_TYPE.DEVTOOLS]: { hue: '#a78bfa', tint: 'rgba(167, 139, 250, 0.14)', ink: '#ede9fe' },
    [SKILL_TYPE.MOBILE]: { hue: '#34d399', tint: 'rgba(52, 211, 153, 0.14)', ink: '#d1fae5' },
    [SKILL_TYPE.PRACTICES]: { hue: '#fb7185', tint: 'rgba(251, 113, 133, 0.14)', ink: '#ffe4e6' },
}

const CATEGORY_LABEL_FR: Record<CategoryKey, string> = {
    [SKILL_TYPE.WEBFRONT]: 'Frontend',
    [SKILL_TYPE.WEBBACK]: 'Backend',
    [SKILL_TYPE.DEVTOOLS]: 'DevTools',
    [SKILL_TYPE.MOBILE]: 'Mobile',
    [SKILL_TYPE.PRACTICES]: 'Pratiques',
}

const CATEGORY_TAGLINE_FR: Record<CategoryKey, string> = {
    [SKILL_TYPE.WEBFRONT]: 'Construire pour le navigateur.',
    [SKILL_TYPE.WEBBACK]: 'Tenir la couche serveur.',
    [SKILL_TYPE.DEVTOOLS]: 'Industrialiser la livraison.',
    [SKILL_TYPE.MOBILE]: 'Porter le produit à la main.',
    [SKILL_TYPE.PRACTICES]: 'Écrire du code qui dure.',
}

const TRACK_LABEL = '0.28em'
const TRACK_NUM = '0.22em'
const TRACK_TICKER = '0.24em'
const EASE_OUT_QUART = [0.22, 1, 0.36, 1] as const

type LaneProps = {
    category: SkillCategory
    index: number
    total: number
    isLast: boolean
}

const Lane = ({ category, index, total, isLast }: LaneProps) => {
    const ref = useRef<HTMLElement | null>(null)
    const reduce = useReducedMotion() ?? false
    const palette = CATEGORY_PALETTE[category.nameKey]
    const label = CATEGORY_LABEL_FR[category.nameKey]
    const tagline = CATEGORY_TAGLINE_FR[category.nameKey]
    const tickerSkills = [...category.skills, ...category.skills]
    const number = String(index + 1).padStart(2, '0')
    const headingId = useId()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const tickerX = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['8%', '-32%'])
    const numberY = useTransform(scrollYProgress, [0, 1], reduce ? ['0px', '0px'] : ['30px', '-60px'])
    const titleX = useTransform(scrollYProgress, [0, 1], reduce ? ['0px', '0px'] : ['0px', '-32px'])
    const drenchOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0.72, 0.72, 0])

    return (
        <section
            ref={ref}
            aria-labelledby={headingId}
            className={`relative w-full overflow-hidden ${isLast ? '' : 'border-b border-border-subtle/30'}`}
            style={{
                minHeight: 'clamp(420px, 70vh, 640px)',
                background: '#06181d',
            }}
        >
            <motion.div
                aria-hidden
                className='pointer-events-none absolute inset-0'
                style={{
                    opacity: drenchOpacity,
                    background: `radial-gradient(60% 80% at 80% 50%, ${palette.hue}33, transparent 70%), linear-gradient(120deg, ${palette.hue}1a 0%, transparent 55%)`,
                }}
            />
            <motion.div
                aria-hidden
                className='absolute -left-2 top-2 select-none'
                style={{
                    y: numberY,
                    fontFamily: 'var(--font-family-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(140px, 28vw, 320px)',
                    lineHeight: 1,
                    color: palette.hue,
                    opacity: 0.08,
                    letterSpacing: '-0.06em',
                }}
            >
                {number}
            </motion.div>

            <div className='relative z-10 mx-auto max-w-6xl px-6 lg:px-10 pt-20 lg:pt-28 pb-10 grid grid-cols-12 gap-6'>
                <div className='col-span-12 lg:col-span-4 flex flex-col gap-4'>
                    <div
                        className='text-2xs uppercase'
                        style={{ color: palette.hue, letterSpacing: TRACK_LABEL }}
                    >
                        Chapitre {number}
                    </div>
                    <motion.h3
                        id={headingId}
                        className='font-heading font-semibold text-primary-light'
                        style={{
                            x: titleX,
                            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                            lineHeight: 0.95,
                            letterSpacing: '-0.04em',
                        }}
                    >
                        {label}
                    </motion.h3>
                    <p
                        className='text-primary-dark/80 max-w-[28ch]'
                        style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}
                    >
                        {tagline}
                    </p>
                    <div className='mt-2 flex items-center gap-3'>
                        <div
                            aria-hidden
                            className='h-px flex-1'
                            style={{ background: palette.hue, opacity: 0.4 }}
                        />
                        <div
                            className='text-2xs tabular-nums uppercase'
                            style={{ color: palette.hue, letterSpacing: TRACK_LABEL }}
                        >
                            {String(category.skills.length).padStart(2, '0')} technologies
                        </div>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-8 flex flex-col gap-4 justify-end'>
                    <ul className='flex flex-wrap gap-x-4 gap-y-3 items-baseline'>
                        {category.skills.map((skill, i) => (
                            <motion.li
                                key={skill.name}
                                className='font-heading'
                                initial={reduce ? false : { opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.55, delay: i * 0.035, ease: EASE_OUT_QUART }}
                                style={{
                                    fontSize: skill.isImportant
                                        ? 'clamp(1.6rem, 3.2vw, 2.6rem)'
                                        : 'clamp(1rem, 1.8vw, 1.5rem)',
                                    lineHeight: 1,
                                    fontWeight: skill.isImportant ? 600 : 400,
                                    letterSpacing: '-0.02em',
                                    color: skill.isImportant ? palette.ink : 'rgba(182,236,247,0.55)',
                                }}
                            >
                                {skill.name}
                                {i < category.skills.length - 1 && (
                                    <span
                                        aria-hidden
                                        className='ml-4 align-middle inline-block'
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: 9999,
                                            background: palette.hue,
                                            opacity: 0.45,
                                        }}
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

            <motion.div
                aria-hidden
                className='relative z-10 flex gap-10 items-center pb-8 pt-2 pl-6 lg:pl-10'
                style={{ x: tickerX }}
            >
                {tickerSkills.map((s, i) => {
                    const isLastTicker = i === tickerSkills.length - 1
                    return (
                        <div
                            key={`${s.name}-${i}`}
                            className='flex items-center gap-3 shrink-0 opacity-70'
                        >
                            {s.icon && (
                                <s.icon
                                    width={24}
                                    height={24}
                                    style={{ filter: 'saturate(0.85)' }}
                                />
                            )}
                            <span
                                className='text-xs uppercase'
                                style={{
                                    color: palette.ink,
                                    opacity: 0.7,
                                    letterSpacing: TRACK_TICKER,
                                }}
                            >
                                {s.name}
                            </span>
                            {!isLastTicker && (
                                <span
                                    className='inline-block'
                                    style={{
                                        width: 4,
                                        height: 4,
                                        borderRadius: 9999,
                                        background: palette.hue,
                                        opacity: 0.6,
                                    }}
                                />
                            )}
                        </div>
                    )
                })}
            </motion.div>

            <div
                aria-hidden
                className='pointer-events-none absolute right-6 top-7 flex items-center gap-1.5'
            >
                {Array.from({ length: total }).map((_, i) => {
                    const active = i === index
                    return (
                        <span
                            key={i}
                            className='inline-block transition-all'
                            style={{
                                width: active ? 18 : 4,
                                height: 4,
                                borderRadius: 9999,
                                background: palette.hue,
                                opacity: active ? 0.9 : 0.25,
                            }}
                        />
                    )
                })}
                <span
                    className='ml-2 text-2xs tabular-nums'
                    style={{ color: palette.hue, opacity: 0.7, letterSpacing: TRACK_NUM }}
                >
                    {number}
                </span>
            </div>
        </section>
    )
}

export const Skills = () => {
    return (
        <div className='w-full'>
            {skillsData.map((cat, i) => (
                <Lane
                    key={cat.nameKey}
                    category={cat}
                    index={i}
                    total={skillsData.length}
                    isLast={i === skillsData.length - 1}
                />
            ))}
        </div>
    )
}
