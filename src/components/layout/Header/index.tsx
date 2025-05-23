'use client';

import Svg from '@/components/icon/Svg';
import { Prev } from '@/components/icon';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 w-full h-[66px] bg-[#FFB2B2] z-10 flex-center px-[10px]">
      <button
        type="button"
        aria-label="뒤로 가기 버튼"
        className="absolute left-3 px-3 py-1 cursor-pointer"
        onClick={() => router.back()}
      >
        <Svg width={13} height={24} fill="rgb(166,166,166)" viewBox={[0, 0, 13, 24]}>
          <Prev />
        </Svg>
      </button>
    </header>
  );
}
