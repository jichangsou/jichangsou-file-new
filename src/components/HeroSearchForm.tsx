'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';

export default function HeroSearchForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-slate-300 hover:border-slate-400 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100/70 rounded-2xl shadow-sm hover:shadow transition-all p-1.5 gap-1.5 sm:gap-2"
    >
      <div className="flex items-center flex-1 px-3 py-1.5 sm:py-0">
        <Search className="text-slate-400 shrink-0" size={18} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索机场名称或关键词（如 WgetCloud、IEPL、VLESS）"
          className="w-full py-2 px-3 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base bg-transparent border-none outline-none font-sans"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="mr-1 px-2 py-0.5 text-xs rounded-md bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors shrink-0"
          >
            清除
          </button>
        )}
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-sm transition-all shrink-0 shadow-sm flex items-center justify-center gap-1.5 min-h-[42px] group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1"
      >
        <span>即刻搜索</span>
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
