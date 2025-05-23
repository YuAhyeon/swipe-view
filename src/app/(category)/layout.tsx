'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Nav } from '@/components/layout';
import { CATEGORY } from '@/helper/constants';
import { Footer } from '@/components/layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="w-[100dvw] h-[100dvh] pt-[66px]">
      <Nav swiper={swiperInstance} activeIndex={activeIndex} />
      <Swiper
        tabIndex={-1}
        onSwiper={setSwiperInstance}
        onSlideChange={({ activeIndex }) => {
          setActiveIndex(activeIndex);
          router.push(`/${CATEGORY[activeIndex].key}`);
        }}
        initialSlide={0}
        slidesPerView={1}
        speed={240}
        effect="slide"
        cssMode={false}
        className="w-full h-full"
      >
        {CATEGORY.map(({ key }, index) => (
          <SwiperSlide key={key}>
            {index === activeIndex ? (
              <div ref={scrollRef} className="w-full h-full overflow-y-auto">
                {children}
              </div>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer scrollTarget={scrollRef} />
    </div>
  );
}
