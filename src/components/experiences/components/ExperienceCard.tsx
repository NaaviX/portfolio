import { ChipList } from '@/components/common'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type ExperienceCardProps = {
    experience: TimelineExperience
    index: number
    featured?: boolean
}

const formatYearRange = (
    dateFrom: Date,
    dateTo: Date | undefined,
    language: 'fr' | 'en'
): string => {
    const from = dateFrom.getFullYear()
    const to = dateTo
        ? dateTo.getFullYear()
        : language === 'fr'
          ? 'Présent'
          : 'Present'
    return `${from} - ${to}`
}

const getDuration = (
    dateFrom: Date,
    dateTo: Date | undefined,
    language: 'fr' | 'en'
): string => {
    const end = dateTo ?? new Date()
    const years = Math.max(1, end.getFullYear() - dateFrom.getFullYear())
    if (language === 'fr') {
        return years === 1 ? '1 an' : `${years} ans`
    }
    return years === 1 ? '1 year' : `${years} years`
}

export const ExperienceCard = (props: ExperienceCardProps) => {
    const { experience, index, featured = false } = props
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false

    const expData =
        t.experiences[experience.activitiesKey as keyof typeof t.experiences]
    const title =
        expData && 'title' in expData ? expData.title : experience.titleKey
    const activities =
        expData && 'activities' in expData
            ? [...expData.activities].slice(0, 3)
            : []
    const type =
        t.experiences.types[
            experience.typeKey as keyof typeof t.experiences.types
        ] || experience.typeKey

    return (
        <motion.li
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration: 0.65,
                ease: easeOutQuart,
                delay: index * 0.1,
            }}
            className='group relative pl-8 sm:pl-12'
        >
            {/* Chronological node on the spine. The current role (no end date)
                reads as the live point, mirroring the Courses timeline. */}
            <span
                aria-hidden
                className={cn(
                    'absolute left-0 top-6 z-10 grid size-3.5 place-items-center rounded-full ring-4 ring-bg-app transition-colors duration-300 sm:top-7',
                    featured
                        ? 'bg-signal'
                        : 'bg-border-subtle group-hover:bg-primary/70'
                )}
            >
                {featured && (
                    <span className='size-3.5 rounded-full bg-signal/40 motion-safe:animate-ping' />
                )}
            </span>

            {/* Connector tying the node to the card edge. */}
            <span
                aria-hidden
                className={cn(
                    'absolute left-[7px] top-7 hidden h-px w-[1.85rem] transition-colors duration-300 group-hover:bg-primary/40 sm:block sm:top-8',
                    featured ? 'bg-signal/55' : 'bg-border-subtle/55'
                )}
            />

            <div
                className={cn(
                    'rounded-xl border p-5 transition-colors duration-300 sm:p-6 lg:p-7',
                    featured
                        ? 'border-signal/30 bg-signal-soft'
                        : 'border-border-subtle/55 bg-bg-app/40 group-hover:border-primary/35 group-hover:bg-bg/30'
                )}
            >
                <div className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2'>
                    <div className='flex items-baseline gap-3'>
                        <time
                            className={cn(
                                'font-heading font-semibold leading-none tabular-nums',
                                featured
                                    ? 'text-2xl text-signal sm:text-3xl'
                                    : 'text-xl text-primary-light/80 sm:text-2xl'
                            )}
                        >
                            {formatYearRange(
                                experience.dateFrom,
                                experience.dateTo,
                                language
                            )}
                        </time>
                        <span className='text-xs text-primary-light/45'>
                            {getDuration(
                                experience.dateFrom,
                                experience.dateTo,
                                language
                            )}
                        </span>
                    </div>
                    <span
                        className={cn(
                            'rounded-full border px-3 py-1 text-xs font-medium',
                            featured
                                ? 'border-signal/45 bg-signal-soft text-signal'
                                : 'border-border-subtle/70 text-primary-light/60'
                        )}
                    >
                        {type}
                    </span>
                </div>

                <div className='mt-4'>
                    <h3
                        className={cn(
                            'font-semibold leading-tight text-primary-light',
                            featured
                                ? 'text-2xl sm:text-3xl'
                                : 'text-xl sm:text-2xl'
                        )}
                    >
                        {title}
                    </h3>
                    {experience.institution && (
                        <p className='mt-2 text-sm text-primary-light/55'>
                            <span className='text-primary-light/75'>
                                {experience.institution}
                            </span>
                            {experience.city && (
                                <>
                                    <span className='mx-2 text-primary-light/30'>
                                        /
                                    </span>
                                    <span>{experience.city}</span>
                                </>
                            )}
                        </p>
                    )}
                </div>

                {activities.length > 0 && (
                    <ul className='mt-5 flex flex-col gap-2.5'>
                        {activities.map((activity) => (
                            <li
                                key={activity}
                                className='flex gap-3 text-sm leading-relaxed text-ink-muted/74'
                            >
                                <span
                                    aria-hidden
                                    className={cn(
                                        'mt-[0.55em] h-px w-3 shrink-0 transition-colors duration-300 group-hover:bg-primary/70',
                                        featured
                                            ? 'bg-signal/65'
                                            : 'bg-primary/45'
                                    )}
                                />
                                <span>{activity}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <ChipList
                    skills={experience.skills.slice(0, 6)}
                    className='mt-6 justify-start'
                />
            </div>
        </motion.li>
    )
}
