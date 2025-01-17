import { Skill } from '@/components/skills'
import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/react'

type ChipProps = {
    skill: Skill
} & TagProps

export const Chip = (props: ChipProps) => {
    const { skill, ...tagProps } = props
    return (
        <Tag
            size='md'
            padding='6px 8px'
            fontWeight='400'
            borderRadius='full'
            bgColor='bg-hover'
            color='white'
            letterSpacing='widest'
            {...tagProps}
        >
            {skill.icon ? <TagLeftIcon as={skill.icon} fontSize='md' /> : <></>}
            <TagLabel
                fontSize='sm'
                fontWeight={skill.isImportant ? '700' : '300'}
            >
                {skill.name}
            </TagLabel>
        </Tag>
    )
}
