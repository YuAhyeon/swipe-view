import Link from 'next/link';
import Image from 'next/image';

interface ChatBannerItemProps {
  id: string;
  title: string;
  src: string;
  startAt: string;
  endAt: string;
}

export default function ChatBannerItem(item: ChatBannerItemProps) {
  if (!item) return null;

  const { id, title, src } = item;
  return (
    <Link
      className={`w-full h-[300px] rounded-lg flex-center flex-col overflow-hidden shadow-sm`}
      href={`/event/${id}`}
    >
      <div className="relative w-full h-[210px]">
        <Image
          src={src}
          alt="user profile"
          fill
          objectFit="cover"
          quality={75}
          priority
          placeholder="empty"
          draggable="false"
        />
      </div>
      <div className="w-full px-[10px] flex flex-1 flex-col justify-center gap-[10px]">
        <div className="flex items-center justify-between font-bold">
          <h3 className="text-[0.9rem]">
            {title.length > 24 ? title.slice(0, 27) + '···' : title}
          </h3>
          <button
            type="button"
            className="text-[0.8rem] text-primary px-[11px] py-[2px] border border-primary rounded-full"
          >
            투표하기
          </button>
        </div>
        <p className="self-end text-[0.8rem]">2020.02.08 10:00 ~ 2020.04.08 17 (KST)</p>
      </div>
    </Link>
  );
}
