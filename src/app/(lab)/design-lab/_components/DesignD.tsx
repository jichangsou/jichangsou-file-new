'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Database, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  TrendingUp, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  Menu,
  X,
  SlidersHorizontal
} from 'lucide-react';
import { mockAirports, mockArticles, mockCompareItems } from '@/data/mock';

export default function DesignD() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Hero Search Form Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  // Filter airports based on search query
  const filteredAirports = mockAirports.filter(ap => {
    return (
      ap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ap.line_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ap.aliases.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Featured 6 airports for homepage database preview
  const featuredAirports = filteredAirports.slice(0, 6);

  // Filter articles into guides and wiki
  const guides = mockArticles.filter(a => a.type === 'guide').slice(0, 3);
  const wikis = mockArticles.filter(a => a.type === 'wiki').slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1F26] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* 0. Top System Notice Bar */}
      <div className="bg-[#181C24] text-[#A0A8B8] text-xs py-2 px-4 sm:px-6 border-b border-[#262C38]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <span className="text-white font-medium truncate">Design D System</span>
            <span className="hidden md:inline text-slate-400">| Search Intelligence / Editorial Database</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono shrink-0">
            <span>收录 10 条测试资料 (Demo)</span>
            <span className="hidden sm:inline">更新时间: 2026-09-15</span>
          </div>
        </div>
      </div>

      {/* 1. Header / Navbar */}
      <header className="sticky top-0 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5E2D9] z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-lg p-1">
            <div className="w-8 h-8 rounded-lg bg-[#181C24] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-600 transition-colors shrink-0">
              搜
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg sm:text-xl text-[#1C1F26] tracking-tight leading-none">
                机场搜 <span className="font-sans text-xs font-semibold text-blue-600">JICHANGSOU</span>
              </span>
              <span className="text-[10px] text-[#6B7280] font-sans tracking-wide mt-0.5">
                中文机场搜索引擎与数据库
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4B5563]">
            <Link href="/airports" className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1">机场数据库</Link>
            <Link href="/ranking" className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1">排行榜</Link>
            <Link href="/updates" className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1">最近更新</Link>
            <a href="#updates" className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1">最近更新</a>
            <Link href="/guides" className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1">教程与百科</Link>
            <a href="#methodology" className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1">方法论声明</a>
          </nav>

          {/* Right Header Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex text-xs px-3 py-1 rounded-full bg-[#EFECE3] border border-[#DDD9CD] text-[#4B5563] font-mono items-center gap-1.5">
              <Database size={13} className="text-blue-600" />
              测试数据 (Demo)
            </span>

            {/* Mobile Menu Button (min 44px hit area) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="切换菜单"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 text-[#1C1F26] hover:bg-[#EFECE3] rounded-xl border border-[#DDD9CD] transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E5E2D9] px-4 py-4 space-y-3 animate-slide-down shadow-xl font-sans">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-[#1C1F26]">
              <Link 
                href="/airports" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>机场数据库</span>
                <ChevronRight size={16} className="text-slate-400" />
              </Link>
              <Link 
                href="/ranking" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>排行榜</span>
                <ChevronRight size={16} className="text-slate-400" />
              </Link>
              <Link 
                href="/compare" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>机场对比大盘</span>
                <ChevronRight size={16} className="text-slate-400" />
              </Link>
              <a 
                href="#updates" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>最近更新</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>
              <Link 
                href="/guides" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>使用教程</span>
                <ChevronRight size={16} className="text-slate-400" />
              </Link>
              <Link 
                href="/wiki" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>网络百科</span>
                <ChevronRight size={16} className="text-slate-400" />
              </Link>
              <a 
                href="#methodology" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#EFECE3] transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>方法论说明</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. Hero Section: Compact, High-Density & Search-First */}
      <section className="bg-white border-b border-[#E5E2D9] py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
            <Sparkles size={13} className="text-blue-600 shrink-0" />
            <span>查价格 • 查线路 • 查协议 • 查对比</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1F26] tracking-tight leading-tight">
            找机场，先搜一下。
          </h1>

          {/* Subtitle */}
          <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            中文机场搜索引擎与客观数据库，提供线路架构、价格流量与最近核对记录。
          </p>

          {/* Main Search Bar Form */}
          <div className="relative max-w-2xl mx-auto pt-2">
            <form onSubmit={handleSearchSubmit} className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white border-2 border-[#181C24] rounded-2xl shadow-xl shadow-slate-900/5 overflow-hidden focus-within:ring-4 focus-within:ring-blue-100 transition-all p-1.5 sm:p-0">
              <div className="flex items-center w-full px-3 py-2 sm:py-0">
                <Search className="text-[#9CA3AF] shrink-0" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="搜索机场名称 (如 暮光云, WgetCloud) 或关键词 (如 IPLC, VLESS)..."
                  className="w-full py-2.5 px-3 text-[#1C1F26] placeholder-[#9CA3AF] text-sm sm:text-base outline-none bg-transparent"
                />
                {searchTerm && (
                  <button 
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="mr-2 text-xs bg-[#F3F0E6] hover:bg-[#E7E3D4] px-2.5 py-1 rounded text-[#4B5563] shrink-0"
                  >
                    清除
                  </button>
                )}
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto sm:mr-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors shrink-0 shadow-md flex items-center justify-center gap-1 min-h-[44px]"
              >
                <span>即刻搜索</span>
                <ArrowRight size={15} />
              </button>
            </form>

            {/* Quick Filter Chips as Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-[#6B7280] font-medium text-xs">热门标签:</span>
              <Link
                href="/airports"
                className="px-3 py-1 rounded-lg border bg-[#F3F0E6] text-[#4B5563] border-[#DDD9CD] hover:bg-[#E7E3D4] transition-all min-h-[32px] inline-flex items-center"
              >
                全部标签
              </Link>
              <Link
                href="/search?q=IPLC"
                className="px-3 py-1 rounded-lg border bg-[#F3F0E6] text-[#4B5563] border-[#DDD9CD] hover:bg-[#E7E3D4] transition-all min-h-[32px] inline-flex items-center"
              >
                IPLC / IEPL 专线
              </Link>
              <Link
                href="/search?q=VLESS"
                className="px-3 py-1 rounded-lg border bg-[#F3F0E6] text-[#4B5563] border-[#DDD9CD] hover:bg-[#E7E3D4] transition-all min-h-[32px] inline-flex items-center"
              >
                VLESS 协议
              </Link>
              <span className="px-3 py-1 rounded-lg border bg-[#F3F0E6]/60 text-[#9CA3AF] border-[#E5E2D9] font-mono min-h-[32px] inline-flex items-center cursor-not-allowed">
                价格筛选 (即将推出)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Section 3: Airport Database Preview */}
        <section id="database-preview" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E2D9] pb-4">
            <div>
              <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
                AIRPORT DATABASE PREVIEW
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1F26] flex items-center gap-2">
                <Database size={20} className="text-blue-600 shrink-0" />
                机场数据库精选 ({featuredAirports.length} / {mockAirports.length})
              </h2>
              <p className="text-xs text-[#6B7280] mt-1">优先精选展示代表性机场，包含线路、价格、流量与核对日期</p>
            </div>
            
            <Link 
              href="/airports" 
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
            >
              查看全部 {mockAirports.length} 个机场 <ArrowRight size={14} />
            </Link>
          </div>

          {/* Responsive Cards Grid: Mobile 1 col, Tablet 2 cols, Desktop 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredAirports.map((ap) => (
              <Link
                key={ap.id}
                href={`/airport/${ap.slug}`}
                className="bg-white border border-[#E5E2D9] hover:border-blue-500/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <div>
                  {/* Card Top Header */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-bold text-[#1C1F26] text-base group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {ap.name}
                      </h3>
                      <div className="text-xs text-[#6B7280] font-mono mt-0.5">
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

                  {/* Description */}
                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2 mb-3">
                    {ap.description}
                  </p>

                  {/* Line Type Badge */}
                  <div className="bg-[#F8FAFC] border border-slate-200 p-2 rounded-lg text-xs font-mono text-slate-700 mb-3">
                    <span className="text-[#9CA3AF] text-[10px] block">线路架构</span>
                    <span className="font-semibold text-[#1C1F26] truncate block">{ap.line_type}</span>
                  </div>
                </div>

                {/* Bottom Key Specifications */}
                <div className="pt-3 border-t border-[#F0EDF2] space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[#9CA3AF] text-[10px] block font-mono">最低价格</span>
                      <span className="font-bold text-blue-600">{ap.price_summary}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] text-[10px] block font-mono">流量包</span>
                      <span className="font-semibold text-[#1C1F26]">{ap.traffic_summary}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF] pt-1">
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
              className="inline-block px-6 py-3 rounded-xl bg-white border border-[#DDD9CD] text-[#1C1F26] hover:bg-[#F3F0E6] text-xs font-bold transition-colors shadow-sm min-h-[44px]"
            >
              进入全量数据库搜索 ({mockAirports.length} 个机场) →
            </Link>
          </div>
        </section>

        {/* Section 4: Leaderboard / Ranking Preview */}
        <section id="rankings-preview" className="scroll-mt-20 space-y-6">
          <div className="border-b border-[#E5E2D9] pb-4">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
              RANKINGS & COMPARISON PREVIEW
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1F26] flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-600 shrink-0" />
              机场排行榜 Preview
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">按综合打分、性价比与专线体验分类索引</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Top Rated */}
            <div className="bg-white border border-[#E5E2D9] rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#F0EDF2] pb-3 mb-4">
                  <h3 className="font-bold text-[#1C1F26] text-base flex items-center gap-1.5">
                    🏆 综合评分榜
                  </h3>
                  <span className="text-[11px] font-mono text-blue-600 font-bold">TOP 3</span>
                </div>
                <div className="space-y-3">
                  {mockAirports.slice(0, 3).map((ap, idx) => (
                    <Link key={ap.id} href={`/airport/${ap.slug}`} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2D9] hover:border-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#181C24] text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-bold text-[#1C1F26] text-xs">{ap.name}</div>
                          <div className="text-[10px] text-[#6B7280] font-mono">{ap.price_summary}</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                        正常
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-[#F0EDF2] text-right">
                <Link href="/ranking/best" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1 min-h-[36px]">
                  查看完整综合榜 <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Column 2: Value Leaders */}
            <div className="bg-white border border-[#E5E2D9] rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#F0EDF2] pb-3 mb-4">
                  <h3 className="font-bold text-[#1C1F26] text-base flex items-center gap-1.5">
                    💡 高性价比榜
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">VALUE</span>
                </div>
                <div className="space-y-3">
                  {mockAirports.slice(3, 6).map((ap, idx) => (
                    <Link key={ap.id} href={`/airport/${ap.slug}`} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2D9] hover:border-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-bold text-[#1C1F26] text-xs">{ap.name}</div>
                          <div className="text-[10px] text-[#6B7280] font-mono">{ap.price_summary}</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-emerald-600 text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                        {ap.price_summary.split('/')[0]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-[#F0EDF2] text-right">
                <Link href="/ranking/cheap" className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1 min-h-[36px]">
                  查看完整性价比榜 <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Column 3: Direct Comparisons */}
            <div className="bg-white border border-[#E5E2D9] rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between border-b border-[#F0EDF2] pb-3 mb-4">
                  <h3 className="font-bold text-[#1C1F26] text-base flex items-center gap-1.5">
                    ⚔️ 热门横向对比
                  </h3>
                  <span className="text-[11px] font-mono text-amber-600 font-bold">VS</span>
                </div>
                <div className="space-y-3">
                  {mockAirports.slice(0, 3).map((ap) => (
                    <Link key={ap.id} href={`/airport/${ap.slug}`} className="block p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2D9] hover:border-amber-400 transition-colors space-y-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                      <div className="font-bold text-[#1C1F26] text-xs flex items-center justify-between">
                        <span>{ap.name}</span>
                        <ChevronRight size={12} className="text-[#9CA3AF] shrink-0" />
                      </div>
                      <p className="text-[11px] text-[#6B7280] line-clamp-2 leading-relaxed">{ap.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-[#F0EDF2] text-right">
                <Link href="/updates" className="text-xs font-bold text-amber-600 hover:underline inline-flex items-center gap-1 min-h-[36px]">
                  查看最近更新 <ChevronRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 5: Recent Data Updates Log */}
        <section id="updates" className="scroll-mt-20 space-y-6">
          <div className="border-b border-[#E5E2D9] pb-4">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
              RECENT DATA UPDATE TIMELINE
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1F26] flex items-center gap-2">
              <Clock size={20} className="text-blue-600 shrink-0" />
              最近数据更新记录
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">记录测试资料的最近查验日期与状态变动</p>
          </div>

          <div className="bg-white border border-[#E5E2D9] rounded-2xl p-4 sm:p-6 shadow-sm space-y-4 font-mono text-xs">
            <div className="space-y-3">
              {mockAirports.slice(0, 4).map((ap) => (
                <div key={ap.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-[#FAF9F5] border border-[#E5E2D9]">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-[#6B7280] text-[11px]">{ap.updated_at}</span>
                    <Link href={`/airport/${ap.slug}`} className="font-bold text-[#1C1F26] hover:text-blue-600 transition-colors">
                      {ap.name}
                    </Link>
                    <span className="text-[#6B7280] text-[11px]">({ap.line_type})</span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#E5E2D9]">
                    <span className="text-slate-600 text-[11px]">价格: <strong className="text-[#1C1F26]">{ap.price_summary}</strong></span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold shrink-0">
                      测试数据 / Demo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Guides & Encyclopedia Preview */}
        <section id="knowledge-base" className="scroll-mt-20 space-y-6">
          <div className="border-b border-[#E5E2D9] pb-4">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">
              KNOWLEDGE BASE & GUIDES
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1F26] flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600 shrink-0" />
              教程指南与网络百科
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">代理协议原理解析与全平台客户端配置教程</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Guides Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-2">
                <h3 className="font-bold text-[#1C1F26] text-base flex items-center gap-2">
                  <FileText size={16} className="text-blue-600 shrink-0" /> 客户端使用教程
                </h3>
                <Link href="/guides" className="text-xs font-bold text-blue-600 hover:underline">
                  全部教程 →
                </Link>
              </div>
              <div className="space-y-3">
                {guides.map((art) => (
                  <Link key={art.id} href={`/guides/${art.slug}`} className="block bg-white border border-[#E5E2D9] p-4 rounded-xl space-y-2 hover:border-blue-400 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                    <div className="flex items-center justify-between text-xs text-[#6B7280] font-mono">
                      <span className="text-blue-600 font-bold">[{art.category}]</span>
                      <span>{art.updated_at}</span>
                    </div>
                    <h4 className="font-bold text-[#1C1F26] text-sm leading-snug">{art.title}</h4>
                    <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">{art.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Wiki Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-2">
                <h3 className="font-bold text-[#1C1F26] text-base flex items-center gap-2">
                  <HelpCircle size={16} className="text-blue-600 shrink-0" /> 技术原理百科
                </h3>
                <Link href="/wiki" className="text-xs font-bold text-emerald-700 hover:underline">
                  全部百科 →
                </Link>
              </div>
              <div className="space-y-3">
                {wikis.map((art) => (
                  <Link key={art.id} href={`/wiki/${art.slug}`} className="block bg-white border border-[#E5E2D9] p-4 rounded-xl space-y-2 hover:border-emerald-400 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none">
                    <div className="flex items-center justify-between text-xs text-[#6B7280] font-mono">
                      <span className="text-emerald-700 font-bold">[{art.category}]</span>
                      <span>{art.updated_at}</span>
                    </div>
                    <h4 className="font-bold text-[#1C1F26] text-sm leading-snug">{art.title}</h4>
                    <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">{art.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 7: Trust / Methodology Preview Disclosure Statement */}
        <section id="methodology" className="scroll-mt-20 bg-[#181C24] text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-base font-serif">
            <ShieldCheck size={20} className="shrink-0" />
            <span>数据方法论与可信度说明</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            本站致力于打造客观、数据驱动的中文机场搜索引擎。目前页面展示的全部资料均来源于公开测试数据。所有展示数据均按线路架构、价格套餐、节点地区与支持协议进行结构化整理。
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>METHODOLOGY VERSION: 2026.1 (DEMO)</span>
            <Link href="#methodology" className="text-blue-400 hover:underline">
              了解机场搜的数据方法 →
            </Link>
          </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="border-t border-[#E5E2D9] bg-white py-8 text-xs text-[#6B7280] font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 机场搜 (jichangsou.com) • Design D System. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono">
            <Link href="/airports" className="hover:text-blue-600">DATABASE</Link>
            <Link href="/ranking" className="hover:text-blue-600">RANKING</Link>
            <Link href="/wiki" className="hover:text-blue-600">WIKI</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
