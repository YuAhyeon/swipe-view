'use client';

import Link from 'next/link';
import Image from 'next/image';
import { isMatchDevice, formatDateTime } from '@/utils';

interface ChatBannerItemProps {
  id: string;
  title: string;
  src: string;
  startAt: string;
  endAt: string;
}

export default function ChatBannerItem(item: ChatBannerItemProps) {
  if (!item) return null;

  const { isMobile } = isMatchDevice();
  const { id, title, src, startAt, endAt } = item;
  const MAX_TITLE_LENGTH = isMobile ? 24 : 50;

  return (
    <Link
      className="w-full h-[300px] rounded-lg flex-center flex-col overflow-hidden border border-transparent dark:border-[#ebebeb21] shadow-sm mb-[15px]"
      href={`/content/${id}`}
    >
      <div className="relative w-full h-[210px]">
        <Image
          src={src}
          alt="배너 이미지"
          fill
          quality={75}
          priority
          placeholder="empty"
          draggable="false"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="w-full px-[10px] flex flex-1 flex-col justify-center gap-[10px]">
        <div className="flex items-center justify-between font-bold">
          <h3 className="text-[0.9rem] text-heading-text">
            {title.length > MAX_TITLE_LENGTH ? title.slice(0, MAX_TITLE_LENGTH) + '···' : title}
          </h3>
          <button
            type="button"
            aria-label="투표하기 배너 버튼"
            className="cursor-pointer text-[0.8rem] text-primary px-[11px] py-[2px] border border-primary rounded-full"
          >
            투표하기
          </button>
        </div>
        <p className="self-end text-[0.8rem] text-body-text">
          {`${formatDateTime(startAt)} ~ ${formatDateTime(endAt)} (KST)`}
        </p>
      </div>
    </Link>
  );
}
