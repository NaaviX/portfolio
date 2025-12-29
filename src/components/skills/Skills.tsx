import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { SkillsCard } from './components/card/SkillsCard'
import { skillsData } from './skills.data'
import { SkillCategory } from './skills.type'

export const Skills = () => {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    })
    return (
        <div
            ref={container}
            className='pt-[50px] flex flex-col items-center w-full'
        >
            {skillsData.map((skillCategory: SkillCategory, i: number) => {
                const targetScale = 1 - (skillsData.length - i) * 0.05
                return (
                    <SkillsCard
                        skillCategory={skillCategory}
                        i={i}
                        key={'skill_cat_' + skillCategory.nameKey}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                )
            })}
        </div>
    )
}
