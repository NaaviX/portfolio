import { useLanguage } from '@/i18n'
import { motion } from 'framer-motion'

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()
    const next = language === 'fr' ? 'en' : 'fr'

    return (
        <motion.button
            onClick={() => setLanguage(next)}
            whileTap={{ scale: 0.95 }}
            aria-label={
                next === 'en' ? 'Switch to English' : 'Passer en français'
            }
            className='inline-flex items-center gap-1 px-2 h-11 text-xs font-medium uppercase tracking-[0.12em] text-primary-light/50 transition-colors duration-200 cursor-pointer bg-transparent border-none hover:text-primary-light'
        >
            <span
                className={
                    language === 'fr'
                        ? 'text-primary'
                        : 'text-primary-light/40'
                }
            >
                FR
            </span>
            <span className='text-primary-light/25'>/</span>
            <span
                className={
                    language === 'en'
                        ? 'text-primary'
                        : 'text-primary-light/40'
                }
            >
                EN
            </span>
        </motion.button>
    )
}
