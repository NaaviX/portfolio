import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, SxProps, Theme, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { projectsStyle } from '../projects.data'
import { Project } from '../projects.type'
import ProjectCard from './ProjectCard'

const OtherProjects = ({
    projects,
    sx,
}: {
    projects: Project[]
    sx?: SxProps<Theme>
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box
            sx={{
                ...sx,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                mt: 5,
            }}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>
                Voir les autres projets{' '}
                <ExpandMoreIcon
                    sx={{
                        verticalAlign: 'middle',
                        transition: 'all .2s linear',
                        transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                />
            </Typography>
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.6,
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.15,
                                },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.5,
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}
                        >
                            {projects.map((project: Project) => (
                                <ProjectCard
                                    key={project.name}
                                    project={project}
                                    sx={projectsStyle.OtherProject}
                                />
                            ))}
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    )
}

export default OtherProjects
