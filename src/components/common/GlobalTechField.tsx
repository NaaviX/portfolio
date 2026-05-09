import { TechField } from '@/components/header/components/TechField'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion'

export const GlobalTechField = () => {
    const reduce = useReducedMotion() ?? false
    const isCompact = useMediaQuery('(max-width: 767px)')
    const { scrollY } = useScroll()

    // Translate stays well within the 40vh of vertical overhead below,
    // so the field never exposes empty space at the bottom of the viewport.
    // Drop scale on mobile — scaling a fixed full-viewport layer per scroll
    // tick is the heaviest cost in this parallax.
    const y = useTransform(scrollY, [0, 8000], [0, isCompact ? -80 : -200])
    const scale = useTransform(scrollY, [0, 8000], [1, 1.06])

    const baseStyle = {
        top: '-20vh',
        height: '140vh',
    } as const

    if (reduce) {
        return (
            <div
                aria-hidden
                className='pointer-events-none fixed left-0 right-0 z-0'
                style={{ ...baseStyle, opacity: 0.55 }}
            >
                <TechField />
            </div>
        )
    }

    return (
        <motion.div
            aria-hidden
            className='pointer-events-none fixed left-0 right-0 z-0'
            style={
                isCompact
                    ? {
                          ...baseStyle,
                          y,
                          opacity: 0.55,
                          transformOrigin: '50% 50%',
                      }
                    : {
                          ...baseStyle,
                          y,
                          scale,
                          opacity: 0.7,
                          transformOrigin: '50% 50%',
                      }
            }
        >
            <TechField />
        </motion.div>
    )
}
