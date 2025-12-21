import { Timeline } from '@/components/common'
import { CoursesBackground, coursesData } from '@/components/courses'

export const CoursesSection = () => {
    return (
        <div className='w-full relative'>
            <CoursesBackground />
            <Timeline experiences={coursesData} />
        </div>
    )
}
