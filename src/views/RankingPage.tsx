import React from 'react';
import Link from 'next/link';
import { mockAirports, mockAISupport } from '../data/mock';
import { getEffectiveMonthlyPrice } from '@/utils/pricing';
import { Award, DollarSign, Shield, Bot } from 'lucide-react';

interface RankingPageProps {
  type?: string;
}

// Helper to calculate AI support count
function getAISupportScore(airportId: string): number {
  const aiSupported = mockAISupport.filter(a => a.airport_id === airportId && a.status === 'supported');
  return aiSupported.length;
}

// Helper to calculate line quality score
function getLineQualityScore(lineType: string): number {
  const lt = lineType.toUpperCase();
  if (lt.includes('IEPL') || lt.includes('IPLC')) return 30;
  if (lt.includes('BGP')) return 15;
  return 5;
}

export default function RankingPage({ type = 'best' }: RankingPageProps) {
  const rankingTabs = [
    { key: 'best', label: '编辑精选 / 资料索引', icon: Award, desc: '根据线路类型、AI兼容性及在售套餐整合的编辑精选资料大盘' },
    { key: 'cheap', label: '性价比/低价榜', icon: DollarSign, desc: '按单月起步有效价格 (¥/月) 由低到高升序排列' },
    { key: 'stable', label: '线路架构优先榜', icon: Shield, desc: '按物理专线架构 (IEPL/IPLC) 与 BGP 入口链路优先级排序' },
    { key: 'ai', label: 'AI 场景解锁榜', icon: Bot, desc: '按全站记录的 ChatGPT / Claude / Gemini 支持程度排序' },
  ];

  const currentTab = rankingTabs.find(t => t.key === type) || rankingTabs[0];

  // Distinct & Verifiable Sorting Rules using getEffectiveMonthlyPrice
  const sortedAirports = [...mockAirports].sort((a, b) => {
    if (type === 'cheap') {
      const priceA = getEffectiveMonthlyPrice(a);
      const priceB = getEffectiveMonthlyPrice(b);
      if (priceA === null && priceB === null) return a.id.localeCompare(b.id);
      if (priceA === null) return 1;
      if (priceB === null) return -1;
      if (priceA !== priceB) return priceA - priceB;
      return a.id.localeCompare(b.id);
    }

    if (type === 'stable') {
      const scoreA = getLineQualityScore(a.line_type) * 3 + (a.status === 'normal' ? 5 : 0) + (a.pros.length * 2);
      const scoreB = getLineQualityScore(b.line_type) * 3 + (b.status === 'normal' ? 5 : 0) + (b.pros.length * 2);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return a.name.localeCompare(b.name, 'zh-CN');
    }

    if (type === 'ai') {
      const aiCountA = getAISupportScore(a.id);
      const aiCountB = getAISupportScore(b.id);
      const aiProsA = a.pros.filter(p => p.toLowerCase().includes('ai') || p.includes('ChatGPT')).length;
      const aiProsB = b.pros.filter(p => p.toLowerCase().includes('ai') || p.includes('ChatGPT')).length;
      const scoreA = aiCountA * 10 + aiProsA * 5;
      const scoreB = aiCountB * 10 + aiProsB * 5;
      if (scoreB !== scoreA) return scoreB - scoreA;
      return b.name.localeCompare(a.name, 'zh-CN');
    }

    // Default 'best': Balanced Composite Score
    const pA = getEffectiveMonthlyPrice(a) ?? 99;
    const pB = getEffectiveMonthlyPrice(b) ?? 99;
    const priceScoreA = Math.max(0, 100 - pA);
    const priceScoreB = Math.max(0, 100 - pB);
    const compositeA = (a.status === 'normal' ? 30 : 0) + getLineQualityScore(a.line_type) + getAISupportScore(a.id) * 8 + priceScoreA * 0.2;
    const compositeB = (b.status === 'normal' ? 30 : 0) + getLineQualityScore(b.line_type) + getAISupportScore(b.id) * 8 + priceScoreB * 0.2;
    if (compositeB !== compositeA) return compositeB - compositeA;
    return a.slug.localeCompare(b.slug);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <Award className="w-4 h-4" />
          <span>Ranking Index</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          机场排行榜大盘
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          按价格门槛、物理专线架构及 AI 工具解锁进行结构化检索与排序。
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {rankingTabs.map(tab => {
          const Icon = tab.icon;
          const active = tab.key === type;
          return (
            <Link
              key={tab.key}
              href={`/ranking/${tab.key}`}
              className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all ${
                active
                  ? 'bg-blue-50/90 text-blue-900 border-blue-300 shadow-sm font-bold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-blue-700' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Selected Ranking Rule Banner */}
      <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-4 text-xs text-blue-950 flex flex-col gap-1">
        <div className="flex items-start gap-2">
          <span className="font-bold shrink-0">📌 排序规则说明：</span>
          <span>{currentTab.desc}</span>
        </div>
        {type === 'stable' && (
          <div className="text-[11px] text-blue-800/80 pt-1 font-mono">
            注意：该排序基于公开备案的底层线路架构字段 (IEPL/IPLC 物理专线 &gt; BGP 智能中继 &gt; 普通公网)，不代表本站长期稳定性实测。
          </div>
        )}
      </div>

      {/* Ranking List */}
      <div className="space-y-3">
        {sortedAirports.map((airport, index) => (
          <div
            key={airport.id}
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
                index === 0 ? 'bg-blue-600 text-white font-black' : index === 1 ? 'bg-slate-700 text-white font-bold' : index === 2 ? 'bg-slate-500 text-white font-bold' : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                {index + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  <Link href={`/airport/${airport.slug}`} className="hover:text-blue-600 transition-colors">
                    {airport.name}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-mono">{airport.line_type}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-slate-700 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
              <div>
                <span className="block text-[10px] text-slate-400 font-mono">套餐起步</span>
                <strong className="text-slate-900 font-bold">{airport.price_summary}</strong>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-mono">资料记录时间</span>
                <span className="font-mono text-slate-600">{airport.last_checked || airport.updated_at}</span>
              </div>
              <Link
                href={`/airport/${airport.slug}`}
                className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
              >
                详情
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
