import { Box } from '@mui/material'
import Exp1 from 'assets/images/exp1.svg?react'
import Exp2 from 'assets/images/exp2.svg?react'

const ExperiencesBackground = () => {
    return (
        <Box display={{ xs: 'none', lg: 'block', opacity: '0.6' }}>
            <Exp1
                role='img'
                name='exp1'
                style={{
                    width: '30%',
                    position: 'absolute',
                    top: '15%',
                    left: '5%',
                }}
            />
            <Exp2
                role='img'
                name='exp2'
                style={{
                    width: '30%',
                    position: 'absolute',
                    bottom: '0',
                    right: '5%',
                }}
            />
        </Box>
    )
}

export default ExperiencesBackground
