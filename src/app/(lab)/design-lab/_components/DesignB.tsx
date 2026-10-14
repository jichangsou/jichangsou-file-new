'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Layers, Award, Clock, ArrowRight, ShieldAlert, Sparkles, TrendingUp, Compass, Hash, Feather } from 'lucide-react';
import { mockAirports, mockArticles, mockCompareItems } from '@/data/mock';

export default function DesignB() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredAirports = mockAirports.filter(ap => {
    const match = ap.name.toLowerCase().includes(searchTerm.toLowerCase()) || ap.line_type.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterType === 'vless') return match && ap.line_type.includes('VLESS');
    if (filterType === 'iepl') return match && ap.line_type.includes('IEPL');
    return match;
  });

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#101216] text-[#E3E5EB] font-sans z-50 select-none">
      {/* Top Editorial Masthead Bar */}
      <div className="bg-[#181B21] border-b border-[#282D37] text-xs py-2 px-6 text-[#9A9FAE]">
        <div className="max-w-6xl mx-auto flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px]">
              DESIGN B | Tech Editorial & Platform
            </span>
            <span className="hidden sm:inline">VOL. 2026 • ISSUE 09</span>
          </div>
          <div className="flex items-center gap-4">
            <span>2026-09-15 星期二</span>
            <span className="text-amber-400">独立视角 • 中立数据</span>
          </div>
        </div>
      </div>

      {/* Main Journal Masthead Header */}
      <header className="border-b border-[#282D37] bg-[#14171D]">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-mono">
            THE CHINESE AIRPORT SEARCH & DATABASE JOURNAL
          </div>
          
          <Link href="/design-lab/b" className="inline-block">
            <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#F4EFE6] tracking-tight">
              机场搜 <span className="font-sans font-light text-2xl text-amber-400/80">JICHANGSOU</span>
            </h1>
          </Link>

          <p className="text-[#9A9FAE] text-xs sm:text-sm font-serif italic max-w-lg mx-auto">
            “找机场，先搜一下。” — 专注机场搜索、数据库评估与网络技术科普
          </p>

          {/* Navigation Bar */}
          <nav className="pt-4 flex items-center justify-center gap-8 text-xs font-mono tracking-wider text-[#A2A8B8] border-t border-[#232732] max-w-2xl mx-auto">
            <a href="#search-section" className="text-[#F4EFE6] hover:text-amber-400 transition-colors">[搜索]</a>
            <a href="#database" className="hover:text-amber-400 transition-colors">[机场大盘]</a>
            <a href="#rankings" className="hover:text-amber-400 transition-colors">[排行榜]</a>
            <a href="#editorial" className="hover:text-amber-400 transition-colors">[技术专栏]</a>
            <a href="#wiki" className="hover:text-amber-400 transition-colors">[网络百科]</a>
          </nav>
        </div>
      </header>

      {/* Hero Section: Editorial Grid (Search + Spotlight) */}
      <section id="search-section" className="border-b border-[#282D37] bg-[#14171D]/50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Search & Quick Navigation (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                <Compass size={14} />
                <span>SEARCH ENGINE & DATABASE</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EFE6] leading-tight">
                全面检索 10+ 验证机场与专线节点资料
              </h2>
            </div>

            {/* Search Box */}
            <div className="relative">
              <div className="flex items-center bg-[#1B1E26] border border-[#343B48] focus-within:border-amber-400/80 rounded-xl overflow-hidden p-1.5 transition-colors">
                <Search className="ml-3 text-[#787E8F]" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="搜索机场名称、IEPL专线、VLESS协议、价格或地区..."
                  className="w-full bg-transparent py-3 px-3 text-sm text-[#F4EFE6] placeholder-[#626875] outline-none"
                />
                <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0">
                  即时检索
                </button>
              </div>

              {/* Tag Filters */}
              <div className="flex items-center gap-2 mt-3 text-xs">
                <span className="text-[#787E8F] font-mono">分类过滤:</span>
                {[
                  { label: '全部', key: 'all' },
                  { label: 'VLESS 协议', key: 'vless' },
                  { label: 'IEPL 专线', key: 'iepl' },
                ].map(t => (
                  <button
                    key={t.key}
                    onClick={() => setFilterType(t.key)}
                    className={`px-2.5 py-1 rounded text-xs border font-mono ${
                      filterType === t.key
                        ? 'bg-amber-400/10 text-amber-400 border-amber-400/40'
                        : 'bg-[#181B21] text-[#9A9FAE] border-[#2A2F3A] hover:bg-[#20242D]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Ticker */}
            <div className="p-4 rounded-xl bg-[#181B21] border border-[#282D37] text-xs font-mono space-y-1.5">
              <div className="text-amber-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                最新监测动态 (2026-09-15)
              </div>
              <p className="text-[#9A9FAE] leading-relaxed">
                暮光加速已更新香港 FullCone UDP 转发节点；隐形人机场全节点维持 1 倍率扣费无并发限制。
              </p>
            </div>
          </div>

          {/* Right Column: Featured Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#181B21] border border-[#2D333F] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#282D37] pb-3">
              <span className="text-xs font-mono uppercase text-amber-400 flex items-center gap-1.5">
                <Award size={14} /> 编辑部每周精选
              </span>
              <span className="text-[11px] text-[#787E8F] font-mono">RATING: 9.9</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#F4EFE6]">
                {mockAirports[0].name}
              </h3>
              <p className="text-xs text-[#A2A8B8] leading-relaxed line-clamp-3 font-serif">
                {mockAirports[0].description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-[#242832]">
              <div className="bg-[#121417] p-2.5 rounded border border-[#262B35]">
                <span className="text-[#787E8F] block text-[10px]">线路架构</span>
                <span className="text-[#E3E5EB] font-bold">{mockAirports[0].line_type}</span>
              </div>
              <div className="bg-[#121417] p-2.5 rounded border border-[#262B35]">
                <span className="text-[#787E8F] block text-[10px]">最低价格</span>
                <span className="text-amber-400 font-bold">{mockAirports[0].price_summary}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1: Editorial Database Grid */}
        <section id="database" className="space-y-6">
          <div className="flex items-end justify-between border-b border-[#282D37] pb-4">
            <div>
              <div className="text-xs text-amber-400 font-mono uppercase tracking-wider">DATABASE CATALOG</div>
              <h2 className="font-serif text-2xl font-bold text-[#F4EFE6] mt-1">
                机场数据目录
              </h2>
            </div>
            <span className="text-xs font-mono text-[#787E8F]">共收录 {filteredAirports.length} 家测试机构</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAirports.map((ap) => (
              <div key={ap.id} className="bg-[#161920] border border-[#282D37] hover:border-amber-400/40 rounded-xl p-6 space-y-4 transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#F4EFE6] flex items-center gap-2">
                      {ap.name}
                      <span className="font-sans text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                        {ap.status === 'normal' ? '正常' : '待核'}
                      </span>
                    </h3>
                    <div className="text-xs text-[#787E8F] font-mono mt-0.5">{ap.line_type}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm font-bold text-amber-400">{ap.status === 'normal' ? '正常运营' : '待核实'}</span>
                    <span className="text-[10px] text-[#787E8F] block">复核状态</span>
                  </div>
                </div>

                <p className="text-xs text-[#A2A8B8] leading-relaxed font-serif line-clamp-2">
                  {ap.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {ap.pros.map((p, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#1C2029] border border-[#2B313F] text-[#B5BAC9] rounded">
                      ✓ {p}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#232732] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9A9FAE]">起步: <strong className="text-[#F4EFE6]">{ap.price_summary}</strong></span>
                  <span className="text-amber-400 flex items-center gap-1 hover:underline cursor-pointer">
                    阅读完整报告 <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Rankings & Comparisons */}
        <section id="rankings" className="space-y-6">
          <div className="border-b border-[#282D37] pb-4">
            <div className="text-xs text-amber-400 font-mono uppercase tracking-wider">RANKINGS & COMPARISON</div>
            <h2 className="font-serif text-2xl font-bold text-[#F4EFE6] mt-1">
              排行榜与横向对比
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockCompareItems.map((item, idx) => (
              <div key={item.id} className="bg-[#161920] border border-[#282D37] rounded-xl p-5 space-y-3 font-serif">
                <div className="text-xs text-amber-400 font-mono font-bold">COMPARE ITEM 0{idx + 1}</div>
                <h3 className="font-bold text-[#F4EFE6] text-base">{item.title}</h3>
                <p className="text-xs text-[#9A9FAE] leading-relaxed line-clamp-3">{item.summary}</p>
                <div className="pt-3 border-t border-[#232732] text-xs font-mono text-amber-400/90">
                  查看双机场数据对比 →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Technical Articles & Encyclopedia */}
        <section id="editorial" className="space-y-6">
          <div className="border-b border-[#282D37] pb-4">
            <div className="text-xs text-amber-400 font-mono uppercase tracking-wider">EDITORIAL ARTICLES</div>
            <h2 className="font-serif text-2xl font-bold text-[#F4EFE6] mt-1">
              技术专栏与百科
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockArticles.slice(0, 4).map((art) => (
              <div key={art.id} className="bg-[#161920] border border-[#282D37] p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                  <BookOpen size={14} />
                  <span>[{art.category}]</span>
                  <span className="text-[#626875]">• {art.updated_at}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#F4EFE6]">{art.title}</h3>
                <p className="text-xs text-[#9A9FAE] font-serif leading-relaxed line-clamp-2">{art.summary}</p>
                <div className="text-xs font-mono text-[#787E8F] pt-2 border-t border-[#232732]">
                  作者：{art.author}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Editorial Code & Neutral Disclosure */}
        <section className="bg-[#14171D] border border-[#2E3442] p-8 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-base">
            <Feather size={18} />
            <span>机场搜编辑部准则与评估说明</span>
          </div>
          <p className="text-xs text-[#A2A8B8] font-serif leading-relaxed">
            机场搜 (JICHANGSOU) 保持独立媒体与技术平台定位。本站不接受任何破坏评分公正性的竞价排名。所有测评均基于硬核线路抓包测试与晚高峰实测数据。
          </p>
        </section>

      </main>
    </div>
  );
}
