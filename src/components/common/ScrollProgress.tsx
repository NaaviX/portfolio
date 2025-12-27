import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <>
            <motion.div
                className='fixed top-0 left-0 right-0 h-[3px] z-[1001] origin-left'
                style={{
                    background:
                        'linear-gradient(90deg, #00a2c7, #4ccce6, #b6ecf7, #4ccce6, #00a2c7)',
                    backgroundSize: '200% 100%',
                    scaleX,
                }}
            />
            <motion.div
                className='fixed top-0 left-0 right-0 h-[3px] z-[1000] origin-left blur-sm'
                style={{
                    background:
                        'linear-gradient(90deg, #00a2c7, #4ccce6, #b6ecf7)',
                    scaleX,
                    opacity: 0.6,
                }}
            />
        </>
    )
}
