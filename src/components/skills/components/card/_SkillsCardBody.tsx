import { ChipList, Title } from '@/components/common'
import { motion, Variants } from 'framer-motion'
import { SkillCategory } from '../../skills.type'

type SkillCardBodyProps = {
    skillCategory: SkillCategory
}

const contentVariants: Variants = {
    rest: { y: 0 },
    hover: {
        y: -2,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
}

const imageVariants: Variants = {
    rest: { scale: 1, opacity: 0.85 },
    hover: {
        scale: 1.02,
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
}

export const SkillsCardBody = (props: SkillCardBodyProps) => {
    const { skillCategory } = props
    return (
        <motion.div
            variants={contentVariants}
            className='skillCardBody flex flex-col md:flex-row p-6 md:p-10 gap-6 md:gap-8 relative z-10'
        >
            <div className='flex flex-col flex-1 gap-5'>
                <div className='flex flex-wrap items-center gap-3'>
                    <span className='px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-primary/20 to-primary-dark/20 text-primary-light rounded-full border border-primary/30 shadow-[0_0_12px_-3px_rgba(0,162,199,0.3)]'>
                        {skillCategory.name.toString()}
                    </span>
                </div>

                {skillCategory.description && (
                    <p className='text-primary-dark/80 text-sm leading-relaxed'>
                        {skillCategory.description}
                    </p>
                )}

                <div className='mt-2'>
                    <Title className='text-xs uppercase tracking-widest text-primary-dark/60 mb-3'>
                        Technologies
                    </Title>
                    <ChipList skills={skillCategory.skills} />
                </div>
            </div>

            <motion.div
                variants={imageVariants}
                className='skillCategoryImage flex-1 relative w-full hidden md:flex items-center justify-center'
            >
                <div className='relative w-full max-w-[280px]'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-2xl' />
                    <skillCategory.image
                        width='100%'
                        className='relative z-10 drop-shadow-[0_0_30px_rgba(0,162,199,0.15)]'
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}
