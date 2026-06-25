import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type CourseCardProps = {
    course: TimelineExperience
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
          ? "aujourd'hui"
          : 'present'
    return `${from} - ${to}`
}

const getDuration = (
    dateFrom: Date,
    dateTo: Date | undefined,
    language: 'fr' | 'en'
): string => {
    const end = dateTo || new Date()
    const years = Math.max(1, end.getFullYear() - dateFrom.getFullYear())
    if (language === 'fr') {
        return years === 1 ? '1 an' : `${years} ans`
    }
    return years === 1 ? '1 year' : `${years} years`
}

export const CourseCard = (props: CourseCardProps) => {
    const { course, index, featured = false } = props
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false

    const courseData = t.courses[course.titleKey as keyof typeof t.courses]
    const title = courseData?.title || course.titleKey
    const type = courseData?.type || course.typeKey

    return (
        <motion.li
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration: 0.65,
                ease: easeOutQuart,
                delay: index * 0.12,
            }}
            className='group relative pl-8 sm:pl-12'
        >
            {/* Timeline node: a real chronological marker on the spine, not
                decoration. The most recent diploma reads as the live point. */}
            <span
                aria-hidden
                className={cn(
                    'absolute left-0 top-1.5 grid size-3.5 place-items-center rounded-full ring-4 ring-bg-app transition-colors duration-300',
                    featured
                        ? 'bg-primary'
                        : 'bg-border-subtle group-hover:bg-primary/70'
                )}
            >
                {featured && (
                    <span className='size-3.5 rounded-full bg-primary/40 motion-safe:animate-ping' />
                )}
            </span>

            <div className='flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:items-baseline'>
                <div className='sm:w-40 sm:shrink-0'>
                    <p
                        className={cn(
                            'font-heading font-semibold leading-none tabular-nums',
                            featured
                                ? 'text-3xl text-primary sm:text-4xl'
                                : 'text-2xl text-primary-light/80'
                        )}
                    >
                        {formatYearRange(
                            course.dateFrom,
                            course.dateTo,
                            language
                        )}
                    </p>
                    <p className='mt-2 text-xs text-primary-light/45'>
                        {getDuration(course.dateFrom, course.dateTo, language)}
                        <span className='mx-1.5 text-primary-light/25'>/</span>
                        {type}
                    </p>
                </div>

                <div className='min-w-0 sm:pt-0.5'>
                    <h3
                        className={cn(
                            'font-semibold leading-tight tracking-normal text-primary-light',
                            featured
                                ? 'text-2xl sm:text-3xl'
                                : 'text-xl sm:text-2xl'
                        )}
                    >
                        {title}
                    </h3>
                    {course.institution && (
                        <p className='mt-3 text-sm text-primary-light/55'>
                            <span className='text-primary-light/75'>
                                {course.institution}
                            </span>
                            <span className='mx-2 text-primary-light/30'>
                                /
                            </span>
                            <span>{course.city}</span>
                        </p>
                    )}
                </div>
            </div>
        </motion.li>
    )
}
