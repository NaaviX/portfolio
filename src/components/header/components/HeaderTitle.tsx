import { motion, useReducedMotion } from 'framer-motion'
import { EASE_OUT_QUART as easeOutQuart } from '@/lib/motion'
import { userData } from '../../user/user.data'

const CHAR_STAGGER = 0.025
const BASE_DELAY = 0.05

type CharProps = { char: string; index: number }

const Char = ({ char, index }: CharProps) => (
    <motion.span
        className='inline-block will-change-transform'
        initial={{ y: '0.4em', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            duration: 0.9,
            ease: easeOutQuart,
            delay: BASE_DELAY + index * CHAR_STAGGER,
        }}
    >
        {char === ' ' ? ' ' : char}
    </motion.span>
)

export const HeaderTitle = () => {
    const prefersReduced = useReducedMotion()
    const first = userData.firstname
    const last = userData.lastname
    const accessibleName = `${first} ${last}`

    if (prefersReduced) {
        return (
            <motion.h1
                id='hero-name'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='font-heading font-semibold text-primary-light leading-[0.88] tracking-[-0.045em] text-[clamp(3.75rem,11vw,9.5rem)]'
                style={{ fontStretch: '85%' }}
            >
                <span className='block'>{first}</span>
                <span className='block'>
                    {last}
                    <span className='text-primary align-super text-[0.35em] ml-1'>
                        .
                    </span>
                </span>
            </motion.h1>
        )
    }

    const dotDelay =
        BASE_DELAY + (first.length + last.length) * CHAR_STAGGER + 0.18

    return (
        <h1
            id='hero-name'
            aria-label={accessibleName}
            className='font-heading font-semibold text-primary-light leading-[0.88] tracking-[-0.045em] text-[clamp(3.75rem,11vw,9.5rem)]'
            style={{ fontStretch: '85%' }}
        >
            <span className='block' aria-hidden>
                {first.split('').map((c, i) => (
                    <Char key={`f-${i}`} char={c} index={i} />
                ))}
            </span>
            <span className='block' aria-hidden>
                {last.split('').map((c, i) => (
                    <Char key={`l-${i}`} char={c} index={first.length + i} />
                ))}
                <motion.span
                    className='text-primary align-super text-[0.35em] ml-1 inline-block origin-bottom'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.55,
                        ease: easeOutQuart,
                        delay: dotDelay,
                    }}
                >
                    .
                </motion.span>
            </span>
        </h1>
    )
}
