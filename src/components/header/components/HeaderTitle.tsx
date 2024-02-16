import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { userData } from '../../user/user.data'

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
            <Heading
                as='h1'
                textAlign='center'
                fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
                fontFamily='Space Grotesk'
            >
                {userData.firstname} {userData.lastname + 'a'}
            </Heading>
        </motion.div>
    )
}
