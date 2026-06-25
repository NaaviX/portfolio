import { userData } from '@/components/user'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { FiMail } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { heroImages } from './hero.config'

const useConsoleGreeting = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return
        const w = window as typeof window & { __alGreeted?: boolean }
        if (w.__alGreeted) return
        w.__alGreeted = true

        const head =
            'color:#2fc7df;font-weight:600;font-size:13px;letter-spacing:0;'
        const body = 'color:#d7f5f7;font-size:12px;line-height:1.6;'
        const meta =
            'color:#8de3eb;font-family:ui-monospace,monospace;font-size:11px;'

        // eslint-disable-next-line no-console
        console.info('%cHi. You found the source.', head)
        // eslint-disable-next-line no-console
        console.info(
            '%cIf you are hiring or have a freelance brief, I would like to hear from you.\nantoine.legrand77@gmail.com',
            body
        )
        // eslint-disable-next-line no-console
        console.info('%cAntoine Legrand', meta)
    }, [])
}

export const Header = () => {
    useConsoleGreeting()
    const { t } = useLanguage()
    const reduce = useReducedMotion() ?? false

    return (
        <section
            aria-labelledby='hero-name'
            className='relative flex min-h-[82dvh] items-center overflow-hidden pt-20 pb-2 sm:pt-20 sm:pb-6 lg:pt-24'
        >
            <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20'>
                <div className='grid items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:gap-16'>
                    <motion.div
                        initial={reduce ? false : { opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
                        className='flex min-w-0 flex-col items-start'
                    >
                        <h1
                            id='hero-name'
                            className='font-heading text-[clamp(3.55rem,11vw,10rem)] font-semibold leading-[0.9] tracking-normal text-primary-light'
                        >
                            <span className='block'>Antoine</span>
                            <span className='block text-primary-light/86'>
                                Legrand
                                <span className='text-primary'>.</span>
                            </span>
                        </h1>

                        <p className='mt-7 max-w-[52ch] text-lg leading-relaxed text-primary-light/72 md:text-xl'>
                            {t.header.tagline}
                        </p>

                        <div className='mt-8 flex flex-wrap items-center gap-3'>
                            <Link
                                to='contact'
                                smooth
                                className='group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg-app transition duration-300 hover:bg-primary-hover active:translate-y-px'
                            >
                                {t.header.ctaContact}
                                <GoArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                            </Link>
                            <a
                                href={userData.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t.header.ctaLinkedin}
                                className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle/80 text-primary-light/70 transition duration-300 hover:border-primary hover:text-primary active:translate-y-px'
                            >
                                <FaLinkedinIn className='h-4 w-4' />
                            </a>
                            <a
                                href={`mailto:${userData.email}`}
                                aria-label='Email'
                                className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle/80 text-primary-light/70 transition duration-300 hover:border-primary hover:text-primary active:translate-y-px'
                            >
                                <FiMail className='h-4 w-4' />
                            </a>
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={reduce ? false : { opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.85,
                            ease: EASE_OUT_QUART,
                            delay: 0.12,
                        }}
                        className='relative min-h-[270px] sm:min-h-[420px] lg:min-h-[620px]'
                        aria-label='Selected project screenshots'
                    >
                        <div className='absolute inset-x-4 top-0 h-[78%] rounded-lg border border-border-subtle/70 bg-bg-subtle/70 p-3 shadow-[0_28px_90px_-55px_rgba(47,199,223,0.5)] backdrop-blur-sm sm:inset-x-10 lg:inset-x-0'>
                            <img
                                src={heroImages[0].src}
                                alt={heroImages[0].alt}
                                loading='eager'
                                decoding='async'
                                className='h-full w-full rounded-md object-cover object-top'
                            />
                        </div>

                        <div className='absolute bottom-0 left-0 hidden w-[54%] rounded-lg border border-border-subtle/80 bg-bg-subtle p-2 shadow-[0_24px_70px_-50px_rgba(47,199,223,0.65)] sm:left-8 sm:block lg:-left-6'>
                            <img
                                src={heroImages[1].src}
                                alt={heroImages[1].alt}
                                loading='lazy'
                                decoding='async'
                                className='aspect-[4/3] w-full rounded-md object-cover object-top'
                            />
                        </div>

                        <div className='absolute bottom-10 right-0 hidden w-[45%] rounded-lg border border-border-subtle/80 bg-bg-subtle p-2 shadow-[0_24px_70px_-50px_rgba(47,199,223,0.6)] sm:right-6 sm:block lg:-right-5'>
                            <img
                                src={heroImages[2].src}
                                alt={heroImages[2].alt}
                                loading='lazy'
                                decoding='async'
                                className='aspect-[3/4] w-full rounded-md object-cover object-top'
                            />
                        </div>

                        <div className='absolute right-3 top-4 hidden max-w-[12rem] rounded-lg border border-primary/28 bg-bg-app/82 p-4 backdrop-blur-md sm:block lg:-right-10'>
                            <p className='text-sm leading-snug text-primary-light/80'>
                                {t.header.metaLine}
                            </p>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    )
}
