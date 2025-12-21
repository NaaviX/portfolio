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
            activeStyle={{ color: 'white' }}
            isDynamic
        >
            <div className='relative inline-block group after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary-dark after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full'>
                <button className='bg-transparent border-none w-full md:w-auto cursor-pointer transition-colors duration-300 hover:text-primary-light text-inherit'>
                    {section.name}
                </button>
            </div>
        </Link>
    )
}
