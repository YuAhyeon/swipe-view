'use client';
import { Nav } from '@/components/layout';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CATEGORY } from '@/helper/constants';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="w-[100dvw] h-[100dvh] pt-[66px]">
      <Nav swiper={swiperInstance} activeIndex={activeIndex} />
      <Swiper
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
        {CATEGORY.map(({ key }) => (
          <SwiperSlide key={key}>
            <div className="h-full">{children}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
