import { Skill } from '@/components/skills'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type ChipProps = {
    skill: Skill
} & HTMLAttributes<HTMLSpanElement>

export const Chip = (props: ChipProps) => {
    const { skill, className, ...spanProps } = props
    return (
        <span
            className={cn(
                'group inline-flex items-center gap-1.5 rounded-full bg-bg-hover px-2 py-1.5',
                'text-sm font-normal tracking-widest text-white',
                'cursor-default transition-all duration-300',
                'hover:bg-bg hover:scale-105 hover:shadow-[0_0_12px_rgba(0,162,199,0.3)]',
                className
            )}
            {...spanProps}
        >
            {skill.icon ? (
                <skill.icon className='w-4 h-4 shrink-0 transition-transform duration-300 group-hover:rotate-[10deg]' />
            ) : null}
            <span className={skill.isImportant ? 'font-bold' : 'font-light'}>
                {skill.name}
            </span>
        </span>
    )
}
