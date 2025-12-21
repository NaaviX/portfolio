import { Title } from '@/components/common/typography/Title'
import { useMediumScreen } from '@/utils/Utils'
import { motion } from 'framer-motion'

interface SectionTitleProps {
    text?: string
}

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
    const isMedium = useMediumScreen()

    if (!isMedium) {
        return (
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-50px' }}
                variants={titleVariants}
            >
                <Title className='text-center mb-8'>{text}</Title>
            </motion.div>
        )
    }
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            className='flex items-center w-[70%] mb-12 ml-[30px]'
        >
            <motion.div
                variants={lineVariants}
                className='h-px flex-1 bg-border origin-right'
            />
            <motion.div variants={titleVariants}>
                <Title className='text-center mx-8 tracking-widest font-semibold whitespace-nowrap'>
                    {text?.toUpperCase()}
                </Title>
            </motion.div>
            <motion.div
                variants={lineVariants}
                className='h-px flex-1 bg-border origin-left'
            />
        </motion.div>
    )
}
