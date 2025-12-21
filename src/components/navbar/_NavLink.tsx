import { Section } from '@/pages/sections.data'
import { Box, Button } from '@chakra-ui/react'
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
            <Box
                position='relative'
                display='inline-block'
                role='group'
                _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: '0',
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #00a2c7, #4ccce6)',
                    transition: 'width 0.3s ease',
                }}
                _hover={{
                    '&::after': {
                        width: '100%',
                    },
                }}
                sx={{
                    '&.active::after': {
                        width: '100%',
                    },
                }}
            >
                <Button
                    variant='unstyled'
                    width={{ base: '100%', md: 'initial' }}
                    transition='color 0.3s ease'
                    _hover={{
                        color: 'primary-light',
                    }}
                >
                    {section.name}
                </Button>
            </Box>
        </Link>
    )
}
