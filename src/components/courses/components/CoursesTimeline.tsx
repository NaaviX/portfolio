import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import 'moment/locale/fr'
import { Course } from '../courses.type'
import { getCourses } from '../courses.utils'
import CoursesTimelineItem from './CoursesTimelineItem'

const CoursesTimeline = () => {
    const courses: Course[] = getCourses()
    return (
        <Timeline
            position='right'
            sx={{
                width: '100%',
                px: { xs: '0px', md: '20px' },
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flexGrow: { xs: 0, sm: 0.3, lg: 1 },
                },
            }}
        >
            {courses.map((course: Course) => (
                <CoursesTimelineItem course={course} key={course.name} />
            ))}
        </Timeline>
    )
}

export default CoursesTimeline
