import { useMagneticButton } from '@/hooks/useMagneticButton'
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
            <div className='flex flex-col items-center'>
                <MagneticButtonBody {...props} />
                <span className='text-xs'>{props.ariaLabel}</span>
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center'>
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
            <span className='text-xs'>{props.ariaLabel}</span>
        </div>
    )
}
