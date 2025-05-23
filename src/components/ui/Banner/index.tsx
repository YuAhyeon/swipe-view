'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface BannerProps<T> {
  items: T[];
  delay?: number;
  className?: string;
  children: (item: T) => React.ReactNode;
}

export default function Banner<T>({ items, delay = 3000, className, children }: BannerProps<T>) {
  return (
    <Swiper
      loop
      autoplay={{ delay }}
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView="auto"
      centeredSlides={true}
      pagination={{
        clickable: true,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
      }}
      className={className}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="!w-[90%] h-full flex-center">
          {children(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
