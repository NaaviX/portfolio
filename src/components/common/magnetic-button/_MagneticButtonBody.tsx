import { motion } from 'framer-motion'
import { MagneticButtonProps } from './magnetic-button.type'

const buttonClasses =
    'inline-flex items-center justify-center rounded-full border border-dotted border-border bg-bg text-primary-light text-xl m-1.5 p-2 hover:bg-bg-hover shadow-[rgba(0,0,0,0.2)_0px_3px_5px_-1px,rgba(0,0,0,0.14)_0px_6px_10px_0px,rgba(0,0,0,0.12)_0px_1px_18px_0px]'

export const MagneticButtonBody = (props: MagneticButtonProps) => {
    const { icon: Icon, href, ariaLabel } = props
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
                <a href={href} target='_blank' rel='noopener noreferrer'>
                    <button className={buttonClasses} aria-label={ariaLabel}>
                        <Icon />
                    </button>
                </a>
            ) : (
                <button className={buttonClasses} aria-label={ariaLabel}>
                    <Icon />
                </button>
            )}
        </motion.div>
    )
}
