import { Box } from '@mui/material'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { isDesktop } from 'react-device-detect'
import { SkillCategory } from '../skills.type'

import { useRef } from 'react'
import Paper from '../../base/components/Paper'
import SkillsCardBody from './SkillsCardBody'

const SkillsCard = ({
    skillCategory,
    progress,
    range,
    targetScale,
    i,
}: {
    skillCategory: SkillCategory
    progress: MotionValue
    range: Array<number>
    targetScale: number
    i: number
}) => {
    if (isDesktop) {
        return (
            <SkillsCardMobile
                skillCategory={skillCategory}
                progress={progress}
                range={range}
                targetScale={targetScale}
                i={i}
            />
        )
    }
    return <SkillsCardBase skillCategory={skillCategory} />
}

const SkillsCardMobile = ({
    skillCategory,
    progress,
    range,
    targetScale,
    i,
}: {
    skillCategory: SkillCategory
    progress: MotionValue
    range: Array<number>
    targetScale: number
    i: number
}) => {
    const container = useRef(null)

    const scale = useTransform(progress, range, [1, targetScale])
    return (
        <Box
            ref={container}
            className='skillCategory'
            sx={{
                position: 'sticky',
                top: '150px',
                width: '60%',
            }}
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
        </Box>
    )
}
const SkillsCardBase = ({
    skillCategory,
}: {
    skillCategory: SkillCategory
}) => {
    return (
        <Paper
            sx={{
                background: 'linear-gradient(80deg, #082c36, #082c36, #101b20)',
                width: '100%',
                padding: '40px 80px',
                marginBottom: '50px',
                minHeight: '50vh',
            }}
        >
            <SkillsCardBody skillCategory={skillCategory}></SkillsCardBody>
        </Paper>
    )
}

export default SkillsCard
