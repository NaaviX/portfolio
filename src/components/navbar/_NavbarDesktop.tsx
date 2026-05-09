import { useLanguage } from '@/i18n'
import { Section, sectionsData } from '@/pages/sections.data'
import { motion } from 'framer-motion'
import { animateScroll as scroll } from 'react-scroll'
import { LanguageSwitcher } from './_LanguageSwitcher'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

export const NavbarDesktop = () => {
    const { t } = useLanguage()

    return (
        <div className='h-16 items-center hidden lg:grid grid-cols-[auto_1fr_auto] gap-8'>
            <motion.button
                onClick={() => scroll.scrollToTop()}
                whileTap={{ scale: 0.96 }}
                className='font-heading font-semibold text-lg text-primary-light hover:text-primary-light transition-colors duration-200 bg-transparent border-none cursor-pointer justify-self-start'
            >
                Antoine<span className='text-primary'>.</span>
            </motion.button>
            <nav className='flex items-center justify-center gap-1'>
                {sectionsData.map((section: Section) => (
                    <NavLink
                        key={'nav-' + section.nameKey}
                        section={section}
                        label={t.nav[section.nameKey]}
                    />
                ))}
            </nav>
            <div className='flex items-center justify-self-end'>
                <LanguageSwitcher />
                <span className='w-px h-5 bg-border/40 mx-2' />
                <SocialButton type='mail' />
                <SocialButton type='linkedin' />
            </div>
        </div>
    )
}
