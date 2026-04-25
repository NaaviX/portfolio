import { ContactForm } from '@/components/contact'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import {
    GRADIENT_DIVIDER_LEFT,
    GRADIENT_DIVIDER_RIGHT,
    GRADIENT_LINE_LEFT,
    GRADIENT_LINE_RIGHT,
} from './components/section-header.styles'

export const ContactSection = () => {
    return (
        <div className='w-full relative'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16'>
                <div className='flex-1 flex justify-center lg:justify-end'>
                    <ContactForm />
                </div>
                <motion.div
                    className='flex flex-col items-center flex-1 mb-12 lg:mb-0'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' as const }}
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
                            transition={{
                                type: 'spring' as const,
                                stiffness: 400,
                            }}
                        >
                            <Mail className='w-6 h-6 text-primary' />
                        </motion.div>
                        <div
                            className='h-px w-12 lg:w-20'
                            style={GRADIENT_LINE_RIGHT}
                        />
                    </motion.div>

                    <motion.h2
                        className='text-4xl lg:text-5xl font-heading font-semibold text-primary-light tracking-[-0.03em] text-center'
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Me contacter
                    </motion.h2>

                    <motion.p
                        className='text-primary-dark text-sm lg:text-base mt-2 text-center'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Une question ou un projet ? N&apos;hésitez pas !
                    </motion.p>

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
            </div>
        </div>
    )
}
