import React from 'react';
import Link from 'next/link';
import { mockCompareItems, mockAirports } from '../data/mock';
import { GitCompare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ComparePageProps {
  slug?: string;
}

export default function ComparePage({ slug }: ComparePageProps) {
  const activeCompare = mockCompareItems.find(c => c.slug === slug) || mockCompareItems[0];

  const airport1 = mockAirports.find(a => a.id === activeCompare.airport1_id) || mockAirports[0];
  const airport2 = mockAirports.find(a => a.id === activeCompare.airport2_id) || mockAirports[1];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Page Header with Single H1 */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <GitCompare className="w-4 h-4" />
          <span>Side-by-Side Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {slug ? activeCompare.title : '机场对比与客观评测'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          对比两家机场在价格、流量、专线线路架构与稳定性上的客观差异
        </p>
      </div>

      {/* Compare Items Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {mockCompareItems.map(item => (
          <Link
            key={item.id}
            href={`/compare/${item.slug}`}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              item.slug === activeCompare.slug
                ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-sm font-bold'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Comparison Grid Container */}
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">{activeCompare.title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-l-2 border-blue-600 pl-3">
          {activeCompare.summary}
        </p>

        {/* Side-by-side comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                <th className="py-3 px-4 font-semibold">对比维度</th>
                <th className="py-3 px-4 font-bold text-blue-600 font-sans">{airport1.name}</th>
                <th className="py-3 px-4 font-bold text-indigo-600 font-sans">{airport2.name}</th>
              </tr>
            </thead>
            <tbody className="text-slate-800 divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">运营状态</td>
                <td className="py-3 px-4 text-emerald-700 font-bold">{airport1.status === 'normal' ? '正常运营' : '待核实'}</td>
                <td className="py-3 px-4 text-emerald-700 font-bold">{airport2.status === 'normal' ? '正常运营' : '待核实'}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">起步价格</td>
                <td className="py-3 px-4 font-bold">{airport1.price_summary}</td>
                <td className="py-3 px-4 font-bold">{airport2.price_summary}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">核心线路架构</td>
                <td className="py-3 px-4">{airport1.line_type}</td>
                <td className="py-3 px-4">{airport2.line_type}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">流量配置</td>
                <td className="py-3 px-4">{airport1.traffic_summary}</td>
                <td className="py-3 px-4">{airport2.traffic_summary}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">数据最后检查时间</td>
                <td className="py-3 px-4 text-slate-400 font-mono">{airport1.last_checked}</td>
                <td className="py-3 px-4 text-slate-400 font-mono">{airport2.last_checked}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Automated Objective Conclusion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200/80 space-y-1">
            <span className="text-slate-500 text-[11px] font-medium">适合价格与起步门槛敏感用户：</span>
            <div className="font-bold text-blue-700 text-sm">{activeCompare.recommendation.price_sensitive}</div>
          </div>
          <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-200/80 space-y-1">
            <span className="text-slate-500 text-[11px] font-medium">适合高吞吐流量需求用户：</span>
            <div className="font-bold text-indigo-700 text-sm">{activeCompare.recommendation.traffic_demanding}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
