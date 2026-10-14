import React from 'react';
import ComparePage from '@/views/ComparePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '机场对比与客观评测｜价格、流量与专线线路架构对比',
  description: '对比两家机场在价格、流量、专线线路架构与稳定性上的客观差异，帮助用户做出明智的选择。',
  alternates: {
    canonical: 'https://jichangsou.com/compare',
  },
  openGraph: {
    title: '机场对比与客观评测｜价格、流量与专线线路架构对比',
    description: '对比两家机场在价格、流量、专线线路架构与稳定性上的客观差异，帮助用户做出明智的选择。',
    url: 'https://jichangsou.com/compare',
  },
};

export default function CompareRoot() {
  return <ComparePage />;
}
