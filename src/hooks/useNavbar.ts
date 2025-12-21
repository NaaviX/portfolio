import { useScroll, useSpring, useTransform } from 'framer-motion'
import { isDesktop } from 'react-device-detect'

export const useNavbar = () => {
    const { scrollY } = useScroll()
    const springY = useSpring(scrollY)

    // Call hooks unconditionally (React hooks rules)
    const navbarBgTransform = useTransform(
        springY,
        [0, screen.height],
        ['rgba(8, 44, 54, 0.3)', 'rgba(8, 44, 54, 0.8)']
    )

    // Apply conditional logic after hook is called
    const navbarBg = isDesktop ? navbarBgTransform : 'rgba(8, 44, 54, 0.95)'

    const navbarElevation = useTransform(
        springY,
        [0, 500],
        [
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
        ]
    )
    return {
        backgroundColor: navbarBg,
        boxShadow: navbarElevation,
    }
}
