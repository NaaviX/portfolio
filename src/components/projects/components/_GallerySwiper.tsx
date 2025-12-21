import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

type GallerySwiperProps = {
    images: string[]
    name: string
}

export const GallerySwiper = (props: GallerySwiperProps) => {
    const { images, name } = props
    return (
        <Swiper
            style={{
                // @ts-expect-error CSS custom properties for Swiper
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={80}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
        >
            {images.map((image) => (
                <SwiperSlide key={image}>
                    <img
                        src={image}
                        alt={name}
                        loading='lazy'
                        className='w-full'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
