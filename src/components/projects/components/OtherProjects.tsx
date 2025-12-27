import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'
import { Project } from '../projects.type'
import { BentoProjectCard } from './card/BentoProjectCard'

interface OtherProjectsProps {
    projects: Project[]
}

export const OtherProjects = (props: OtherProjectsProps) => {
    const { projects } = props
    const [isOpen, setIsOpen] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 320
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div className='flex flex-col w-full mt-8'>
            <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                className='group flex items-center gap-3 px-4 py-3 mx-auto rounded-xl bg-bg-subtle/50 border border-border/50 hover:border-border-hover hover:bg-bg-hover/50 transition-all duration-300'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className='text-primary-light font-medium tracking-wide'>
                    Autres projets
                </span>
                <span className='text-xs text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full'>
                    {projects.length}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='text-primary-dark'
                >
                    <FaAngleRight />
                </motion.span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className='overflow-hidden mt-6'
                    >
                        <div className='relative'>
                            <button
                                onClick={() => scroll('left')}
                                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-bg-subtle/90 border border-border hover:border-border-hover hover:bg-bg-hover transition-all duration-300 shadow-lg backdrop-blur-sm hidden md:flex items-center justify-center'
                                aria-label='Défiler à gauche'
                            >
                                <FaChevronLeft className='text-primary-light' />
                            </button>

                            <div
                                ref={scrollRef}
                                className='flex gap-4 overflow-x-auto pb-4 px-2 md:px-12 scrollbar-hide scroll-smooth'
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }}
                            >
                                {projects.map((project: Project, i) => (
                                    <BentoProjectCard
                                        key={project.name}
                                        project={project}
                                        variant='compact'
                                        index={i}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => scroll('right')}
                                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-bg-subtle/90 border border-border hover:border-border-hover hover:bg-bg-hover transition-all duration-300 shadow-lg backdrop-blur-sm hidden md:flex items-center justify-center'
                                aria-label='Défiler à droite'
                            >
                                <FaChevronRight className='text-primary-light' />
                            </button>

                            <div className='absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-bg-app to-transparent pointer-events-none hidden md:block' />
                            <div className='absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-bg-app to-transparent pointer-events-none hidden md:block' />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
