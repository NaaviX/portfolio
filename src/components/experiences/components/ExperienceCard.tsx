import { TimelineCard } from '@/components/common'
import { useLanguage } from '@/i18n'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type ExperienceCardProps = {
    experience: TimelineExperience
    index: number
    featured?: boolean
}

/**
 * Resolves an experience's i18n content (title, type, achievement bullets) and
 * delegates all presentation to the shared {@link TimelineCard}.
 */
export const ExperienceCard = (props: ExperienceCardProps) => {
    const { experience, index, featured = false } = props
    const { t } = useLanguage()

    const expData =
        t.experiences[experience.activitiesKey as keyof typeof t.experiences]
    const title =
        expData && 'title' in expData ? expData.title : experience.titleKey
    const activities =
        expData && 'activities' in expData
            ? [...expData.activities].slice(0, 3)
            : []
    const type =
        t.experiences.types[
            experience.typeKey as keyof typeof t.experiences.types
        ] || experience.typeKey

    return (
        <TimelineCard
            index={index}
            featured={featured}
            dateFrom={experience.dateFrom}
            dateTo={experience.dateTo}
            type={type}
            title={title}
            institution={experience.institution}
            city={experience.city}
            activities={activities}
            skills={experience.skills}
        />
    )
}
