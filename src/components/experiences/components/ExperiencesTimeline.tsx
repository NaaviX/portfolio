import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import { Box } from '@mui/material'

import { Experience } from '../experiences.type'
import { getExperiences } from '../experiences.utils'
import ExperiencesCard from './ExperiencesCard'
import ExperiencesTimelineItem from './ExperiencesTimelineItem'

const ExperiencesTimeline = () => {
    const experiences: Experience[] = getExperiences()
    return (
        <>
            <Timeline
                position='alternate'
                sx={{ width: '100%', display: { xs: 'none', lg: 'block' } }}
            >
                {experiences.map((exp: Experience) => (
                    <ExperiencesTimelineItem experience={exp} key={exp.title} />
                ))}
            </Timeline>
            <Timeline
                sx={{
                    width: '100%',
                    display: { xs: 'none', md: 'block', lg: 'none' },
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.3,
                    },
                }}
            >
                {experiences.map((exp: Experience) => (
                    <ExperiencesTimelineItem experience={exp} key={exp.title} />
                ))}
            </Timeline>
            <Box
                sx={{
                    width: '100%',
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {experiences.map((exp: Experience) => (
                    <ExperiencesCard experience={exp} key={exp.title} />
                ))}
            </Box>
        </>
    )
}

export default ExperiencesTimeline
