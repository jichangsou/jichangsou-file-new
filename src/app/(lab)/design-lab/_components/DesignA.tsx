'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Database, ArrowUpRight, ShieldCheck, Cpu, Filter, CheckCircle2, Clock, Zap, ChevronRight, BarChart2, Server, HelpCircle, FileText } from 'lucide-react';
import { mockAirports, mockArticles, mockCompareItems } from '@/data/mock';

export default function DesignA() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAirports = mockAirports.filter(airport => {
    const matchesSearch = airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.line_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === 'iepl') return matchesSearch && airport.line_type.includes('专线');
    if (activeCategory === 'budget') return matchesSearch && (airport.price_summary.includes('¥3') || airport.price_summary.includes('¥10') || airport.price_summary.includes('¥20'));
    if (activeCategory === 'high_rating') return matchesSearch && (airport.rating ?? 9.5) >= 9.5;
    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#F8FAFC] text-slate-900 font-sans z-50 select-none">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">DESIGN A | Search Engine / Minimalist Database Prototype</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>数据更新: 2026-09-15</span>
            <span>已索引 10 个验证机场</span>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/design-lab/a" className="flex items-center gap-2.5 text-slate-900 font-bold text-lg tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm">
                搜
              </div>
              <span className="font-bold text-slate-900 text-lg">机场搜</span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono">JICHANGSOU</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#database" className="text-slate-900 hover:text-blue-600 transition-colors">机场数据库</a>
              <a href="#rankings" className="hover:text-blue-600 transition-colors">排行榜</a>
              <a href="#compare" className="hover:text-blue-600 transition-colors">机场对比</a>
              <a href="#knowledge" className="hover:text-blue-600 transition-colors">教程与百科</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex text-xs px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-medium items-center gap-1">
              <CheckCircle2 size={12} /> 独立数据检测中
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section - Search Engine First */}
      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
            <Database size={13} className="text-blue-600" />
            <span>专注机场搜索、选型对比与客观数据库</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            找机场，先搜一下。
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            输入机场名字、节点协议或期望价格，查覆盖、查线路、查评测，告别踩坑。
          </p>

          {/* Main Search Input Box */}
          <div className="relative max-w-2xl mx-auto mt-8">
            <div className="relative flex items-center shadow-lg shadow-slate-900/5 rounded-2xl border-2 border-slate-900 bg-white overflow-hidden focus-within:ring-4 focus-within:ring-blue-100 transition-all">
              <Search className="ml-5 text-slate-400 shrink-0" size={22} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索机场名称 (如 暮光云, WgetCloud, 隐形人) 或关键词 (如 IPLC, VLESS, 3元)..."
                className="w-full py-4 px-4 text-slate-900 placeholder-slate-400 text-base outline-none bg-transparent"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mr-3 text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-600"
                >
                  清除
                </button>
              )}
              <button className="mr-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors shrink-0">
                搜索
              </button>
            </div>

            {/* Quick Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-slate-400 font-medium">热门标签:</span>
              {[
                { label: '全部机场', key: 'all' },
                { label: 'IEPL / IPLC 纯专线', key: 'iepl' },
                { label: '高性价比 (≤¥20)', key: 'budget' },
                { label: '9.6+ 高分推荐', key: 'high_rating' },
              ].map(chip => (
                <button
                  key={chip.key}
                  onClick={() => setActiveCategory(chip.key)}
                  className={`px-3 py-1 rounded-lg border transition-all ${
                    activeCategory === chip.key
                      ? 'bg-slate-900 text-white border-slate-900 font-medium'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Database Table & Cards */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1: Airport Database */}
        <section id="database" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Server size={22} className="text-blue-600" />
                机场数据库 ({filteredAirports.length})
              </h2>
              <p className="text-slate-500 text-sm mt-1">包含线路架构、状态、协议支持、最低价格与最近核验时间</p>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              STATUS: LIVE AUDITED • SORT BY RATING
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 font-medium text-xs">
                    <th className="py-3.5 px-4">机场名称</th>
                    <th className="py-3.5 px-4">状态</th>
                    <th className="py-3.5 px-4">线路类型</th>
                    <th className="py-3.5 px-4">价格 summary</th>
                    <th className="py-3.5 px-4">流量包</th>
                    <th className="py-3.5 px-4">评分</th>
                    <th className="py-3.5 px-4 text-right">核验日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredAirports.map((ap) => (
                    <tr key={ap.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span>{ap.name}</span>
                          <span className="text-xs font-normal text-slate-400 font-mono">({ap.slug})</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          ap.status === 'normal' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${ap.status === 'normal' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                          {ap.status === 'normal' ? '正常运营' : '待核实'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {ap.line_type}
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-900">
                        {ap.price_summary}
                      </td>
                      <td className="py-4 px-4 text-slate-600 font-mono text-xs">
                        {ap.traffic_summary}
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {ap.status === 'normal' ? '正常' : '待核实'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-xs text-slate-400 font-mono">
                        {ap.last_checked}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Rankings & Comparison */}
        <section id="rankings" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <BarChart2 size={18} className="text-blue-600" />
                编辑精选推荐
              </h3>
              <span className="text-xs text-slate-400">结合线路与服务指标</span>
            </div>
            <div className="space-y-3">
              {mockAirports.slice(0, 3).map((ap, idx) => (
                <div key={ap.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{ap.name}</div>
                      <div className="text-xs text-slate-500">{ap.line_type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600 text-sm">{ap.status === 'normal' ? '正常运营' : '待核实'}</div>
                    <div className="text-xs text-slate-400">{ap.price_summary}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Zap size={18} className="text-amber-500" />
                热门机场对比项
              </h3>
              <span className="text-xs text-slate-400">深度数据关联</span>
            </div>
            <div className="space-y-3">
              {mockCompareItems.map((comp) => (
                <div key={comp.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                    <span>{comp.title}</span>
                    <ArrowUpRight size={14} className="text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">{comp.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Knowledge & Guides */}
        <section id="knowledge" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText size={22} className="text-blue-600" />
                教程指南与网络百科
              </h2>
              <p className="text-slate-500 text-sm mt-1">普及通用代理协议、客户端配置与故障排除</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockArticles.slice(0, 6).map((art) => (
              <div key={art.id} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all space-y-3 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-600 mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100">{art.category}</span>
                    <span className="text-slate-400">• {art.updated_at}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">{art.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">{art.summary}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{art.author}</span>
                  <span className="text-blue-600 font-medium flex items-center gap-1">阅读 <ChevronRight size={12} /></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Audit & Neutral Statement */}
        <section className="bg-slate-900 text-slate-200 p-8 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <ShieldCheck size={18} />
            <span>机场搜 (JICHANGSOU) 5维数据加权评分与客观声明</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            本站坚持客观数据优先原则。所有数据按线路架构、价格套餐、节点地区与协议支持分类呈现。用户在选择机场前，请结合个人网络环境进行测试。
          </p>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 flex flex-wrap justify-between gap-4 font-mono">
            <span>METHODOLOGY VERSION: 2026.1</span>
            <span>NO AGGRESSIVE VPN MARKETING • DATA FIRST</span>
          </div>
        </section>
      </main>
    </div>
  );
}
