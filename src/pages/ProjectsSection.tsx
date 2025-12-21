import {
    OtherProjects,
    Project,
    ProjectCard,
    projectsData,
} from '@/components/projects'

export const ProjectsSection = () => {
    const mainProjects = projectsData.slice(0, 4)
    const otherProjects = projectsData.slice(4)
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='flex flex-wrap gap-[2%]'>
                {mainProjects.map((project: Project) => (
                    <ProjectCard project={project} key={project.name} />
                ))}
            </div>
            <br />
            <OtherProjects projects={otherProjects} />
        </div>
    )
}
