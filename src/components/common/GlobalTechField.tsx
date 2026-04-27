import { TechField } from '@/components/header/components/TechField'
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion'

export const GlobalTechField = () => {
    const reduce = useReducedMotion() ?? false
    const { scrollY } = useScroll()

    // Translate stays well within the 40vh of vertical overhead below,
    // so the field never exposes empty space at the bottom of the viewport.
    const y = useTransform(scrollY, [0, 8000], [0, -200])
    const scale = useTransform(scrollY, [0, 8000], [1, 1.06])

    return (
        <motion.div
            aria-hidden
            className='pointer-events-none fixed left-0 right-0 z-0'
            style={
                reduce
                    ? {
                          top: '-20vh',
                          height: '140vh',
                          opacity: 0.55,
                      }
                    : {
                          top: '-20vh',
                          height: '140vh',
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
