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
            className='relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/60 bg-bg/30 backdrop-blur-sm text-primary-light/80 transition-all duration-300 group overflow-hidden hover:border-primary/50 hover:text-primary hover:bg-primary/10'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconComponent className='text-lg relative z-10 transition-transform duration-300 group-hover:scale-110' />
            <span className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_12px_rgba(0,162,199,0.3)]' />
        </motion.a>
    )
}
