import { useNavbar } from '@/hooks/useNavbar'
import { motion } from 'framer-motion'
import { NavbarDesktop } from './_NavbarDesktop'
import { NavbarMobile } from './_NavbarMobile'

export const Navbar = () => {
    const { backgroundColor,
        boxShadow, } = useNavbar()
    return (
        <motion.div
            style={{
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                padding: '0 2rem',
                backgroundColor,
                boxShadow
            }}
        >
            <NavbarDesktop />
            <NavbarMobile />
        </motion.div>
    )
}
