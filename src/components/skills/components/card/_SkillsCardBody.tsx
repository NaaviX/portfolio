import { SkillCategory } from '../../skills.type'

import { ChipList, Title } from '@/components/common'
import { Flex, Text } from '@chakra-ui/react'

type SkillCardBodyProps = {
    skillCategory: SkillCategory
}

export const SkillsCardBody = (props: SkillCardBodyProps) => {
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
