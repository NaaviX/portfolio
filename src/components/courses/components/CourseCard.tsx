import { TimelineCard } from '@/components/common'
import { useLanguage } from '@/i18n'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type CourseCardProps = {
    course: TimelineExperience
    index: number
    featured?: boolean
}

/**
 * Resolves a course's i18n content (title, diploma type) and delegates
 * presentation to the shared {@link TimelineCard}. Courses carry no activity
 * bullets or skill chips, so those blocks collapse automatically.
 */
export const CourseCard = (props: CourseCardProps) => {
    const { course, index, featured = false } = props
    const { t } = useLanguage()

    const courseData = t.courses[course.titleKey as keyof typeof t.courses]
    const title = courseData?.title || course.titleKey
    const type = courseData?.type || course.typeKey

    return (
        <TimelineCard
            index={index}
            featured={featured}
            dateFrom={course.dateFrom}
            dateTo={course.dateTo}
            type={type}
            title={title}
            institution={course.institution}
            city={course.city}
        />
    )
}
