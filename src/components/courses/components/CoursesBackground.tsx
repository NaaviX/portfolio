import { Box } from '@mui/material'
import { ReactComponent as Courses1 } from 'src/assets/images/courses1.svg'

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
