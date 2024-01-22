import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import OtherProjects from '../components/projects/components/OtherProjects'
import ProjectCard from '../components/projects/components/ProjectCard'
import {
    projectsData,
    projectsStyle,
} from '../components/projects/projects.data'
import { Project } from '../components/projects/projects.type'

const Projects = () => {
    const projects = projectsData.projects
    const mainProjects = projects.slice(0, 2)
    const otherProjects = projects.slice(2)
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 2 }}
                viewport={{ once: true }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {mainProjects.map((project: Project) => (
                        <ProjectCard
                            project={project}
                            sx={projectsStyle.MainProjects}
                            key={project.name}
                        />
                    ))}
                </Box>
            </motion.div>
            <br />
            <OtherProjects projects={otherProjects} />
        </Box>
    )
}

export default Projects
