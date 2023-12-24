import { Box, SxProps, Theme, Toolbar, Typography } from '@mui/material'
import { Navigate, useParams } from 'react-router-dom'
import Chip from '../../base/components/Chip'
import { projectsData } from '../projects.data'

const ProjectInfos = ({ sx }: { sx?: SxProps<Theme> }) => {
    const { projectName } = useParams()
    const project = projectsData.projects.find(
        (project) => project.name === projectName
    )

    if (project === undefined) {
        return <Navigate replace to='/error-page' />
    }

    return (
        <Box
            sx={{
                ...sx,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                alignItems: 'center',
            }}
        >
            <Toolbar />
            <Typography variant='h1'>{project.name}</Typography>
            <Typography variant='body2'>{project.year}</Typography>
            <Typography
                variant='body1'
                component='p'
                style={{ margin: '20px 0 20px 0' }}
            >
                {project.description}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                    mt: '20px',
                    flexWrap: 'wrap',
                }}
            >
                {project.stack.map((stack) => (
                    <Chip
                        sx={{ letterSpacing: 'normal', pl: '4px' }}
                        label={stack.name}
                        icon={
                            stack.icon ? (
                                <stack.icon
                                    style={{ width: '1rem', height: '1rem' }}
                                />
                            ) : (
                                <span />
                            )
                        }
                        key={stack.name}
                    ></Chip>
                ))}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                    mt: '20px',
                    flexWrap: 'wrap',
                }}
            >
                {project.images.map((image) => (
                    <img
                        key={image}
                        src={image}
                        alt={project.name}
                        style={{ width: '100%', height: 'auto' }}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default ProjectInfos
