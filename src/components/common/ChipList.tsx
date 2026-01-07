import { Skill } from '@/components/skills'
import { cn } from '@/lib/utils'
import { HTMLAttributes, memo } from 'react'
import { Chip } from './Chip'

type ChipListProps = {
    skills: Skill[]
} & HTMLAttributes<HTMLDivElement>

export const ChipList = memo((props: ChipListProps) => {
    const { skills, className, ...divProps } = props
    return (
        <div
            className={cn('flex w-full flex-wrap gap-2.5 mt-2', className)}
            {...divProps}
        >
            {skills.map((skill: Skill) => (
                <Chip key={skill.name} skill={skill} />
            ))}
        </div>
    )
})

ChipList.displayName = 'ChipList'
