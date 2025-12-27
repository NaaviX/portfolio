import { SkillCategory } from '../../skills.type'

import { Paper } from '@/components/common'
import { motion, Variants } from 'framer-motion'
import { SkillsCardBody } from './_SkillsCardBody'

type SkillsCardBaseProps = {
    skillCategory: SkillCategory
}

const glowVariants: Variants = {
    rest: { opacity: 0, scale: 0.98 },
    hover: {
        opacity: 1,
        scale: 1.01,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
}

const shimmerVariants: Variants = {
    rest: { x: '-100%', opacity: 0 },
    hover: {
        x: '100%',
        opacity: 0.15,
        transition: { duration: 0.8, ease: 'easeInOut' },
    },
}

export const SkillsCardBase = (props: SkillsCardBaseProps) => {
    const { skillCategory } = props
    return (
        <motion.div
            initial='rest'
            whileHover='hover'
            animate='rest'
            className='relative rounded-2xl overflow-hidden cursor-default'
        >
            <motion.div
                variants={glowVariants}
                className='absolute -inset-2 bg-gradient-to-br from-primary/30 via-primary-dark/15 to-primary/30 rounded-3xl blur-xl'
            />

            <Paper
                animateScroll={false}
                className='relative overflow-hidden'
                style={{
                    background:
                        'linear-gradient(135deg, rgba(16, 27, 32, 0.95), rgba(8, 44, 54, 0.9), rgba(8, 44, 54, 0.85))',
                    width: '100%',
                    padding: 0,
                    marginBottom: '50px',
                    minHeight: '320px',
                }}
            >
                <motion.div
                    variants={shimmerVariants}
                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none'
                />
                <SkillsCardBody skillCategory={skillCategory} />
            </Paper>
        </motion.div>
    )
}
