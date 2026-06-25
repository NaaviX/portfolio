import { MagneticButton } from '@/components/common'
import { Modal } from '@/components/common/Modal'
import { useLanguage } from '@/i18n/LanguageContext'
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

export const Gallery = (props: GalleryProps) => {
    const { size = 'normal', hideLabel = false, ...project } = props
    const [isOpen, setIsOpen] = useState(false)
    const { language } = useLanguage()
    const imageCount = project.images.length

    if (imageCount <= 1) {
        return null
    }

    const label = language === 'fr' ? 'Galerie' : 'Gallery'

    return (
        <>
            <MagneticButton
                icon={IoMdImages}
                ariaLabel={label}
                size={size}
                hideLabel={hideLabel}
                onClick={() => setIsOpen(true)}
            />
            <Modal
                title={project.name}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                variant='gallery'
            >
                <GallerySwiper {...project} />
            </Modal>
        </>
    )
}
