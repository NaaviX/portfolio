import { cn } from '@/lib/utils'
import { HTMLAttributes, PropsWithChildren } from 'react'

export const Subtitle = (
    props: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>
) => {
    const { children, className, ...headingProps } = props
    return (
        <h3
            className={cn(
                'text-base text-primary-dark font-normal tracking-widest font-heading',
                className
            )}
            {...headingProps}
        >
            {children}
        </h3>
    )
}
