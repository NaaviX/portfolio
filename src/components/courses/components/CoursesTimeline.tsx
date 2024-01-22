import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import { motion } from 'framer-motion'
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
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: 'spring', duration: 2 }}
                    viewport={{ once: true }}
                    key={course.name}
                >
                    <CoursesTimelineItem course={course} />
                </motion.div>
            ))}
        </Timeline>
    )
}

export default CoursesTimeline
