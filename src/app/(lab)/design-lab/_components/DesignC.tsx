'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Terminal, Activity, ShieldCheck, Database, Sliders, ChevronRight, Server, Globe, Cpu, ArrowUpRight, Lock, Check } from 'lucide-react';
import { mockAirports, mockArticles, mockCompareItems } from '@/data/mock';

export default function DesignC() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredAirports = mockAirports.filter(ap => {
    const match = ap.name.toLowerCase().includes(searchTerm.toLowerCase()) || ap.line_type.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === 'vless') return match && ap.line_type.includes('VLESS');
    if (activeTab === 'iepl') return match && ap.line_type.includes('IEPL');
    return match;
  });

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#0A0C10] text-[#D1D5DB] font-sans z-50 select-none">
      {/* Top Console Status Bar */}
      <div className="bg-[#0E1117] border-b border-[#1E2636] text-xs py-2 px-6 font-mono text-[#8B949E]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              DESIGN C | Premium Dark Data
            </span>
            <span className="hidden sm:inline">DATABASE VER: 2026.9</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>STATUS: NORMAL</span>
            <span className="text-cyan-400">AUDIT TIME: 2026-09-15</span>
          </div>
        </div>
      </div>

      {/* Main Console Header */}
      <header className="border-b border-[#1E2636] bg-[#0E1117]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/design-lab/c" className="flex items-center gap-2 font-mono font-bold text-lg text-white">
              <div className="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-xs">
                JCS
              </div>
              <span>机场搜</span>
              <span className="text-xs text-slate-500 font-normal">/ DATABASE</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-[#8B949E]">
            <a href="#console-search" className="text-white hover:text-cyan-400 transition-colors">// SEARCH</a>
            <a href="#database-grid" className="hover:text-cyan-400 transition-colors">// DATABASE</a>
            <a href="#leaderboard" className="hover:text-cyan-400 transition-colors">// RANKING</a>
            <a href="#wiki-docs" className="hover:text-cyan-400 transition-colors">// WIKI & GUIDES</a>
          </nav>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161B26] border border-[#263044] text-[#8B949E]">
              ⌘K QUICK SEARCH
            </span>
          </div>
        </div>
      </header>

      {/* Hero Terminal & Search Section */}
      <section id="console-search" className="border-b border-[#1E2636] bg-[#0D1017] py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161B26] border border-[#263044] text-xs font-mono text-cyan-400">
            <Terminal size={13} />
            <span>AUTHENTICATED AIRPORT DATA ENGINE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            找机场，先搜一下。
          </h1>

          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl mx-auto leading-relaxed">
            专注机场搜索、数据硬核打分与网络协议选型。拒绝竞价排名，提供可信数据。
          </p>

          {/* Console Search Input Box */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="relative flex items-center bg-[#131822] border border-[#263044] focus-within:border-cyan-500/80 rounded-xl overflow-hidden shadow-2xl transition-all">
              <Search className="ml-4 text-slate-500 shrink-0" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="键入机场名称、IEPL专线、VLESS、端口或价格进行精准匹配..."
                className="w-full bg-transparent py-4 px-4 text-sm text-white placeholder-slate-600 outline-none font-mono"
              />
              <button className="mr-2 px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono font-bold text-xs rounded-lg transition-colors shrink-0">
                QUERY
              </button>
            </div>

            {/* Console Stat Bar */}
            <div className="grid grid-cols-3 gap-3 mt-6 text-left font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#131822] border border-[#20293A]">
                <span className="text-[#6E7681] block text-[10px]">INDEXED AIRPORTS</span>
                <span className="text-white font-bold text-sm">10 VERIFIED</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131822] border border-[#20293A]">
                <span className="text-[#6E7681] block text-[10px]">LINE ARCHITECTURE</span>
                <span className="text-cyan-400 font-bold text-sm">IEPL / VLESS</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131822] border border-[#20293A]">
                <span className="text-[#6E7681] block text-[10px]">MIN PRICE</span>
                <span className="text-emerald-400 font-bold text-sm">¥3.00 / MONTH</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1: Technical Database Table */}
        <section id="database-grid" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#1E2636] pb-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 font-bold">[DATABASE_MATRIX]</div>
              <h2 className="text-xl font-bold text-white mt-1">机场核心数据库</h2>
            </div>
            <div className="text-xs font-mono text-[#6E7681]">TOTAL: {filteredAirports.length} RECORDS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAirports.map((ap) => (
              <div key={ap.id} className="bg-[#121620] border border-[#1E2636] hover:border-cyan-500/40 rounded-xl p-5 space-y-3 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      {ap.name}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        {ap.status.toUpperCase()}
                      </span>
                    </h3>
                    <div className="text-xs font-mono text-cyan-400/90 mt-0.5">{ap.line_type}</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-bold text-cyan-400">{ap.price_summary}</span>
                    <span className="text-[10px] text-[#6E7681] block">PRICE</span>
                  </div>
                </div>

                <p className="text-xs text-[#8B949E] leading-relaxed line-clamp-2">
                  {ap.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-[#1A2230]">
                  <div>
                    <span className="text-[#6E7681] text-[10px] block">PRICE</span>
                    <span className="text-white font-bold">{ap.price_summary}</span>
                  </div>
                  <div>
                    <span className="text-[#6E7681] text-[10px] block">TRAFFIC</span>
                    <span className="text-slate-300 font-bold">{ap.traffic_summary}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-cyan-400/90">
                  <span>AUDITED: {ap.last_checked}</span>
                  <span className="hover:underline flex items-center gap-1 cursor-pointer">
                    VIEW REPORT <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Leaderboard */}
        <section id="leaderboard" className="space-y-6">
          <div className="border-b border-[#1E2636] pb-4">
            <div className="text-xs font-mono text-cyan-400 font-bold">[LEADERBOARD_SYSTEM]</div>
            <h2 className="text-xl font-bold text-white mt-1">排行榜与对比项</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockCompareItems.map((comp, idx) => (
              <div key={comp.id} className="bg-[#121620] border border-[#1E2636] p-5 rounded-xl space-y-3 font-mono">
                <div className="text-xs text-cyan-400 font-bold">COMPARISON 0{idx + 1}</div>
                <h3 className="font-bold text-white text-sm">{comp.title}</h3>
                <p className="text-xs text-[#8B949E] line-clamp-3 leading-relaxed">{comp.summary}</p>
                <div className="text-xs text-cyan-400 pt-2 border-t border-[#1A2230] flex items-center justify-between">
                  <span>READ ANALYTICS</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Wiki Docs */}
        <section id="wiki-docs" className="space-y-6">
          <div className="border-b border-[#1E2636] pb-4">
            <div className="text-xs font-mono text-cyan-400 font-bold">[KNOWLEDGE_BASE]</div>
            <h2 className="text-xl font-bold text-white mt-1">技术文档与 Wiki</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockArticles.slice(0, 4).map((art) => (
              <div key={art.id} className="bg-[#121620] border border-[#1E2636] p-5 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <span>[{art.category}]</span>
                  <span className="text-[#6E7681]">• {art.updated_at}</span>
                </div>
                <h3 className="font-bold text-white text-base">{art.title}</h3>
                <p className="text-xs text-[#8B949E] line-clamp-2 leading-relaxed">{art.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Audit Notice */}
        <section className="bg-[#0E121B] border border-[#1F293D] p-6 rounded-xl space-y-3 font-mono">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <ShieldCheck size={18} />
            <span>AUDIT & DATA INTEGRITY STATEMENT</span>
          </div>
          <p className="text-xs text-[#8B949E] leading-relaxed">
            All database entries are categorized by line architecture, pricing plans, node regions, and protocol support.
          </p>
        </section>

      </main>
    </div>
  );
}
