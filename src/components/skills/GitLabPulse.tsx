import { useGitLabStats } from '@/hooks/useGitLabStats'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaGitlab } from 'react-icons/fa6'
import { FiRefreshCw } from 'react-icons/fi'
import { HeatCalendar } from './_HeatCalendar'
import { LanguageDonut } from './_LanguageDonut'
import { TopProjects } from './_TopProjects'

const formatRelative = (
    iso: string,
    language: 'fr' | 'en',
    nowMs: number,
): string => {
    const diffMs = nowMs - new Date(iso).getTime()
    const minutes = Math.max(1, Math.round(diffMs / 60_000))
    if (minutes < 60) {
        return language === 'fr' ? `il y a ${minutes} min` : `${minutes} min ago`
    }
    const hours = Math.round(minutes / 60)
    if (hours < 24) {
        return language === 'fr' ? `il y a ${hours} h` : `${hours}h ago`
    }
    const days = Math.round(hours / 24)
    return language === 'fr' ? `il y a ${days} j` : `${days}d ago`
}

const formatYear = (iso: string): string => new Date(iso).getFullYear().toString()

const useNowTick = (intervalMs: number) => {
    const [now, setNow] = useState(() => Date.now())
    useEffect(() => {
        const id = window.setInterval(() => setNow(Date.now()), intervalMs)
        const onFocus = () => setNow(Date.now())
        window.addEventListener('focus', onFocus)
        return () => {
            window.clearInterval(id)
            window.removeEventListener('focus', onFocus)
        }
    }, [intervalMs])
    return now
}

export const GitLabPulse = () => {
    const { stats, error, loading, refresh, refreshing } = useGitLabStats()
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const now = useNowTick(60_000)

    if (error) return null

    const labels = t.gitlab

    if (loading || !stats) return <GitLabPulseSkeleton labels={labels} reduce={reduce} />

    const visibleTopProjects = stats.topProjects.filter(
        (p) => !p.name.toLowerCase().includes('deletion')
    )

    return (
        <motion.aside
            id='gitlab-pulse'
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
            className='mt-10 scroll-mt-24 flex flex-col gap-6 sm:gap-8 rounded-2xl border border-border-subtle/70 bg-bg-subtle/40 p-5 sm:p-7 backdrop-blur-sm'
            aria-label={labels.aria}
        >
            <header className='flex items-center justify-between gap-4 pb-1 border-b border-border-subtle/40'>
                <div className='flex items-center gap-2.5'>
                    <span className='relative flex h-2 w-2'>
                        {!reduce && (
                            <motion.span
                                aria-hidden
                                className='absolute inset-0 rounded-full bg-primary'
                                initial={{ scale: 1, opacity: 0.55 }}
                                animate={{ scale: 2.4, opacity: 0 }}
                                transition={{
                                    duration: 2.2,
                                    ease: EASE_OUT_QUART,
                                    repeat: Infinity,
                                    repeatDelay: 0.6,
                                }}
                            />
                        )}
                        <span className='relative inline-flex h-2 w-2 rounded-full bg-primary' />
                    </span>
                    <span className='text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/70 font-mono'>
                        {labels.title}
                    </span>
                </div>

                <div className='flex items-center gap-4 text-[0.6rem] tracking-[0.2em] uppercase font-mono text-primary-light/45'>
                    <span className='hidden sm:inline'>
                        {labels.memberSince}{' '}
                        <span className='text-primary-light/75 tabular-nums'>
                            {formatYear(stats.memberSince)}
                        </span>
                    </span>
                    {stats.lastActivity && (
                        <span>
                            <span className='text-primary-light/75'>
                                {formatRelative(stats.lastActivity, language, now)}
                            </span>
                        </span>
                    )}
                    <button
                        type='button'
                        onClick={refresh}
                        disabled={refreshing}
                        aria-label={labels.refreshAria}
                        title={labels.refresh}
                        className='inline-flex h-6 w-6 items-center justify-center rounded-full text-primary-light/45 hover:text-primary-light/85 hover:bg-primary-light/5 transition-colors disabled:cursor-not-allowed disabled:opacity-60'
                    >
                        <FiRefreshCw
                            aria-hidden
                            className={`text-[0.8rem] ${refreshing ? 'animate-spin' : ''}`}
                        />
                    </button>
                    <FaGitlab aria-hidden className='text-primary-light/35 text-base' />
                </div>
            </header>

            <section className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6'>
                <Stat value={stats.commits30d} label={labels.commits30d} reduce={reduce} />
                <Stat
                    value={stats.activeDays30d}
                    suffix='/30'
                    label={labels.activeDays}
                    reduce={reduce}
                />
                <DiffStat
                    additions={stats.linesAdded30d ?? 0}
                    deletions={stats.linesRemoved30d ?? 0}
                    label={labels.linesDiff}
                    aria={labels.linesDiffAria}
                    language={language}
                    reduce={reduce}
                />
            </section>

            <HeatCalendar calendar={stats.calendar} />

            {(stats.languages.length > 0 || visibleTopProjects.length > 0) && (
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-2 border-t border-border-subtle/40'>
                    {stats.languages.length > 0 && (
                        <div className='flex flex-col gap-3'>
                            <h4 className='text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/55 font-mono'>
                                {labels.languages}
                            </h4>
                            <LanguageDonut languages={stats.languages} />
                        </div>
                    )}
                    {visibleTopProjects.length > 0 && (
                        <TopProjects projects={visibleTopProjects} />
                    )}
                </section>
            )}
        </motion.aside>
    )
}

const useCountUp = (
    target: number,
    reduce: boolean,
    inView: boolean,
    durationMs = 1100,
) => {
    const [n, setN] = useState(reduce ? target : 0)
    useEffect(() => {
        if (reduce) {
            setN(target)
            return
        }
        if (!inView) return
        const start = performance.now()
        let raf = 0
        const tick = (t: number) => {
            const p = Math.min(1, (t - start) / durationMs)
            const eased = 1 - Math.pow(1 - p, 4)
            setN(Math.round(target * eased))
            if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [target, reduce, inView, durationMs])
    return n
}

type SkeletonLabels = {
    aria: string
    title: string
}

const SkeletonBlock = ({
    className,
    reduce,
}: {
    className: string
    reduce: boolean
}) => (
    <div
        className={`rounded-md bg-primary-light/10 ${
            reduce ? '' : 'animate-pulse'
        } ${className}`}
    />
)

const GitLabPulseSkeleton = ({
    labels,
    reduce,
}: {
    labels: SkeletonLabels
    reduce: boolean
}) => (
    <aside
        aria-label={labels.aria}
        aria-busy='true'
        className='mt-10 flex flex-col gap-6 sm:gap-8 rounded-2xl border border-border-subtle/70 bg-bg-subtle/40 p-5 sm:p-7 backdrop-blur-sm'
    >
        <header className='flex items-center justify-between gap-4 pb-1 border-b border-border-subtle/40'>
            <div className='flex items-center gap-2.5'>
                <span className='relative flex h-2 w-2'>
                    {!reduce && (
                        <motion.span
                            aria-hidden
                            className='absolute inset-0 rounded-full bg-primary/40'
                            initial={{ scale: 1, opacity: 0.45 }}
                            animate={{ scale: 2.4, opacity: 0 }}
                            transition={{
                                duration: 2.2,
                                ease: EASE_OUT_QUART,
                                repeat: Infinity,
                                repeatDelay: 0.6,
                            }}
                        />
                    )}
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-primary/60' />
                </span>
                <span className='text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/70 font-mono'>
                    {labels.title}
                </span>
            </div>
            <SkeletonBlock className='h-3 w-32 hidden sm:block' reduce={reduce} />
        </header>

        <section className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6'>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={
                        'flex flex-col gap-1.5 border-l border-border-subtle/60 pl-3 sm:pl-4 ' +
                        (i === 2 ? 'col-span-2 sm:col-span-1' : '')
                    }
                >
                    <SkeletonBlock className='h-7 sm:h-8 w-24' reduce={reduce} />
                    <SkeletonBlock className='h-2 w-24' reduce={reduce} />
                </div>
            ))}
        </section>

        <div className='flex flex-col gap-3'>
            <SkeletonBlock className='h-3 w-40' reduce={reduce} />
            <SkeletonBlock className='h-[110px] w-full' reduce={reduce} />
        </div>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-2 border-t border-border-subtle/40'>
            <div className='flex items-center gap-5'>
                <SkeletonBlock
                    className='h-24 w-24 shrink-0 rounded-full'
                    reduce={reduce}
                />
                <div className='flex flex-col gap-2 flex-1 min-w-0'>
                    {[0, 1, 2, 3].map((i) => (
                        <SkeletonBlock
                            key={i}
                            className='h-3 w-full'
                            reduce={reduce}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2.5'>
                <SkeletonBlock className='h-3 w-32' reduce={reduce} />
                {[0, 1, 2, 3, 4].map((i) => (
                    <SkeletonBlock
                        key={i}
                        className='h-4 w-full'
                        reduce={reduce}
                    />
                ))}
            </div>
        </section>
    </aside>
)

const Stat = ({
    value,
    suffix,
    label,
    reduce,
}: {
    value: number
    suffix?: string
    label: string
    reduce: boolean
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const display = useCountUp(value, reduce, inView)

    return (
        <div
            ref={ref}
            className='flex flex-col gap-1.5 border-l border-border-subtle/60 pl-3 sm:pl-4'
        >
            <span
                className='font-heading text-2xl sm:text-3xl font-semibold tabular-nums leading-none text-primary-light'
            >
                {display}
                {suffix && (
                    <span className='text-primary-light/40 text-base sm:text-lg ml-0.5'>
                        {suffix}
                    </span>
                )}
            </span>
            <span className='text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/45 font-mono leading-snug'>
                {label}
            </span>
        </div>
    )
}

const formatCompact = (n: number, language: 'fr' | 'en'): string =>
    new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(n)

const DiffStat = ({
    additions,
    deletions,
    label,
    aria,
    language,
    reduce,
}: {
    additions: number
    deletions: number
    label: string
    aria: string
    language: 'fr' | 'en'
    reduce: boolean
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const add = useCountUp(additions, reduce, inView)
    const del = useCountUp(deletions, reduce, inView)

    return (
        <div
            ref={ref}
            aria-label={aria}
            className='flex flex-col gap-1.5 border-l border-border-subtle/60 pl-3 sm:pl-4 col-span-2 sm:col-span-1'
        >
            <span className='font-heading text-2xl sm:text-3xl font-semibold tabular-nums leading-none flex items-baseline gap-2 sm:gap-2.5'>
                <span className='text-emerald-400/90'>
                    +{formatCompact(add, language)}
                </span>
                <span className='text-rose-400/80'>
                    −{formatCompact(del, language)}
                </span>
            </span>
            <span className='text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/45 font-mono leading-snug'>
                {label}
            </span>
        </div>
    )
}
