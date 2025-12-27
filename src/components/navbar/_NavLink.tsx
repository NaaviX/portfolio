import { Section } from '@/pages/sections.data'
import { Link } from 'react-scroll'

type NavLinkProps = {
    section: Section
}

export const NavLink = (props: NavLinkProps) => {
    const { section } = props

    return (
        <Link
            to={section.target}
            smooth={true}
            spy={true}
            activeClass='nav-active'
            isDynamic
            className='group'
        >
            <button className='relative px-4 py-2 text-sm font-medium bg-transparent border-none cursor-pointer transition-all duration-300 text-primary-light/80 hover:text-white rounded-full group-[.nav-active]:text-white group-[.nav-active]:bg-primary/20'>
                <span className='relative z-10'>{section.name}</span>
                <span className='absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300' />
            </button>
        </Link>
    )
}
