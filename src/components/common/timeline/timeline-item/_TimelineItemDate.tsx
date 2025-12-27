import { cn } from '@/lib/utils'
import { formatDurationMonthYear, useLargeScreen } from '@/utils/Utils'
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
    const isLarge = useLargeScreen()

    return (
        <div
            className={cn(
                'grow-[0.3] lg:grow shrink basis-0 mr-auto p-4 flex flex-col gap-2.5',
                isLarge && isReversed ? 'text-left' : 'text-right'
            )}
        >
            <Fade>
                <Subtitle>
                    {dateFrom.getFullYear()}
                    {' - '}
                    {dateTo ? dateTo.getFullYear() : "aujourd'hui"}
                </Subtitle>
                <Subtitle>
                    {displayDuration
                        ? formatDurationMonthYear(
                              dateFrom,
                              dateTo || new Date()
                          )
                        : ''}
                </Subtitle>
            </Fade>
        </div>
    )
}
