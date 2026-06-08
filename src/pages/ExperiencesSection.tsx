import { ChipList } from '@/components/common'
import { experiencesData } from '@/components/experiences'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'

const formatRange = (
    from: Date,
    to: Date | undefined,
    language: 'fr' | 'en'
) => {
    const end = to?.getFullYear() ?? (language === 'fr' ? 'Présent' : 'Present')
    return `${from.getFullYear()} - ${end}`
}

export const ExperiencesSection = () => {
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false

    return (
        <div className='w-full'>
            <div className='rounded-lg border border-border-subtle/70 bg-bg-app/36'>
                {experiencesData.map((experience, index) => {
                    const expData =
                        t.experiences[
                            experience.activitiesKey as keyof typeof t.experiences
                        ]
                    const title =
                        expData && 'title' in expData
                            ? expData.title
                            : experience.titleKey
                    const activities =
                        expData && 'activities' in expData
                            ? [...expData.activities].slice(0, 3)
                            : []
                    const type =
                        t.experiences.types[
                            experience.typeKey as keyof typeof t.experiences.types
                        ] || experience.typeKey

                    return (
                        <motion.article
                            key={experience.titleKey}
                            initial={reduce ? false : { opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{
                                duration: 0.65,
                                ease: EASE_OUT_QUART,
                                delay: index * 0.06,
                            }}
                            className='grid gap-6 border-t border-border-subtle/55 p-5 first:border-t-0 sm:p-7 lg:grid-cols-[13rem_1fr] lg:gap-10 lg:p-9'
                        >
                            <div className='flex flex-wrap items-center gap-x-4 gap-y-2 lg:block'>
                                <p className='font-heading text-2xl font-semibold leading-none text-primary tabular-nums lg:text-3xl'>
                                    {formatRange(
                                        experience.dateFrom,
                                        experience.dateTo,
                                        language
                                    )}
                                </p>
                                <p className='text-sm text-primary-light/48 lg:mt-3'>
                                    {type}
                                </p>
                            </div>

                            <div className='min-w-0'>
                                <div className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
                                    <h3 className='text-2xl font-semibold leading-tight text-primary-light md:text-3xl'>
                                        {title}
                                    </h3>
                                    <p className='text-sm text-primary-light/55'>
                                        {experience.institution}
                                        {experience.city
                                            ? `, ${experience.city}`
                                            : ''}
                                    </p>
                                </div>

                                {activities.length > 0 && (
                                    <ul className='mt-5 grid gap-3 text-sm leading-relaxed text-primary-light/68 md:grid-cols-3'>
                                        {activities.map((activity) => (
                                            <li key={activity}>{activity}</li>
                                        ))}
                                    </ul>
                                )}

                                <ChipList
                                    skills={experience.skills.slice(0, 6)}
                                    className='mt-6 justify-start'
                                />
                            </div>
                        </motion.article>
                    )
                })}
            </div>
        </div>
    )
}
