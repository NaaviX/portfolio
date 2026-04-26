import { motion } from 'framer-motion'

const easeOutQuart = [0.25, 1, 0.5, 1] as [number, number, number, number]

interface SectionHeaderProps {
    number: string
    title: string
    subtitle?: string
}

export const SectionHeader = (props: SectionHeaderProps) => {
    const { number, title, subtitle } = props

    return (
        <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: easeOutQuart }}
            className='w-full mb-16 md:mb-24'
        >
            <div className='flex items-baseline gap-4 md:gap-6'>
                <span className='text-[0.65rem] md:text-xs font-mono tracking-[0.2em] text-primary/70 pt-1'>
                    {number}
                </span>
                <h2 className='font-heading font-semibold text-primary-light text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-[-0.04em]'>
                    {title}
                </h2>
                <div className='flex-1 h-px bg-border-subtle/60 translate-y-[-0.4em]' />
            </div>
            {subtitle && (
                <p className='mt-4 ml-[2.5rem] md:ml-[3.25rem] text-sm text-primary-light/45'>
                    {subtitle}
                </p>
            )}
        </motion.header>
    )
}
