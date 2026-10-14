import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased flex flex-col justify-between">
      {/* 1. Light System Sticky Navbar */}
      <Navbar />

      {/* 2. Main Site View Container */}
      <main className="flex-1 pb-16">
        {children}
      </main>

      {/* 3. Clean Light Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-xs text-slate-500 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                搜
              </div>
              <span className="font-bold text-slate-900 text-sm">机场搜 JICHANGSOU</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
              <Link href="/airports" className="hover:text-blue-600 transition-colors">机场大全</Link>
              <Link href="/ranking/best" className="hover:text-blue-600 transition-colors">排行榜</Link>
              <Link href="/updates" className="hover:text-blue-600 transition-colors">最近更新</Link>
              <Link href="/guides" className="hover:text-blue-600 transition-colors">使用教程</Link>
              <Link href="/wiki" className="hover:text-blue-600 transition-colors">网络百科</Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">博客</Link>
              <Link href="/methodology" className="hover:text-blue-600 transition-colors">数据说明</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
            <div>
              © {currentYear} 机场搜 (jichangsou.com) • 中文机场搜索引擎与数据库. All rights reserved.
            </div>
            <div className="font-mono">
              数据仅供参考，实际服务情况以对应官方信息为准。
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
