import Courses1 from '@/assets/images/courses1.svg?react'
import { Box } from '@chakra-ui/react'

export const CoursesBackground = () => {
    return (
        <Box display={{ base: 'none', lg: 'block' }}>
            <Courses1
                name='exp1'
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '10%',
                    width: '25%',
                    opacity: '0.5',
                }}
            />
        </Box>
    )
}
