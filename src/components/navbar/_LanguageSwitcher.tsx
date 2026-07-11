import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const next = language === 'fr' ? 'en' : 'fr'

    return (
        <motion.button
            onClick={() => setLanguage(next)}
            whileTap={{ scale: 0.96 }}
            aria-label={
                next === 'en' ? 'Switch to English' : 'Passer en français'
            }
            className='inline-flex h-10 items-center gap-1 rounded-full border border-border-subtle/0 px-2 text-xs font-medium text-primary-light/55 transition-colors duration-200 cursor-pointer bg-transparent hover:border-border-subtle/70 hover:text-primary-light'
        >
            <Slot active={language === 'fr'} reduce={reduce} label='FR' />
            <span className='text-primary-light/25'>/</span>
            <Slot active={language === 'en'} reduce={reduce} label='EN' />
            <span className='sr-only' aria-live='polite'>
                {language === 'fr' ? 'Français actif' : 'English active'}
            </span>
        </motion.button>
    )
}

const Slot = ({
    active,
    reduce,
    label,
}: {
    active: boolean
    reduce: boolean
    label: string
}) => (
    <span className='relative inline-flex h-4 w-[1.6em] items-center justify-center overflow-hidden'>
        <AnimatePresence initial={false} mode='popLayout'>
            <motion.span
                key={String(active)}
                initial={
                    reduce
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: active ? -10 : 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                    reduce
                        ? { opacity: 0 }
                        : { opacity: 0, y: active ? 10 : -10 }
                }
                transition={{ duration: 0.45, ease: EASE_OUT_QUART }}
                className={active ? 'text-primary' : 'text-primary-light/40'}
            >
                {label}
            </motion.span>
        </AnimatePresence>
    </span>
)
