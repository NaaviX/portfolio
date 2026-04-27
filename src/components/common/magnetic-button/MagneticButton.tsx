import { useMagneticButton } from '@/hooks/useMagneticButton'
import { EASE_OUT_QUART } from '@/lib/motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { isDesktop } from 'react-device-detect'
import { MagneticButtonBody } from './_MagneticButtonBody'
import { MagneticButtonProps } from './magnetic-button.type'

export const MagneticButton = (props: MagneticButtonProps) => {
    const { hideLabel = false } = props
    const ref = useRef<HTMLInputElement>(null)
    const { handleMouse, reset, x, y } = useMagneticButton(ref)

    if (!isDesktop) {
        return (
            <div className='flex flex-col items-center'>
                <MagneticButtonBody {...props} />
                {!hideLabel && (
                    <span className='text-xs'>{props.ariaLabel}</span>
                )}
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
                    duration: 0.4,
                    ease: EASE_OUT_QUART,
                }}
            >
                <MagneticButtonBody {...props} />
            </motion.div>
            {!hideLabel && <span className='text-xs'>{props.ariaLabel}</span>}
        </div>
    )
}
