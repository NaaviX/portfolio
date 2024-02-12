import { motion, MotionValue, useTransform } from 'framer-motion'
import { SkillCategory } from '../../skills.type'

import { ChipList, Paper, Title } from '@/components/base'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRef } from 'react'

interface SkillsCardProps {
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
        <Box
            ref={container}
            className='skillCategory'
            pos='sticky'
            top='150px'
            width='100%'
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

interface SkillsCardBaseProps {
    skillCategory: SkillCategory
}

const SkillsCardBase = (props: SkillsCardBaseProps) => {
    const { skillCategory } = props
    return (
        <Paper
            animateScroll={false}
            style={{
                background: 'linear-gradient(80deg, #101b20, #082c36, #082c36)',
                width: '100%',
                padding: 0,
                marginBottom: '50px',
                height: '50vh',
            }}
        >
            <SkillsCardBody skillCategory={skillCategory}></SkillsCardBody>
        </Paper>
    )
}

interface SkillCardBodyProps {
    skillCategory: SkillCategory
}

const SkillsCardBody = (props: SkillCardBodyProps) => {
    const { skillCategory } = props
    return (
        <Flex
            className='skillCardBody'
            margin={{ base: '1.5rem 2rem', md: '3rem, 5rem' }}
        >
            <Flex direction='column' flex='1' gap='30px'>
                <Title>{skillCategory.name.toString()}</Title>
                <Text>{skillCategory.description}</Text>
                <ChipList skills={skillCategory.skills} />
            </Flex>

            <Flex
                className='skillCategoryImage'
                flex='1'
                position='relative'
                width='100%'
                display={{ base: 'none', md: 'flex' }}
                h='100%'
                align='center'
            >
                <skillCategory.image
                    width='100%'
                    style={{ objectFit: 'cover' }}
                />
            </Flex>
        </Flex>
    )
}
