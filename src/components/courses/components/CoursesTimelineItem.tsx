import ApartmentIcon from '@mui/icons-material/Apartment'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import PlaceIcon from '@mui/icons-material/Place'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab'
import { Box, Typography } from '@mui/material'
import 'moment/locale/fr'
import { Course } from '../courses.type'

interface CoursesTimelineItemProps {
    course: Course
}

const CoursesTimelineItem = (props: CoursesTimelineItemProps) => {
    const course: Course = props.course
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ pt: '28px' }}>
                {course.dateFrom.getFullYear()} - {course.dateTo.getFullYear()}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ flexGrow: '0.05' }} />
                <TimelineDot variant='outlined'>
                    <SchoolOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    py: '22px',
                    px: 2,
                }}
            >
                <Typography variant='h2'>{course.name}</Typography>
                <Box
                    sx={{
                        mt: '20px',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        placeContent: 'center',
                        gap: '10px',
                        ['& svg']: {
                            fontSize: '1.3rem',
                        },
                        ['& .courseInfos']: {
                            display: 'flex',
                            placeItems: 'center',
                            gap: '3px',
                        },
                    }}
                >
                    <Box className='courseInfos'>
                        <ApartmentIcon /> <span>{course.school}</span>
                    </Box>
                    <Box className='courseInfos'>
                        <PlaceIcon /> <span>{course.city}</span>
                    </Box>
                    <Box className='courseInfos'>
                        <HistoryEduIcon /> <span>{course.diploma}</span>
                    </Box>
                </Box>
            </TimelineContent>
        </TimelineItem>
    )
}

export default CoursesTimelineItem
