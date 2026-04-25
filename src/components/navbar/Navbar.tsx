import { useNavbar } from '@/hooks/useNavbar'
import { motion } from 'framer-motion'
import { NavbarDesktop } from './_NavbarDesktop'
import { NavbarMobile } from './_NavbarMobile'

export const Navbar = () => {
    const { backgroundColor, boxShadow } = useNavbar()
    return (
        <motion.header
            className='fixed w-full z-[1000] px-4 sm:px-6 lg:px-8 backdrop-blur-md border-b border-transparent transition-[border-color] duration-500'
            style={{
                backgroundColor,
                boxShadow,
                borderBottomColor: 'rgba(18, 103, 126, 0.2)',
            }}
        >
            <div className='max-w-[1440px] mx-auto'>
                <NavbarDesktop />
                <NavbarMobile />
            </div>
        </motion.header>
    )
}
