import { Section } from '@/pages/sections.data'
import { SCROLL_DURATION_MS } from '@/lib/motion'
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
                duration={SCROLL_DURATION_MS}
                spy
                activeClass='nav-active'
                isDynamic
                className='group block'
            >
                <button className='relative w-full text-left px-4 py-3 text-base font-medium text-primary-light/68 transition-colors duration-200 hover:text-primary-light group-[.nav-active]:text-primary bg-transparent border-none cursor-pointer'>
                    {label}
                </button>
            </Link>
        )
    }

    return (
        <Link
            to={section.target}
            smooth
            duration={SCROLL_DURATION_MS}
            spy
            activeClass='nav-active'
            isDynamic
            className='group'
        >
            <button className='relative whitespace-nowrap px-2.5 py-2 text-[13px] font-medium text-primary-light/68 transition-colors duration-200 hover:text-primary-light group-[.nav-active]:text-primary-light bg-transparent border-none cursor-pointer xl:px-3'>
                {label}
                <span className='absolute left-2.5 right-2.5 bottom-1 h-px bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-50 group-[.nav-active]:scale-x-100 xl:left-3 xl:right-3' />
            </button>
        </Link>
    )
}
