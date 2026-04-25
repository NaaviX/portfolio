import { useLanguage } from '@/i18n'
import { motion } from 'framer-motion'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type CourseCardProps = {
    course: TimelineExperience
    index: number
}

const easeOutQuart = [0.25, 1, 0.5, 1] as [number, number, number, number]

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
    return `${from} — ${to}`
}

const getDuration = (
    dateFrom: Date,
    dateTo: Date | undefined,
    language: 'fr' | 'en'
): string => {
    const end = dateTo || new Date()
    const years = Math.max(
        1,
        end.getFullYear() - dateFrom.getFullYear()
    )
    if (language === 'fr') {
        return years === 1 ? '1 AN' : `${years} ANS`
    }
    return years === 1 ? '1 YEAR' : `${years} YEARS`
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
            className='border-b border-border-subtle/60 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 group'
        >
            <div className='md:col-span-3 flex flex-col'>
                <span className='font-heading font-medium text-primary text-2xl md:text-[1.75rem] leading-none tracking-[-0.02em] tabular-nums'>
                    {formatYearRange(course.dateFrom, course.dateTo, language)}
                </span>
                <span className='mt-2 text-[0.65rem] tracking-[0.2em] text-primary-light/40 font-mono'>
                    {getDuration(course.dateFrom, course.dateTo, language)}
                </span>
            </div>

            <div className='md:col-span-9 flex flex-col gap-3'>
                <span className='text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/40 font-mono'>
                    {type}
                </span>
                <h3 className='text-2xl md:text-3xl font-medium text-primary-light leading-tight tracking-tight transition-colors duration-300 group-hover:text-white'>
                    {title}
                </h3>
                {course.institution && (
                    <p className='text-sm md:text-base text-primary-light/50'>
                        <span className='text-primary-light/70'>
                            {course.institution}
                        </span>
                        <span className='mx-2 text-primary-light/30'>·</span>
                        <span>{course.city}</span>
                    </p>
                )}
            </div>
        </motion.li>
    )
}
