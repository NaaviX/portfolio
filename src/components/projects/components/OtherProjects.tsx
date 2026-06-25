import { useCallback, useRef, useState } from 'react'
import { ChipList, LazyImage, MagneticButton, Title } from '@/components/common'
import { useLanguage } from '@/i18n/LanguageContext'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FaCode, FaPlayCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoArrowUpRight, GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { Project } from '../projects.type'
import { Gallery } from './Gallery'
import { GitLabProjectStrip } from './_GitLabProjectStrip'

interface OtherProjectsProps {
    projects: Project[]
}

const ROW_SELECTOR = '[data-archive-row]'
const fmt = (n: number) => String(n).padStart(2, '0')

/**
 * Archive index: a hover/keyboard-driven list (left) that swaps a single synced
 * preview panel (right). On < lg it collapses to an always-one-open accordion,
 * since a side-by-side preview can't fit a phone.
 */
export const OtherProjects = ({ projects }: OtherProjectsProps) => {
    const { t } = useLanguage()
    const reduce = useReducedMotion()
    const listRef = useRef<HTMLUListElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const total = projects.length
    const active = projects[activeIndex]

    // Keyboard roving: move focus between rows; focusing a row activates it,
    // which is what drives the preview swap.
    const focusRow = useCallback((target: number) => {
        const rows =
            listRef.current?.querySelectorAll<HTMLButtonElement>(ROW_SELECTOR)
        if (!rows?.length) return
        const clamped = Math.max(0, Math.min(rows.length - 1, target))
        rows[clamped]?.focus()
    }, [])

    const onRowKeyDown =
        (index: number) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                focusRow(index + 1)
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                focusRow(index - 1)
            } else if (e.key === 'Home') {
                e.preventDefault()
                focusRow(0)
            } else if (e.key === 'End') {
                e.preventDefault()
                focusRow(total - 1)
            }
        }

    return (
        <section
            className='w-full mt-8 sm:mt-12'
            aria-roledescription='list'
            aria-label={t.otherProjects.ariaLabel}
        >
            <div className='grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12'>
                {/* Index list */}
                <div className='lg:col-span-5'>
                    <div className='mb-5 flex items-baseline justify-between gap-4'>
                        <div>
                            <h3 className='text-lg font-semibold text-primary-light'>
                                {t.otherProjects.title}
                            </h3>
                            <p className='mt-1 text-sm text-ink-muted/58'>
                                {t.otherProjects.subtitle}
                            </p>
                        </div>
                        <span className='font-mono text-xs tabular-nums text-primary-light/35'>
                            {fmt(total)}
                        </span>
                    </div>

                    <ul
                        ref={listRef}
                        role='list'
                        className='border-y border-border-subtle/45'
                    >
                        {projects.map((project, i) => {
                            const isActive = i === activeIndex
                            return (
                                <li
                                    key={project.name}
                                    className='border-t border-border-subtle/35 first:border-t-0'
                                >
                                    <ArchiveRow
                                        project={project}
                                        index={i}
                                        isActive={isActive}
                                        reduce={!!reduce}
                                        onActivate={() => setActiveIndex(i)}
                                        onKeyDown={onRowKeyDown(i)}
                                    />

                                    {/* Mobile-only inline preview (accordion) */}
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                key='inline'
                                                className='overflow-hidden lg:hidden'
                                                initial={
                                                    reduce
                                                        ? { opacity: 0 }
                                                        : {
                                                              height: 0,
                                                              opacity: 0,
                                                          }
                                                }
                                                animate={
                                                    reduce
                                                        ? { opacity: 1 }
                                                        : {
                                                              height: 'auto',
                                                              opacity: 1,
                                                          }
                                                }
                                                exit={
                                                    reduce
                                                        ? { opacity: 0 }
                                                        : {
                                                              height: 0,
                                                              opacity: 0,
                                                          }
                                                }
                                                transition={{
                                                    duration: 0.4,
                                                    ease: EASE_OUT_QUART,
                                                }}
                                            >
                                                <div className='pb-6 pt-2'>
                                                    <ProjectPreview
                                                        project={project}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Synced preview panel (desktop) */}
                <div className='hidden lg:col-span-7 lg:block'>
                    <div className='lg:sticky lg:top-28'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={active.name}
                                initial={
                                    reduce
                                        ? { opacity: 0 }
                                        : { opacity: 0, y: 18 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                exit={
                                    reduce
                                        ? { opacity: 0 }
                                        : { opacity: 0, y: -14 }
                                }
                                transition={{
                                    duration: 0.42,
                                    ease: EASE_OUT_QUART,
                                }}
                            >
                                <ProjectPreview project={active} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ArchiveRow = ({
    project,
    index,
    isActive,
    reduce,
    onActivate,
    onKeyDown,
}: {
    project: Project
    index: number
    isActive: boolean
    reduce: boolean
    onActivate: () => void
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void
}) => {
    const TypeIcon = project.type === 'WEB' ? GoDeviceDesktop : GoDeviceMobile

    return (
        <button
            type='button'
            data-archive-row
            aria-expanded={isActive}
            aria-label={`${project.name}, ${project.year}`}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            onClick={onActivate}
            onKeyDown={onKeyDown}
            className={cn(
                'group/row relative flex w-full items-center gap-4 py-4 pr-2 pl-4 text-left sm:py-5',
                'transition-colors duration-300 ease-out outline-none',
                'focus-visible:bg-bg-hover/40',
                isActive ? 'bg-bg-hover/30' : 'hover:bg-bg-hover/20'
            )}
        >
            {/* Active rail */}
            {isActive &&
                (reduce ? (
                    <span className='absolute inset-y-2 left-0 w-[2px] rounded-full bg-primary' />
                ) : (
                    <motion.span
                        layoutId='archive-rail'
                        className='absolute inset-y-2 left-0 w-[2px] rounded-full bg-primary'
                        transition={{
                            type: 'spring',
                            stiffness: 420,
                            damping: 34,
                        }}
                    />
                ))}

            <span
                className={cn(
                    'font-mono text-xs tabular-nums transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-primary-light/35'
                )}
            >
                {fmt(index + 1)}
            </span>

            <span
                className={cn(
                    'flex-1 truncate text-base font-medium tracking-tight transition-colors duration-300 sm:text-lg',
                    isActive
                        ? 'text-primary-light'
                        : 'text-primary-light/55 group-hover/row:text-primary-light/85'
                )}
            >
                {project.name}
            </span>

            <span className='flex items-center gap-3 text-primary-light/40'>
                <span className='hidden items-center gap-1.5 text-xs tabular-nums sm:inline-flex'>
                    <TypeIcon size={13} />
                    {project.year}
                </span>
                <GoArrowUpRight
                    size={16}
                    className={cn(
                        'transition-all duration-300',
                        isActive
                            ? 'translate-x-0 text-primary opacity-100'
                            : '-translate-x-1 opacity-0 group-hover/row:translate-x-0 group-hover/row:opacity-60'
                    )}
                    aria-hidden
                />
            </span>
        </button>
    )
}

const ProjectPreview = ({ project }: { project: Project }) => {
    const { t } = useLanguage()
    const description = t.projects[project.descriptionKey]
    const TypeIcon = project.type === 'WEB' ? GoDeviceDesktop : GoDeviceMobile
    const typeLabel = project.type === 'WEB' ? 'Web' : 'Mobile'
    const members =
        project.membersCount === 1 ? 'Solo' : `Team of ${project.membersCount}`

    return (
        <div className='relative flex flex-col overflow-hidden rounded-lg border border-border-subtle/70 bg-bg-subtle/78 shadow-[0_24px_80px_-68px_rgba(47,199,223,0.55),inset_0_1px_0_rgba(215,245,247,0.05)]'>
            <div className='relative aspect-[16/10] overflow-hidden border-b border-border-subtle'>
                <LazyImage
                    src={project.images[0]}
                    alt={project.name}
                    className='h-full w-full'
                />
                <div
                    className='pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-subtle via-bg-subtle/20 to-transparent'
                    aria-hidden
                />
                <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6'>
                    <Title className='text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]'>
                        {project.name}
                    </Title>
                </div>
            </div>

            <div className='flex flex-col gap-4 p-5 sm:p-6'>
                <div className='flex items-center gap-2.5 text-xs font-medium tabular-nums text-primary-light/52'>
                    <span>{project.year}</span>
                    <span className='h-3 w-px bg-border-subtle' aria-hidden />
                    <span className='inline-flex items-center gap-1.5'>
                        <TypeIcon size={12} />
                        {typeLabel}
                    </span>
                    <span className='h-3 w-px bg-border-subtle' aria-hidden />
                    <span className='inline-flex items-center gap-1.5'>
                        <FaUserGroup size={11} />
                        {members}
                    </span>
                </div>

                <p className='text-sm leading-relaxed text-ink-muted/74 line-clamp-3'>
                    {description}
                </p>

                <ChipList
                    skills={project.skills.slice(0, 5)}
                    className='justify-start'
                />

                <GitLabProjectStrip project={project} size='compact' />

                <div className='flex gap-3 pt-1'>
                    {project.gitLink && (
                        <MagneticButton
                            href={project.gitLink}
                            ariaLabel='Code'
                            icon={FaCode}
                            size='small'
                        />
                    )}
                    {project.previewLink && (
                        <MagneticButton
                            href={project.previewLink}
                            ariaLabel='Démo'
                            icon={FaPlayCircle}
                            size='small'
                        />
                    )}
                    <Gallery {...project} size='small' />
                </div>
            </div>
        </div>
    )
}
