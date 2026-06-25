import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'
import { ExperienceCard } from './components/ExperienceCard'
import { experiencesData } from './experiences.data'

export const Experiences = () => {
    const reduce = useReducedMotion() ?? false

    return (
        <div className='relative'>
            {/* Animated career spine: draws downward as the section enters,
                charting the professional progression through the years. */}
            <motion.span
                aria-hidden
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, ease: EASE_OUT_QUART }}
                className='absolute bottom-10 left-[6px] top-7 w-px origin-top bg-gradient-to-b from-primary/70 via-border-subtle/80 to-transparent sm:left-[7px] sm:top-8'
            />

            <ol className='flex flex-col gap-8 sm:gap-10'>
                {experiencesData.map((experience, index) => (
                    <ExperienceCard
                        key={experience.titleKey}
                        experience={experience}
                        index={index}
                        featured={index === 0}
                    />
                ))}
            </ol>
        </div>
    )
}
