import { Timeline } from '@/components/base'
import {
    ExperiencesBackground,
    experiencesData,
} from '@/components/experiences'
import { Box } from '@chakra-ui/react'

export const ExperiencesSection = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <ExperiencesBackground />
            <Timeline
                experiences={experiencesData}
                withFrame
                mode='alternate'
                displayDuration
            />
        </Box>
    )
}
