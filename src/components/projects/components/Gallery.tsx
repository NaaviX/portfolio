import { Modal } from '@/components/common/Modal'
import { useLanguage } from '@/i18n/LanguageContext'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { IoMdImages } from 'react-icons/io'
import { Project } from '../projects.type'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

import { GallerySwiper } from './_GallerySwiper'

type GalleryProps = Project & {
    size?: 'normal' | 'small'
    hideLabel?: boolean
}

const sizes = {
    normal: {
        button: 'h-12 w-12 m-1.5 text-xl',
        badge: 'right-0 top-0 h-4 min-w-4 px-1 text-[9px]',
        label: 'text-xs',
    },
    small: {
        button: 'h-8 w-8 m-1 text-sm',
        badge: '-right-0.5 -top-0.5 h-3.5 min-w-3.5 px-0.5 text-[8px]',
        label: 'text-[10px]',
    },
}

export const Gallery = (props: GalleryProps) => {
    const { size = 'normal', hideLabel = false, ...project } = props
    const [isOpen, setIsOpen] = useState(false)
    const { language } = useLanguage()
    const reduce = useReducedMotion() ?? false
    const imageCount = project.images.length
    const copy =
        language === 'fr'
            ? {
                  label: 'Galerie',
                  aria: `Ouvrir la galerie ${project.name}, ${imageCount} captures`,
              }
            : {
                  label: 'Gallery',
                  aria: `Open ${project.name} gallery, ${imageCount} screenshots`,
              }
    const sizeClasses = sizes[size]

    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => setIsOpen(false)

    if (imageCount <= 1) {
        return null
    }

    return (
        <>
            <div className='group/gallery relative flex flex-col items-center'>
                <motion.button
                    type='button'
                    aria-label={copy.aria}
                    onClick={onOpen}
                    className={cn(
                        'relative inline-flex items-center justify-center overflow-hidden rounded-full border border-border text-primary-light outline-none',
                        'transition-[border-color,color,background-color] duration-500 ease-out',
                        'hover:border-border-hover hover:text-primary',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                        sizeClasses.button
                    )}
                    whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    transition={{ duration: 0.45, ease: EASE_OUT_QUART }}
                >
                    <span
                        className='absolute inset-0 rounded-full bg-bg-subtle transition-colors duration-500 group-hover/gallery:bg-bg-hover'
                        aria-hidden
                    />
                    <span
                        className='absolute inset-1 rounded-full border border-primary/0 transition-colors duration-500 group-hover/gallery:border-primary/30'
                        aria-hidden
                    />
                    <IoMdImages className='relative z-10 transition-transform duration-500 group-hover/gallery:-translate-y-0.5 group-hover/gallery:scale-110' />
                    <span
                        className={cn(
                            'absolute z-10 inline-flex items-center justify-center rounded-full border border-primary/50 bg-bg-app font-mono leading-none tabular-nums text-primary',
                            sizeClasses.badge
                        )}
                        aria-hidden
                    >
                        {imageCount}
                    </span>
                </motion.button>
                {!hideLabel && (
                    <span
                        className={cn(
                            'text-primary-light/70 transition-colors duration-300 group-hover/gallery:text-primary-light',
                            sizeClasses.label
                        )}
                    >
                        {copy.label}
                    </span>
                )}
            </div>
            <Modal title={project.name} isOpen={isOpen} onClose={onClose}>
                <GallerySwiper {...project} />
            </Modal>
        </>
    )
}
