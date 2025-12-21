import { motion } from 'framer-motion'
import { userData } from '../../user/user.data'

export const HeaderTitle = () => {
    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{
                type: 'spring',
                duration: 2,
                bounce: 0.3,
                delay: 0.1,
            }}
            viewport={{ once: true }}
        >
            <div className='relative'>
                <h1 className='text-center text-4xl md:text-6xl lg:text-8xl font-[Space_Grotesk] font-bold tracking-tight bg-gradient-to-r from-primary via-primary-dark to-primary-light bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift'>
                    {userData.firstname} {userData.lastname}
                </h1>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 bg-[radial-gradient(ellipse,rgba(0,162,199,0.15)_0%,transparent_70%)] blur-[40px] pointer-events-none -z-10' />
            </div>
        </motion.div>
    )
}
