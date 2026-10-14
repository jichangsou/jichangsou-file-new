import React, { Suspense } from 'react';
import SearchPage from '@/views/SearchPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '搜索结果 - 机场搜',
  description: '机场搜全量数据库实时检索结果。',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://jichangsou.com/search',
  },
};

export default function SearchRoot() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-500 text-xs font-sans">加载搜索结果中...</div>}>
      <SearchPage />
    </Suspense>
  );
}
