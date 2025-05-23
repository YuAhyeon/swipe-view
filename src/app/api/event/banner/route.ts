const data = [
  {
    id: '1-1',
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표 참여',
    src: '/images/mc_banner_1.jpeg',
    startAt: '2025-05-20T10:00:00',
    endAt: '2025-06-03T17:00:00',
    inProgress: true,
  },
  {
    id: '1-2',
    title: '[SBS 인기가요] 글로벌 사전 투표 참여',
    src: '/images/mc_banner_1.jpeg',
    startAt: '2025-05-18T09:30:00',
    endAt: '2025-07-12T18:00:00',
    inProgress: true,
  },
  {
    id: '1-3',
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전...',
    src: '/images/mc_banner_1.jpeg',
    startAt: '2024-08-05T13:00:00',
    endAt: '2024-08-07T16:30:00',
    inProgress: false,
  },
  {
    id: '1-4',
    title: '[SBS 인기가요] 글로벌 사전 투표 참여',
    src: '/images/sbs_banner_1.png',
    startAt: '2024-09-01T08:00:00',
    endAt: '2024-09-03T12:00:00',
    inProgress: false,
  },
  {
    id: '1-5',
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전...',
    src: '/images/mc_banner_1.jpeg',
    startAt: '2025-04-15T14:45:00',
    endAt: '2025-10-17T19:15:00',
    inProgress: true,
  },
];

export async function GET() {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
