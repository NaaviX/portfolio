import { GitLabTopProject } from '@/hooks/useGitLabStats'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FiLock } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'
import { useRef } from 'react'

type TopProjectsProps = {
    projects: GitLabTopProject[]
}

const compactNumber = (n: number, language: 'fr' | 'en'): string => {
    const locale = language === 'fr' ? 'fr-FR' : 'en-US'
    return new Intl.NumberFormat(locale, {
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(n)
}

const formatPercent = (n: number, language: 'fr' | 'en'): string => {
    const locale = language === 'fr' ? 'fr-FR' : 'en-US'
    const rounded = n < 1 ? Math.round(n * 10) / 10 : Math.round(n)
    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: n < 1 ? 1 : 0,
    }).format(rounded)
}

export const TopProjects = ({ projects }: TopProjectsProps) => {
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const ref = useRef<HTMLOListElement>(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })

    if (projects.length === 0) return null

    const total = projects.reduce((sum, p) => sum + p.commits, 0) || 1
    const max = Math.max(1, ...projects.map((p) => p.commits))

    return (
        <div className='flex flex-col gap-3 min-w-0'>
            <h4 className='text-sm font-semibold text-primary-light/62'>
                {t.gitlab.topProjects}
            </h4>

            <ol ref={ref} className='flex flex-col'>
                {projects.map((p, i) => (
                    <li key={p.url}>
                        <ProjectRow
                            project={p}
                            index={i}
                            language={language}
                            t={t}
                            share={(p.commits / total) * 100}
                            fill={(p.commits / max) * 100}
                            inView={inView}
                            reduce={reduce}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}

type RowProps = {
    project: GitLabTopProject
    index: number
    language: 'fr' | 'en'
    t: ReturnType<typeof useLanguage>['t']
    share: number
    fill: number
    inView: boolean
    reduce: boolean
}

const ProjectRow = ({
    project: p,
    index: i,
    language,
    t,
    share,
    fill,
    inView,
    reduce,
}: RowProps) => {
    const isPublic = p.visibility === 'public'
    const isTop = i === 0
    const commitCountLabel =
        p.commits === 1 ? t.gitlab.commitSingular : t.gitlab.commitPlural

    const baseClasses = cn(
        'group relative flex flex-col gap-1.5 py-2.5 border-t first:border-t-0 -mx-2 px-2 rounded transition-colors',
        isTop ? 'border-primary/24 bg-primary/10' : 'border-border-subtle/40'
    )

    const inner = (
        <>
            <div className='flex items-baseline gap-3'>
                <span
                    className={cn(
                        'font-mono text-[0.65rem] tabular-nums w-4 shrink-0',
                        isTop ? 'text-primary' : 'text-primary/55'
                    )}
                >
                    {String(i + 1).padStart(2, '0')}
                </span>
                <span
                    className={
                        'flex-1 truncate text-[0.9rem] flex items-center gap-1.5 ' +
                        (isPublic
                            ? 'text-primary-light/85 group-hover:text-primary-light transition-colors'
                            : 'text-primary-light/70')
                    }
                >
                    {!isPublic && (
                        <FiLock
                            aria-hidden
                            className='h-3 w-3 text-primary-light/35 shrink-0'
                        />
                    )}
                    <span className='truncate'>{p.name}</span>
                    {!isPublic && (
                        <span className='sr-only'>
                            (
                            {language === 'fr'
                                ? 'projet privé'
                                : 'private project'}
                            )
                        </span>
                    )}
                </span>
                <span className='font-mono text-[0.7rem] tabular-nums text-primary-light/45 shrink-0'>
                    {compactNumber(p.commits, language)} {commitCountLabel}
                </span>
                <span
                    aria-hidden
                    className='hidden sm:inline-block font-mono text-[0.65rem] tabular-nums text-primary-light/35 shrink-0 w-9 text-right'
                >
                    {formatPercent(share, language)}%
                </span>
                {isPublic ? (
                    <GoArrowUpRight
                        aria-hidden
                        className='h-3 w-3 text-primary-light/25 group-hover:text-primary group-hover:-translate-y-px group-hover:translate-x-px transition-all duration-300 shrink-0'
                    />
                ) : (
                    <span aria-hidden className='h-3 w-3 shrink-0' />
                )}
            </div>

            <div
                aria-hidden
                className='ml-7 mr-6 h-px overflow-hidden rounded-full bg-border-subtle/35'
            >
                <motion.span
                    className={cn(
                        'block h-full origin-left bg-gradient-to-r transition-colors duration-500',
                        isTop
                            ? 'from-primary/70 via-primary to-primary-hover/70'
                            : 'from-primary/45 via-primary/55 to-primary-dark/40 group-hover:from-primary/70 group-hover:via-primary group-hover:to-primary-dark/70'
                    )}
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={
                        reduce || inView
                            ? { scaleX: Math.max(0.04, fill / 100) }
                            : { scaleX: 0 }
                    }
                    transition={{
                        duration: 1,
                        delay: 0.1 + i * 0.06,
                        ease: EASE_OUT_QUART,
                    }}
                />
            </div>
        </>
    )

    if (isPublic) {
        return (
            <a
                href={p.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${p.name}: ${p.commits} ${commitCountLabel} (${formatPercent(
                    share,
                    language
                )}%)`}
                className={cn(
                    'transition-colors hover:bg-bg-hover/20',
                    baseClasses
                )}
            >
                {inner}
            </a>
        )
    }

    return <div className={baseClasses}>{inner}</div>
}
