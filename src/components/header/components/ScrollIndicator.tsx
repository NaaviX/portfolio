import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

export const ScrollIndicator = () => {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 200], [1, 0])

    return (
        <motion.div style={{ opacity }}>
            <Link to='experiences' smooth={true} spy={true} offset={-100}>
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-primary-dark hover:text-primary-light transition-colors duration-300'>
                    <span className='text-sm tracking-widest uppercase opacity-70'>
                        Scroll
                    </span>
                    <div className='animate-bounce'>
                        <FaChevronDown size='1.5rem' />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
