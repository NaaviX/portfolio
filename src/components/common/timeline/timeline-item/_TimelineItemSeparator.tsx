import { motion } from 'framer-motion'

const BORDER_COLOR = 'var(--color-border)'

const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 100,
            duration: 0.6,
        },
    },
}

const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 200,
            delay: 0.2,
        },
    },
}

export const TimelineItemSeparator = () => {
    return (
        <div className='flex flex-col flex-[0_1_0%] items-center'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={lineVariants}
                style={{
                    width: '2px',
                    backgroundColor: BORDER_COLOR,
                    height: '0.7rem',
                    transformOrigin: 'top',
                }}
            />
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={dotVariants}
                style={{
                    display: 'flex',
                    alignSelf: 'baseline',
                    outlineStyle: 'solid',
                    outlineWidth: '2px',
                    outlineOffset: '4px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    boxShadow: 'none',
                    margin: '12px 0px',
                    backgroundColor: 'var(--color-primary-light)',
                    outlineColor: BORDER_COLOR,
                }}
            />
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={lineVariants}
                style={{
                    width: '2px',
                    backgroundColor: BORDER_COLOR,
                    flexGrow: '1',
                    transformOrigin: 'top',
                }}
            />
        </div>
    )
}
