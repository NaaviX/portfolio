import {
    OtherProjects,
    Project,
    ProjectCard,
    projectsData,
} from '@/components/projects'
import { Flex } from '@chakra-ui/react'

export const ProjectsSection = () => {
    const mainProjects = projectsData.slice(0, 4)
    const otherProjects = projectsData.slice(4)
    return (
        <Flex width='100%' direction='column' align='center'>
            <Flex wrap='wrap' gap='2%'>
                {mainProjects.map((project: Project) => (
                    <ProjectCard project={project} key={project.name} />
                ))}
            </Flex>
            <br />
            <OtherProjects projects={otherProjects} />
        </Flex>
    )
}
