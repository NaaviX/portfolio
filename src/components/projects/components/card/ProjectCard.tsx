import { Box, Flex, Image, useDisclosure, useTheme } from '@chakra-ui/react'

import {
    ChipList,
    MagneticButton,
    Paper,
    Subtitle,
    Title,
} from '@/components/base'
import { Modal } from '@/components/base/Modal'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { Project } from '../../projects.type'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = (props: ProjectCardProps) => {
    const project: Project = props.project
    return (
        <Box sx={{ width: { base: '100%', md: '49%' } }}>
            <Paper
                key={project.name}
                style={{ padding: '1rem', marginBottom: '1rem' }}
            >
                <Flex direction='column' align='center' gap='15px'>
                    <Image
                        src={project.images[0]}
                        alt={project.name}
                        w='100%'
                        h='21rem'
                        borderRadius='0.5rem'
                        objectFit='cover'
                        objectPosition='center 0'
                    />
                    <Flex
                        direction='column'
                        align='center'
                        gap='15px'
                        position='relative'
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
                        <Flex align='center' direction='column' width='100%'>
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
                            {project.previewLink ? (
                                <MagneticButton
                                    href={project.previewLink}
                                    ariaLabel='Démo'
                                    icon={<FaPlayCircle />}
                                />
                            ) : null}
                            <Gallery {...project} />
                            {project.gitLink ? (
                                <MagneticButton
                                    href={project.gitLink}
                                    ariaLabel='Code'
                                    icon={<FaCode />}
                                />
                            ) : null}
                        </Flex>
                        <Flex>
                            <ChipList skills={project.skills} />
                        </Flex>
                    </Flex>
                </Flex>
            </Paper>
        </Box>
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

const Gallery = (project: Project) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    if (!project.previewLink) {
        return (
            <>
                <Box onClick={() => onOpen()}>
                    <MagneticButton ariaLabel='Galerie' icon={<FaCode />} />
                </Box>
                <Modal title={project.name} isOpen={isOpen} onClose={onClose}>
                    <Flex wrap='wrap'>
                        {project.images.map((image) => (
                            <Image src={image} alt={project.name} key={image} />
                        ))}
                    </Flex>
                </Modal>
            </>
        )
    }
}
