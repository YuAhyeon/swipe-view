'use client';

import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCurationContents } from '@/app/services';
import Content from './Content';
import type { Content as CurationContent } from '@/types';

export default function ContentCuration() {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['curation-contents'],
    queryFn: getCurationContents,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length + 1 : undefined),
  });

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    const el = loadMoreRef.current;
    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <section className="flex flex-col gap-[10px] p-[20px]">
      <h2 className="text-[1.3rem] font-bold">Content Curation!</h2>
      <div className="flex flex-col gap-[20px]">
        {data?.pages.map((page) =>
          page.data.map((item: CurationContent) => <Content key={item.id} {...item} />)
        )}
        <div ref={loadMoreRef} className="h-[1px] bg-transparent" />
        {isFetchingNextPage && <p className="text-center">로딩 중...</p>}
      </div>
    </section>
  );
}
