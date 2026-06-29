import { useLanguage } from '@/i18n'
import { SCROLL_DURATION_MS } from '@/lib/motion'
import { animateScroll as scroll } from 'react-scroll'
import { FiArrowUp } from 'react-icons/fi'

const BUILD_YEAR = new Date().getFullYear()

const scrollTop = () => {
    scroll.scrollToTop({ duration: SCROLL_DURATION_MS })
}

export const FooterSection = () => {
    const { t } = useLanguage()
    const yearRange = t.footer.yearRange.replace('{year}', String(BUILD_YEAR))

    return (
        <footer className='relative px-4 sm:px-6 md:px-12 lg:px-20'>
            <div className='mx-auto max-w-[1440px]'>
                <div
                    aria-hidden='true'
                    className='h-px w-full bg-gradient-to-r from-transparent via-border-subtle/60 to-transparent'
                />
                <div className='flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 text-sm text-primary-light/52'>
                    <div className='flex items-center gap-3'>
                        <span className='text-primary-light/80'>
                            {t.footer.wordmark}
                        </span>
                        <span>{yearRange}</span>
                    </div>

                    <button
                        type='button'
                        onClick={scrollTop}
                        aria-label={t.footer.backToTop}
                        className='group inline-flex items-center gap-2 rounded-full border border-border-subtle/0 px-2 py-1 text-primary-light/55 transition-colors duration-300 hover:text-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
                    >
                        <span>{t.footer.backToTopShort}</span>
                        <FiArrowUp className='h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5' />
                    </button>
                </div>
            </div>
        </footer>
    )
}
