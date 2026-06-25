import { useLanguage } from '@/i18n'
import { Section, sectionsData } from '@/pages/sections.data'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { LanguageSwitcher } from './_LanguageSwitcher'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'

const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05 + i * 0.04,
            duration: 0.35,
            ease: easeOutQuart,
        },
    }),
    exit: { opacity: 0, transition: { duration: 0.1 } },
}

const panelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            height: { duration: 0.4, ease: easeOutQuart },
            opacity: { duration: 0.2 },
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            height: { duration: 0.3, ease: easeOutQuart },
            opacity: { duration: 0.15 },
        },
    },
}

export const NavbarMobile = () => {
    const { t } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <div className='lg:hidden'>
            <div className='h-[68px] flex items-center justify-between'>
                <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                        scroll.scrollToTop()
                        setIsOpen(false)
                    }}
                    className='font-heading font-semibold text-base text-primary-light bg-transparent border-none cursor-pointer'
                >
                    Antoine<span className='text-primary'>.</span>
                </motion.button>
                <div className='flex items-center'>
                    <LanguageSwitcher />
                    <div className='hidden sm:flex items-center'>
                        <SocialButton type='mail' />
                        <SocialButton type='linkedin' />
                    </div>
                    <motion.button
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.92 }}
                        className='inline-flex items-center justify-center w-11 h-11 ml-1 rounded-full border border-border-subtle/60 text-primary-light/70 hover:text-primary transition-colors duration-200 bg-bg-subtle/40 cursor-pointer'
                    >
                        <AnimatePresence mode='wait' initial={false}>
                            {isOpen ? (
                                <motion.span
                                    key='x'
                                    initial={{ rotate: -45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 45, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <FiX className='h-5 w-5' />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key='m'
                                    initial={{ rotate: 45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -45, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <FiMenu className='h-5 w-5' />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className='fixed inset-0 top-[68px] bg-bg-app/78 backdrop-blur-sm z-40'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            variants={panelVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            className='relative z-50 overflow-hidden flex flex-col py-3 border-t border-border-subtle/50'
                        >
                            {sectionsData.map(
                                (section: Section, index: number) => (
                                    <motion.div
                                        key={'nav-mobile-' + section.nameKey}
                                        custom={index}
                                        variants={itemVariants}
                                        initial='hidden'
                                        animate='visible'
                                        exit='exit'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <NavLink
                                            section={section}
                                            label={t.nav[section.nameKey]}
                                            variant='mobile'
                                        />
                                    </motion.div>
                                )
                            )}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
