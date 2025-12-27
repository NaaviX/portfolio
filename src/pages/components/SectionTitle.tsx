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
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
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
                className='relative'
            >
                <Title className='text-center mb-8'>{text}</Title>
                <motion.div
                    variants={lineVariants}
                    className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent'
                />
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
                className='relative h-px flex-1 origin-right'
            >
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-border-hover to-border' />
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-primary/40 blur-sm' />
            </motion.div>
            <motion.div variants={titleVariants} className='relative'>
                <Title className='text-center mx-8 tracking-widest font-semibold whitespace-nowrap'>
                    {text?.toUpperCase()}
                </Title>
                <div className='absolute inset-0 bg-primary/5 blur-xl -z-10' />
            </motion.div>
            <motion.div
                variants={lineVariants}
                className='relative h-px flex-1 origin-left'
            >
                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-border-hover to-border' />
                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-primary/20 to-primary/40 blur-sm' />
            </motion.div>
        </motion.div>
    )
}
