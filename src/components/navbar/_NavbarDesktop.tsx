import { Section, sectionsData } from '@/pages/sections.data'
import { Button, Flex, HStack } from '@chakra-ui/react'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

export const NavbarDesktop = () => {
    return (
        <Flex
            h={16}
            alignItems='center'
            justifyContent='space-between'
            display={{ base: 'none', lg: 'flex' }}
        >
            <Button variant='unstyled' onClick={() => scroll.scrollToTop()}>
                ANTOINE
            </Button>
            <HStack as={'nav'} spacing={6}>
                {sectionsData.map((section: Section) => (
                    <NavLink key={'nav-' + section.name} section={section} />
                ))}
            </HStack>
            <Flex gap='0.5rem'>
                <SocialButton type='mail' />
                <SocialButton type='linkedin' />
            </Flex>
        </Flex>
    )
}
