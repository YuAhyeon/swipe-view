"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";

const categories = ["chart", "whook"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <Swiper
      speed={500}
      onSlideChange={({ activeIndex }) => {
        router.push(`/${categories[activeIndex]}`);
      }}
      initialSlide={0}
      slidesPerView={1}
    >
      {categories.map((category) => {
        return (
          <SwiperSlide key={category}>
            <div className="h-[100vh]">{children}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
