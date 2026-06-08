import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion'

export const GlobalBackground = () => {
    const reduce = useReducedMotion() ?? false
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, -120])

    const content = (
        <>
            <div className='absolute left-0 top-[12vh] h-px w-full bg-gradient-to-r from-transparent via-primary/24 to-transparent' />
            <div className='absolute left-[12vw] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/16 to-transparent' />
            <div className='absolute right-[18vw] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-light/8 to-transparent' />
        </>
    )

    if (reduce) {
        return (
            <div
                aria-hidden
                className='pointer-events-none fixed inset-0 z-[-1] overflow-hidden'
            >
                {content}
            </div>
        )
    }

    return (
        <motion.div
            aria-hidden
            className='pointer-events-none fixed inset-0 z-[-1] overflow-hidden'
            style={{ y }}
        >
            {content}
        </motion.div>
    )
}
