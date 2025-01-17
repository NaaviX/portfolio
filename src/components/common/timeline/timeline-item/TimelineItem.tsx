import { useLargeScreen, useMediumScreen } from '@/utils/Utils'
import { Box, BoxProps } from '@chakra-ui/react'
import { CSSProperties } from 'react'
import { Paper } from '../../Paper'
import { TimelineExperience } from '../timeline.type'
import { TimelineItemContent } from './_TimelineItemContent'
import { TimelineItemDate } from './_TimelineItemDate'
import { TimelineItemSeparator } from './_TimelineItemSeparator'

type TimelineItemProps = {
    experience: TimelineExperience
    sx?: CSSProperties
    displayDuration: boolean
    isReversed: boolean
    withFrame: boolean
} & BoxProps

export const TimelineItem = (props: TimelineItemProps) => {
    const {
        experience,
        sx,
        displayDuration,
        withFrame,
        isReversed,
        ...boxProps
    } = props

    return (
        <Box
            as='li'
            {...boxProps}
            sx={{
                listStyle: 'none',
                display: 'flex',
                flexDirection:
                    useLargeScreen() && isReversed ? 'row-reverse' : 'row',

                position: 'relative',
                minHeight: '70px',
                ...sx,
            }}
        >
            {useMediumScreen() || !withFrame ? (
                <>
                    <TimelineItemDate
                        experience={experience}
                        displayDuration={displayDuration}
                        isReversed={isReversed}
                    />
                    <TimelineItemSeparator />
                </>
            ) : null}
            <Box
                sx={{
                    margin: '0',
                    flex: '1 1 0%',
                    padding: '1rem',
                }}
            >
                {withFrame ? (
                    <Paper style={{ margin: '0', flex: '1 1 0%' }}>
                        <TimelineItemContent {...experience} />
                    </Paper>
                ) : (
                    <TimelineItemContent {...experience} />
                )}
            </Box>
        </Box>
    )
}
