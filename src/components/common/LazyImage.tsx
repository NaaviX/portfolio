import { cn } from '@/lib/utils'
import { motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface LazyImageProps {
    src: string
    alt: string
    className?: string
    variants?: Variants
}

export const LazyImage = (props: LazyImageProps) => {
    const { src, alt, className, variants } = props
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const imgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '200px' }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={imgRef} className={cn('relative', className)}>
            {!isLoaded && (
                <div className='absolute inset-0 bg-bg-subtle animate-pulse' />
            )}
            {isInView && (
                <motion.img
                    src={src}
                    alt={alt}
                    variants={variants}
                    onLoad={() => setIsLoaded(true)}
                    className={cn(
                        'w-full h-full object-cover object-top transition-opacity duration-500',
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    )}
                />
            )}
        </div>
    )
}
