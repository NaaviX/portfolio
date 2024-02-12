import { Box, Collapse, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Project } from '../projects.type'
import { ProjectCard } from './card/ProjectCard'

interface OtherProjectsProps {
    projects: Project[]
}

export const OtherProjects = (props: OtherProjectsProps) => {
    const { projects } = props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Flex direction='column' w='full' cursor='pointer' mt={5}>
            <Flex
                alignItems='center'
                gap='0.5rem'
                m='1rem'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Text align='center'>Mes autres projets </Text>
                <Box
                    as='span'
                    transform={isOpen ? 'rotate(90deg)' : 'rotate(0)'}
                    transition='transform 0.3s'
                >
                    <FaAngleRight />
                </Box>
            </Flex>

            <Collapse in={isOpen} transition={{ enter: { duration: 0.5 } }}>
                <Flex wrap='wrap'>
                    {projects.map((project: Project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </Flex>
            </Collapse>
        </Flex>
    )
}
