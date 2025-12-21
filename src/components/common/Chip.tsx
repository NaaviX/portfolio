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
            transition='all 0.3s ease'
            cursor='default'
            _hover={{
                bgColor: 'bg',
                transform: 'scale(1.05)',
                boxShadow: '0 0 12px rgba(0, 162, 199, 0.3)',
            }}
            {...tagProps}
        >
            {skill.icon ? (
                <TagLeftIcon
                    as={skill.icon}
                    fontSize='md'
                    transition='transform 0.3s ease'
                    sx={{
                        '.chakra-tag:hover &': {
                            transform: 'rotate(10deg)',
                        },
                    }}
                />
            ) : null}
            <TagLabel
                fontSize='sm'
                fontWeight={skill.isImportant ? '700' : '300'}
            >
                {skill.name}
            </TagLabel>
        </Tag>
    )
}
