import { ContactForm } from '@/components/contact'
import { useLanguage } from '@/i18n'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { EASE_OUT_QUART } from '@/lib/motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE_OUT_QUART },
    },
}

const directLinks = [
    {
        label: 'antoine.legrand77@gmail.com',
        href: 'mailto:antoine.legrand77@gmail.com',
        icon: Mail,
        external: false,
    },
    {
        label: 'linkedin.com/in/antoine-legrand1',
        href: 'https://linkedin.com/in/antoine-legrand1',
        icon: FaLinkedinIn,
        external: true,
    },
]

export const ContactSection = () => {
    const { t } = useLanguage()

    return (
        <div className='w-full relative'>
            <div className='grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-20 items-start'>
                <motion.aside
                    className='flex flex-col gap-9 lg:pt-4'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-80px' }}
                    variants={containerVariants}
                >
                    <div className='flex flex-col gap-6'>
                        <motion.h3
                            variants={itemVariants}
                            className='font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] text-primary-light'
                        >
                            {t.contact.headlineLead}{' '}
                            <span className='font-normal italic text-primary'>
                                {t.contact.headlineHighlight}
                            </span>
                            .
                        </motion.h3>

                        <motion.p
                            variants={itemVariants}
                            className='text-base lg:text-lg text-primary-light/65 leading-relaxed max-w-[52ch]'
                        >
                            {t.contact.intro}
                            <br />
                            {t.contact.responseTime}
                        </motion.p>
                    </div>

                    <motion.ul
                        variants={itemVariants}
                        className='flex flex-col rounded-2xl border border-border-subtle/80 overflow-hidden divide-y divide-border-subtle/60'
                    >
                        {directLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target={
                                        link.external ? '_blank' : undefined
                                    }
                                    rel={
                                        link.external
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    className='group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-bg-hover/35'
                                >
                                    <link.icon className='w-4 h-4 text-primary shrink-0' />
                                    <span className='flex-1 text-sm lg:text-[15px] text-primary-light/85 font-medium tracking-tight truncate'>
                                        {link.label}
                                    </span>
                                    <ArrowUpRight className='w-4 h-4 text-primary-light/35 transition-all duration-500 ease-out group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                </motion.aside>

                <div className='w-full'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
