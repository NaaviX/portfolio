import { useScroll, useSpring, useTransform } from 'framer-motion'
import { isDesktop } from 'react-device-detect'

export const useNavbar = () => {
    const { scrollY } = useScroll()
    const springY = useSpring(scrollY)

    const navbarBgTransform = useTransform(
        springY,
        [0, screen.height],
        ['rgba(8, 44, 54, 0.3)', 'rgba(8, 44, 54, 0.85)']
    )

    const navbarBg = isDesktop ? navbarBgTransform : 'rgba(8, 44, 54, 0.92)'

    const navbarElevation = useTransform(
        springY,
        [0, 200],
        [
            '0 0 0 0 rgba(0,0,0,0)',
            '0 1px 0 0 rgba(0,0,0,0.04), 0 12px 32px -16px rgba(0,0,0,0.4)',
        ]
    )

    const borderColorTransform = useTransform(
        springY,
        [0, 200],
        ['rgba(18, 103, 126, 0)', 'rgba(18, 103, 126, 0.25)']
    )

    const borderColor = isDesktop
        ? borderColorTransform
        : 'rgba(18, 103, 126, 0.25)'

    return {
        backgroundColor: navbarBg,
        boxShadow: navbarElevation,
        borderColor,
    }
}
