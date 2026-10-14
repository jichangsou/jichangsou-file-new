import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Database, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  FileText, 
  TrendingUp, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  Filter,
  Grid,
  GitCompare
} from 'lucide-react';
import { mockAirports, mockArticles, mockCompareItems } from '@/data/mock';
import { getEffectiveMonthlyPrice } from '@/utils/pricing';
import HeroSearchForm from '@/components/HeroSearchForm';

export const metadata: Metadata = {
  title: '2026机场推荐与机场搜索｜便宜稳定机场、IEPL/IPLC、VLESS、Clash、ChatGPT机场',
  description: '机场搜提供中文机场搜索、机场推荐与机场评测，整理价格套餐、节点地区、IEPL/IPLC/BGP线路、VLESS/Trojan/Shadowsocks协议、Clash/Shadowrocket客户端，以及ChatGPT等AI与流媒体使用信息。',
  alternates: {
    canonical: 'https://jichangsou.com',
  },
  openGraph: {
    title: '2026机场推荐与机场搜索｜便宜稳定机场、IEPL/IPLC、VLESS、Clash、ChatGPT机场',
    description: '机场搜提供中文机场搜索、机场推荐与机场评测，整理价格套餐、节点地区、IEPL/IPLC/BGP线路、VLESS/Trojan/Shadowsocks协议、Clash/Shadowrocket客户端，以及ChatGPT等AI与流媒体使用信息。',
    url: 'https://jichangsou.com',
    type: 'website',
  },
};

export default function HomePage() {
  const featuredAirports = mockAirports.slice(0, 6);
  const guides = mockArticles.filter(a => a.type === 'guide').slice(0, 3);
  const wikis = mockArticles.filter(a => a.type === 'wiki').slice(0, 3);

  const popularTopics = [
    { title: '2026机场推荐', href: '/topics/airport-recommendations', desc: '综合资料精选' },
    { title: '便宜机场', href: '/topics/cheap-airports', desc: '低价套餐与性价比' },
    { title: '稳定机场', href: '/topics/stable-airports', desc: '中转与专线线路' },
    { title: 'IEPL机场', href: '/topics/iepl-airports', desc: '企业级物理专线' },
    { title: 'VLESS机场', href: '/topics/vless-airports', desc: '轻量无状态协议' },
    { title: 'ChatGPT机场', href: '/topics/chatgpt-airports', desc: '原生IP解封支持' },
    { title: '香港节点机场', href: '/topics/hong-kong-nodes', desc: '低延迟核心节点' },
    { title: '日本节点机场', href: '/topics/japan-nodes', desc: '高速流媒体解锁' },
    { title: 'Clash使用教程', href: '/guides', desc: '桌面端订阅导入' },
    { title: 'Shadowrocket教程', href: '/guides', desc: 'iOS小火箭上手' },
  ];

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': '机场搜',
    'url': 'https://jichangsou.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://jichangsou.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      {/* 1. Hero Section: Search-First Center */}
      <section className="bg-white border-b border-slate-200/80 py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
            <Sparkles size={13} className="text-blue-600 shrink-0" />
            <span>中文机场搜索引擎与数据库</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            找机场，先搜一下。
          </h1>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            提供机场推荐、机场评测与机场搜索，整理价格套餐、流量、香港/日本/新加坡/美国节点、IEPL/IPLC/BGP 线路、VLESS/Trojan/Shadowsocks 协议、Clash/Shadowrocket/sing-box 客户端，以及 ChatGPT、Claude、Gemini 与流媒体使用信息。
          </p>

          {/* Main Search Bar Client Form */}
          <div className="relative max-w-2xl mx-auto pt-2">
            <HeroSearchForm />

            {/* Link to Advanced Filters */}
            <div className="pt-2 text-right">
              <Link 
                href="/airports" 
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors"
              >
                <Filter size={12} />
                <span>高级筛选 (按价格/协议/地区) →</span>
              </Link>
            </div>

            {/* Crawlable Search & Ranking Quick Links (Fully prerendered for SEO) */}
            <div className="space-y-2 mt-3 text-xs">
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                <span className="text-slate-400 font-medium mr-1">热门搜索:</span>
                <Link
                  href="/topics/airport-recommendations"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  机场推荐
                </Link>
                <Link
                  href="/topics/cheap-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  便宜机场
                </Link>
                <Link
                  href="/topics/stable-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  稳定机场
                </Link>
                <Link
                  href="/topics/iepl-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  IEPL / IPLC机场
                </Link>
                <Link
                  href="/topics/vless-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  VLESS机场
                </Link>
                <Link
                  href="/guides"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  Clash教程
                </Link>
                <Link
                  href="/topics/chatgpt-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-300 hover:text-blue-600 transition-all min-h-[30px] inline-flex items-center font-medium"
                >
                  ChatGPT机场
                </Link>
                <Link
                  href="/compare"
                  className="px-2.5 py-1 rounded-lg border bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-all min-h-[30px] inline-flex items-center font-bold"
                >
                  <GitCompare size={12} className="mr-1" /> 机场对比
                </Link>
              </div>

              {/* Second Layer Tags - Prerendered directly for crawler indexing */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
                <Link
                  href="/topics/hong-kong-nodes"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  香港节点机场
                </Link>
                <Link
                  href="/topics/japan-nodes"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  日本节点机场
                </Link>
                <Link
                  href="/topics/airport-recommendations"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  新加坡节点机场
                </Link>
                <Link
                  href="/topics/stable-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  美国节点机场
                </Link>
                <Link
                  href="/guides"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  Shadowrocket教程
                </Link>
                <Link
                  href="/topics/vless-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  Trojan协议
                </Link>
                <Link
                  href="/topics/vless-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  Shadowsocks协议
                </Link>
                <Link
                  href="/topics/chatgpt-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  Claude AI机场
                </Link>
                <Link
                  href="/topics/chatgpt-airports"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  Gemini AI机场
                </Link>
                <Link
                  href="/guides"
                  className="px-2.5 py-1 rounded-lg border bg-slate-50/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all min-h-[28px] inline-flex items-center text-[11px]"
                >
                  sing-box教程
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Section 2: Airport Database Preview */}
        <section id="database-preview" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
                AIRPORT DATABASE PREVIEW
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Database size={20} className="text-blue-600 shrink-0" />
                机场数据库精选 ({featuredAirports.length} / {mockAirports.length})
              </h2>
              <p className="text-xs text-slate-500 mt-1">精选展示代表性机场，包含线路、价格、流量与核对日期</p>
            </div>
            
            <Link 
              href="/airports" 
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
            >
              查看全部 {mockAirports.length} 个机场 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredAirports.map((ap) => (
              <Link
                key={ap.id}
                href={`/airport/${ap.slug}`}
                className="bg-white border border-slate-200 hover:border-blue-500/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {ap.name}
                      </h3>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        {ap.slug}
                      </div>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded text-[11px] font-medium border shrink-0 flex items-center gap-1 ${
                      ap.status === 'normal' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${ap.status === 'normal' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {ap.status === 'normal' ? '正常运营' : '待核实'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {ap.description}
                  </p>

                  <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg text-xs font-mono text-slate-700 mb-3">
                    <span className="text-slate-400 text-[10px] block">线路架构</span>
                    <span className="font-semibold text-slate-900 truncate block">{ap.line_type}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block font-mono">最低价格</span>
                      <span className="font-bold text-blue-600">{ap.price_summary}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block font-mono">流量包</span>
                      <span className="font-semibold text-slate-900">{ap.traffic_summary}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span>核对时间: {ap.last_checked}</span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      详情 <ChevronRight size={12} />
                    </span>
                  </div>
                </div>

              </Link>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              href="/airports"
              className="inline-block px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 hover:bg-slate-100 text-xs font-bold transition-colors shadow-sm min-h-[44px]"
            >
              进入全量数据库搜索 ({mockAirports.length} 个机场) →
            </Link>
          </div>
        </section>

        {/* Section 3: Leaderboard / Ranking Preview */}
        <section id="rankings-preview" className="scroll-mt-20 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
              RANKINGS PREVIEW
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-600 shrink-0" />
              机场排行榜 Preview
            </h2>
            <p className="text-xs text-slate-500 mt-1">按价格套餐、线路架构与适用场景分类索引</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Featured Picks */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    🏆 编辑精选推荐
                  </h3>
                  <span className="text-[11px] font-mono text-blue-600 font-bold">FEATURED</span>
                </div>
                <div className="space-y-3">
                  {mockAirports.slice(0, 3).map((ap, idx) => (
                    <Link key={ap.id} href={`/airport/${ap.slug}`} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">{ap.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{ap.price_summary}</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                        正常
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-right">
                <Link href="/ranking/best" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1 min-h-[36px]">
                  查看全量精选大盘 <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Column 2: Value Leaders */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    💡 性价比精选
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">VALUE</span>
                </div>
                <div className="space-y-3">
                  {[...mockAirports]
                    .sort((a, b) => {
                      const pA = getEffectiveMonthlyPrice(a);
                      const pB = getEffectiveMonthlyPrice(b);
                      if (pA === null && pB === null) return a.id.localeCompare(b.id);
                      if (pA === null) return 1;
                      if (pB === null) return -1;
                      if (pA !== pB) return pA - pB;
                      return a.id.localeCompare(b.id);
                    })
                    .slice(0, 3)
                    .map((ap, idx) => (
                    <Link key={ap.id} href={`/airport/${ap.slug}`} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">{ap.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{ap.price_summary}</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-emerald-600 text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                        {ap.price_summary.split('/')[0]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-right">
                <Link href="/ranking/cheap" className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1 min-h-[36px]">
                  查看完整性价比榜 <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Column 3: Premium IEPL/IPLC Lines */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    ⚡ 物理专线精选
                  </h3>
                  <span className="text-[11px] font-mono text-indigo-600 font-bold">IEPL / IPLC</span>
                </div>
                <div className="space-y-3">
                  {mockAirports.filter(ap => ap.line_type.includes('IEPL') || ap.line_type.includes('IPLC')).slice(0, 3).map((ap, idx) => (
                    <Link key={ap.id} href={`/airport/${ap.slug}`} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">{ap.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono truncate max-w-[150px]">{ap.line_type}</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-indigo-600 text-xs bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 shrink-0">
                        专线
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-right">
                <Link href="/topics/iepl-airports" className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1 min-h-[36px]">
                  查看更多专线机场 <ChevronRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Recent Updates Preview */}
        <section id="updates" className="scroll-mt-20 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
                UPDATES CENTER PREVIEW
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Clock size={20} className="text-blue-600 shrink-0" />
                最近更新
              </h2>
              <p className="text-xs text-slate-500 mt-1">查看机场资料、套餐、状态与基础信息的最近记录时间</p>
            </div>

            <Link 
              href="/updates" 
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
            >
              查看全部更新 →
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 font-sans text-xs">
            {mockAirports.slice(0, 5).map((ap) => (
              <div key={ap.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-slate-100/60 transition-colors">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <Link href={`/airport/${ap.slug}`}>{ap.name}</Link>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                    机场资料更新
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-[11px] text-slate-500">
                  <span>核对时间: {ap.updated_at || ap.last_checked}</span>
                  <Link href={`/airport/${ap.slug}`} className="text-blue-600 font-bold hover:underline">
                    查看详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Guides & Encyclopedia Preview */}
        <section id="knowledge-base" className="scroll-mt-20 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
              KNOWLEDGE BASE & GUIDES
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600 shrink-0" />
              教程指南与网络百科
            </h2>
            <p className="text-xs text-slate-500 mt-1">代理协议原理解析与全平台客户端配置教程</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Guides Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <FileText size={16} className="text-blue-600 shrink-0" /> 客户端使用教程
                </h3>
                <Link href="/guides" className="text-xs font-bold text-blue-600 hover:underline">
                  全部教程 →
                </Link>
              </div>
              <div className="space-y-3">
                {guides.map((art) => (
                  <Link key={art.id} href={`/guides/${art.slug}`} className="block bg-white border border-slate-200 p-4 rounded-xl space-y-2 hover:border-blue-400 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="text-blue-600 font-bold">[{art.category}]</span>
                      <span>{art.updated_at}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{art.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{art.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Wiki Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle size={16} className="text-blue-600 shrink-0" /> 技术原理百科
                </h3>
                <Link href="/wiki" className="text-xs font-bold text-emerald-700 hover:underline">
                  全部百科 →
                </Link>
              </div>
              <div className="space-y-3">
                {wikis.map((art) => (
                  <Link key={art.id} href={`/wiki/${art.slug}`} className="block bg-white border border-slate-200 p-4 rounded-xl space-y-2 hover:border-emerald-400 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="text-emerald-700 font-bold">[{art.category}]</span>
                      <span>{art.updated_at}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{art.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{art.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 6: Popular Topics Index */}
        <section id="popular-topics" className="scroll-mt-20 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
              POPULAR TOPICS INDEX
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Grid size={20} className="text-blue-600 shrink-0" />
              热门机场专题
            </h2>
            <p className="text-xs text-slate-500 mt-1">按价格、线路、协议、节点和使用场景快速查找相关内容。</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {popularTopics.map((topic, idx) => (
              <Link
                key={idx}
                href={topic.href}
                className="bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm rounded-xl p-3.5 transition-all block space-y-1 text-xs group"
              >
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>{topic.title}</span>
                  <ChevronRight size={12} className="text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
                <div className="text-[11px] text-slate-500">{topic.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 7: Methodology Disclosure Statement */}
        <section id="methodology" className="scroll-mt-20 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-base font-serif">
            <ShieldCheck size={20} className="shrink-0" />
            <span>数据方法论与可信度说明</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            机场搜持续整理机场评测、价格套餐、节点地区、IEPL/IPLC/BGP 线路、VLESS/Trojan/Shadowsocks 协议、Clash/Shadowrocket/sing-box 客户端、AI 与流媒体支持、机场状态及最近更新时间。数据页会区分测试资料、待确认信息与后续核查记录。
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>METHODOLOGY VERSION: 2026.1</span>
            <Link href="#methodology" className="text-blue-400 hover:underline">
              了解机场搜的数据方法 →
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
