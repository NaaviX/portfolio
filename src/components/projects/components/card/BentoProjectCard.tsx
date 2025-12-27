import { ChipList, LazyImage, MagneticButton, Title } from '@/components/common'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { Project } from '../../projects.type'
import { Gallery } from '../Gallery'

type CardVariant = 'featured' | 'large' | 'medium' | 'compact'

interface BentoProjectCardProps {
    project: Project
    variant?: CardVariant
    index?: number
}

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 80,
            delay: i * 0.1,
        },
    }),
}

const imageVariants = {
    rest: { scale: 1, filter: 'brightness(0.95) saturate(1)' },
    hover: {
        scale: 1.06,
        filter: 'brightness(1.02) saturate(1.1)',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
}

const contentVariants = {
    rest: { y: 0 },
    hover: { y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const glowVariants = {
    rest: { opacity: 0, scale: 0.92 },
    hover: {
        opacity: 1,
        scale: 1.02,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

const shimmerVariants = {
    rest: { x: '-100%', opacity: 0 },
    hover: {
        x: '100%',
        opacity: 0.3,
        transition: { duration: 1.2, ease: 'easeInOut' },
    },
}

const TRANSITION_ALL_300 = 'transition-all duration-300'

export const BentoProjectCard = (props: BentoProjectCardProps) => {
    const { project, variant = 'medium', index = 0 } = props

    if (variant === 'featured') {
        return <FeaturedCard project={project} index={index} />
    }

    if (variant === 'large') {
        return <LargeCard project={project} index={index} />
    }

    if (variant === 'compact') {
        return <CompactCard project={project} index={index} />
    }

    return <MediumCard project={project} index={index} />
}

const FeaturedCard = ({
    project,
    index,
}: {
    project: Project
    index: number
}) => {
    return (
        <motion.div
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            className='col-span-full'
        >
            <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='relative rounded-[2rem] overflow-hidden group cursor-default'
            >
                <motion.div
                    variants={glowVariants}
                    className='absolute -inset-3 bg-gradient-to-br from-primary/60 via-primary-dark/40 to-primary/60 rounded-[2.5rem] blur-3xl'
                />
                <motion.div
                    variants={glowVariants}
                    className='absolute -inset-1 bg-gradient-conic from-primary/40 via-primary-dark/20 to-primary/40 rounded-[2rem] blur-xl animate-spin-slow'
                    style={{ animationDuration: '8s' }}
                />
                <div className='relative bg-gradient-to-br from-bg-subtle/98 via-bg-subtle/95 to-bg-hover/90 backdrop-blur-2xl border border-border/60 rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]'>
                    <motion.div
                        variants={shimmerVariants}
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12'
                    />
                    <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-0'>
                        <div className='relative h-[340px] lg:h-auto min-h-[400px] overflow-hidden'>
                            <LazyImage
                                src={project.images[0]}
                                alt={project.name}
                                className='w-full h-full lg:absolute lg:inset-0'
                                variants={imageVariants}
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg-subtle/70 lg:opacity-70 opacity-0' />
                        </div>
                        <motion.div
                            variants={contentVariants}
                            className='p-10 lg:p-14 flex flex-col justify-center relative'
                        >
                            <Title className='text-4xl lg:text-5xl xl:text-6xl mb-4 font-bold tracking-tight'>
                                {project.name}
                            </Title>
                            <div className='h-1.5 w-20 bg-gradient-to-r from-primary via-primary-dark to-transparent rounded-full mb-6' />
                            <div className='flex flex-wrap items-center gap-3 mb-6'>
                                <YearBadge year={project.year} size='large' />
                                <ProjectTypeBadge type={project.type} />
                                <MembersBadge count={project.membersCount} />
                            </div>
                            <p className='text-primary-light/70 text-lg leading-relaxed mb-8 max-w-lg'>
                                {project.description}
                            </p>
                            <div className='flex justify-center mb-8'>
                                <ActionButtons project={project} />
                            </div>
                            <ChipList
                                skills={project.skills.slice(0, 6)}
                                className='justify-start'
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const LargeCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
            className='col-span-full lg:col-span-7'
        >
            <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='relative rounded-3xl overflow-hidden group h-full cursor-default'
            >
                <motion.div
                    variants={glowVariants}
                    className='absolute -inset-2 bg-gradient-to-br from-primary/50 via-transparent to-primary/50 rounded-[1.75rem] blur-2xl'
                />
                <div className='relative bg-gradient-to-br from-bg-subtle/95 via-bg-subtle/90 to-bg-hover/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden h-full flex flex-col shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]'>
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_55%)] opacity-[0.06]' />
                    <motion.div
                        variants={shimmerVariants}
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12'
                    />
                    <div className='relative h-[280px] overflow-hidden'>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-bg-subtle via-bg-subtle/40 to-transparent opacity-35' />
                        <div className='absolute inset-0 bg-gradient-to-b from-bg-subtle/40 via-transparent to-transparent' />
                    </div>
                    <motion.div
                        variants={contentVariants}
                        className='p-7 lg:p-8 flex flex-col flex-1 relative'
                    >
                        <Title className='text-2xl lg:text-3xl font-semibold mb-3 tracking-tight'>
                            {project.name}
                        </Title>
                        <div className='flex flex-wrap items-center gap-2 mb-4'>
                            <YearBadge year={project.year} />
                            <ProjectTypeBadge
                                type={project.type}
                                size='small'
                            />
                            <MembersBadge
                                count={project.membersCount}
                                size='small'
                            />
                        </div>
                        <p className='text-primary-light/60 text-sm leading-relaxed mb-5 flex-1'>
                            {project.description}
                        </p>
                        <div className='flex justify-center mb-5'>
                            <ActionButtons project={project} size='small' />
                        </div>
                        <ChipList
                            skills={project.skills.slice(0, 5)}
                            className='justify-start'
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const MediumCard = ({
    project,
    index,
}: {
    project: Project
    index: number
}) => {
    return (
        <motion.div
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-60px' }}
            variants={cardVariants}
            className='col-span-full md:col-span-6 lg:col-span-5'
        >
            <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='relative rounded-2xl overflow-hidden group h-full cursor-default'
            >
                <motion.div
                    variants={glowVariants}
                    className='absolute -inset-1.5 bg-gradient-to-br from-primary/40 via-transparent to-primary-dark/40 rounded-[1.25rem] blur-xl'
                />
                <div className='relative bg-gradient-to-br from-bg-subtle/90 via-bg-subtle/85 to-bg-hover/70 backdrop-blur-lg border border-border/50 rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_16px_32px_-8px_rgba(0,0,0,0.35)]'>
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_65%)] opacity-[0.05]' />
                    <motion.div
                        variants={shimmerVariants}
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12'
                    />
                    <div className='relative h-[200px] overflow-hidden'>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-bg-subtle via-bg-subtle/30 to-transparent opacity-80' />
                        <div className='absolute inset-0 bg-gradient-to-b from-bg-subtle/30 via-transparent to-transparent' />
                    </div>
                    <motion.div
                        variants={contentVariants}
                        className='p-5 lg:p-6 flex flex-col flex-1 relative'
                    >
                        <Title className='text-xl lg:text-2xl font-semibold mb-3 tracking-tight'>
                            {project.name}
                        </Title>
                        <div className='flex flex-wrap items-center gap-2 mb-4'>
                            <YearBadge year={project.year} />
                            <ProjectTypeBadge
                                type={project.type}
                                size='small'
                            />
                            <MembersBadge
                                count={project.membersCount}
                                size='small'
                            />
                        </div>
                        <p className='text-primary-light/55 text-sm leading-relaxed mb-5 flex-1 line-clamp-3'>
                            {project.description}
                        </p>
                        <div className='flex justify-center mb-4'>
                            <ActionButtons project={project} size='small' />
                        </div>
                        <ChipList
                            skills={project.skills.slice(0, 4)}
                            className='justify-start'
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const CompactCard = ({
    project,
    index,
}: {
    project: Project
    index: number
}) => {
    return (
        <motion.div
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className='min-w-[320px] flex-shrink-0'
        >
            <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='relative rounded-xl overflow-hidden group h-full cursor-default'
            >
                <motion.div
                    variants={glowVariants}
                    className='absolute -inset-1 bg-gradient-to-br from-primary/30 via-transparent to-primary-dark/30 rounded-[0.875rem] blur-lg'
                />
                <div className='relative bg-gradient-to-br from-bg-subtle/85 via-bg-subtle/75 to-bg-hover/60 backdrop-blur-md border border-border/40 rounded-xl overflow-hidden h-full shadow-[0_12px_24px_-6px_rgba(0,0,0,0.3)]'>
                    <motion.div
                        variants={shimmerVariants}
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12'
                    />
                    <div className='relative h-[150px] overflow-hidden'>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-bg-subtle via-bg-subtle/40 to-transparent opacity-90' />
                    </div>
                    <motion.div variants={contentVariants} className='p-4'>
                        <Title className='text-base font-semibold mb-2 tracking-tight'>
                            {project.name}
                        </Title>
                        <div className='flex flex-wrap items-center gap-1.5 mb-3'>
                            <YearBadge year={project.year} size='small' />
                            <ProjectTypeBadge type={project.type} size='tiny' />
                            <MembersBadge
                                count={project.membersCount}
                                size='small'
                            />
                        </div>
                        <p className='text-primary-light/50 text-xs leading-relaxed line-clamp-2 mb-3'>
                            {project.description}
                        </p>
                        <div className='flex justify-center mb-3'>
                            <ActionButtons project={project} size='tiny' />
                        </div>
                        <ChipList
                            skills={project.skills.slice(0, 2)}
                            className='justify-start gap-1.5'
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const ProjectTypeBadge = ({
    type,
    size = 'normal',
}: {
    type: Project['type']
    size?: 'normal' | 'small' | 'tiny'
}) => {
    const Icon = type === 'WEB' ? GoDeviceDesktop : GoDeviceMobile
    const label = type === 'WEB' ? 'Web' : 'Mobile'
    const config = {
        normal: { padding: 'px-3 py-1.5', icon: '1rem', text: 'text-xs' },
        small: { padding: 'px-2.5 py-1', icon: '0.875rem', text: 'text-xs' },
        tiny: { padding: 'px-2 py-0.5', icon: '0.75rem', text: 'text-[10px]' },
    }

    return (
        <div
            className={cn(
                'flex items-center gap-1.5 rounded-full',
                'bg-gradient-to-r from-bg-hover/80 to-bg-active/60',
                'backdrop-blur-md border border-border/30',
                'shadow-sm',
                TRANSITION_ALL_300,
                'group-hover:border-border/50 group-hover:shadow-md',
                config[size].padding
            )}
        >
            <Icon
                size={config[size].icon}
                className='text-primary-light/80 transition-colors group-hover:text-primary-light'
            />
            <span
                className={cn(
                    'font-medium text-primary-light/70 transition-colors group-hover:text-primary-light/90',
                    config[size].text
                )}
            >
                {label}
            </span>
        </div>
    )
}

const YearBadge = ({
    year,
    size = 'normal',
}: {
    year: string
    size?: 'large' | 'normal' | 'small'
}) => {
    const config = {
        large: 'px-4 py-1.5 text-sm',
        normal: 'px-3 py-1 text-xs',
        small: 'px-2 py-0.5 text-[10px]',
    }

    return (
        <span
            className={cn(
                'rounded-full font-semibold tracking-wide',
                'bg-gradient-to-r from-primary/20 via-primary/15 to-primary-dark/20',
                'backdrop-blur-md text-primary-light',
                'border border-primary/30',
                'shadow-[0_0_12px_-3px_var(--color-primary)]',
                TRANSITION_ALL_300,
                'group-hover:shadow-[0_0_20px_-3px_var(--color-primary)] group-hover:border-primary/50',
                config[size]
            )}
        >
            {year}
        </span>
    )
}

const MembersBadge = ({
    count,
    size = 'normal',
}: {
    count: number
    size?: 'normal' | 'small'
}) => {
    const config = {
        normal: { icon: '0.85rem', text: 'text-sm', padding: 'p-1.5' },
        small: { icon: '0.7rem', text: 'text-xs', padding: 'p-1' },
    }

    return (
        <div
            className={cn(
                'flex items-center gap-1.5 text-primary-dark/70',
                'transition-colors duration-300 group-hover:text-primary-dark',
                config[size].text
            )}
        >
            <div
                className={cn(
                    'rounded-lg bg-bg/60 border border-border/30',
                    TRANSITION_ALL_300,
                    'group-hover:bg-bg/80 group-hover:border-border/50',
                    config[size].padding
                )}
            >
                <FaUserGroup size={config[size].icon} />
            </div>
            <span className='font-medium'>
                {count === 1 ? 'Solo' : `×${count}`}
            </span>
        </div>
    )
}

const ActionButtons = ({
    project,
    size = 'normal',
}: {
    project: Project
    size?: 'normal' | 'small' | 'tiny'
}) => {
    if (size === 'tiny') {
        return (
            <div className='flex gap-2'>
                {project.gitLink && (
                    <MagneticButton
                        href={project.gitLink}
                        ariaLabel='Code'
                        icon={FaCode}
                        size='small'
                        hideLabel
                    />
                )}
                {project.previewLink && (
                    <MagneticButton
                        href={project.previewLink}
                        ariaLabel='Démo'
                        icon={FaPlayCircle}
                        size='small'
                        hideLabel
                    />
                )}
                <Gallery {...project} />
            </div>
        )
    }

    return (
        <div className='flex gap-3'>
            {project.gitLink && (
                <MagneticButton
                    href={project.gitLink}
                    ariaLabel='Code'
                    icon={FaCode}
                />
            )}
            {project.previewLink && (
                <MagneticButton
                    href={project.previewLink}
                    ariaLabel='Démo'
                    icon={FaPlayCircle}
                />
            )}
            <Gallery {...project} />
        </div>
    )
}
