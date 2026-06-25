import { IconType } from 'react-icons'

export type MagneticButtonProps = {
    icon: IconType
    href?: string
    onClick?: () => void
    ariaLabel: string
    size?: 'normal' | 'small'
    hideLabel?: boolean
}
