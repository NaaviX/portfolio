import { Section, sectionsData } from '@/pages/sections.data'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.3,
            ease: 'easeOut',
        },
    }),
    exit: { opacity: 0, x: -10, transition: { duration: 0.15 } },
}

export const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className='lg:hidden'>
            <div className='h-16 flex items-center justify-between'>
                <motion.button
                    className='relative p-2.5 border border-border/60 rounded-lg bg-bg/30 backdrop-blur-sm text-primary-light/80 transition-colors hover:border-primary/50 hover:text-primary'
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    onClick={toggle}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode='wait'>
                        {isOpen ? (
                            <motion.div
                                key='close'
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className='h-5 w-5' />
                            </motion.div>
                        ) : (
                            <motion.div
                                key='menu'
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className='h-5 w-5' />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
                <div className='flex gap-3'>
                    <SocialButton type='mail' />
                    <SocialButton type='linkedin' />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className='overflow-hidden'
                    >
                        <div className='h-px bg-gradient-to-r from-transparent via-border to-transparent' />
                        <nav className='flex flex-col gap-1 py-4 bg-bg/20 backdrop-blur-sm rounded-b-lg'>
                            {sectionsData.map(
                                (section: Section, index: number) => (
                                    <motion.div
                                        key={'nav-mobile-' + section.name}
                                        custom={index}
                                        variants={menuItemVariants}
                                        initial='hidden'
                                        animate='visible'
                                        exit='exit'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <NavLink section={section} />
                                    </motion.div>
                                )
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
