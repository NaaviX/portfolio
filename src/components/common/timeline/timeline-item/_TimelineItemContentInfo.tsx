import { formatDurationMonthYear, useMediumScreen } from '@/utils/Utils'
import { CalendarIcon } from '@chakra-ui/icons'
import { Box, ChakraProps, Flex } from '@chakra-ui/react'
import {
    FaBuilding,
    FaClock,
    FaFileSignature,
    FaLocationDot,
} from 'react-icons/fa6'

type TimelineItemContentInfoProps = {
    activities: string[]
    type: string
    institution?: string
    city: string
    dateFrom: Date
    dateTo?: Date
}

export const TimelineItemContentInfo = (
    props: TimelineItemContentInfoProps
) => {
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
                        {dateFrom.getFullYear()} -{' '}
                        {dateTo ? dateTo.getFullYear() : 'Now'}
                    </Flex>
                    <Flex sx={timelineItemContentInfoStyle}>
                        <FaClock />
                        {formatDurationMonthYear(
                            dateFrom,
                            dateTo || new Date()
                        )}
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
