import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion'
import backgroundUrl from '@/assets/background.svg'

export const GlobalBackground = () => {
    const reduce = useReducedMotion() ?? false
    const isCompact = useMediaQuery('(max-width: 767px)')
    const { scrollY } = useScroll()

    // On mobile we drop the scale transform — scaling a fixed viewport-sized
    // backdrop on every scroll tick is the most expensive part of the
    // parallax. The y-translate keeps a hint of motion without the repaint.
    const y = useTransform(scrollY, [0, 8000], [0, isCompact ? -80 : -200])
    const scale = useTransform(scrollY, [0, 8000], [1, 1.06])

    const sharedStyle = {
        top: '-20vh',
        height: '140vh',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
    } as const

    if (reduce) {
        return (
            <div
                aria-hidden
                className='pointer-events-none fixed left-0 right-0 z-[-1]'
                style={sharedStyle}
            />
        )
    }

    return (
        <motion.div
            aria-hidden
            className='pointer-events-none fixed left-0 right-0 z-[-1]'
            style={
                isCompact
                    ? { ...sharedStyle, y, transformOrigin: '50% 50%' }
                    : { ...sharedStyle, y, scale, transformOrigin: '50% 50%' }
            }
        />
    )
}
