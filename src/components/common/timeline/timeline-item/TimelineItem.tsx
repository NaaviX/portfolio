import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useLargeScreen, useMediumScreen } from '@/utils/Utils'
import { motion, Variants } from 'framer-motion'
import { CSSProperties, memo } from 'react'
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
    index?: number
    className?: string
}

const itemVariants: Variants = {
    hidden: (isReversed: boolean) => ({
        opacity: 0,
        x: isReversed ? 50 : -50,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: EASE_OUT_QUART,
        },
    },
}

export const TimelineItem = memo((props: TimelineItemProps) => {
    const {
        experience,
        sx,
        displayDuration,
        withFrame,
        isReversed,
        className,
        index = 0,
    } = props

    const isLarge = useLargeScreen()
    const isMedium = useMediumScreen()

    return (
        <motion.li
            custom={isLarge && isReversed}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-80px' }}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
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
            <div className='m-0 flex-1 p-2 md:p-4'>
                {withFrame ? (
                    <Paper style={{ margin: '0', flex: '1 1 0%' }}>
                        <TimelineItemContent {...experience} />
                    </Paper>
                ) : (
                    <TimelineItemContent {...experience} />
                )}
            </div>
        </motion.li>
    )
})

TimelineItem.displayName = 'TimelineItem'
