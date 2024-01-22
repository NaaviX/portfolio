import { Theme } from '@emotion/react'
import CodeIcon from '@mui/icons-material/Code'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Box, IconButton, SxProps, Typography } from '@mui/material'
import ChipList from 'components/base/components/ChipList'
import MagneticButton from 'components/base/components/MagneticButton'
import Paper from 'components/base/components/Paper'
import { userData } from 'components/user/user.data'
import { Project } from '../projects.type'

const ProjectCard = ({
    project,
    sx,
}: {
    project: Project
    sx?: SxProps<Theme>
}) => {
    return (
        <Paper key={project.name} sx={sx}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px',
                }}
            >
                <img
                    src={project.images[0]}
                    alt={project.name}
                    style={{
                        width: '100%',
                        height: '350px',
                        borderRadius: '20px',
                        objectFit: 'cover',
                        objectPosition: 'center 0',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h2'>{project.name}</Typography>
                    <Typography variant='subtitle1'>{project.year}</Typography>
                </Box>
                <Typography
                    variant='body1'
                    component='p'
                    style={{ width: '85%', textAlign: 'center' }}
                >
                    {project.description}
                </Typography>
                <Box
                    sx={{
                        width: '30%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <MagneticButton>
                        <IconButton
                            href={userData.linkedin}
                            target='_blank'
                            size='large'
                            sx={{
                                m: '3px',
                                boxShadow:
                                    'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;',
                            }}
                        >
                            <PlayCircleOutlineIcon />
                        </IconButton>
                    </MagneticButton>
                    <MagneticButton>
                        <IconButton
                            href={userData.linkedin}
                            target='_blank'
                            size='large'
                            sx={{
                                m: '3px',
                                boxShadow:
                                    'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;',
                            }}
                        >
                            <CodeIcon />
                        </IconButton>
                    </MagneticButton>
                </Box>
                <ChipList
                    skills={project.skills}
                    sx={{ justifyContent: 'center' }}
                />
            </Box>
        </Paper>
    )
}

export default ProjectCard
