import { Box } from '@mui/material'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
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
    return (
        <SkillsCardBase
            scrollYProgress={progress}
            skillCategory={skillCategory}
        />
    )
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

    const { scrollYProgress } = useScroll({
        target: container,

        offset: ['start end', 'start start'],
    })

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
                <SkillsCardBase
                    scrollYProgress={scrollYProgress}
                    skillCategory={skillCategory}
                />
            </motion.div>
        </Box>
    )
}
const SkillsCardBase = ({
    skillCategory,
    scrollYProgress,
}: {
    skillCategory: SkillCategory
    scrollYProgress: MotionValue
}) => {
    return (
        <Paper
            sx={{
                background: 'linear-gradient(80deg, #082c36, #082c36, #101b20)',
                width: '100%',
                boxShadow:
                    '0px 0px 6px 2px rgba(4,84,104, 0.1), 0px 0px 15px 4px rgba(4,84,104, 0.2), 0 0 0 1px rgba(4,84,104, 0.2)',
                padding: '40px 80px',
                marginBottom: '50px',
                height: '50vh',
            }}
        >
            <SkillsCardBody
                progress={scrollYProgress}
                skillCategory={skillCategory}
            ></SkillsCardBody>
        </Paper>
    )
}

export default SkillsCard
