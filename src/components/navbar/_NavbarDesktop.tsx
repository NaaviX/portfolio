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
        <div className='h-[68px] items-center hidden lg:grid grid-cols-[auto_1fr_auto] gap-6'>
            <motion.button
                onClick={() => scroll.scrollToTop()}
                whileTap={{ scale: 0.96 }}
                className='font-heading text-lg font-semibold text-primary-light transition-colors duration-200 bg-transparent border-none cursor-pointer justify-self-start hover:text-primary'
            >
                Antoine<span className='text-primary'>.</span>
            </motion.button>
            <nav className='flex min-w-0 items-center justify-center gap-1'>
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
                <span className='w-px h-5 bg-border-subtle/70 mx-2' />
                <SocialButton type='mail' />
                <SocialButton type='linkedin' />
            </div>
        </div>
    )
}
