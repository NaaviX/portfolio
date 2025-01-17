import { Link as ChakraLink, Icon, IconButton } from '@chakra-ui/react'
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
    const icon = type === 'mail' ? MdEmail : FaLinkedinIn
    const label = type === 'mail' ? 'Email' : 'Linked in'
    return (
        <ChakraLink href={href}>
            <IconButton
                variant='outline'
                size={'md'}
                icon={<Icon as={icon} fontSize='lg' />}
                aria-label={label}
            />
        </ChakraLink>
    )
}
