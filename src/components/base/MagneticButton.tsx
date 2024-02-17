import { Flex, IconButton, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MouseEventHandler, useRef, useState } from 'react'
import { isDesktop } from 'react-device-detect'

interface MagneticButtonProps {
    icon: React.ReactElement | undefined
    href?: string
    ariaLabel: string
}

export const MagneticButton = (props: MagneticButtonProps) => {
    const ref = useRef<HTMLInputElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    if (!isDesktop) {
        return (
            <Flex direction='column' align='center'>
                <ButtonBody {...props} />
                <Text fontSize={'xs'}>{props.ariaLabel}</Text>
            </Flex>
        )
    }

    const handleMouse: MouseEventHandler = (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } =
            ref.current!.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position
    return (
        <Flex direction='column' align='center'>
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x, y }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            >
                <ButtonBody {...props} />
            </motion.div>
            <Text fontSize={'xs'}>{props.ariaLabel}</Text>
        </Flex>
    )
}

const ButtonBody = (props: MagneticButtonProps) => {
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
