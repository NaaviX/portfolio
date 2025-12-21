import { Section, sectionsData } from '@/pages/sections.data'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

export const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className='lg:hidden'>
            <div className='h-16 flex items-center justify-between'>
                <button
                    className='p-2 border border-border rounded-md hover:bg-bg-hover transition-colors'
                    aria-label='Open Menu'
                    onClick={toggle}
                >
                    {isOpen ? (
                        <X className='h-5 w-5' />
                    ) : (
                        <Menu className='h-5 w-5' />
                    )}
                </button>
                <div className='flex gap-2'>
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
                        transition={{ duration: 0.2 }}
                        className='overflow-hidden'
                    >
                        <hr className='border-t border-border' />
                        <nav className='flex flex-col gap-4 pb-4'>
                            {sectionsData.map((section: Section) => (
                                <NavLink
                                    key={'nav-mobile-' + section.name}
                                    section={section}
                                />
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
