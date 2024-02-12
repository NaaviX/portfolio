import CvPdf from '@/assets/CV.pdf'
import { MagneticButton, Paper } from '@/components/base'
import { Title } from '@/components/base/typography/Title'
import { Center, Flex } from '@chakra-ui/react'
import '@fontsource/space-grotesk/400.css'
import { motion } from 'framer-motion'
import { FaFilePdf, FaLinkedinIn } from 'react-icons/fa'
import { userData } from '../../user'

export const HeaderContent = () => {
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{
                type: 'spring',
                duration: 2,
                bounce: 0.2,
                delay: 0.4,
            }}
            viewport={{ once: true }}
        >
            <Paper style={{ alignItems: 'center' }}>
                <Flex direction='column' gap='3rem'>
                    <Title
                        sx={{
                            fontFamily: 'Space Grotesk',
                            fontSize: '2xl',
                        }}
                    >
                        {userData.jobTitle}
                    </Title>
                    <Title
                        sx={{
                            fontFamily: 'Space Grotesk',
                            fontsize: 'xl',
                        }}
                    >
                        {userData.mainDescription}
                    </Title>
                    <Center>
                        <Flex w='50%' justify='space-evenly'>
                            <MagneticButton
                                icon={<FaLinkedinIn />}
                                ariaLabel='LinkedIn'
                                href={userData.linkedin}
                            />
                            <MagneticButton
                                icon={<FaFilePdf />}
                                ariaLabel='Resume'
                                href={CvPdf}
                            />
                        </Flex>
                    </Center>
                </Flex>
            </Paper>
        </motion.div>
    )
}
