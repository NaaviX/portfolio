import { useLanguage } from '@/i18n'
import { cn } from '@/lib/utils'
import { formatDurationMonthYear, useLargeScreen } from '@/utils/Utils'
import { motion } from 'framer-motion'
import { Fade } from '../../effects/Fade'
import { Subtitle } from '../../typography/Subtitle'
import { TimelineExperience } from '../timeline.type'

type TimelineItemDateProps = {
    experience: TimelineExperience
    displayDuration: boolean
    isReversed: boolean
}

export const TimelineItemDate = (props: TimelineItemDateProps) => {
    const { language } = useLanguage()
    const { isReversed, displayDuration, experience } = props
    const { dateFrom, dateTo } = experience
    const isLarge = useLargeScreen()
    const isCurrent = !dateTo

    const currentText = language === 'fr' ? 'En poste' : 'Current'
    const presentText = language === 'fr' ? 'Présent' : 'Present'

    return (
        <div
            className={cn(
                'grow-[0.3] lg:grow shrink basis-0 mr-auto p-4 flex flex-col gap-2.5',
                isLarge && isReversed
                    ? 'text-left items-start'
                    : 'text-right items-end'
            )}
        >
            <Fade>
                {isCurrent && (
                    <motion.div
                        className={cn(
                            'inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full',
                            'bg-emerald-500/10 border border-emerald-500/30'
                        )}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.span
                            className='w-2 h-2 rounded-full bg-emerald-400'
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut' as const,
                            }}
                            style={{
                                boxShadow: '0 0 8px rgba(52, 211, 153, 0.6)',
                            }}
                        />
                        <span className='text-xs font-medium text-emerald-400 tracking-wide'>
                            {currentText}
                        </span>
                    </motion.div>
                )}

                <Subtitle className='text-lg font-semibold'>
                    {dateFrom.getFullYear()}
                    {' - '}
                    {dateTo ? dateTo.getFullYear() : presentText}
                </Subtitle>

                {displayDuration && (
                    <Subtitle className='text-sm opacity-80'>
                        {formatDurationMonthYear(
                            dateFrom,
                            dateTo || new Date()
                        )}
                    </Subtitle>
                )}
            </Fade>
        </div>
    )
}
