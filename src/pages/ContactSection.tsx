import { MagneticButton } from '@/components/common'
import { ContactForm } from '@/components/contact'
import { useLanguage } from '@/i18n'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
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
        label: 'Email',
        href: 'mailto:antoine.legrand77@gmail.com',
        icon: FiMail,
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/antoine-legrand1',
        icon: FaLinkedinIn,
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
                            className='font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-normal leading-[0.98] text-primary-light'
                        >
                            {t.contact.headlineLead}{' '}
                            <span className='text-signal'>
                                {t.contact.headlineHighlight}
                            </span>
                            .
                        </motion.h3>

                        <motion.p
                            variants={itemVariants}
                            className='text-base lg:text-lg text-ink-muted/78 leading-relaxed max-w-[52ch]'
                        >
                            {t.contact.intro}
                        </motion.p>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className='flex items-center gap-4'
                    >
                        {directLinks.map((link) => (
                            <MagneticButton
                                key={link.href}
                                icon={link.icon}
                                href={link.href}
                                ariaLabel={link.label}
                            />
                        ))}
                    </motion.div>
                </motion.aside>

                <div className='w-full'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
