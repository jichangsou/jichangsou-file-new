"use client";

import React from 'react';
import Link from 'next/link';
import {
  TOPIC_CONFIGS,
  getMatchedAirportsForTopic,
  getTopicStats,
  TopicConfig
} from '@/data/topics';
import { mockArticles, mockProtocols, mockNodes } from '@/data/mock';
import {
  ChevronRight,
  Layers,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Zap,
  Globe,
  DollarSign,
  HelpCircle,
  BookOpen,
  FileText
} from 'lucide-react';

interface TopicDetailPageProps {
  slug: string;
}

export default function TopicDetailPage({ slug }: TopicDetailPageProps) {
  const config = TOPIC_CONFIGS[slug];
  if (!config) return null;

  const matchedAirports = getMatchedAirportsForTopic(slug);
  const stats = getTopicStats(slug);

  // Fetch related guide & wiki objects
  const relatedGuides = mockArticles.filter(
    a => a.type === 'guide' && config.relatedGuidesSlugs.includes(a.slug)
  );
  const relatedWiki = mockArticles.filter(
    a => a.type === 'wiki' && config.relatedWikiSlugs.includes(a.slug)
  );

  // Fetch related topics objects
  const relatedTopics = config.relatedTopicsSlugs
    .map(s => TOPIC_CONFIGS[s])
    .filter(Boolean);

  // Build JSON-LD Structured Data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: 'https://jichangsou.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '机场专题',
        item: 'https://jichangsou.com/topics'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: config.shortTitle,
        item: `https://jichangsou.com/topics/${config.slug}`
      }
    ]
  };

  const faqJsonLd = config.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16 text-slate-900 dark:text-slate-100">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Header Container */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-2 mb-4 flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              首页
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/topics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              机场专题
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 dark:text-slate-200 font-medium truncate">
              {config.shortTitle}
            </span>
          </nav>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            {config.h1}
          </h1>

          {/* Editorial Intro */}
          <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl bg-slate-50/80 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 mb-6">
            {config.intro}
          </div>

          {/* Topic Notice Banner if present */}
          {config.notice && (
            <div className="flex items-start space-x-3 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-xl p-4 text-xs sm:text-sm text-blue-800 dark:text-blue-300 mb-6">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{config.notice}</p>
            </div>
          )}

          {/* Topic Summary Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>匹配机场数量</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {stats.count} <span className="text-xs font-normal text-slate-500">家</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span>最低价格区间</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                ¥{stats.priceMin} ~ ¥{stats.priceMax} <span className="text-xs font-normal text-slate-500">/ 月</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>常见线路类型</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {stats.commonLines}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>最近复核时间</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                2026-09-16
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 space-y-12">

        {/* Airport Results Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <span className="w-2.5 h-6 bg-blue-600 rounded-full mr-3 inline-block"></span>
              {config.shortTitle}匹配机场列表 ({matchedAirports.length})
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              根据站内已记录的套餐、线路与节点字段自动筛选
            </span>
          </div>

          {matchedAirports.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400">
              当前暂无匹配该条件的机场数据。
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {matchedAirports.map(ap => {
                const protos = mockProtocols
                  .filter(p => p.airport_id === ap.id && p.supported)
                  .map(p => p.protocol_name);
                const nodes = mockNodes
                  .filter(n => n.airport_id === ap.id && n.supported)
                  .map(n => n.region);

                return (
                  <div
                    key={ap.id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200"
                  >
                    <div>
                      {/* Name & Status */}
                      <div className="flex items-center justify-between mb-3">
                        <Link
                          href={`/airport/${ap.slug}`}
                          className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {ap.name}
                        </Link>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          正常
                        </span>
                      </div>

                      {/* Line Type */}
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                        {ap.line_type}
                      </p>

                      {/* Badges Info */}
                      <div className="space-y-2 mb-5 text-xs text-slate-600 dark:text-slate-400">
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg">
                          <span className="text-slate-500">最低价格</span>
                          <span className="font-bold text-blue-600 dark:text-blue-400">{ap.price_summary}</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg">
                          <span className="text-slate-500">基础流量</span>
                          <span className="font-medium text-slate-800 dark:text-slate-200">{ap.traffic_summary}</span>
                        </div>
                      </div>

                      {/* Protocols & Nodes Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {protos.slice(0, 3).map(pr => (
                          <span key={pr} className="text-[11px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">
                            {pr}
                          </span>
                        ))}
                        {nodes.slice(0, 3).map(nd => (
                          <span key={nd} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                            {nd}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        更新: {ap.last_checked}
                      </span>
                      <Link
                        href={`/airport/${ap.slug}`}
                        className="inline-flex items-center text-xs font-semibold text-blue-600 dark:hover:text-blue-400 hover:underline"
                      >
                        查看机场详情
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Editorial Selection Guide Section (选择指南 2~4 H2) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            {config.shortTitle}选择与选购指南
          </h2>

          <div className="space-y-8">
            {config.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2.5"></span>
                  {section.title.replace(/^##\s*/, '')}
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Guides Section */}
        {relatedGuides.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              相关使用教程
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map(guide => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {guide.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Wiki Section */}
        {relatedWiki.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              相关网络百科
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedWiki.map(wiki => (
                <Link
                  key={wiki.slug}
                  href={`/wiki/${wiki.slug}`}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {wiki.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {wiki.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {config.faq.length > 0 && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2.5" />
              {config.shortTitle}常见问题解答 (FAQ)
            </h2>
            <div className="space-y-6 divide-y divide-slate-100 dark:divide-slate-800">
              {config.faq.map((item, idx) => (
                <div key={idx} className={idx === 0 ? '' : 'pt-6'}>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    Q: {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    A: {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Methodology Disclosure Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              评价标准与数据说明
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            机场搜通过自动化评测与用户反馈，定期整理各机场的价格套餐、节点地区、线路类型（IEPL/IPLC/BGP）、支持协议（VLESS/Trojan/Shadowsocks）及 AI/流媒体解锁情况。所有数据仅供技术交流与搜索参考，并不构成任何购买建议。
          </p>
        </div>

        {/* Related Topics Section */}
        {relatedTopics.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              相关机场专题推荐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedTopics.map(rel => {
                const relStats = getTopicStats(rel.slug);
                return (
                  <Link
                    key={rel.slug}
                    href={`/topics/${rel.slug}`}
                    className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                  >
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {rel.shortTitle}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                      {rel.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      包含 {relStats.count} 家机场
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
