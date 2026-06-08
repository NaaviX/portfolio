import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'
import { motion } from 'framer-motion'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type CourseCardProps = {
    course: TimelineExperience
    index: number
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
    const { course, index } = props
    const { t, language } = useLanguage()

    const courseData = t.courses[course.titleKey as keyof typeof t.courses]
    const title = courseData?.title || course.titleKey
    const type = courseData?.type || course.typeKey

    return (
        <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration: 0.7,
                ease: easeOutQuart,
                delay: index * 0.08,
            }}
            className='group rounded-lg border border-border-subtle/70 bg-bg-subtle/58 p-5 transition-colors duration-300 hover:border-primary/60 sm:p-6'
        >
            <div className='flex min-h-full flex-col'>
                <span className='font-heading text-2xl font-semibold leading-none tracking-normal text-primary tabular-nums'>
                    {formatYearRange(course.dateFrom, course.dateTo, language)}
                </span>
                <span className='mt-2 text-xs text-primary-light/45'>
                    {getDuration(course.dateFrom, course.dateTo, language)}
                </span>

                <span className='mt-8 text-sm text-primary-light/52'>
                    {type}
                </span>
                <h3 className='mt-3 text-2xl font-semibold leading-tight tracking-normal text-primary-light transition-colors duration-300 group-hover:text-primary-light'>
                    {title}
                </h3>
                {course.institution && (
                    <p className='mt-5 text-sm text-primary-light/52'>
                        <span className='text-primary-light/70'>
                            {course.institution}
                        </span>
                        <span className='mx-2 text-primary-light/30'>/</span>
                        <span>{course.city}</span>
                    </p>
                )}
            </div>
        </motion.li>
    )
}
