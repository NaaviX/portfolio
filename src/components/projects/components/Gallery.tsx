import { MagneticButton } from '@/components/common'
import { Modal } from '@/components/common/Modal'
import { useState } from 'react'
import { IoMdImages } from 'react-icons/io'
import { Project } from '../projects.type'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

import { GallerySwiper } from './_GallerySwiper'

export const Gallery = (project: Project) => {
    const [isOpen, setIsOpen] = useState(false)
    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    if (project.images.length > 1) {
        return (
            <>
                <div onClick={onOpen}>
                    <MagneticButton ariaLabel='Galerie' icon={IoMdImages} />
                </div>
                <Modal title={project.name} isOpen={isOpen} onClose={onClose}>
                    <GallerySwiper {...project} />
                </Modal>
            </>
        )
    }
}
