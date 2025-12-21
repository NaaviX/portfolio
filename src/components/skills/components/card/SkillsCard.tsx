import { motion, MotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SkillCategory } from '../../skills.type'
import { SkillsCardBase } from './_SkillsCardBase'

type SkillsCardProps = {
    skillCategory: SkillCategory
    progress: MotionValue
    range: Array<number>
    targetScale: number
    i: number
}

export const SkillsCard = (props: SkillsCardProps) => {
    const { skillCategory, progress, range, targetScale, i } = props
    const container = useRef(null)

    const scale = useTransform(progress, range, [1, targetScale])
    return (
        <div
            ref={container}
            className='skillCategory sticky top-[150px] w-full'
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    width: '100%',
                    position: 'relative',
                    transformOrigin: 'top',
                }}
            >
                <SkillsCardBase skillCategory={skillCategory} />
            </motion.div>
        </div>
    )
}
