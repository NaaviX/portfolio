import { Timeline } from '@/components/common'
import {
    ExperiencesBackground,
    experiencesData,
} from '@/components/experiences'

export const ExperiencesSection = () => {
    return (
        <div className='relative w-full'>
            <ExperiencesBackground />
            <Timeline
                experiences={experiencesData}
                withFrame
                mode='alternate'
                displayDuration
            />
        </div>
    )
}
