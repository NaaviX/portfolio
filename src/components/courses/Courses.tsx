import { CourseCard } from './components/CourseCard'
import { coursesData } from './courses.data'

export const Courses = () => {
    return (
        <ul className='border-t border-border-subtle/60'>
            {coursesData.map((course, index) => (
                <CourseCard
                    key={course.titleKey}
                    course={course}
                    index={index}
                />
            ))}
        </ul>
    )
}
