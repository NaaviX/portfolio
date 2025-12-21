import { cn } from '@/lib/utils'
import { HTMLAttributes, PropsWithChildren } from 'react'

export const Title = (
    props: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>
) => {
    const { children, className, ...headingProps } = props
    return (
        <h2
            className={cn(
                'font-medium tracking-wider text-primary-light text-xl font-heading',
                className
            )}
            {...headingProps}
        >
            {children}
        </h2>
    )
}
