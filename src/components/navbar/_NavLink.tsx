import { Section } from '@/pages/sections.data'
import { Link } from 'react-scroll'

type NavLinkProps = {
    section: Section
    label: string
    variant?: 'desktop' | 'mobile'
}

export const NavLink = (props: NavLinkProps) => {
    const { section, label, variant = 'desktop' } = props

    if (variant === 'mobile') {
        return (
            <Link
                to={section.target}
                smooth
                spy
                activeClass='nav-active'
                isDynamic
                className='group block'
            >
                <button className='relative w-full text-left pl-7 pr-4 py-3 text-base font-medium text-primary-light/70 transition-colors duration-200 hover:text-primary-light group-[.nav-active]:text-primary-light bg-transparent border-none cursor-pointer'>
                    <span className='absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary scale-0 transition-transform duration-300 ease-out group-[.nav-active]:scale-100' />
                    {label}
                </button>
            </Link>
        )
    }

    return (
        <Link
            to={section.target}
            smooth
            spy
            activeClass='nav-active'
            isDynamic
            className='group'
        >
            <button className='relative px-3 py-2 text-sm font-medium text-primary-light/70 transition-colors duration-200 hover:text-primary-light group-[.nav-active]:text-primary-light bg-transparent border-none cursor-pointer'>
                {label}
                <span className='absolute left-3 right-3 bottom-1 h-px bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-50 group-[.nav-active]:scale-x-100' />
            </button>
        </Link>
    )
}
