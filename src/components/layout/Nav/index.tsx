// 'use client';

import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { CATEGORY } from '@/helper/constants';
import { usePathname } from 'next/navigation';

interface NavProps {
  swiper: SwiperType | null;
  activeIndex: number;
}

export default function Nav({ swiper, activeIndex }: NavProps) {
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const targetEl = liRefs.current[activeIndex];
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeIndex]);

  const handleNavClick = (target: string) => {
    if (!swiper) return;

    const index = CATEGORY.findIndex((category) => category.key === target);

    if (index !== -1) {
      swiper.slideTo(index, 0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[66px] bg-[#FFB2B2] overflow-x-auto scrollbar-hide">
      <ul className="inline-flex min-w-full h-full justify-center items-center gap-[25px] font-bold text-[1.2rem] whitespace-nowrap px-4">
        {CATEGORY.map(({ key, label }, index) => (
          <li
            key={key}
            ref={(el) => {
              liRefs.current[index] = el;
            }}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              e.currentTarget.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
              });
              handleNavClick(key);
            }}
            className={`${pathname === `/${key}` ? 'text-white' : 'text-black'}`}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
