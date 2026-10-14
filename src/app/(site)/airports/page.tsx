import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { mockAirports } from '@/data/mock';
import { Layers } from 'lucide-react';
import AirportsFilterControls from '@/components/AirportsFilterControls';
import StaticAirportsList from '@/components/StaticAirportsList';

export const metadata: Metadata = {
  title: '机场大全 (全量数据库与高级筛选)',
  description: '整理机场服务资料，包括线路、价格、流量与最近记录时间。按价格、协议、地区高级筛选。',
  alternates: {
    canonical: 'https://jichangsou.com/airports',
  },
  openGraph: {
    title: '机场大全 (全量数据库与高级筛选)',
    description: '整理机场服务资料，包括线路、价格、流量与最近记录时间。按价格、协议、地区高级筛选。',
    url: 'https://jichangsou.com/airports',
  },
};

export default function Airports() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      {/* 1. Page Header - Server Rendered Static HTML */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Database Archive</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            机场大全 (高级筛选)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            实时按价格门槛、线路架构、传输协议与节点地区精准检索全量机场。
          </p>
        </div>
      </div>

      {/* 2. Interactive Filter & Card Grid with Static HTML Fallback */}
      <Suspense fallback={<StaticAirportsList airports={mockAirports} />}>
        <AirportsFilterControls airports={mockAirports} />
      </Suspense>
    </div>
  );
}
