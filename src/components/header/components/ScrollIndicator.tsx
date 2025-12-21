import { Box, keyframes } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
`

export const ScrollIndicator = () => {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 200], [1, 0])

    return (
        <motion.div style={{ opacity }}>
            <Link to='experiences' smooth={true} spy={true} offset={-100}>
                <Box
                    position='absolute'
                    bottom='2rem'
                    left='50%'
                    transform='translateX(-50%)'
                    cursor='pointer'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    gap='0.5rem'
                    color='primary-dark'
                    _hover={{ color: 'primary-light' }}
                    transition='color 0.3s ease'
                >
                    <Box
                        fontSize='sm'
                        letterSpacing='widest'
                        textTransform='uppercase'
                        opacity={0.7}
                    >
                        Scroll
                    </Box>
                    <Box animation={`${bounce} 2s ease infinite`}>
                        <FaChevronDown size='1.5rem' />
                    </Box>
                </Box>
            </Link>
        </motion.div>
    )
}
