import { MagneticButton } from '@/components/common'
import { Modal } from '@/components/common/Modal'
import { Box, useDisclosure } from '@chakra-ui/react'
import { IoMdImages } from 'react-icons/io'
import { Project } from '../projects.type'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

// import required modules
import { GallerySwiper } from './_GallerySwiper'

export const Gallery = (project: Project) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    if (project.images.length > 1) {
        return (
            <>
                <Box onClick={() => onOpen()}>
                    <MagneticButton
                        ariaLabel='Galerie'
                        icon={<IoMdImages size='1.3rem' />}
                    />
                </Box>
                <Modal title={project.name} isOpen={isOpen} onClose={onClose}>
                    {/*project.images.map((image) => (
                        <Image
                            src={image}
                            alt={project.name}
                            key={image}
                            width='30%'
                        />
                    ))*/}
                    <GallerySwiper {...project} />
                </Modal>
            </>
        )
    }
}
