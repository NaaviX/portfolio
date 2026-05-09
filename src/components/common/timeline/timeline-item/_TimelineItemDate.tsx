import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { formatDurationMonthYear, useLargeScreen } from '@/utils/Utils'
import { motion } from 'framer-motion'
import { Fade } from '../../effects/Fade'
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
                'grow-[0.3] lg:grow shrink basis-0 mr-auto p-2 md:p-4 flex flex-col gap-3',
                isLarge && isReversed
                    ? 'text-left items-start'
                    : 'text-right items-end'
            )}
        >
            <Fade>
                {isCurrent && (
                    <motion.div
                        className='inline-flex items-center gap-2 px-3 py-1 mb-1 rounded-full border border-primary/30 bg-primary/10'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: EASE_OUT_QUART }}
                    >
                        <motion.span
                            className='w-1.5 h-1.5 rounded-full bg-primary'
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: EASE_OUT_QUART,
                            }}
                            style={{ boxShadow: '0 0 6px var(--color-primary)' }}
                        />
                        <span className='font-mono text-[0.6rem] tracking-[0.2em] uppercase text-primary'>
                            {currentText}
                        </span>
                    </motion.div>
                )}

                <div
                    className='leading-none tabular-nums'
                    style={{
                        fontFamily:
                            "'Bricolage Grotesque', Inter, system-ui, sans-serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.04em',
                        fontStretch: '85%',
                        lineHeight: 1.05,
                        color: 'var(--color-primary-light)',
                    }}
                >
                    <span>{dateFrom.getFullYear()}</span>
                    <span
                        className='mx-1.5'
                        style={{
                            color: 'var(--color-primary)',
                            opacity: 0.5,
                            fontWeight: 300,
                        }}
                    >
                        /
                    </span>
                    <span style={{ opacity: dateTo ? 1 : 0.5 }}>
                        {dateTo ? dateTo.getFullYear() : presentText}
                    </span>
                </div>

                {displayDuration && (
                    <span className='font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary-light/50'>
                        {formatDurationMonthYear(dateFrom, dateTo || new Date())}
                    </span>
                )}
            </Fade>
        </div>
    )
}
