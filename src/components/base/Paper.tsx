import { useMediumScreen } from '@/utils/Utils'
import { Box, useTheme } from '@chakra-ui/react'
import { CSSProperties, ReactNode } from 'react'
import { Fade } from './effects/Fade'

interface PaperProps {
    children: ReactNode
    style: CSSProperties
    animateScroll?: boolean
}

export const Paper = (props: PaperProps) => {
    const { children, style, animateScroll = true } = props
    const borderColor = useTheme().__cssMap['colors.border'].value
    const paperStyle: CSSProperties = {
        position: 'relative',
        zIndex: 10,
        borderRadius: '1rem',
        border: '1px solid',
        borderColor: borderColor,
        backgroundColor: 'rgba(8, 44, 54, 0.4)',
        padding: useMediumScreen() ? '2.5rem' : '1.2rem',
        backdropFilter: 'blur(2px)',
        boxShadow:
            '0px 0px 6px 2px rgba(4,84,104, 0.1), 0px 0px 15px 4px rgba(4,84,104, 0.2), 0 0 0 1px rgba(4,84,104, 0.2)',
        ...style,
    }
    if (animateScroll) {
        return <Fade style={paperStyle}>{children}</Fade>
    } else {
        return <Box style={paperStyle}>{children}</Box>
    }
}
