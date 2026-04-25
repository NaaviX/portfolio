import { useLanguage } from '@/i18n'
import { motion } from 'framer-motion'

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

    return (
        <motion.button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className='relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/40 bg-bg/40 backdrop-blur-md text-primary-light/80 transition-all duration-300 group overflow-hidden hover:border-primary/60 hover:text-white hover:shadow-[0_0_20px_rgba(0,162,199,0.15)] font-medium text-sm'
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label={
                language === 'fr' ? 'Switch to English' : 'Passer en français'
            }
        >
            <span className='relative z-10 uppercase'>
                {language === 'fr' ? 'EN' : 'FR'}
            </span>
            <motion.span
                className='absolute inset-0 bg-gradient-to-t from-primary/25 via-primary/10 to-transparent'
                initial={{ opacity: 0, y: '100%' }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' as const }}
            />
        </motion.button>
    )
}
