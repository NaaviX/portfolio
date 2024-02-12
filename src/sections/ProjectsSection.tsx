import {
    OtherProjects,
    Project,
    ProjectCard,
    projectsData,
} from '@/components/projects'
import { Flex } from '@chakra-ui/react'

export const ProjectsSection = () => {
    const projects = projectsData.projects
    const mainProjects = projects.slice(0, 2)
    const otherProjects = projects.slice(2)
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
