import { cn } from '@/lib/utils'
import { MagneticButtonProps } from './magnetic-button.type'

const baseClasses =
    'group inline-flex items-center justify-center rounded-full border border-border bg-bg-subtle text-primary-light transition-all duration-300 hover:bg-bg-hover hover:border-border-hover hover:text-primary hover:shadow-[0_0_20px_rgba(0,162,199,0.3),0_0_40px_rgba(0,162,199,0.1)]'

const sizeClasses = {
    normal: 'text-xl m-1.5 p-3',
    small: 'text-sm m-1 p-2',
}

export const MagneticButtonBody = (props: MagneticButtonProps) => {
    const { icon: Icon, href, ariaLabel, size = 'normal' } = props

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
        <button type='button' className={buttonClasses} aria-label={ariaLabel}>
            {iconElement}
        </button>
    )
}
