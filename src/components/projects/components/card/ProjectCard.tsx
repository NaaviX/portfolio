import { Box, Flex, Image, useTheme } from '@chakra-ui/react'

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

export const ProjectCard = (props: ProjectCardProps) => {
    const project: Project = props.project
    return (
        <Box sx={{ width: { base: '100%', md: '49%' } }} marginY='0.5rem'>
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
