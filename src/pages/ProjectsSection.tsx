import { OtherProjects, projectsData } from '@/components/projects'
import { BentoProjectCard } from '@/components/projects/components/card/BentoProjectCard'

export const ProjectsSection = () => {
    const featuredProject = projectsData[0]
    const secondaryProjects = projectsData.slice(1, 3)
    const tertiaryProjects = projectsData.slice(3, 5)
    const otherProjects = projectsData.slice(5)

    return (
        <div className='w-full flex flex-col items-center gap-6'>
            <div className='grid grid-cols-12 gap-4 lg:gap-6 w-full'>
                <BentoProjectCard
                    project={featuredProject}
                    variant='featured'
                    index={0}
                />

                {secondaryProjects.map((project, i) => (
                    <BentoProjectCard
                        key={project.name}
                        project={project}
                        variant={i === 0 ? 'large' : 'medium'}
                        index={i + 1}
                    />
                ))}

                {tertiaryProjects.map((project, i) => (
                    <BentoProjectCard
                        key={project.name}
                        project={project}
                        variant={i === 0 ? 'medium' : 'large'}
                        index={i + 3}
                    />
                ))}
            </div>

            {otherProjects.length > 0 && (
                <OtherProjects projects={otherProjects} />
            )}
        </div>
    )
}
