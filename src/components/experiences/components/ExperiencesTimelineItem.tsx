import ApartmentIcon from '@mui/icons-material/Apartment'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ComputerIcon from '@mui/icons-material/Computer'
import PlaceIcon from '@mui/icons-material/Place'
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import 'moment/locale/fr'
import {
    formatDateMonthYear,
    formatDurationMonthYear,
} from '../../../utils/Utils'
import Chip from '../../base/components/Chip'
import Paper from '../../base/components/Paper'
import { Skill } from '../../skills/skills.type'
import { Experience } from '../experiences.type'
import { getExperiences } from '../experiences.utils'

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
                    pt: '30px',
                    pb: '80px',
                    px: 2,
                }}
            >
                <motion.div
                    initial={{ rotate: initialRotate }}
                    whileInView={{ rotate: 0 }}
                    transition={{ type: 'spring', duration: 2 }}
                    viewport={{ once: true }}
                >
                    <Paper>
                        <Typography variant='h2' sx={{ textAlign: 'center' }}>
                            {exp.title}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                marginBottom: '10px',
                                gap: '10px',
                                ['& svg']: {
                                    fontSize: '1.3rem',
                                },
                                ['& .expInfos']: {
                                    display: 'flex',
                                    placeItems: 'center',
                                    gap: '3px',
                                },
                            }}
                        >
                            <Box className='expInfos'>
                                <ApartmentIcon />{' '}
                                <Typography>{exp.company}</Typography>
                            </Box>
                            <Box className='expInfos'>
                                <PlaceIcon />{' '}
                                <Typography>{exp.city}</Typography>
                            </Box>
                            <Box className='expInfos'>
                                <BusinessCenterIcon />{' '}
                                <Typography>{exp.contract}</Typography>
                            </Box>
                        </Box>
                        <List sx={{ listStyle: 'disc', pl: 2 }}>
                            {exp.activities.map((activity: string) => (
                                <ListItem
                                    disablePadding
                                    disableGutters
                                    key={activity}
                                    sx={{ display: 'list-item' }}
                                >
                                    <ListItemText
                                        sx={{
                                            margin: '0',
                                            textAlign: 'justify',
                                        }}
                                        primary={activity}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '2px',
                                mt: '20px',
                            }}
                        >
                            {exp.skills.map((skill: Skill) => (
                                <Chip
                                    label={skill.name}
                                    icon={
                                        skill.icon ? (
                                            <skill.icon
                                                style={{ width: '1rem' }}
                                            />
                                        ) : (
                                            <span />
                                        )
                                    }
                                    key={skill.name}
                                    sx={{ pl: '4px' }}
                                ></Chip>
                            ))}
                        </Box>
                    </Paper>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperiencesTimelineItem
