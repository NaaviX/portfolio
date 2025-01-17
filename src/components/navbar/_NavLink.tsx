import { Section } from '@/pages/sections.data'
import { Button } from '@chakra-ui/react'
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
            <Button variant='unstyled' width={{ base: '100%', md: 'initial' }}>
                {section.name}
            </Button>
        </Link>
    )
}
