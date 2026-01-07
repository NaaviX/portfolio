import { CSSProperties } from 'react'

// Extracted gradient styles to prevent object recreation on each render
export const GRADIENT_LINE_LEFT: CSSProperties = {
    background: 'linear-gradient(to right, transparent, var(--color-primary))',
}

export const GRADIENT_LINE_RIGHT: CSSProperties = {
    background: 'linear-gradient(to left, transparent, var(--color-primary))',
}

export const GRADIENT_DIVIDER_LEFT: CSSProperties = {
    background: 'linear-gradient(to right, transparent, var(--color-border))',
}

export const GRADIENT_DIVIDER_RIGHT: CSSProperties = {
    background: 'linear-gradient(to left, transparent, var(--color-border))',
}
