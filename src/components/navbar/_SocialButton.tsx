import { motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { userData } from '../user'

type SocialButtonProps = {
    type: 'mail' | 'linkedin'
}

export const SocialButton = (props: SocialButtonProps) => {
    const { type } = props
    const href =
        type === 'mail' ? 'mailto:' + userData.email : userData.linkedin
    const IconComponent = type === 'mail' ? MdEmail : FaLinkedinIn
    const label = type === 'mail' ? 'Email' : 'LinkedIn'
    return (
        <motion.a
            href={href}
            aria-label={label}
            className='relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/40 bg-bg/40 backdrop-blur-md text-primary-light/80 transition-all duration-300 group overflow-hidden hover:border-primary/60 hover:text-white hover:shadow-[0_0_20px_rgba(0,162,199,0.15)]'
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
        >
            <IconComponent className='text-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary' />
            <motion.span
                className='absolute inset-0 bg-gradient-to-t from-primary/25 via-primary/10 to-transparent'
                initial={{ opacity: 0, y: '100%' }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' as const }}
            />
        </motion.a>
    )
}
