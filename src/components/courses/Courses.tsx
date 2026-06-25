import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'
import { CourseCard } from './components/CourseCard'
import { coursesData } from './courses.data'

export const Courses = () => {
    const reduce = useReducedMotion() ?? false

    return (
        <div className='relative'>
            {/* Animated chronological spine: draws downward as the section
                enters, mirroring the academic progression through the years. */}
            <motion.span
                aria-hidden
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, ease: EASE_OUT_QUART }}
                className='absolute bottom-8 left-[6px] top-3 w-px origin-top bg-gradient-to-b from-primary/70 via-border-subtle/80 to-transparent sm:left-[7px]'
            />

            <ol className='flex flex-col gap-10 sm:gap-14'>
                {coursesData.map((course, index) => (
                    <CourseCard
                        key={course.titleKey}
                        course={course}
                        index={index}
                        featured={index === 0}
                    />
                ))}
            </ol>
        </div>
    )
}
