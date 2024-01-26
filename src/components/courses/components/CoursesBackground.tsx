import { Box } from '@mui/material'
import Courses1 from 'assets/images/courses1.svg?react'

const CoursesBackground = () => {
    return (
        <Box display={{ xs: 'none', lg: 'block', opacity: '0.6' }}>
            <Courses1
                role='img'
                name='exp1'
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '5%',
                    width: '35%',
                }}
            />
        </Box>
    )
}

export default CoursesBackground
