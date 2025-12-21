import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { ChipList } from '../../ChipList'
import { Fade } from '../../effects/Fade'
import { Title } from '../../typography/Title'
import { TimelineExperience } from '../timeline.type'
import { TimelineItemContentInfo } from './_TimelineItemContentInfo'

type TimelineItemContentProps = TimelineExperience &
    HTMLAttributes<HTMLDivElement>

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
        className,
        ...divProps
    } = props
    return (
        <div className={cn(className)} {...divProps}>
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

                <ul
                    className={cn(
                        'list-square py-4 pl-5',
                        activities.length === 0 && 'hidden'
                    )}
                >
                    {activities.map((activity: string) => (
                        <li key={activity}>{activity}</li>
                    ))}
                </ul>

                <ChipList skills={skills} />
            </Fade>
        </div>
    )
}
