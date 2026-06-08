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
    const Icon = type === 'mail' ? MdEmail : FaLinkedinIn
    const label = type === 'mail' ? 'Email' : 'LinkedIn'
    const isExternal = type === 'linkedin'

    return (
        <motion.a
            href={href}
            aria-label={label}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.92 }}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-light/55 transition-colors duration-200 hover:bg-primary-light/5 hover:text-primary'
        >
            <Icon className='text-lg' />
        </motion.a>
    )
}
