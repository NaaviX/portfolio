import { CSSProperties } from 'react'
import { TimelineItem } from './timeline-item/TimelineItem'
import { TimelineExperience } from './timeline.type'

type TimelineProps = {
    experiences: TimelineExperience[]
    style?: CSSProperties
    displayDuration?: boolean
    mode?: 'simple' | 'alternate'
    withFrame?: boolean
}

export const Timeline = (props: TimelineProps) => {
    const {
        experiences,
        style,
        displayDuration = false,
        mode = 'simple',
        withFrame = false,
    } = props
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                flexGrow: 1,
                width: '100%',
                ...style,
            }}
        >
            {experiences.map((exp: TimelineExperience, index: number) => (
                <TimelineItem
                    experience={exp}
                    key={exp.title}
                    displayDuration={displayDuration}
                    withFrame={withFrame || mode === 'alternate'}
                    isReversed={mode === 'alternate' && index % 2 === 0}
                    index={index}
                />
            ))}
        </ul>
    )
}
