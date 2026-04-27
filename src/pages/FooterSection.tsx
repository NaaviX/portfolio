import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BUILD_YEAR = new Date().getFullYear()

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const FooterSection = () => {
    const { t } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const yearRange = t.footer.yearRange.replace('{year}', String(BUILD_YEAR))

    return (
        <footer className='relative mt-24 px-6 md:px-12 lg:px-20'>
            <div className='mx-auto max-w-[1440px]'>
                <div
                    aria-hidden='true'
                    className='h-px w-full bg-gradient-to-r from-transparent via-border-subtle/60 to-transparent'
                />
                <div className='flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-light/55'>
                    <div className='flex items-center gap-3'>
                        <span className='text-primary-light/80'>
                            {t.footer.wordmark}
                        </span>
                        <span className='text-primary-light/25'>·</span>
                        <span>{yearRange}</span>
                    </div>

                    <div
                        className='flex items-center gap-2'
                        aria-label={t.footer.statusLive}
                    >
                        <span className='relative flex h-1.5 w-1.5'>
                            {!reduce && (
                                <motion.span
                                    aria-hidden='true'
                                    className='absolute inset-0 rounded-full bg-primary'
                                    initial={{ scale: 1, opacity: 0.6 }}
                                    animate={{ scale: 2.6, opacity: 0 }}
                                    transition={{
                                        duration: 2.4,
                                        ease: EASE_OUT_QUART,
                                        repeat: Infinity,
                                        repeatDelay: 0.4,
                                    }}
                                />
                            )}
                            <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-primary' />
                        </span>
                        <span className='text-primary-light/70'>
                            {t.footer.statusLive}
                        </span>
                        <span className='text-primary-light/25'>·</span>
                        <span>{t.footer.madeIn}</span>
                    </div>

                    <button
                        type='button'
                        onClick={scrollTop}
                        aria-label={t.footer.backToTop}
                        className='group inline-flex items-center gap-2 rounded-full border border-border-subtle/0 px-2 py-1 text-primary-light/55 transition-colors duration-300 hover:text-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
                    >
                        <span>{t.footer.backToTopShort}</span>
                        <ArrowUp className='h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5' />
                    </button>
                </div>
            </div>
        </footer>
    )
}
