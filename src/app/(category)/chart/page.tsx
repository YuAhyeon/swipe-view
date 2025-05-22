'use client';

import { Banner } from '@/components/ui';
import { ChartBannerItem } from '@/components/page/chart';

export default function ChartPage() {
  const items = [
    {
      id: '1-1',
      title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표 참여',
      src: '/images/mc_banner_1.jpeg',
      startAt: '2024-06-01T10:00:00',
      endAt: '2024-06-03T17:00:00',
    },
    {
      id: '1-2',
      title: '[SBS 인기가요] 글로벌 사전 투표 참여',
      src: '/images/mc_banner_1.jpeg',
      startAt: '2024-06-01T10:00:00',
      endAt: '2024-06-03T17:00:00',
    },
    {
      id: '1-3',
      title: '[M COUNTDOWN] 10월 2주차 엠카 사전...',
      src: '/images/mc_banner_1.jpeg',
      startAt: '2024-06-01T10:00:00',
      endAt: '2024-06-03T17:00:00',
    },
    {
      id: '1-4',
      title: '[SBS 인기가요] 글로벌 사전 투표 참여',
      src: '/images/sbs_banner_1.png',
      startAt: '2024-06-01T10:00:00',
      endAt: '2024-06-03T17:00:00',
    },
    {
      id: '1-5',
      title: '[M COUNTDOWN] 10월 2주차 엠카 사전...',
      src: '/images/mc_banner_1.jpeg',
      startAt: '2024-06-01T10:00:00',
      endAt: '2024-06-03T17:00:00',
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-[360px] bg-white overflow-visible">
        <Banner items={items} className="w-full h-full overflow-visible">
          {(item) => <ChartBannerItem {...item} />}
        </Banner>
      </div>
      <p>ChartPage</p>
      <p>ChartPage</p>
    </div>
  );
}
