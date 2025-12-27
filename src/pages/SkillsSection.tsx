import { Skills } from '@/components/skills/Skills'
import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'

export const SkillsSection = () => {
    return (
        <div className='w-full relative'>
            <div className='relative z-10'>
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
                            style={{
                                background:
                                    'linear-gradient(to right, transparent, var(--color-primary))',
                            }}
                        />
                        <motion.div
                            className='p-3 rounded-xl border border-border bg-bg-hover/50 backdrop-blur-sm'
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <Layers className='w-6 h-6 text-primary' />
                        </motion.div>
                        <div
                            className='h-px w-12 lg:w-20'
                            style={{
                                background:
                                    'linear-gradient(to left, transparent, var(--color-primary))',
                            }}
                        />
                    </motion.div>

                    <motion.h2
                        className='text-2xl lg:text-3xl font-heading font-medium text-primary-light tracking-wide text-center'
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Compétences techniques
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
                            style={{
                                background:
                                    'linear-gradient(to right, transparent, var(--color-border))',
                            }}
                        />
                        <motion.div
                            className='w-1.5 h-1.5 rounded-full bg-primary'
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <div
                            className='h-px w-8 lg:w-16'
                            style={{
                                background:
                                    'linear-gradient(to left, transparent, var(--color-border))',
                            }}
                        />
                    </motion.div>
                </motion.div>

                <div className='max-w-4xl mx-auto px-4'>
                    <Skills />
                </div>
            </div>
        </div>
    )
}
