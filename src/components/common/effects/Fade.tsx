import { motion, Variants } from 'framer-motion'

type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    direction?: FadeDirection
    delay?: number
    duration?: number
    distance?: number
}

const getDirectionOffset = (direction: FadeDirection, distance: number) => {
    switch (direction) {
        case 'up':
            return { y: distance }
        case 'down':
            return { y: -distance }
        case 'left':
            return { x: distance }
        case 'right':
            return { x: -distance }
        default:
            return {}
    }
}

export const Fade = (props: FadeProps) => {
    const {
        children,
        className,
        style,
        direction = 'up',
        delay = 0,
        duration = 0.8,
        distance = 40,
    } = props

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getDirectionOffset(direction, distance),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    }

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            variants={variants}
            transition={{
                type: 'spring' as const,
                damping: 25,
                stiffness: 100,
                duration,
                delay,
            }}
            viewport={{ once: true, margin: '-50px' }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}
