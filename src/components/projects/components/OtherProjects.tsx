import { AnimatePresence, motion } from 'framer-motion'
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
        <div className='flex flex-col w-full cursor-pointer mt-5'>
            <div
                className='flex items-center gap-2 m-4'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className='text-center text-lg'>Mes autres projets</span>
                <span
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                >
                    <FaAngleRight />
                </span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='overflow-hidden'
                    >
                        <div className='flex flex-wrap gap-[2%]'>
                            {projects.map((project: Project) => (
                                <ProjectCard
                                    key={project.name}
                                    project={project}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
