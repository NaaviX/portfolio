import { Box, Flex, Image, useTheme } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import {
    ChipList,
    MagneticButton,
    Paper,
    Subtitle,
    Title,
} from '@/components/common'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { Project } from '../../projects.type'
import { Gallery } from '../Gallery'

interface ProjectCardProps {
    project: Project
}

const MotionBox = motion(Box)

export const ProjectCard = (props: ProjectCardProps) => {
    const project: Project = props.project
    return (
        <MotionBox
            sx={{ width: { base: '100%', md: '49%' }, height: '100%' }}
            marginY='0.5rem'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <Box
                position='relative'
                borderRadius='1rem'
                overflow='hidden'
                _hover={{
                    '& .project-glow': {
                        opacity: 1,
                    },
                    '& .project-image': {
                        transform: 'scale(1.05)',
                    },
                }}
            >
                <Box
                    className='project-glow'
                    position='absolute'
                    inset='-2px'
                    background='linear-gradient(135deg, rgba(0, 162, 199, 0.4), rgba(76, 204, 230, 0.2), rgba(0, 162, 199, 0.4))'
                    borderRadius='1rem'
                    opacity={0}
                    transition='opacity 0.4s ease'
                    zIndex={0}
                    filter='blur(8px)'
                />
                <Paper
                    key={project.name}
                    style={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Flex direction='column' align='center' gap='15px'>
                        <Box
                            overflow='hidden'
                            borderRadius='0.5rem'
                            width='100%'
                        >
                            <Image
                                className='project-image'
                                src={project.images[0]}
                                alt={project.name}
                                w='100%'
                                h='21rem'
                                borderRadius='0.5rem'
                                objectFit='cover'
                                objectPosition='center 0'
                                transition='transform 0.5s ease'
                            />
                        </Box>
                        <Flex
                            direction='column'
                            align='center'
                            gap='15px'
                            position='relative'
                            width='100%'
                        >
                            <Box position='absolute' top='0' left='0'>
                                <ProjectTypeIcon {...project} />
                            </Box>
                            <Box
                                position='absolute'
                                top='0'
                                right='0'
                                letterSpacing={
                                    useTheme().__cssMap['letterSpacings.widest']
                                        .value
                                }
                                lineHeight={
                                    useTheme().__cssMap['lineHeights.5'].value
                                }
                            >
                                <FaUserGroup size='1.2rem' />
                                {'x' + project.membersCount}
                            </Box>
                            <Flex
                                align='center'
                                direction='column'
                                width='100%'
                            >
                                <Title>{project.name}</Title>
                                <Subtitle>{project.year}</Subtitle>
                            </Flex>
                            <Flex
                                textAlign='center'
                                alignItems='center'
                                minHeight='6rem'
                            >
                                {project.description}
                            </Flex>
                            <Flex w='30%' justify='space-evenly'>
                                {project.gitLink ? (
                                    <MagneticButton
                                        href={project.gitLink}
                                        ariaLabel='Code'
                                        icon={<FaCode size='1.2rem' />}
                                    />
                                ) : null}
                                {project.previewLink ? (
                                    <MagneticButton
                                        href={project.previewLink}
                                        ariaLabel='Démo'
                                        icon={<FaPlayCircle size='1.2rem' />}
                                    />
                                ) : null}
                                <Gallery {...project} />
                            </Flex>
                            <Box minHeight='5rem'>
                                <ChipList
                                    skills={project.skills}
                                    justifyContent='center'
                                />
                            </Box>
                        </Flex>
                    </Flex>
                </Paper>
            </Box>
        </MotionBox>
    )
}

const ProjectTypeIcon = (project: Project) => {
    if (project.type === 'WEB') {
        return <GoDeviceDesktop size='2rem' />
    } else if (project.type === 'MOBILE') {
        return <GoDeviceMobile size='2rem' />
    }
    return null
}
