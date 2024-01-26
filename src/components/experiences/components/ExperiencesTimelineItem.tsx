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

import {
    formatDateMonthYear,
    formatDurationMonthYear,
} from '../../../utils/Utils'
import { Experience } from '../experiences.type'
import ExperiencesCard from './ExperiencesCard'

interface ExperiencesTimelineItemProps {
    experience: Experience
}

const ExperiencesTimelineItem = (props: ExperiencesTimelineItemProps) => {
    const exp: Experience = props.experience
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
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
