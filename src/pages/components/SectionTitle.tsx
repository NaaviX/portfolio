import { Title } from '@/components/common/typography/Title'
import { useMediumScreen } from '@/utils/Utils'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
    text?: string
}

const MotionBox = motion(Box)

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 20,
            stiffness: 100,
            duration: 0.8,
        },
    },
}

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 80,
            delay: 0.2,
        },
    },
}

export const SectionTitle = (props: SectionTitleProps) => {
    const { text } = props
    if (!useMediumScreen()) {
        return (
            <MotionBox
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-50px' }}
                variants={titleVariants}
            >
                <Title sx={{ textAlign: 'center', mb: '2rem' }}>{text}</Title>
            </MotionBox>
        )
    }
    return (
        <MotionBox
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            display='flex'
            alignItems='center'
            width='70%'
            marginBottom='3rem'
            marginLeft='30px'
        >
            <MotionBox
                variants={lineVariants}
                height='1px'
                flex='1'
                bg='border'
                transformOrigin='right'
            />
            <MotionBox variants={titleVariants}>
                <Title
                    sx={{
                        textAlign: 'center',
                        marginInline: '2rem',
                        letterSpacing: 'widest',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {text?.toUpperCase()}
                </Title>
            </MotionBox>
            <MotionBox
                variants={lineVariants}
                height='1px'
                flex='1'
                bg='border'
                transformOrigin='left'
            />
        </MotionBox>
    )
}
