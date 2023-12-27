import { Box } from '@mui/material'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import SkillsCard from '../components/skills/components/SkillsCard'
import { skillsData } from '../components/skills/skills.data'
import { SkillCategory } from '../components/skills/skills.type'

const Skills = () => {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,

        offset: ['start start', 'end end'],
    })

    return (
        <Box
            ref={container}
            sx={{
                my: '50px',
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            id='skills'
        >
            {skillsData.map((skillCategory: SkillCategory, i: number) => {
                const targetScale = 1 - (skillsData.length - i) * 0.05
                return (
                    <SkillsCard
                        skillCategory={skillCategory}
                        i={i}
                        key={'skill_cat_' + skillCategory.name.toString()}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    ></SkillsCard>
                )
            })}
        </Box>
    )
}

export default Skills
