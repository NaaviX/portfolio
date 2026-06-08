import { CourseCard } from './components/CourseCard'
import { coursesData } from './courses.data'

export const Courses = () => {
    return (
        <ul className='grid gap-4 md:grid-cols-3'>
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
