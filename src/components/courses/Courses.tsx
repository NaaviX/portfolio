import { coursesData } from './courses.data'
import { CourseCard } from './components/CourseCard'

export const Courses = () => {
    return (
        <div className='max-w-5xl mx-auto px-4 md:px-8 py-12'>
            <div className='relative'>
                {coursesData.map((course, index) => (
                    <CourseCard
                        key={course.title}
                        course={course}
                        index={index}
                        isLast={index === coursesData.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}
