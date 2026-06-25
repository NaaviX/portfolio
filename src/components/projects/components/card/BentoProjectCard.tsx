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
    'relative bg-bg-subtle/78 border border-border-subtle/70 rounded-lg overflow-hidden ' +
    'transition-[border-color,transform] duration-500 ease-out ' +
    'group-hover:border-primary/70'

const FEATURED_SURFACE =
    'border-signal/35 shadow-[0_28px_90px_-70px_rgba(244,177,90,0.44),inset_0_1px_0_rgba(244,177,90,0.11)] group-hover:border-signal/55'

// Shared header-image height so every stacked card (large / medium / compact)
// lines up to the same height. The featured card is intentionally excluded:
// its screenshot is a full-height side panel, not a top header image.
const CARD_IMAGE =
    'relative h-[200px] sm:h-[230px] overflow-hidden border-b border-border-subtle'

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
                'flex items-center text-primary-light/52 font-medium tabular-nums',
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
    accent = 'primary',
}: {
    children: React.ReactNode
    className?: string
    accent?: 'primary' | 'signal'
}) => (
    <div className='relative inline-flex flex-col items-start'>
        <Title className={className}>{children}</Title>
        <span
            className={cn(
                'mt-3 h-px origin-left',
                accent === 'signal' ? 'bg-signal/75' : 'bg-primary/44',
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
                <div className={cn(SURFACE, FEATURED_SURFACE)}>
                    <div className='grid grid-cols-1 lg:grid-cols-12'>
                        <div className='relative h-[220px] sm:h-[300px] lg:h-auto lg:col-span-7 overflow-hidden lg:border-r lg:border-signal/18'>
                            <LazyImage
                                src={project.images[0]}
                                alt={project.name}
                                className='w-full h-full lg:absolute lg:inset-0'
                                variants={imageVariants}
                            />
                            <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-subtle/70 to-transparent lg:hidden' />
                        </div>
                        <div className='relative lg:col-span-5 p-5 sm:p-7 lg:p-12 flex flex-col justify-between gap-8 lg:gap-10'>
                            <div>
                                <TitleWithRule
                                    accent='signal'
                                    className='text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-normal leading-[1.05]'
                                >
                                    {project.name}
                                </TitleWithRule>
                                <p className='mt-6 text-ink-muted/82 text-base lg:text-lg leading-relaxed max-w-md'>
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
                        'h-full flex flex-col shadow-[0_24px_80px_-68px_rgba(47,199,223,0.58),inset_0_1px_0_rgba(215,245,247,0.05)]'
                    )}
                >
                    <div className={CARD_IMAGE}>
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
                        <TitleWithRule className='text-2xl lg:text-[1.75rem] font-semibold tracking-normal leading-tight'>
                            {project.name}
                        </TitleWithRule>
                        <p className='text-ink-muted/76 text-sm lg:text-[15px] leading-relaxed flex-1'>
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
                        'h-full flex flex-col shadow-[0_20px_70px_-64px_rgba(47,199,223,0.5),inset_0_1px_0_rgba(215,245,247,0.05)]'
                    )}
                >
                    <div className={CARD_IMAGE}>
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
                        <TitleWithRule className='text-xl lg:text-[1.375rem] font-semibold tracking-normal leading-tight'>
                            {project.name}
                        </TitleWithRule>
                        <p className='text-ink-muted/72 text-sm leading-relaxed flex-1 line-clamp-3'>
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
            className='w-full flex-shrink-0 h-full flex'
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
                        'h-full flex flex-col shadow-[0_18px_60px_-56px_rgba(47,199,223,0.48),inset_0_1px_0_rgba(215,245,247,0.05)]'
                    )}
                >
                    <div className={CARD_IMAGE}>
                        <LazyImage
                            src={project.images[0]}
                            alt={project.name}
                            className='w-full h-full'
                            variants={imageVariants}
                        />
                    </div>
                    <div className='p-5 flex flex-col flex-1 gap-4'>
                        <div className='flex items-start justify-end gap-3'>
                            <span className='text-[11px] text-primary-light/50 tabular-nums pt-1'>
                                {project.year}
                            </span>
                        </div>
                        <TitleWithRule className='text-lg font-semibold tracking-normal leading-tight'>
                            {project.name}
                        </TitleWithRule>
                        <p className='text-ink-muted/72 text-sm leading-relaxed line-clamp-3 flex-1'>
                            {description}
                        </p>
                        <ChipList
                            skills={project.skills.slice(0, 3)}
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
