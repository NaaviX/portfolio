import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowRight, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { userData } from '../../user'

const AvailabilityDot = () => (
    <span className='relative flex h-2 w-2'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60' />
        <span className='relative inline-flex h-2 w-2 rounded-full bg-primary' />
    </span>
)

const formatParisTime = () =>
    new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(new Date())

const useParisTime = () => {
    const [time, setTime] = useState(formatParisTime)

    useEffect(() => {
        const tick = () => setTime(formatParisTime())
        const now = new Date()
        const msToNextMinute =
            (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
        let interval: ReturnType<typeof setInterval> | undefined
        const timeout = setTimeout(() => {
            tick()
            interval = setInterval(tick, 60_000)
        }, msToNextMinute)
        return () => {
            clearTimeout(timeout)
            if (interval) clearInterval(interval)
        }
    }, [])

    return time
}

type TimeOfDayKey =
    | 'late'
    | 'early'
    | 'morning'
    | 'midday'
    | 'afternoon'
    | 'evening'
    | 'night'

const bucketForHour = (hour: number): TimeOfDayKey => {
    if (hour < 5) return 'late'
    if (hour < 9) return 'early'
    if (hour < 12) return 'morning'
    if (hour < 14) return 'midday'
    if (hour < 18) return 'afternoon'
    if (hour < 22) return 'evening'
    return 'night'
}

export const HeaderContent = () => {
    const { t } = useLanguage()
    const aside = t.header.aside
    const parisTime = useParisTime()
    const parisHour = Number.parseInt(parisTime.slice(0, 2), 10)
    const timeOfDayLabel = aside.timeOfDay[bucketForHour(parisHour)]

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutQuart, delay: 0.2 }}
            className='grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end'
        >
            <div className='lg:col-span-7 flex min-w-0 flex-col gap-7'>
                <p className='max-w-2xl text-sm md:text-base font-medium text-primary-light/70 tracking-wide'>
                    {t.header.metaLine}
                </p>

                <p className='max-w-xl text-base md:text-lg leading-relaxed text-primary-light/55'>
                    {t.header.tagline}
                </p>

                <div className='flex flex-col gap-3 lg:hidden'>
                    <div className='flex flex-wrap items-center gap-2.5'>
                        <AvailabilityDot />
                        <span className='text-[0.7rem] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-primary-light/80 font-mono'>
                            {aside.availability}
                        </span>
                    </div>
                    <p className='text-[0.7rem] tracking-[0.14em] sm:tracking-[0.2em] uppercase text-primary-light/55 font-mono leading-relaxed'>
                        {aside.roleValue}
                        <span className='text-primary-light/30'> · </span>
                        {aside.basedInValue}
                    </p>
                </div>

                <div className='flex flex-wrap items-center gap-3 pt-2'>
                    <Link
                        to='contact'
                        smooth
                        className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-bg-app transition-all duration-300 hover:bg-primary-hover hover:gap-3 cursor-pointer'
                    >
                        {t.header.ctaContact}
                        <FaArrowRight className='text-xs' />
                    </Link>

                    <a
                        href={userData.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={t.header.ctaLinkedin}
                        className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-primary-light/70 transition-all duration-300 hover:border-border-hover hover:text-primary-light'
                    >
                        <FaLinkedinIn className='text-sm' />
                    </a>
                </div>
            </div>

            <aside className='lg:col-span-5 hidden lg:flex flex-col gap-6 border-l border-border-subtle/40 pl-10'>
                <div className='flex items-center gap-2.5'>
                    <AvailabilityDot />
                    <span className='text-xs tracking-[0.2em] uppercase text-primary-light/70 font-mono'>
                        {aside.availability}
                    </span>
                </div>

                <dl className='grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm'>
                    <dt className='text-primary-light/55 font-mono text-[0.7rem] tracking-[0.2em] uppercase pt-0.5'>
                        {aside.basedInLabel}
                    </dt>
                    <dd className='text-primary-light/80'>
                        {aside.basedInValue}
                    </dd>

                    <dt className='text-primary-light/55 font-mono text-[0.7rem] tracking-[0.2em] uppercase pt-0.5'>
                        {aside.roleLabel}
                    </dt>
                    <dd className='text-primary-light/80'>{aside.roleValue}</dd>

                    <dt className='text-primary-light/55 font-mono text-[0.7rem] tracking-[0.2em] uppercase pt-0.5'>
                        {aside.stackLabel}
                    </dt>
                    <dd className='text-primary-light/80'>
                        {aside.stackValue}
                    </dd>

                    <dt className='text-primary-light/55 font-mono text-[0.7rem] tracking-[0.2em] uppercase pt-0.5'>
                        <motion.span
                            key={timeOfDayLabel}
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, ease: easeOutQuart }}
                            className='inline-block'
                        >
                            {timeOfDayLabel}
                        </motion.span>
                    </dt>
                    <dd
                        className='text-primary-light/80 font-mono tabular-nums tracking-tight'
                        aria-live='off'
                    >
                        <motion.span
                            key={parisTime}
                            initial={{ opacity: 0.55 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: easeOutQuart }}
                            className='inline-block'
                        >
                            {parisTime}
                        </motion.span>
                    </dd>

                    <dt className='text-primary-light/55 font-mono text-[0.7rem] tracking-[0.2em] uppercase pt-0.5'>
                        {aside.languagesLabel}
                    </dt>
                    <dd className='text-primary-light/80'>
                        {aside.languagesValue}
                    </dd>
                </dl>
            </aside>
        </motion.div>
    )
}
