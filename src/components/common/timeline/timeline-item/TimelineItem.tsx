import { cn } from '@/lib/utils'
import { useLargeScreen, useMediumScreen } from '@/utils/Utils'
import { CSSProperties, HTMLAttributes } from 'react'
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
} & HTMLAttributes<HTMLLIElement>

export const TimelineItem = (props: TimelineItemProps) => {
    const {
        experience,
        sx,
        displayDuration,
        withFrame,
        isReversed,
        className,
        ...liProps
    } = props

    const isLarge = useLargeScreen()
    const isMedium = useMediumScreen()

    return (
        <li
            {...liProps}
            className={cn(
                'list-none flex relative min-h-[70px]',
                isLarge && isReversed ? 'flex-row-reverse' : 'flex-row',
                className
            )}
            style={sx}
        >
            {isMedium || !withFrame ? (
                <>
                    <TimelineItemDate
                        experience={experience}
                        displayDuration={displayDuration}
                        isReversed={isReversed}
                    />
                    <TimelineItemSeparator />
                </>
            ) : null}
            <div className='m-0 flex-1 p-4'>
                {withFrame ? (
                    <Paper style={{ margin: '0', flex: '1 1 0%' }}>
                        <TimelineItemContent {...experience} />
                    </Paper>
                ) : (
                    <TimelineItemContent {...experience} />
                )}
            </div>
        </li>
    )
}
