import { Timeline } from '@/components/common'
import { ExperienceCard } from './components/ExperienceCard'
import { experiencesData } from './experiences.data'

export const Experiences = () => {
    return (
        <Timeline>
            {experiencesData.map((experience, index) => (
                <ExperienceCard
                    key={experience.titleKey}
                    experience={experience}
                    index={index}
                    featured={index === 0}
                />
            ))}
        </Timeline>
    )
}
