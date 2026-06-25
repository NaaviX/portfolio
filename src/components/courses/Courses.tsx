import { Timeline } from '@/components/common'
import { CourseCard } from './components/CourseCard'
import { coursesData } from './courses.data'

export const Courses = () => {
    return (
        <Timeline>
            {coursesData.map((course, index) => (
                <CourseCard
                    key={course.titleKey}
                    course={course}
                    index={index}
                    featured={index === 0}
                />
            ))}
        </Timeline>
    )
}
