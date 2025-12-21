import { formatDurationMonthYear, useLargeScreen } from '@/utils/Utils'
import { Box } from '@chakra-ui/react'
import { Fade } from '../../effects/Fade'
import { Subtitle } from '../../typography/Subtitle'
import { TimelineExperience } from '../timeline.type'

type TimelineItemDateProps = {
    experience: TimelineExperience
    displayDuration: boolean
    isReversed: boolean
}

export const TimelineItemDate = (props: TimelineItemDateProps) => {
    const { isReversed, displayDuration, experience } = props
    const { dateFrom, dateTo } = experience
    return (
        <Box
            sx={{
                flexGrow: { base: 0.3, lg: 1 },
                flexShrink: 1,
                flexBasis: '0%',
                margin: '0 auto 0 0',
                padding: '1rem',
                textAlign: useLargeScreen() && isReversed ? 'left' : 'right',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}
        >
            <Fade>
                <Subtitle>
                    {dateFrom.getFullYear()}{' '}
                    {dateTo && '- ' + dateTo.getFullYear()}
                </Subtitle>
                <Subtitle>
                    {displayDuration && dateTo
                        ? formatDurationMonthYear(dateFrom, dateTo)
                        : ''}
                </Subtitle>
            </Fade>
        </Box>
    )
}
