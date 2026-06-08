import { useScroll, useSpring, useTransform } from 'framer-motion'
import { isDesktop } from 'react-device-detect'

export const useNavbar = () => {
    const { scrollY } = useScroll()
    const springY = useSpring(scrollY)

    const navbarBgTransform = useTransform(
        springY,
        [0, screen.height],
        ['rgba(7, 17, 20, 0.54)', 'rgba(7, 17, 20, 0.9)']
    )

    const navbarBg = isDesktop ? navbarBgTransform : 'rgba(7, 17, 20, 0.94)'

    const navbarElevation = useTransform(
        springY,
        [0, 200],
        [
            '0 0 0 0 rgba(47,199,223,0)',
            '0 1px 0 0 rgba(47,199,223,0.16), 0 18px 38px -28px rgba(47,199,223,0.45)',
        ]
    )

    const borderColorTransform = useTransform(
        springY,
        [0, 200],
        ['rgba(47, 199, 223, 0)', 'rgba(47, 199, 223, 0.18)']
    )

    const borderColor = isDesktop
        ? borderColorTransform
        : 'rgba(47, 199, 223, 0.18)'

    return {
        backgroundColor: navbarBg,
        boxShadow: navbarElevation,
        borderColor,
    }
}
