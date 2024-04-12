import Image from 'next/image'
import { images } from '@/lib/imagesSlide'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode, } from 'swiper/modules'
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { useState } from 'react'



export function CardFrota(){
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    
    return(
        <div className='container mx-auto w-full sm:w-8/12 flex flex-col'>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='h-[500px] w-full rounded-lg shadow-xl'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='flex h-full w-full items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='block h-full w-full object-fill '
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='thumbs mt-3 h-32 w-full rounded-lg shadow-xl'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className='flex h-full w-full items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='block h-full w-full object-fill'
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}