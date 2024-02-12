import { Skill } from '@/components/skills'
import { formatDurationMonthYear, useMediumScreen } from '@/utils/Utils'
import { CalendarIcon } from '@chakra-ui/icons'
import {
    Box,
    ChakraProps,
    Flex,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import {
    FaBuilding,
    FaClock,
    FaFileSignature,
    FaLocationDot,
} from 'react-icons/fa6'
import { ChipList } from '../../ChipList'
import { Fade } from '../../effects/Fade'
import { Title } from '../../typography/Title'

interface TimelineItemContentProps {
    title: string
    activities: string[]
    type: string
    institution?: string
    city: string
    skills: Skill[]
    dateFrom: Date
    dateTo: Date
    sx?: ChakraProps['sx']
}

export const TimelineItemContent = (props: TimelineItemContentProps) => {
    const {
        title,
        activities,
        type,
        institution,
        city,
        skills,
        dateFrom,
        dateTo,
        sx,
    } = props
    return (
        <Box sx={sx}>
            <Fade>
                <Title>{title}</Title>

                <TimelineItemContentInfo
                    activities={activities}
                    type={type}
                    institution={institution}
                    city={city}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                />

                <UnorderedList
                    listStyleType='square'
                    sx={{
                        padding: '1rem 0',
                        display: activities.length !== 0 ? 'block' : 'none',
                    }}
                >
                    {activities.map((activity: string) => (
                        <ListItem key={activity}>{activity}</ListItem>
                    ))}
                </UnorderedList>

                <ChipList skills={skills} />
            </Fade>
        </Box>
    )
}

interface TimelineItemContentInfoProps {
    activities: string[]
    type: string
    institution?: string
    city: string
    dateFrom: Date
    dateTo: Date
}

const TimelineItemContentInfo = (props: TimelineItemContentInfoProps) => {
    const { activities, type, institution, city, dateFrom, dateTo } = props

    const timelineItemContentInfoStyle: ChakraProps['sx'] = {
        display: 'flex',
        placeItems: 'center',
        gap: '3px',
    }

    return (
        <Flex
            sx={{
                marginTop: '20px',
                flexDirection:
                    useMediumScreen() && activities.length > 0
                        ? 'row'
                        : 'column',
                gap:
                    useMediumScreen() && activities.length > 0
                        ? '1.5rem'
                        : '0.4rem',
                ml: {
                    base: '0.4rem',
                    md: activities.length === 0 ? '0.5rem' : '0',
                },
            }}
        >
            {useMediumScreen() ? null : (
                <>
                    <Flex sx={timelineItemContentInfoStyle}>
                        <CalendarIcon />
                        {dateFrom.getFullYear()} - {dateTo.getFullYear()}
                    </Flex>
                    <Flex sx={timelineItemContentInfoStyle}>
                        <FaClock />
                        {formatDurationMonthYear(dateFrom, dateTo)}
                    </Flex>
                </>
            )}
            {type && type !== '' ? (
                <Box sx={timelineItemContentInfoStyle}>
                    <FaFileSignature />
                    {type}
                </Box>
            ) : null}
            {institution && institution !== '' ? (
                <Box sx={timelineItemContentInfoStyle}>
                    <FaBuilding />
                    {institution}
                </Box>
            ) : null}
            {city && city !== '' ? (
                <Box sx={timelineItemContentInfoStyle}>
                    <FaLocationDot />
                    {city}
                </Box>
            ) : null}
        </Flex>
    )
}
