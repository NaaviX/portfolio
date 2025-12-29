import { useLanguage } from '@/i18n'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { ChipList } from '../../ChipList'
import { Fade } from '../../effects/Fade'
import { Title } from '../../typography/Title'
import { TimelineExperience } from '../timeline.type'
import { TimelineItemContentInfo } from './_TimelineItemContentInfo'

type TimelineItemContentProps = TimelineExperience &
    HTMLAttributes<HTMLDivElement>

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 200,
        },
    },
}

export const TimelineItemContent = (props: TimelineItemContentProps) => {
    const { t } = useLanguage()
    const {
        titleKey,
        activitiesKey,
        typeKey,
        institution,
        city,
        skills,
        dateFrom,
        dateTo,
        className,
        ...divProps
    } = props

    const expData = t.experiences[activitiesKey as keyof typeof t.experiences]
    const title = expData && 'title' in expData ? expData.title : titleKey
    const activities: string[] =
        expData && 'activities' in expData ? [...expData.activities] : []
    const type =
        t.experiences.types[typeKey as keyof typeof t.experiences.types] ||
        typeKey

    return (
        <div className={cn(className)} {...divProps}>
            <Fade>
                <Title>{title}</Title>

                <TimelineItemContentInfo
                    activities={activities}
                    type={type}
                    typeKey={typeKey}
                    institution={institution}
                    city={city}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                />

                <motion.ul
                    className={cn(
                        'py-4 pl-1 space-y-2',
                        activities.length === 0 && 'hidden'
                    )}
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {activities.map((activity: string, idx: number) => (
                        <motion.li
                            key={idx}
                            variants={itemVariants}
                            className='flex items-start gap-3 group'
                        >
                            <span
                                className='mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0
                                           group-hover:scale-150 group-hover:bg-primary-light
                                           transition-all duration-300'
                                style={{
                                    boxShadow: '0 0 6px var(--color-primary)',
                                }}
                            />
                            <span className='text-primary-light/90 leading-relaxed group-hover:text-primary-light transition-colors duration-300'>
                                {activity}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>

                <ChipList skills={skills} className='mt-4' />
            </Fade>
        </div>
    )
}
