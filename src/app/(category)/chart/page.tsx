'use client';

import { useQuery } from '@tanstack/react-query';
import { Banner } from '@/components/ui';
import { ChartBannerItem, ContentCuration } from '@/components/page/chart';
import { BannerItem } from '@/types';
import { getChatBanner } from '@/app/services';

export default function ChartPage() {
  const { data: items = [] } = useQuery<BannerItem[]>({
    queryKey: ['chat-banner'],
    queryFn: getChatBanner,
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full min-h-[360px] bg-white overflow-visible">
        <Banner items={items} className="w-full h-full bg-banner-bg ">
          {(item) => <ChartBannerItem {...item} />}
        </Banner>
      </div>
      <ContentCuration />
    </div>
  );
}
