import { Swiper, SwiperSlide } from 'swiper/react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { CSSProperties } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

// import required modules
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'

type GallerySwiperProps = {
    images: string[]
    name: string
}

export const GallerySwiper = (props: GallerySwiperProps) => {
    const { images, name } = props
    const { language } = useLanguage()
    const captureLabel = language === 'fr' ? 'capture' : 'screenshot'
    const imageLabel = language === 'fr' ? 'Capture' : 'Screenshot'
    const ofLabel = language === 'fr' ? 'sur' : 'of'
    const previousLabel =
        language === 'fr' ? 'Image precedente' : 'Previous image'
    const nextLabel = language === 'fr' ? 'Image suivante' : 'Next image'

    return (
        <div className='project-gallery-frame' data-lenis-prevent>
            <Swiper
                className='project-gallery-swiper'
                style={
                    {
                        '--swiper-navigation-color':
                            'var(--color-primary-light)',
                        '--swiper-pagination-color': 'var(--color-primary)',
                    } as CSSProperties
                }
                spaceBetween={48}
                grabCursor={true}
                keyboard={{ enabled: true }}
                navigation={true}
                pagination={{ clickable: true }}
                a11y={{
                    prevSlideMessage: previousLabel,
                    nextSlideMessage: nextLabel,
                    paginationBulletMessage:
                        language === 'fr'
                            ? 'Aller a la capture {{index}}'
                            : 'Go to screenshot {{index}}',
                }}
                modules={[A11y, Keyboard, Navigation, Pagination]}
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
                            </div>
                            <figcaption className='gallery-slide-caption'>
                                <span>{imageLabel}</span>
                                <span>
                                    {index + 1} {ofLabel} {images.length}
                                </span>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
