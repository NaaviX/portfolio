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
        'relative z-10 rounded-2xl',
        'border border-border',
        'bg-[rgba(8,44,54,0.5)] backdrop-blur-sm',
        'shadow-[0_0_20px_rgba(0,162,199,0.08),0_0_40px_rgba(0,162,199,0.04),inset_0_1px_0_rgba(255,255,255,0.05)]',
        'transition-all duration-500 ease-out',
        'hover:bg-[rgba(8,44,54,0.6)] hover:border-border-hover',
        'hover:shadow-[0_0_30px_rgba(0,162,199,0.15),0_0_60px_rgba(0,162,199,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]',
        isMedium ? 'p-10' : 'p-5',
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
