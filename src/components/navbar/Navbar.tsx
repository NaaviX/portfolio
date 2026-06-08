import { useNavbar } from '@/hooks/useNavbar'
import { motion } from 'framer-motion'
import { NavbarDesktop } from './_NavbarDesktop'
import { NavbarMobile } from './_NavbarMobile'

export const Navbar = () => {
    const { backgroundColor, boxShadow, borderColor } = useNavbar()
    return (
        <motion.header
            className='fixed w-full z-[1000] px-3 sm:px-6 lg:px-8 backdrop-blur-xl border-b'
            style={{
                backgroundColor,
                boxShadow,
                borderBottomColor: borderColor,
            }}
        >
            <div className='max-w-[1440px] mx-auto'>
                <NavbarDesktop />
                <NavbarMobile />
            </div>
        </motion.header>
    )
}
