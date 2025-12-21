import { Section, sectionsData } from '@/pages/sections.data'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

export const NavbarDesktop = () => {
    return (
        <div className='h-16 items-center justify-between hidden lg:flex'>
            <button
                className='bg-transparent border-none cursor-pointer text-primary-light hover:text-white transition-colors'
                onClick={() => scroll.scrollToTop()}
            >
                ANTOINE
            </button>
            <nav className='flex gap-6'>
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
