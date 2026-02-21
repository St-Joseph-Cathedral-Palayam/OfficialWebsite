import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cloudinaryLoader from '../utils/cloudinaryLoader';
import cloudflareLoader from '../utils/cloudflareLoader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MediaCarousel({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        {images.map((src, index) => {
          const isLocal = src.startsWith('/public/');

          return (
            <SwiperSlide key={index}>
              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  loader={isLocal ? cloudflareLoader : cloudinaryLoader}
                  unoptimized={src.startsWith('http')} 
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
