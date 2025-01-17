import { useMagneticButton } from '@/hooks/useMagneticButton'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { isDesktop } from 'react-device-detect'
import { MagneticButtonBody } from './_MagneticButtonBody'
import { MagneticButtonProps } from './magnetic-button.type'

export const MagneticButton = (props: MagneticButtonProps) => {
    const ref = useRef<HTMLInputElement>(null)
    const { handleMouse, reset, x, y } = useMagneticButton(ref)

    if (!isDesktop) {
        return (
            <Flex direction='column' align='center'>
                <MagneticButtonBody {...props} />
                <Text fontSize={'xs'}>{props.ariaLabel}</Text>
            </Flex>
        )
    }

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
                <MagneticButtonBody {...props} />
            </motion.div>
            <Text fontSize={'xs'}>{props.ariaLabel}</Text>
        </Flex>
    )
}
