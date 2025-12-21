import { motion } from 'framer-motion'

import {
    ChipList,
    MagneticButton,
    Paper,
    Subtitle,
    Title,
} from '@/components/common'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { Project } from '../../projects.type'
import { Gallery } from '../Gallery'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = (props: ProjectCardProps) => {
    const project: Project = props.project
    return (
        <motion.div
            className='w-full md:w-[49%] h-full my-2'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className='relative rounded-2xl overflow-hidden group'>
                <div className='project-glow absolute -inset-0.5 bg-gradient-to-br from-[rgba(0,162,199,0.4)] via-[rgba(76,204,230,0.2)] to-[rgba(0,162,199,0.4)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0 blur-lg' />
                <Paper
                    style={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <div className='flex flex-col items-center gap-4'>
                        <div className='overflow-hidden rounded-lg w-full'>
                            <img
                                className='project-image w-full h-[21rem] rounded-lg object-cover object-top transition-transform duration-500 group-hover:scale-105'
                                src={project.images[0]}
                                alt={project.name}
                            />
                        </div>
                        <div className='flex flex-col items-center gap-4 relative w-full'>
                            <div className='absolute top-0 left-0'>
                                <ProjectTypeIcon {...project} />
                            </div>
                            <div className='absolute top-0 right-0 tracking-widest leading-5 flex items-center gap-1'>
                                <FaUserGroup size='1.2rem' />
                                {'x' + project.membersCount}
                            </div>
                            <div className='flex items-center flex-col w-full'>
                                <Title>{project.name}</Title>
                                <Subtitle>{project.year}</Subtitle>
                            </div>
                            <div className='text-center flex items-center min-h-24'>
                                {project.description}
                            </div>
                            <div className='w-[30%] flex justify-evenly'>
                                {project.gitLink ? (
                                    <MagneticButton
                                        href={project.gitLink}
                                        ariaLabel='Code'
                                        icon={FaCode}
                                    />
                                ) : null}
                                {project.previewLink ? (
                                    <MagneticButton
                                        href={project.previewLink}
                                        ariaLabel='Démo'
                                        icon={FaPlayCircle}
                                    />
                                ) : null}
                                <Gallery {...project} />
                            </div>
                            <div className='min-h-20'>
                                <ChipList
                                    skills={project.skills}
                                    className='justify-center'
                                />
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </motion.div>
    )
}

const ProjectTypeIcon = (project: Project) => {
    if (project.type === 'WEB') {
        return <GoDeviceDesktop size='2rem' />
    } else if (project.type === 'MOBILE') {
        return <GoDeviceMobile size='2rem' />
    }
    return null
}
