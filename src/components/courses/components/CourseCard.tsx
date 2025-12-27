import { Paper } from '@/components/common/Paper'
import { Title } from '@/components/common/typography/Title'
import { cn } from '@/lib/utils'
import { useMediumScreen } from '@/utils/Utils'
import { motion, Variants } from 'framer-motion'
import { TimelineExperience } from '../../common/timeline/timeline.type'

type CourseCardProps = {
    course: TimelineExperience
    index: number
    isLast: boolean
}

const formatYearRange = (dateFrom: Date, dateTo?: Date): string => {
    const from = dateFrom.getFullYear()
    const to = dateTo ? dateTo.getFullYear() : "aujourd'hui"
    return `${from} - ${to}`
}

const getDuration = (dateFrom: Date, dateTo?: Date): string => {
    const end = dateTo || new Date()
    const years = end.getFullYear() - dateFrom.getFullYear()
    return years === 1 ? '1 an' : `${years} ans`
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            damping: 28,
            stiffness: 90,
            delay: i * 0.15,
        },
    }),
}

const contentVariants: Variants = {
    rest: { y: 0 },
    hover: {
        y: -3,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
}

const glowVariants: Variants = {
    rest: { opacity: 0, scale: 0.95 },
    hover: {
        opacity: 1,
        scale: 1.02,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

const shimmerVariants: Variants = {
    rest: { x: '-100%', opacity: 0 },
    hover: {
        x: '100%',
        opacity: 0.2,
        transition: { duration: 1, ease: 'easeInOut' },
    },
}

const dotPulseVariants: Variants = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

export const CourseCard = (props: CourseCardProps) => {
    const { course, index, isLast } = props
    const isMedium = useMediumScreen()

    return (
        <div className='relative'>
            {!isLast && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className='absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-8 bottom-0 w-[2px] origin-top z-0'
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(0,162,199,0.7) 0%, rgba(76,204,230,0.3) 50%, transparent 100%)',
                    }}
                />
            )}

            <motion.div
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-80px' }}
                variants={cardVariants}
            >
                <div
                    className={cn(
                        'relative flex items-start gap-6 md:gap-16',
                        isMedium && index % 2 === 0
                            ? 'md:flex-row-reverse'
                            : 'md:flex-row'
                    )}
                >
                    <div
                        className={cn(
                            'hidden md:flex flex-1',
                            index % 2 === 0
                                ? 'justify-start text-left'
                                : 'justify-end text-right'
                        )}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -30 : 30,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15 + 0.2,
                            }}
                            className='flex flex-col'
                        >
                            <span className='text-2xl font-bold tracking-tight bg-gradient-to-br from-primary via-primary-dark to-primary-light bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,162,199,0.3)]'>
                                {formatYearRange(
                                    course.dateFrom,
                                    course.dateTo
                                )}
                            </span>
                            <span className='text-primary-light/50 mt-2 font-medium tracking-wide uppercase'>
                                {getDuration(course.dateFrom, course.dateTo)}
                            </span>
                        </motion.div>
                    </div>

                    <div className='relative z-10 flex-shrink-0 pt-4'>
                        <div className='relative'>
                            <motion.div
                                variants={dotPulseVariants}
                                initial='initial'
                                animate='animate'
                                className='absolute inset-0 w-6 h-6 rounded-full bg-primary/40 blur-md'
                            />
                            <div className='relative w-6 h-6 rounded-full bg-gradient-to-br from-primary via-primary-dark to-primary-light shadow-[0_0_20px_rgba(0,162,199,0.6),inset_0_1px_0_rgba(255,255,255,0.3)] ring-4 ring-bg' />
                        </div>
                    </div>

                    <div className='flex-1 pb-12'>
                        <motion.div
                            initial='rest'
                            whileHover='hover'
                            animate='rest'
                            className='relative rounded-2xl overflow-hidden cursor-default'
                        >
                            <motion.div
                                variants={glowVariants}
                                className='absolute -inset-2 bg-gradient-to-br from-primary/40 via-primary-dark/20 to-primary/40 rounded-3xl blur-2xl'
                            />

                            <Paper
                                animateScroll={false}
                                className='relative overflow-hidden'
                            >
                                <motion.div
                                    variants={shimmerVariants}
                                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-12 pointer-events-none'
                                />

                                <motion.div
                                    variants={contentVariants}
                                    className='relative z-10'
                                >
                                    <div className='flex flex-wrap items-center gap-3 mb-5'>
                                        <span className='px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-primary/25 to-primary-dark/25 text-primary-light rounded-full border border-primary/40 shadow-[0_0_15px_-3px_rgba(0,162,199,0.4)]'>
                                            {course.type}
                                        </span>
                                        <span className='md:hidden text-sm text-primary-light/60 font-medium'>
                                            {formatYearRange(
                                                course.dateFrom,
                                                course.dateTo
                                            )}
                                        </span>
                                    </div>

                                    <Title className='mb-5 text-xl md:text-2xl leading-tight font-semibold tracking-tight'>
                                        {course.title}
                                    </Title>

                                    <div className='space-y-3'>
                                        {course.institution && (
                                            <div className='flex items-center gap-3'>
                                                <div className='w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center'>
                                                    <svg
                                                        className='w-4 h-4 text-primary'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                        stroke='currentColor'
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                                                        />
                                                    </svg>
                                                </div>
                                                <span className='text-primary-dark font-medium'>
                                                    {course.institution}
                                                </span>
                                            </div>
                                        )}

                                        <div className='flex items-center gap-3'>
                                            <div className='w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center'>
                                                <svg
                                                    className='w-4 h-4 text-primary'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                    strokeWidth={1.5}
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                                                    />
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                                                    />
                                                </svg>
                                            </div>
                                            <span className='text-primary-light/60 text-sm'>
                                                {course.city}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Paper>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
