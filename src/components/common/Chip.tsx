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
                'bg-gradient-to-r from-bg-hover to-bg-active',
                'border border-border-subtle',
                'text-sm font-normal tracking-widest text-primary-light',
                'cursor-default transition-all duration-300 ease-out',
                'hover:from-bg-active hover:to-bg-hover',
                'hover:border-border-hover hover:scale-105',
                'hover:shadow-[0_0_16px_rgba(0,162,199,0.35),0_0_4px_rgba(0,162,199,0.2)]',
                'hover:text-white',
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
