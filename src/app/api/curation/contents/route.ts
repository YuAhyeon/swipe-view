import { NextRequest } from 'next/server';

const PAGE_SIZE = 6;
const contents = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: '/images/aespa.jpeg',
  title: `에스파 Day! 'Whiplash' 오감 만족 공연형 팝업 프리 오픈 (${i + 1})`,
}));

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 7);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const data = contents.slice(start, end);
  const hasNext = end < contents.length;

  return new Response(JSON.stringify({ data, hasNext }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
