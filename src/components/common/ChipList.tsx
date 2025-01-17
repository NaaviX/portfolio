import { Skill } from '@/components/skills'
import { Flex, FlexProps } from '@chakra-ui/react'
import { Chip } from './Chip'

type ChipListProps = {
    skills: Skill[]
}

export const ChipList = (props: ChipListProps & FlexProps) => {
    const { skills, ...flexProps } = props
    return (
        <Flex w='full' gap='10px' wrap='wrap' mt={2} {...flexProps}>
            {skills.map((skill: Skill) => (
                <Chip key={skill.name} skill={skill} />
            ))}
        </Flex>
    )
}
