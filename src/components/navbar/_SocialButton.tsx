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
        <a
            href={href}
            aria-label={label}
            className='inline-flex items-center justify-center w-10 h-10 rounded-md border border-border hover:border-border-hover transition-colors'
        >
            <IconComponent className='text-lg' />
        </a>
    )
}
