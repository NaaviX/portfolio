import { Box, Heading, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { userData } from '../../user/user.data'

const gradientShift = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`

export const HeaderTitle = () => {
    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{
                type: 'spring',
                duration: 2,
                bounce: 0.3,
                delay: 0.1,
            }}
            viewport={{ once: true }}
        >
            <Box position='relative'>
                <Heading
                    as='h1'
                    textAlign='center'
                    fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
                    fontFamily='Space Grotesk'
                    fontWeight='700'
                    bgGradient='linear(to-r, #00a2c7, #4ccce6, #b6ecf7, #4ccce6, #00a2c7)'
                    bgClip='text'
                    backgroundSize='200% 200%'
                    animation={`${gradientShift} 6s ease infinite`}
                    letterSpacing='tight'
                >
                    {userData.firstname} {userData.lastname}
                </Heading>
                <Box
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='80%'
                    height='60%'
                    background='radial-gradient(ellipse, rgba(0, 162, 199, 0.15) 0%, transparent 70%)'
                    filter='blur(40px)'
                    pointerEvents='none'
                    zIndex={-1}
                />
            </Box>
        </motion.div>
    )
}
