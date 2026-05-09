import { GitLabLanguage } from '@/hooks/useGitLabStats'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

type LanguageDonutProps = {
    languages: GitLabLanguage[]
}

const TONES = [
    'oklch(0.78 0.140 200)',
    'oklch(0.66 0.130 207)',
    'oklch(0.54 0.115 213)',
    'oklch(0.44 0.090 219)',
    'oklch(0.36 0.060 224)',
    'oklch(0.30 0.025 228)',
]

const SIZE = 96
const STROKE = 14
const RADIUS = SIZE / 2 - STROKE / 2
const CIRCUM = 2 * Math.PI * RADIUS

export const LanguageDonut = ({ languages }: LanguageDonutProps) => {
    const { t } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.4 })

    if (languages.length === 0) return null

    let cursor = 0
    const segments = languages.map((lang, i) => {
        const length = (lang.percent / 100) * CIRCUM
        const dasharray = `${length} ${CIRCUM - length}`
        const dashoffset = -cursor
        cursor += length
        return {
            ...lang,
            color: TONES[i % TONES.length],
            dasharray,
            dashoffset,
            length,
        }
    })

    return (
        <div ref={ref} className='flex items-center gap-5'>
            <svg
                role='img'
                aria-label={t.gitlab.languagesAria}
                width={SIZE}
                height={SIZE}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className='shrink-0 -rotate-90'
            >
                {segments.map((s, i) => (
                    <motion.circle
                        key={s.name}
                        cx={SIZE / 2}
                        cy={SIZE / 2}
                        r={RADIUS}
                        fill='none'
                        stroke={s.color}
                        strokeWidth={STROKE}
                        strokeDashoffset={s.dashoffset}
                        initial={
                            reduce ? false : { strokeDasharray: `0 ${CIRCUM}` }
                        }
                        animate={
                            inView || reduce
                                ? { strokeDasharray: s.dasharray }
                                : undefined
                        }
                        transition={{
                            duration: 0.85,
                            ease: EASE_OUT_QUART,
                            delay: reduce ? 0 : 0.2 + i * 0.11,
                        }}
                        style={
                            reduce
                                ? { strokeDasharray: s.dasharray }
                                : undefined
                        }
                    />
                ))}
            </svg>

            <ul className='flex flex-col gap-1.5 text-sm flex-1 min-w-0'>
                {segments.map((s, i) => (
                    <motion.li
                        key={s.name}
                        className='flex items-center gap-2.5 tabular-nums'
                        initial={reduce ? false : { opacity: 0, x: -8 }}
                        animate={
                            inView || reduce ? { opacity: 1, x: 0 } : undefined
                        }
                        transition={{
                            duration: 0.6,
                            ease: EASE_OUT_QUART,
                            delay: reduce ? 0 : 0.45 + i * 0.07,
                        }}
                    >
                        <span
                            aria-hidden
                            className='inline-block h-2 w-2 rounded-sm shrink-0'
                            style={{ background: s.color }}
                        />
                        <span className='flex-1 truncate text-primary-light/85 text-[0.85rem]'>
                            {s.name === 'other'
                                ? t.gitlab.otherLanguages
                                : s.name}
                        </span>
                        <span className='font-mono text-[0.75rem] text-primary-light/45'>
                            {s.percent.toFixed(1).replace('.', ',')}%
                        </span>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}
