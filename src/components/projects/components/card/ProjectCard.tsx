import { Box, Flex, Image } from '@chakra-ui/react'

import {
    ChipList,
    MagneticButton,
    Paper,
    Subtitle,
    Title,
} from '@/components/base'
import { userData } from '@/components/user'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { Project } from '../../projects.type'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = (props: ProjectCardProps) => {
    const project: Project = props.project
    return (
        <Box sx={{ width: { base: '100%', md: '49%' } }}>
            <Paper key={project.name} style={{ padding: '1rem' }}>
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
                    <Flex align='center' direction='column'>
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
                        <MagneticButton
                            href={userData.linkedin}
                            ariaLabel='See demo'
                            icon={<FaPlayCircle />}
                        />
                        <MagneticButton
                            href={userData.linkedin}
                            ariaLabel='See code'
                            icon={<FaCode />}
                        />
                    </Flex>
                    <Flex>
                        <ChipList skills={project.skills} />
                    </Flex>
                </Flex>
            </Paper>
        </Box>
    )
}
