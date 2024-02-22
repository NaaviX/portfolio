import { MagneticButton } from '@/components/base'
import { Modal } from '@/components/base/Modal'
import { Box, Image, useDisclosure } from '@chakra-ui/react'
import { IoMdImages } from 'react-icons/io'
import { Project } from '../projects.type'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

export const Gallery = (project: Project) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    if (!project.previewLink) {
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
const GallerySwiper = (project: Project) => {
    return (
        <Swiper
            style={{
                //@ts-ignore
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={80}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
        >
            {project.images.map((image) => (
                <SwiperSlide key={image}>
                    <Image
                        src={image}
                        alt={project.name}
                        loading='lazy'
                        width='100%'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
