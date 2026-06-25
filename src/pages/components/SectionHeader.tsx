import { motion } from 'framer-motion'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'

interface SectionHeaderProps {
    title: string
}

export const SectionHeader = (props: SectionHeaderProps) => {
    const { title } = props

    return (
        <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: easeOutQuart }}
            className='w-full mb-9 md:mb-14'
        >
            <h2 className='max-w-4xl font-heading font-semibold text-primary-light text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.96] tracking-normal'>
                {title}
            </h2>
        </motion.header>
    )
}
