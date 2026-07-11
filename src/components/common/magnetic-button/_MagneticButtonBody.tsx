import { cn } from '@/lib/utils'
import { MagneticButtonProps } from './magnetic-button.type'

const baseClasses =
    'group inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-border-subtle bg-bg-subtle text-primary-light transition-[scale,background-color,border-color,color] duration-300 hover:bg-bg-hover hover:border-primary hover:text-primary active:scale-[0.96]'

const sizeClasses = {
    normal: 'text-xl m-1.5 p-3',
    small: 'text-sm m-1 p-2',
}

export const MagneticButtonBody = (props: MagneticButtonProps) => {
    const { icon: Icon, href, onClick, ariaLabel, size = 'normal' } = props

    const iconElement = (
        <Icon className='transition-transform duration-300 group-hover:scale-110' />
    )

    const buttonClasses = cn(baseClasses, sizeClasses[size])

    if (href) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className={buttonClasses}
                aria-label={ariaLabel}
            >
                {iconElement}
            </a>
        )
    }

    return (
        <button
            type='button'
            onClick={onClick}
            className={buttonClasses}
            aria-label={ariaLabel}
        >
            {iconElement}
        </button>
    )
}
