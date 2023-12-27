import ComputerIcon from '@mui/icons-material/Computer'
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab'
import { motion } from 'framer-motion'
import 'moment/locale/fr'
import {
    formatDateMonthYear,
    formatDurationMonthYear,
} from '../../../utils/Utils'
import { Experience } from '../experiences.type'
import { getExperiences } from '../experiences.utils'
import ExperiencesCard from './ExperiencesCard'

interface ExperiencesTimelineItemProps {
    experience: Experience
}

const ExperiencesTimelineItem = (props: ExperiencesTimelineItemProps) => {
    const exp: Experience = props.experience
    const experiences: Experience[] = getExperiences()
    const initialRotate = experiences.indexOf(exp) % 2 === 0 ? '20' : '-20'
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ py: '20px' }} variant='subtitle1'>
                {formatDateMonthYear(exp.dateFrom)} -{' '}
                {formatDateMonthYear(exp.dateTo)}
                <br />
                {formatDurationMonthYear(exp.dateFrom, exp.dateTo)}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ flexGrow: '0.05' }} />
                <TimelineDot variant='outlined'>
                    <ComputerIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    px: 2,
                }}
            >
                <motion.div
                    initial={{ rotate: initialRotate }}
                    whileInView={{ rotate: 0 }}
                    transition={{ type: 'spring', duration: 2 }}
                    viewport={{ once: true }}
                >
                    <ExperiencesCard experience={exp} />
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperiencesTimelineItem
