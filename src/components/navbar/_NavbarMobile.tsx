import { Section, sectionsData } from '@/pages/sections.data'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
    exit: { opacity: 0, y: -5, transition: { duration: 0.12 } },
}

const menuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.2 },
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            height: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.15 },
        },
    },
}

export const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <div className='lg:hidden'>
            <div className='h-16 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <motion.button
                        className='relative p-2.5 border border-border/40 rounded-xl bg-bg/40 backdrop-blur-md text-primary-light/90 transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-primary/10 active:scale-95'
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        onClick={toggle}
                        whileTap={{ scale: 0.92 }}
                    >
                        <AnimatePresence mode='wait'>
                            {isOpen ? (
                                <motion.div
                                    key='close'
                                    initial={{
                                        rotate: -90,
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    animate={{
                                        rotate: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        rotate: 90,
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.15,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <X className='h-5 w-5' />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key='menu'
                                    initial={{
                                        rotate: 90,
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    animate={{
                                        rotate: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        rotate: -90,
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.15,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <Menu className='h-5 w-5' />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                    <motion.button
                        className='font-heading font-bold text-base tracking-wider text-primary-light/90'
                        onClick={() => {
                            scroll.scrollToTop()
                            setIsOpen(false)
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ANTOINE
                    </motion.button>
                </div>
                <div className='flex gap-2'>
                    <SocialButton type='mail' />
                    <SocialButton type='linkedin' />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className='fixed inset-0 top-16 bg-bg-app/80 backdrop-blur-sm z-40'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            variants={menuContainerVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            className='relative z-50 overflow-hidden'
                        >
                            <div className='h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent' />
                            <nav className='flex flex-col py-4 px-2 bg-bg/60 backdrop-blur-lg rounded-b-2xl border-x border-b border-border/20'>
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
                                            className='px-2'
                                        >
                                            <NavLink section={section} />
                                        </motion.div>
                                    )
                                )}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
