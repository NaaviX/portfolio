import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type TimelineProps = {
    children: ReactNode
}

/**
 * Shared chronological scaffold for the Experiences and Courses sections.
 * Renders the animated vertical spine that draws downward as the section
 * enters, then lays out the entries as an ordered list. Card chrome and the
 * nodes that sit on the spine live in {@link TimelineCard}.
 */
export const Timeline = ({ children }: TimelineProps) => {
    const reduce = useReducedMotion() ?? false

    return (
        <div className='relative'>
            <motion.span
                aria-hidden
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, ease: EASE_OUT_QUART }}
                className='absolute bottom-10 left-[6px] top-7 w-px origin-top bg-gradient-to-b from-signal/75 via-border-subtle/80 to-transparent sm:left-[7px] sm:top-8'
            />

            <ol className='flex flex-col gap-8 sm:gap-10'>{children}</ol>
        </div>
    )
}
