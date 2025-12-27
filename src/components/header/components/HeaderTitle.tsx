import { motion } from 'framer-motion'
import { userData } from '../../user/user.data'

export const HeaderTitle = () => {
    return (
        <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                duration: 2,
                bounce: 0.3,
                delay: 0.1,
            }}
            viewport={{ once: true }}
        >
            <div className='relative'>
                <h1 className='text-center text-4xl md:text-6xl lg:text-8xl font-[Space_Grotesk] font-bold tracking-tight bg-gradient-to-r from-primary via-primary-dark to-primary-light bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift drop-shadow-[0_0_30px_rgba(0,162,199,0.3)]'>
                    {userData.firstname} {userData.lastname}
                </h1>
                <motion.div
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse,rgba(0,162,199,0.2)_0%,rgba(76,204,230,0.1)_30%,transparent_70%)] blur-[60px] pointer-events-none -z-10'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[radial-gradient(ellipse,rgba(182,236,247,0.08)_0%,transparent_60%)] blur-[30px] pointer-events-none -z-10' />
            </div>
        </motion.div>
    )
}
