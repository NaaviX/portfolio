import Exp2 from '@/assets/images/exp2.svg?react'
import { Box } from '@chakra-ui/react'

export const ExperiencesBackground = () => {
    return (
        <Box display={{ base: 'none', lg: 'block' }}>
            <Exp2
                name='exp2'
                style={{
                    width: '30%',
                    position: 'absolute',
                    top: '5%',
                    right: '10%',
                    opacity: 0.5,
                }}
            />
        </Box>
    )
}
