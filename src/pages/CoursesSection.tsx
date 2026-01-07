import { Courses } from '@/components/courses'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import {
    GRADIENT_DIVIDER_LEFT,
    GRADIENT_DIVIDER_RIGHT,
    GRADIENT_LINE_LEFT,
    GRADIENT_LINE_RIGHT,
} from './components/section-header.styles'

export const CoursesSection = () => {
    return (
        <div className='w-full relative'>
            <motion.div
                className='flex flex-col items-center mb-12 lg:mb-16'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <motion.div
                    className='flex items-center gap-4 mb-4'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div
                        className='h-px w-12 lg:w-20'
                        style={GRADIENT_LINE_LEFT}
                    />
                    <motion.div
                        className='p-3 rounded-xl border border-border bg-bg-hover/50 backdrop-blur-sm'
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <GraduationCap className='w-6 h-6 text-primary' />
                    </motion.div>
                    <div
                        className='h-px w-12 lg:w-20'
                        style={GRADIENT_LINE_RIGHT}
                    />
                </motion.div>

                <motion.h2
                    className='text-2xl lg:text-3xl font-heading font-medium text-primary-light tracking-wide text-center'
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Formation
                </motion.h2>

                <motion.div
                    className='flex items-center gap-2 mt-6'
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div
                        className='h-px w-8 lg:w-16'
                        style={GRADIENT_DIVIDER_LEFT}
                    />
                    <div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot' />
                    <div
                        className='h-px w-8 lg:w-16'
                        style={GRADIENT_DIVIDER_RIGHT}
                    />
                </motion.div>
            </motion.div>

            <Courses />
        </div>
    )
}
