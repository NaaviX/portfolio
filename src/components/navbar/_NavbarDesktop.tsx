import { Section, sectionsData } from '@/pages/sections.data'
import { motion } from 'framer-motion'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

export const NavbarDesktop = () => {
    return (
        <div className='h-16 items-center justify-between hidden lg:flex'>
            <motion.button
                className='relative bg-transparent border-none cursor-pointer font-heading font-bold text-lg tracking-wider text-primary-light transition-colors duration-300 hover:text-white group'
                onClick={() => scroll.scrollToTop()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className='relative z-10'>ANTOINE</span>
                <motion.span
                    className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full'
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
            </motion.button>
            <nav className='flex items-center gap-1 bg-bg/20 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/30'>
                {sectionsData.map((section: Section) => (
                    <NavLink key={'nav-' + section.name} section={section} />
                ))}
            </nav>
            <div className='flex gap-2'>
                <SocialButton type='mail' />
                <SocialButton type='linkedin' />
            </div>
        </div>
    )
}
