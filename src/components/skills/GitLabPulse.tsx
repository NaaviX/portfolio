import {
    GitLabCalendarRaw,
    normalizeDay,
    useGitLabStats,
} from '@/hooks/useGitLabStats'
import { useLanguage } from '@/i18n'
import { cn } from '@/lib/utils'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FaGitlab } from 'react-icons/fa6'
import { FiRefreshCw } from 'react-icons/fi'
import { HeatCalendar } from './_HeatCalendar'
import { LanguageDonut } from './_LanguageDonut'
import { TopProjects } from './_TopProjects'

const formatRelative = (
    iso: string,
    language: 'fr' | 'en',
    nowMs: number
): string => {
    const diffMs = nowMs - new Date(iso).getTime()
    const minutes = Math.max(1, Math.round(diffMs / 60_000))
    if (minutes < 60) {
        return language === 'fr'
            ? `il y a ${minutes} min`
            : `${minutes} min ago`
    }
    const hours = Math.round(minutes / 60)
    if (hours < 24) {
        return language === 'fr' ? `il y a ${hours} h` : `${hours}h ago`
    }
    const days = Math.round(hours / 24)
    return language === 'fr' ? `il y a ${days} j` : `${days}d ago`
}

const formatYear = (iso: string): string =>
    new Date(iso).getFullYear().toString()

type PeriodKey = 'week' | 'month' | 'year'

const PERIOD_DAYS: Record<PeriodKey, number> = {
    week: 7,
    month: 30,
    year: 365,
}

const PERIOD_ORDER: PeriodKey[] = ['week', 'month', 'year']

const DAY_MS = 86_400_000

type PeriodStats = {
    commits: number
    activeDays: number
    additions: number
    deletions: number
    days: number
    avgCommitsPerDay: number
    avgLinesPerDay: number
}

// Derive period stats client-side from the 12-month daily calendar so the
// 1w / 1m / 1y switch needs no extra backend round-trip.
const computePeriodStats = (
    calendar: GitLabCalendarRaw,
    period: PeriodKey,
    nowMs: number
): PeriodStats => {
    const days = PERIOD_DAYS[period]
    const cutoff = nowMs - days * DAY_MS
    let commits = 0
    let additions = 0
    let deletions = 0
    let activeDays = 0

    for (const [date, raw] of Object.entries(calendar)) {
        const time = new Date(date).getTime()
        if (Number.isNaN(time) || time < cutoff) continue
        const day = normalizeDay(raw)
        commits += day.commits
        additions += day.additions
        deletions += day.deletions
        if (day.commits > 0) activeDays += 1
    }

    return {
        commits,
        activeDays,
        additions,
        deletions,
        days,
        avgCommitsPerDay: commits / days,
        avgLinesPerDay: (additions + deletions) / days,
    }
}

const formatAvg = (n: number, language: 'fr' | 'en'): string =>
    new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
        maximumFractionDigits: 1,
    }).format(n)

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

const HIDDEN_PROJECT_TOKENS = ['deletion', 'obsidian']

export const GitLabPulse = () => {
    const { stats, error, loading, refresh, refreshing } = useGitLabStats()
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const now = useNowTick(60_000)
    const [period, setPeriod] = useState<PeriodKey>('month')

    const periodStats = useMemo(
        () => (stats ? computePeriodStats(stats.calendar, period, now) : null),
        [stats, period, now]
    )

    if (error) return null

    const labels = t.gitlab

    if (loading || !stats || !periodStats)
        return <GitLabPulseSkeleton labels={labels} reduce={reduce} />

    const visibleTopProjects = stats.topProjects.filter((p) => {
        const name = p.name.toLowerCase()
        return !HIDDEN_PROJECT_TOKENS.some((token) => name.includes(token))
    })

    return (
        <motion.aside
            id='gitlab-pulse'
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
            className='mt-10 scroll-mt-24 flex flex-col gap-6 sm:gap-8 rounded-lg border border-border-subtle/70 bg-bg-subtle/58 p-5 sm:p-7 backdrop-blur-sm'
            aria-label={labels.aria}
        >
            <header className='flex items-center justify-between gap-4 pb-1 border-b border-border-subtle/40'>
                <div className='flex items-center gap-2.5'>
                    <FaGitlab
                        aria-hidden
                        className='text-signal/80 text-base'
                    />
                    <span className='text-sm font-semibold text-primary-light/78'>
                        {labels.title}
                    </span>
                </div>

                <div className='flex items-center gap-4 text-xs font-mono text-primary-light/45'>
                    <span className='hidden sm:inline'>
                        {labels.memberSince}{' '}
                        <span className='text-primary-light/75 tabular-nums'>
                            {formatYear(stats.memberSince)}
                        </span>
                    </span>
                    {stats.lastActivity && (
                        <span className='inline-flex items-center gap-1.5'>
                            <span
                                aria-hidden
                                className='size-1.5 rounded-full bg-signal motion-safe:animate-pulse-dot'
                            />
                            <span className='text-signal/90'>
                                {formatRelative(
                                    stats.lastActivity,
                                    language,
                                    now
                                )}
                            </span>
                        </span>
                    )}
                    <button
                        type='button'
                        onClick={refresh}
                        disabled={refreshing}
                        aria-label={labels.refreshAria}
                        title={labels.refresh}
                        className='inline-flex h-10 w-10 -m-2 items-center justify-center rounded-full text-primary-light/45 hover:text-primary-light/85 hover:bg-primary-light/5 transition-[scale,background-color,color] active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-60'
                    >
                        <FiRefreshCw
                            aria-hidden
                            className={`text-[0.8rem] ${refreshing ? 'animate-spin' : ''}`}
                        />
                    </button>
                </div>
            </header>

            <section className='flex flex-col gap-5'>
                <PeriodToggle
                    period={period}
                    onChange={setPeriod}
                    labels={labels}
                />
                <div
                    key={period}
                    className='flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8'
                >
                    <Stat
                        hero
                        value={periodStats.commits}
                        label={labels.commitsTotal}
                        reduce={reduce}
                    />
                    <div className='flex flex-col gap-4 sm:border-l sm:border-border-subtle/50 sm:pl-8'>
                        <Stat
                            value={periodStats.activeDays}
                            suffix={`/${periodStats.days}`}
                            label={labels.activeDays}
                            reduce={reduce}
                        />
                        <DiffStat
                            additions={periodStats.additions}
                            deletions={periodStats.deletions}
                            label={labels.linesLabel}
                            aria={labels.linesDiffAria}
                            language={language}
                            reduce={reduce}
                        />
                    </div>
                    <div className='flex flex-col gap-4 sm:border-l sm:border-border-subtle/50 sm:pl-8'>
                        <PlainStat
                            value={formatAvg(
                                periodStats.avgCommitsPerDay,
                                language
                            )}
                            label={labels.avgCommitsPerDay}
                        />
                        <PlainStat
                            value={formatAvg(
                                periodStats.avgLinesPerDay,
                                language
                            )}
                            label={labels.avgLinesPerDay}
                        />
                    </div>
                </div>
            </section>

            <HeatCalendar calendar={stats.calendar} />

            {(stats.languages.length > 0 || visibleTopProjects.length > 0) && (
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-2 border-t border-border-subtle/40'>
                    {stats.languages.length > 0 && (
                        <div className='flex flex-col gap-3'>
                            <h3 className='text-sm font-semibold text-primary-light/62'>
                                {labels.languages}
                            </h3>
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
    durationMs = 1100
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
        className='mt-10 flex flex-col gap-6 sm:gap-8 rounded-lg border border-border-subtle/70 bg-bg-subtle/58 p-5 sm:p-7 backdrop-blur-sm'
    >
        <header className='flex items-center justify-between gap-4 pb-1 border-b border-border-subtle/40'>
            <div className='flex items-center gap-2.5'>
                <FaGitlab
                    aria-hidden
                    className='text-primary-light/50 text-base'
                />
                <span className='text-sm font-semibold text-primary-light/78'>
                    {labels.title}
                </span>
            </div>
            <SkeletonBlock
                className='h-3 w-32 hidden sm:block'
                reduce={reduce}
            />
        </header>

        <section className='flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8'>
            <div className='flex flex-col gap-1.5'>
                <SkeletonBlock className='h-10 sm:h-12 w-28' reduce={reduce} />
                <SkeletonBlock className='h-2 w-20' reduce={reduce} />
            </div>
            <div className='flex flex-col gap-4 sm:border-l sm:border-border-subtle/50 sm:pl-8'>
                {[0, 1].map((i) => (
                    <div key={i} className='flex flex-col gap-1.5'>
                        <SkeletonBlock
                            className='h-7 sm:h-8 w-24'
                            reduce={reduce}
                        />
                        <SkeletonBlock className='h-2 w-20' reduce={reduce} />
                    </div>
                ))}
            </div>
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
    hero = false,
}: {
    value: number
    suffix?: string
    label: string
    reduce: boolean
    hero?: boolean
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const display = useCountUp(value, reduce, inView)

    return (
        <div ref={ref} className='flex flex-col gap-1.5'>
            <span
                className={`font-heading font-semibold tabular-nums leading-none text-primary-light ${
                    hero ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'
                }`}
            >
                {display}
                {suffix && (
                    <span
                        className={`text-primary-light/40 ml-0.5 ${
                            hero
                                ? 'text-xl sm:text-2xl'
                                : 'text-base sm:text-lg'
                        }`}
                    >
                        {suffix}
                    </span>
                )}
            </span>
            <span className='text-xs text-primary-light/45 leading-snug'>
                {label}
            </span>
        </div>
    )
}

type PeriodToggleLabels = {
    periods: Record<PeriodKey, string>
    periodAria: string
}

const PeriodToggle = ({
    period,
    onChange,
    labels,
}: {
    period: PeriodKey
    onChange: (period: PeriodKey) => void
    labels: PeriodToggleLabels
}) => (
    <div
        role='group'
        aria-label={labels.periodAria}
        className='inline-flex items-center gap-1 self-start rounded-full border border-border-subtle/60 bg-bg-app/40 p-1'
    >
        {PERIOD_ORDER.map((key) => {
            const active = key === period
            return (
                <button
                    key={key}
                    type='button'
                    onClick={() => onChange(key)}
                    aria-pressed={active}
                    className={cn(
                        'rounded-full px-3 py-1 text-xs font-medium tracking-tight transition-colors',
                        active
                            ? 'bg-primary/15 text-primary'
                            : 'text-primary-light/55 hover:text-primary-light/85'
                    )}
                >
                    {labels.periods[key]}
                </button>
            )
        })}
    </div>
)

const PlainStat = ({ value, label }: { value: string; label: string }) => (
    <div className='flex flex-col gap-1.5'>
        <span className='font-heading text-2xl sm:text-3xl font-semibold tabular-nums leading-none text-primary-light'>
            {value}
        </span>
        <span className='text-xs text-primary-light/45 leading-snug'>
            {label}
        </span>
    </div>
)

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
        <div ref={ref} aria-label={aria} className='flex flex-col gap-1.5'>
            <span className='font-heading text-2xl sm:text-3xl font-semibold tabular-nums leading-none flex items-baseline gap-2 sm:gap-2.5'>
                <span className='text-emerald-400/80'>
                    +{formatCompact(add, language)}
                </span>
                <span className='text-rose-400/70'>
                    −{formatCompact(del, language)}
                </span>
            </span>
            <span className='text-xs text-primary-light/45 leading-snug'>
                {label}
            </span>
        </div>
    )
}
