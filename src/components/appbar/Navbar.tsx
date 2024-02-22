import { Section, sectionsData } from '@/sections/sections.data'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Link as ChakraLink,
    Collapse,
    Divider,
    Flex,
    HStack,
    Icon,
    IconButton,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import {
    MotionStyle,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link, animateScroll as scroll } from 'react-scroll'
import { userData } from '../user'

export const Navbar = () => {
    return (
        <motion.div
            style={{
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                padding: '0 2rem',
                ...useNavbarScrollStyle(),
            }}
        >
            <NavbarDesktop />
            <NavbarMobile />
        </motion.div>
    )
}

const useNavbarScrollStyle = (): MotionStyle => {
    const { scrollY } = useScroll()
    const springY = useSpring(scrollY)

    const navbarBg = useTransform(
        springY,
        [0, screen.height],
        ['rgba(8, 44, 54, 0.3)', 'rgba(8, 44, 54, 0.8)']
    )

    const navbarElevation = useTransform(
        springY,
        [0, 500],
        [
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
        ]
    )
    return {
        backgroundColor: navbarBg,
        boxShadow: navbarElevation,
    }
}

const NavbarDesktop = () => {
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
                <ContactLink />
                <LinkedInLink />
            </Flex>
        </Flex>
    )
}

const NavbarMobile = () => {
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
                    <ContactLink />
                    <LinkedInLink />
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

interface NavLinkProps {
    section: Section
}

const NavLink = (props: NavLinkProps) => {
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

const ContactLink = () => {
    return (
        <ChakraLink href={'mailto:' + userData.email}>
            <IconButton
                variant='outline'
                size={'md'}
                icon={<Icon as={MdEmail} fontSize='lg' />}
                aria-label={'Email'}
            />
        </ChakraLink>
    )
}

const LinkedInLink = () => {
    return (
        <ChakraLink href={userData.linkedin} isExternal>
            <IconButton
                variant='outline'
                size={'md'}
                icon={<Icon as={FaLinkedinIn} fontSize='lg' />}
                aria-label={'Linked in'}
            />
        </ChakraLink>
    )
}
