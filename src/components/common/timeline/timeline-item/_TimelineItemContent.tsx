import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react'
import { ChipList } from '../../ChipList'
import { Fade } from '../../effects/Fade'
import { Title } from '../../typography/Title'
import { TimelineExperience } from '../timeline.type'
import { TimelineItemContentInfo } from './_TimelineItemContentInfo'

type TimelineItemContentProps = TimelineExperience & BoxProps

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
        ...boxProps
    } = props
    return (
        <Box {...boxProps}>
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
