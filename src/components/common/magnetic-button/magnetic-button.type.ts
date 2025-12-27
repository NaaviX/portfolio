import { IconType } from 'react-icons'

export type MagneticButtonProps = {
    icon: IconType
    href?: string
    ariaLabel: string
    size?: 'normal' | 'small'
    hideLabel?: boolean
}
