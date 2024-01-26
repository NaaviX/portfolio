import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import ApartmentIcon from '@mui/icons-material/Apartment'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PlaceIcon from '@mui/icons-material/Place'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import ChipList from 'components/base/components/ChipList'

import {
    formatDateMonthYear,
    formatDurationMonthYear,
} from '../../../utils/Utils'
import Paper from '../../base/components/Paper'
import { Experience } from '../experiences.type'

interface ExperiencesCardProps {
    experience: Experience
}

const ExperiencesCard = (props: ExperiencesCardProps) => {
    const exp: Experience = props.experience
    return (
        <Paper sx={{ my: '20px' }}>
            <Typography
                variant='h2'
                sx={{ width: '100%', textAlign: 'left' }}
                gutterBottom
            >
                {exp.title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                    marginY: '10px',
                    gap: { xs: '3px', md: '20px' },
                    ['& svg']: {
                        fontSize: '1.3rem',
                    },
                    ['& .expInfos']: {
                        display: 'flex',
                        gap: '3px',
                    },
                }}
            >
                <Box
                    className='expInfos'
                    sx={{ display: { md: 'none !important' } }}
                >
                    <DateRangeIcon />
                    <Typography>
                        {formatDateMonthYear(exp.dateFrom)} -{' '}
                        {formatDateMonthYear(exp.dateTo)}
                    </Typography>
                </Box>
                <Box
                    className='expInfos'
                    sx={{ display: { md: 'none !important' }, mb: '10px' }}
                >
                    <AccessTimeFilledIcon />
                    <Typography>
                        {formatDurationMonthYear(exp.dateFrom, exp.dateTo)}
                    </Typography>
                </Box>
                <Box className='expInfos'>
                    <ApartmentIcon />
                    <Typography>{exp.company}</Typography>
                </Box>
                <Box className='expInfos'>
                    <PlaceIcon />
                    <Typography>{exp.city}</Typography>
                </Box>
                <Box className='expInfos'>
                    <BusinessCenterIcon />
                    <Typography>{exp.contract}</Typography>
                </Box>
            </Box>
            <List sx={{ listStyle: 'square', pl: 2 }}>
                {exp.activities.map((activity: string) => (
                    <ListItem
                        disablePadding
                        key={activity}
                        sx={{ display: 'list-item' }}
                    >
                        <ListItemText
                            sx={{
                                textAlign: 'justify',
                            }}
                            primary={activity}
                        />
                    </ListItem>
                ))}
            </List>
            <ChipList skills={exp.skills} />
        </Paper>
    )
}

export default ExperiencesCard
