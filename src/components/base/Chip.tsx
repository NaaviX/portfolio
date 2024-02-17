import { Skill } from '@/components/skills'
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'

interface ChipProps {
    skill: Skill
}

export const Chip = (props: ChipProps) => {
    const { skill } = props
    return (
        <Tag
            size='md'
            padding='6px 8px'
            fontWeight='400'
            borderRadius='full'
            bgColor='bg-hover'
            color='white'
            letterSpacing='widest'
        >
            {skill.icon ? <TagLeftIcon as={skill.icon} fontSize='md' /> : <></>}
            <TagLabel fontSize='xs'>{skill.name}</TagLabel>
        </Tag>
    )
}
