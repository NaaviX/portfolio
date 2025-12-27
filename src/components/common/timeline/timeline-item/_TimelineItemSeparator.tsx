import { motion } from 'framer-motion'

const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
        scaleY: 1,
        opacity: 1,
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

const pulseVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: [1, 1.8, 1],
        opacity: [0.6, 0, 0.6],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
        },
    },
}

export const TimelineItemSeparator = () => {
    return (
        <div className='flex flex-col flex-[0_1_0%] items-center relative'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={lineVariants}
                className='w-[2px] h-3'
                style={{
                    background:
                        'linear-gradient(to bottom, transparent, var(--color-border))',
                    transformOrigin: 'top',
                }}
            />

            <div className='relative my-3'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-20px' }}
                    variants={pulseVariants}
                    className='absolute inset-0 rounded-full'
                    style={{
                        width: '20px',
                        height: '20px',
                        left: '-6px',
                        top: '-6px',
                        background:
                            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                    }}
                />

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-20px' }}
                    variants={dotVariants}
                    className='relative z-10'
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background:
                            'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                        boxShadow: `
                            0 0 8px var(--color-primary),
                            0 0 16px rgba(0,162,199,0.4),
                            inset 0 1px 2px rgba(255,255,255,0.3)
                        `,
                        outline: '2px solid var(--color-border)',
                        outlineOffset: '3px',
                    }}
                />
            </div>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={lineVariants}
                className='w-[2px] flex-grow'
                style={{
                    background: `linear-gradient(
                        to bottom,
                        var(--color-border) 0%,
                        var(--color-primary) 50%,
                        var(--color-border) 100%
                    )`,
                    transformOrigin: 'top',
                    boxShadow: '0 0 8px rgba(0,162,199,0.2)',
                }}
            />
        </div>
    )
}
