import { Timeline } from '@/components/common'
import { experiencesData } from '@/components/experiences'

export const ExperiencesSection = () => {
    return (
        <Timeline
            experiences={experiencesData}
            withFrame
            mode='alternate'
            displayDuration
        />
    )
}
