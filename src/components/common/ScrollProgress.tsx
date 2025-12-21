import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #00a2c7, #4ccce6, #b6ecf7)',
                transformOrigin: '0%',
                scaleX,
                zIndex: 1001,
            }}
        />
    )
}
