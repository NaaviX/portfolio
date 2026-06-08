import { Skill } from '@/components/skills'
import { cn } from '@/lib/utils'
import { HTMLAttributes, memo } from 'react'

type ChipProps = {
    skill: Skill
} & HTMLAttributes<HTMLSpanElement>

export const Chip = memo((props: ChipProps) => {
    const { skill, className, ...spanProps } = props
    return (
        <span
            className={cn(
                'group inline-flex items-center gap-2 rounded-full px-3 py-1.5',
                'bg-primary-light/[0.035]',
                'border border-border-subtle/70',
                'text-sm font-normal text-primary-light/82',
                'cursor-default transition-all duration-300 ease-out',
                'hover:bg-primary-light/[0.055]',
                'hover:border-primary/70',
                'hover:text-primary-light',
                className
            )}
            {...spanProps}
        >
            {skill.icon ? (
                <skill.icon className='w-4 h-4 shrink-0 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-primary' />
            ) : null}
            <span
                className={skill.isImportant ? 'font-semibold' : 'font-light'}
            >
                {skill.name}
            </span>
        </span>
    )
})

Chip.displayName = 'Chip'
