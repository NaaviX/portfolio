import { Timeline } from '@/components/base'
import { CoursesBackground, coursesData } from '@/components/courses'
import { Box } from '@chakra-ui/react'

export const CoursesSection = () => {
    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <CoursesBackground />
            <Timeline experiences={coursesData} />
        </Box>
    )
}
