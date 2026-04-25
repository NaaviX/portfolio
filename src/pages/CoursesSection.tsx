import { Courses } from '@/components/courses'
import { useLanguage } from '@/i18n'
import { motion } from 'framer-motion'

const easeOutQuart = [0.25, 1, 0.5, 1] as [number, number, number, number]

export const CoursesSection = () => {
    const { language } = useLanguage()

    return (
        <div className='w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
            <motion.header
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: easeOutQuart }}
                className='mb-16 md:mb-24'
            >
                <div className='flex items-baseline gap-4 md:gap-6'>
                    <span className='text-[0.65rem] md:text-xs font-mono tracking-[0.2em] text-primary/70 pt-1'>
                        04
                    </span>
                    <h2 className='font-heading font-semibold text-primary-light text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-[-0.04em]'>
                        {language === 'fr' ? 'Formation' : 'Education'}
                    </h2>
                    <div className='flex-1 h-px bg-border-subtle/60 translate-y-[-0.4em]' />
                </div>
                <p className='mt-4 ml-[2.5rem] md:ml-[3.25rem] text-sm text-primary-light/45'>
                    {language === 'fr'
                        ? 'Diplômes et parcours académique'
                        : 'Degrees and academic background'}
                </p>
            </motion.header>

            <Courses />
        </div>
    )
}
