import { IconButton, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MagneticButtonProps } from './magnetic-button.type'

export const MagneticButtonBody = (props: MagneticButtonProps) => {
    const { icon, href, ariaLabel } = props
    return (
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
                duration: 0.6,
                ease: 'linear',
                repeat: Infinity,
                repeatDelay: 5,
            }}
        >
            {href ? (
                <Link href={href} isExternal>
                    <IconButton
                        _hover={{ bgColor: 'bg-hover' }}
                        border='1px dotted'
                        icon={icon}
                        isRound
                        aria-label={ariaLabel}
                        fontSize='xl'
                        color='primary-light'
                        bgColor='bg'
                        m='5px'
                        shadow='rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;'
                    />
                </Link>
            ) : (
                <IconButton
                    _hover={{ bgColor: 'bg-hover' }}
                    border='1px dotted'
                    icon={icon}
                    isRound
                    aria-label={ariaLabel}
                    fontSize='xl'
                    color='primary-light'
                    bgColor='bg'
                    m='5px'
                    shadow='rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;'
                />
            )}
        </motion.div>
    )
}
