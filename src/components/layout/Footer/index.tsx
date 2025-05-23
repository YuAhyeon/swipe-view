'use client';

import type { RefObject } from 'react';
import Svg from '@/components/icon/Svg';
import { Top } from '@/components/icon';

interface FooterProps {
  scrollTarget: RefObject<HTMLDivElement | null>;
}

export default function Footer({ scrollTarget }: FooterProps) {
  const scrollToTop = () => {
    scrollTarget.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="fixed left-0 bottom-0 w-full py-6 bg-footer-bg text-white text-center z-10">
      <button
        type="button"
        aria-label="뒤로 가기 버튼"
        className=" py-1 cursor-pointer text-foreground"
        onClick={scrollToTop}
      >
        <Svg width={14} height={18} viewBox={[0, 0, 14, 18]}>
          <Top />
        </Svg>
      </button>
    </footer>
  );
}
