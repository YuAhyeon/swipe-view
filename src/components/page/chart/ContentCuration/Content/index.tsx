import Link from 'next/link';
import Image from 'next/image';
import { Content as CurationContent } from '@/types';

export default function Content({ id, title, src }: CurationContent) {
  return (
    <Link href={`/content/${id}`} className="w-full flex items-start gap-[15px]">
      <div className="relative w-[90px] h-[90px] rounded-lg overflow-hidden">
        <Image
          src={src}
          alt="콘텐츠 이미지"
          fill
          quality={75}
          priority
          placeholder="empty"
          draggable="false"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="flex-1 font-bold pt-[10px]">{title}</p>
    </Link>
  );
}
