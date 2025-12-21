import { Box, useTheme } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

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
    const borderColor = useTheme().__cssMap['colors.border'].value
    const primaryLight = useTheme().__cssMap['colors.primary-light'].value
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: '0 1 0%',
                alignItems: 'center',
            }}
        >
            <MotionBox
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={lineVariants}
                style={{
                    width: '2px',
                    backgroundColor: borderColor,
                    height: '0.7rem',
                    transformOrigin: 'top',
                }}
            />
            <MotionBox
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
                    backgroundColor: primaryLight,
                    outlineColor: borderColor,
                }}
            />
            <MotionBox
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-20px' }}
                variants={lineVariants}
                style={{
                    width: '2px',
                    backgroundColor: borderColor,
                    flexGrow: '1',
                    transformOrigin: 'top',
                }}
            />
        </Box>
    )
}
