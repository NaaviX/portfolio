import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
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
    const [ringKey, setRingKey] = useState(0)
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
                    className='relative align-super text-[0.35em] ml-1 inline-block origin-bottom cursor-pointer'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.55,
                        ease: easeOutQuart,
                        delay: dotDelay,
                    }}
                    onHoverStart={() => setRingKey((k) => k + 1)}
                >
                    <motion.span
                        className='text-primary inline-block leading-none'
                        animate={{ opacity: [1, 0.72, 1] }}
                        transition={{
                            duration: 4.5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            delay: dotDelay + 0.7,
                        }}
                    >
                        .
                    </motion.span>
                    {ringKey > 0 && (
                        <motion.span
                            key={ringKey}
                            aria-hidden
                            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary pointer-events-none'
                            style={{ width: '1em', height: '1em' }}
                            initial={{ scale: 0.6, opacity: 0.55 }}
                            animate={{ scale: 2.8, opacity: 0 }}
                            transition={{
                                duration: 1,
                                ease: easeOutQuart,
                            }}
                        />
                    )}
                </motion.span>
            </span>
        </h1>
    )
}
