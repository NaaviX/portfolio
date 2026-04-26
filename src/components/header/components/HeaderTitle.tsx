import { motion } from 'framer-motion'
import { userData } from '../../user/user.data'

const easeOutQuart = [0.25, 1, 0.5, 1] as [number, number, number, number]

export const HeaderTitle = () => {
    return (
        <motion.h1
            id='hero-name'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutQuart, delay: 0.05 }}
            className='font-heading font-semibold text-primary-light leading-[0.88] tracking-[-0.045em] text-[clamp(3.75rem,11vw,9.5rem)]'
            style={{ fontStretch: '85%' }}
        >
            <span className='block'>{userData.firstname}</span>
            <span className='block'>
                {userData.lastname}
                <span className='text-primary align-super text-[0.35em] ml-1'>
                    .
                </span>
            </span>
        </motion.h1>
    )
}
