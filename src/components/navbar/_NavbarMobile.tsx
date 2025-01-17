import { Section, sectionsData } from '@/pages/sections.data'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Collapse,
    Divider,
    Flex,
    IconButton,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import { NavLink } from './_NavLink'
import { SocialButton } from './_SocialButton'

export const NavbarMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box display={{ lg: 'none' }}>
            <Flex h={16} alignItems='center' justifyContent='space-between'>
                <IconButton
                    variant='outline'
                    size={'md'}
                    icon={
                        isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='xl' />
                    }
                    aria-label={'Open Menu'}
                    onClick={isOpen ? onClose : onOpen}
                />
                <Flex gap='0.5rem'>
                    <SocialButton type='mail' />
                    <SocialButton type='linkedin' />
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Divider />
                <Box pb={4}>
                    <Stack as={'nav'} spacing={4}>
                        {sectionsData.map((section: Section) => (
                            <NavLink
                                key={'nav-mobile-' + section.name}
                                section={section}
                            />
                        ))}
                    </Stack>
                </Box>
            </Collapse>
        </Box>
    )
}
