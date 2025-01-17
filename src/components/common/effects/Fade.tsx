import { motion } from 'framer-motion'

interface FadeProps {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const Fade = (props: FadeProps) => {
    const { children, style } = props
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'spring', duration: 3 }}
            viewport={{ once: true }}
            style={style}
        >
            {children}
        </motion.div>
    )
}
