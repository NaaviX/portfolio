import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

export const ScrollIndicator = () => {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 200], [1, 0])
    const y = useTransform(scrollY, [0, 200], [0, 20])

    return (
        <motion.div style={{ opacity, y }}>
            <Link to='experiences' smooth={true} spy={true} offset={-100}>
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3 group'>
                    <span className='text-xs tracking-[0.3em] uppercase text-primary-dark/70 group-hover:text-primary-light transition-colors duration-300'>
                        Scroll
                    </span>
                    <div className='relative'>
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut' as const,
                            }}
                            className='text-primary-dark group-hover:text-primary transition-colors duration-300'
                        >
                            <FaChevronDown size='1.2rem' />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut' as const,
                                delay: 0.15,
                            }}
                            className='absolute top-3 left-0 text-primary-dark/50'
                        >
                            <FaChevronDown size='1.2rem' />
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
