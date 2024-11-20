import CvPdf from '@/assets/CV.pdf'
import { ChipList, MagneticButton, Paper } from '@/components/base'
import { Title } from '@/components/base/typography/Title'
import { Center, Flex, Text } from '@chakra-ui/react'
import '@fontsource/space-grotesk/400.css'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaLinkedinIn } from 'react-icons/fa'
import { FaBriefcase, FaLocationPin } from 'react-icons/fa6'
import { PiReadCvLogo } from 'react-icons/pi'
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
            <Paper
                style={{
                    alignItems: 'center',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                }}
            >
                <Flex direction='column' gap={{ base: '1rem', lg: '2rem' }}>
                    <Flex flexDirection='column' gap='0.4rem'>
                        <Title
                            sx={{
                                fontFamily: 'Space Grotesk',
                                fontSize: { base: '2xl', lg: '3xl' },
                                padding: 0,
                            }}
                        >
                            {userData.jobTitle}
                        </Title>
                        <ChipList
                            skills={userData.mainSkills}
                            justifyContent='center'
                        />
                    </Flex>
                    <Text
                        sx={{
                            fontFamily: 'Space Grotesk',
                            fontSize: { base: 'lg', md: 'xl' },
                            lineHeight: '1.5',
                            mt: '1rem',
                        }}
                    >
                        {userData.mainDescription1}
                        <br />
                        <br />
                        {userData.mainDescription2}
                    </Text>
                    <Flex
                        gap='3rem'
                        alignItems='center'
                        flexDirection='row'
                        maxWidth='lg'
                        margin='0 auto'
                    >
                        <Flex
                            alignItems='center'
                            gap='0.3rem'
                            flexDirection={{ base: 'column', lg: 'row' }}
                        >
                            <FaBirthdayCake />
                            <Text fontSize='sm'>26&nbsp;ans</Text>
                        </Flex>
                        <Flex
                            alignItems='center'
                            gap='0.3rem'
                            flexDirection={{ base: 'column', lg: 'row' }}
                        >
                            <FaLocationPin />
                            <Text fontSize='sm'>IDF (77)</Text>
                        </Flex>
                        <Flex
                            alignItems='center'
                            gap='0.3rem'
                            flexDirection={{ base: 'column', lg: 'row' }}
                        >
                            <FaBriefcase />
                            <Text fontSize='sm'>Freelance</Text>
                        </Flex>
                    </Flex>
                    <Center>
                        <Flex w='50%' justify='space-evenly'>
                            <MagneticButton
                                icon={<FaLinkedinIn />}
                                ariaLabel='Linked in'
                                href={userData.linkedin}
                            />
                            <MagneticButton
                                icon={<PiReadCvLogo size={23} />}
                                ariaLabel='CV'
                                href={CvPdf}
                            />
                        </Flex>
                    </Center>
                </Flex>
            </Paper>
        </motion.div>
    )
}
