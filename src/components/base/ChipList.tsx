import { Skill } from '@/components/skills'
import { Flex } from '@chakra-ui/react'
import { Chip } from './Chip'

interface ChipListProps {
    skills: Skill[]
}

export const ChipList = (props: ChipListProps) => {
    const { skills } = props
    return (
        <Flex w='full' gap='10px' wrap='wrap' mt={2}>
            {skills.map((skill: Skill) => (
                <Chip key={skill.name} skill={skill} />
            ))}
        </Flex>
    )
}
