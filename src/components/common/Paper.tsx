import { cn } from '@/lib/utils'
import { useMediumScreen } from '@/utils/Utils'
import { CSSProperties, ReactNode } from 'react'
import { Fade } from './effects/Fade'

interface PaperProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
    animateScroll?: boolean
}

export const Paper = (props: PaperProps) => {
    const { children, className, style, animateScroll = true } = props
    const isMedium = useMediumScreen()

    const paperClasses = cn(
        'relative z-10 rounded-lg',
        'border border-border-subtle/70',
        'bg-bg-subtle/72 backdrop-blur-sm',
        'shadow-[0_22px_76px_-66px_rgba(47,199,223,0.55),inset_0_1px_0_rgba(215,245,247,0.05)]',
        'transition-[background-color,border-color,box-shadow] duration-500 ease-out',
        'hover:bg-bg-subtle hover:border-primary/60',
        isMedium ? 'p-10' : 'p-4',
        className
    )

    if (animateScroll) {
        return (
            <Fade className={paperClasses} style={style}>
                {children}
            </Fade>
        )
    } else {
        return (
            <div className={paperClasses} style={style}>
                {children}
            </div>
        )
    }
}
