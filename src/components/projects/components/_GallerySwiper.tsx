import { Swiper, SwiperSlide } from 'swiper/react'
import { useLanguage } from '@/i18n/LanguageContext'

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
    const { language } = useLanguage()
    const captureLabel = language === 'fr' ? 'capture' : 'screenshot'
    const total = String(images.length).padStart(2, '0')

    return (
        <Swiper
            className='project-gallery-swiper'
            style={{
                // @ts-expect-error CSS custom properties for Swiper
                '--swiper-navigation-color': 'var(--color-primary-light)',
                '--swiper-pagination-color': 'var(--color-primary-light)',
            }}
            spaceBetween={56}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={image}>
                    <figure className='gallery-slide'>
                        <div className='gallery-slide-shell'>
                            <img
                                src={image}
                                alt={`${name} ${captureLabel} ${index + 1}`}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                className='gallery-slide-image'
                            />
                            <figcaption className='gallery-slide-index'>
                                <span>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span aria-hidden>/</span>
                                <span>{total}</span>
                            </figcaption>
                        </div>
                    </figure>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
