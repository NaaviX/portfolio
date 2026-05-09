import { ChipList, LazyImage, MagneticButton, Title } from '@/components/common'
import { useLanguage } from '@/i18n/LanguageContext'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { Project } from '../../projects.type'
import { Gallery } from '../Gallery'
import { GitLabProjectStrip } from '../_GitLabProjectStrip'

type CardVariant = 'featured' | 'large' | 'medium' | 'compact'

interface BentoProjectCardProps {
    project: Project
    variant?: CardVariant
    index?: number
}

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: EASE_OUT_QUART,
            delay: i * 0.08,
        },
    }),
}

const imageVariants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.04,
        transition: { duration: 0.9, ease: EASE_OUT_QUART },
    },
}

const SURFACE =
    'relative bg-bg-subtle border border-border-subtle rounded-2xl overflow-hidden ' +
    'transition-[border-color,transform] duration-500 ease-out ' +
    'group-hover:border-border'

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

const MetaRow = ({
    project,
    size = 'normal',
}: {
    project: Project
    size?: 'large' | 'normal' | 'small'
}) => {
    const Icon = project.type === 'WEB' ? GoDeviceDesktop : GoDeviceMobile
    const typeLabel = project.type === 'WEB' ? 'Web' : 'Mobile'
    const members =
        project.membersCount === 1 ? 'Solo' : `Team of ${project.membersCount}`

    const config = {
        large: { text: 'text-sm', icon: 14, gap: 'gap-3' },
        normal: { text: 'text-xs', icon: 12, gap: 'gap-2.5' },
        small: { text: 'text-[11px]', icon: 11, gap: 'gap-2' },
    }
    const c = config[size]

    return (
        <div
            className={cn(
                'flex items-center text-primary-light/55 font-medium tabular-nums tracking-wide uppercase',
                c.text,
                c.gap
            )}
        >
            <span>{project.year}</span>
            <span className='h-3 w-px bg-border-subtle' aria-hidden />
            <span className='inline-flex items-center gap-1.5'>
                <Icon size={c.icon} />
                {typeLabel}
            </span>
            <span className='h-3 w-px bg-border-subtle' aria-hidden />
            <span className='inline-flex items-center gap-1.5'>
                <FaUserGroup size={c.icon - 1} />
                {members}
            </span>
        </div>
    )
}

const TitleWithRule = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => (
    <div className='relative inline-flex flex-col items-start'>
        <Title className={className}>{children}</Title>
        <span
            className={cn(
                'mt-3 h-px bg-primary/50 origin-left',
                'transition-transform duration-700 ease-out',
                'scale-x-[0.18] group-hover:scale-x-100',
                'w-full'
            )}
            aria-hidden
        />
    </div>
)

const FeaturedCard = ({
    project,
    index,
}: {
    project: Project
    index: number
}) => {
    const { t } = useLanguage()
    const description = t.projects[project.descriptionKey]
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
                className='group cursor-default'
            >
                <div
                    className={cn(
                        SURFACE,
                        'rounded-[1.75rem] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]'
                    )}
                >
                    <div className='grid grid-cols-1 lg:grid-cols-12'>
                        <div className='relative h-[220px] sm:h-[300px] lg:h-auto lg:col-span-7 overflow-hidden lg:border-r lg:border-border-subtle'>
                            <LazyImage
                                src={project.images[0]}
                                alt={project.name}
                                className='w-full h-full lg:absolute lg:inset-0'
                                variants={imageVariants}
                            />
                            <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-subtle/70 to-transparent lg:hidden' />
                        </div>
                        <div className='relative lg:col-span-5 p-5 sm:p-7 lg:p-12 flex flex-col justify-between gap-8 lg:gap-10'>
                            <div className='flex items-start justify-end gap-6'>
                                <span className='text-[10px] tracking-[0.2em] uppercase text-primary/70 font-medium pt-3'>
                                    Featured
                                </span>
                            </div>
                            <div>
                                <TitleWithRule className='text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05]'>
                                    {project.name}
                                </TitleWithRule>
                                <p className='mt-6 text-primary-light/65 text-base lg:text-lg leading-relaxed max-w-md'>
                                    {description}
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <MetaRow project={project} size='large' />
                                <ChipList
                                    skills={project.skills.slice(0, 6)}
                                    className='justify-start'
                                />
                                <GitLabProjectStrip project={project} />
                                <div className='pt-2'>
                                    <ActionButtons project={project} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const LargeCard = ({ project, index }: { project: Project; index: number }) => {
    const { t } = useLanguage()
    const description = t.projects[project.descriptionKey]
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
                className='group h-full cursor-default'
            >
                <div
                    className={cn(
                        SURFACE,
                        'h-full flex flex-col shadow-[0_14px_44px_-22px_rgba(0,0,0,0.55)]'
                    )}
                >
                    <div className='relative h-[200px] sm:h-[240px] overflow-hidden border-b border-border-subtle'>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                    </div>
                    <div className='p-5 sm:p-7 lg:p-8 flex flex-col flex-1 gap-5'>
                        <div className='flex items-start justify-end gap-4'>
                            <MetaRow project={project} />
                        </div>
                        <TitleWithRule className='text-2xl lg:text-[1.75rem] font-semibold tracking-tight leading-tight'>
                            {project.name}
                        </TitleWithRule>
                        <p className='text-primary-light/60 text-sm lg:text-[15px] leading-relaxed flex-1'>
                            {description}
                        </p>
                        <ChipList
                            skills={project.skills.slice(0, 5)}
                            className='justify-start'
                        />
                        <GitLabProjectStrip project={project} />
                        <div className='pt-1'>
                            <ActionButtons project={project} size='small' />
                        </div>
                    </div>
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
    const { t } = useLanguage()
    const description = t.projects[project.descriptionKey]
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
                className='group h-full cursor-default'
            >
                <div
                    className={cn(
                        SURFACE,
                        'h-full flex flex-col shadow-[0_12px_36px_-20px_rgba(0,0,0,0.5)]'
                    )}
                >
                    <div className='relative h-[170px] sm:h-[210px] overflow-hidden border-b border-border-subtle'>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                    </div>
                    <div className='p-4 sm:p-6 flex flex-col flex-1 gap-4'>
                        <div className='flex items-start justify-end gap-4'>
                            <MetaRow project={project} size='small' />
                        </div>
                        <TitleWithRule className='text-xl lg:text-[1.375rem] font-semibold tracking-tight leading-tight'>
                            {project.name}
                        </TitleWithRule>
                        <p className='text-primary-light/55 text-sm leading-relaxed flex-1 line-clamp-3'>
                            {description}
                        </p>
                        <ChipList
                            skills={project.skills.slice(0, 4)}
                            className='justify-start'
                        />
                        <GitLabProjectStrip project={project} />
                        <div className='pt-1'>
                            <ActionButtons project={project} size='small' />
                        </div>
                    </div>
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
    const { t } = useLanguage()
    const description = t.projects[project.descriptionKey]
    return (
        <motion.div
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className='w-[min(320px,calc(100vw-2.5rem))] flex-shrink-0 h-full flex'
        >
            <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='group h-full w-full cursor-default'
            >
                <div
                    className={cn(
                        SURFACE,
                        'h-full flex flex-col rounded-xl shadow-[0_10px_28px_-16px_rgba(0,0,0,0.45)]'
                    )}
                >
                    <div className='relative h-[150px] overflow-hidden border-b border-border-subtle'>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                    </div>
                    <div className='p-4 flex flex-col flex-1 gap-3'>
                        <div className='flex items-start justify-end gap-3'>
                            <span className='text-[10px] uppercase tracking-wider text-primary-light/50 tabular-nums pt-1'>
                                {project.year}
                            </span>
                        </div>
                        <TitleWithRule className='text-base font-semibold tracking-tight leading-tight'>
                            {project.name}
                        </TitleWithRule>
                        <p className='text-primary-light/50 text-xs leading-relaxed line-clamp-2 flex-1'>
                            {description}
                        </p>
                        <ChipList
                            skills={project.skills.slice(0, 2)}
                            className='justify-start gap-1.5'
                        />
                        <GitLabProjectStrip project={project} size='compact' />
                        <div className='pt-1'>
                            <ActionButtons project={project} size='tiny' />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const ActionButtons = ({
    project,
    size = 'normal',
}: {
    project: Project
    size?: 'normal' | 'small' | 'tiny'
}) => {
    const buttonSize = size === 'normal' ? 'normal' : 'small'

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
                <Gallery {...project} size='small' hideLabel />
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
                    size={buttonSize}
                />
            )}
            {project.previewLink && (
                <MagneticButton
                    href={project.previewLink}
                    ariaLabel='Démo'
                    icon={FaPlayCircle}
                    size={buttonSize}
                />
            )}
            <Gallery {...project} size={buttonSize} />
        </div>
    )
}
