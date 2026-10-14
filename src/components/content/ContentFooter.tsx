import React from 'react';
import Link from 'next/link';
import { mockAirports, mockArticles } from '@/data/mock';
import { articles as blogArticles } from '@/data/articles';
import { Article, ArticleNextStep, Airport } from '@/types/database';
import {
  Compass,
  ArrowRight,
  Building2,
  BookOpen,
  ShieldCheck,
  Clock,
  Radio,
  ChevronRight
} from 'lucide-react';

export interface UnifiedArticle {
  id: string;
  slug: string;
  type: 'guide' | 'wiki' | 'blog';
  title: string;
  summary: string;
  category: string;
  tags: string[];
  author?: string;
  updated_at?: string;
  pubDate?: string;
  related_airports?: string[];
  related_articles?: string[];
  next_step?: ArticleNextStep;
}

interface ContentFooterProps {
  article: UnifiedArticle;
}

// 帮助函数：从各类文章提取统一对象
function getUnifiedAllArticles(): UnifiedArticle[] {
  const normalizedMock: UnifiedArticle[] = mockArticles.map(a => ({
    id: a.id,
    slug: a.slug,
    type: a.type,
    title: a.title,
    summary: a.summary,
    category: a.category,
    tags: a.tags,
    author: a.author,
    updated_at: a.updated_at || a.created_at,
    related_airports: a.related_airports,
    related_articles: a.related_articles,
    next_step: a.next_step
  }));

  const normalizedBlog: UnifiedArticle[] = blogArticles.map(b => ({
    id: b.id,
    slug: b.id,
    type: 'blog',
    title: b.title,
    summary: b.description,
    category: '博客研讨',
    tags: b.tags,
    author: b.author,
    updated_at: b.pubDate,
    related_airports: (b as unknown as { related_airports?: string[] }).related_airports,
    related_articles: (b as unknown as { related_articles?: string[] }).related_articles,
    next_step: (b as unknown as { next_step?: ArticleNextStep }).next_step
  }));

  return [...normalizedMock, ...normalizedBlog];
}

// 推荐理由提取 (严格基于站内已记录客观字段)
function getAirportReasonBadge(airport: Airport, articleTags: string[]): string {
  const lineType = airport.line_type.toUpperCase();
  if (lineType.includes('IEPL') || lineType.includes('IPLC')) {
    return '提供 IEPL / IPLC 专线';
  }
  if (lineType.includes('VLESS')) {
    return '支持 VLESS 协议';
  }
  if (lineType.includes('FULLCONE') || airport.description.includes('FullCone')) {
    return '支持 FullCone UDP';
  }
  if (articleTags.some(t => t.toLowerCase().includes('clash') || t.toLowerCase().includes('shadowrocket'))) {
    return '与本文客户端使用场景相关';
  }
  return '推荐关注';
}

// 一、下一步行动组件
function NextStepSection({ article }: { article: UnifiedArticle }) {
  // 默认 Next Step 配置 (根据文章类型与主题降级)
  const defaultNextStep: ArticleNextStep = {
    title: article.type === 'guide'
      ? '下一步行动：选购合适机场节点'
      : article.type === 'wiki'
      ? '下一步行动：探索专线机场与协议配置'
      : '下一步行动：查阅更多全站资源',
    description: article.type === 'guide'
      ? '通过实际测量与线路上行能力，选择最适合当前客户端的代理服务商。'
      : article.type === 'wiki'
      ? '进一步了解支持此协议或物理专线技术的机场节点大盘或进行对比分析。'
      : '浏览全站机场评测数据库，或查阅跨平台客户端上手使用教程。',
    primaryHref: article.type === 'wiki' ? '/airports' : '/airports',
    primaryLabel: article.type === 'wiki' ? '查看专线相关机场' : '浏览机场数据库',
    secondaryHref: article.type === 'wiki' ? '/updates' : '/ranking',
    secondaryLabel: article.type === 'wiki' ? '查看最近更新' : '查看机场排行榜',
  };

  const step = {
    title: article.next_step?.title || defaultNextStep.title,
    description: article.next_step?.description || defaultNextStep.description,
    primaryHref: article.next_step?.primaryHref || defaultNextStep.primaryHref,
    primaryLabel: article.next_step?.primaryLabel || defaultNextStep.primaryLabel,
    secondaryHref: article.next_step?.secondaryHref || defaultNextStep.secondaryHref,
    secondaryLabel: article.next_step?.secondaryLabel || defaultNextStep.secondaryLabel,
  };

  return (
    <section className="bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/50 border border-blue-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
        <Compass className="w-4 h-4 text-blue-600" />
        <span>下一步行动</span>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          {step.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        {step.primaryHref && step.primaryLabel && (
          <Link
            href={step.primaryHref}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>{step.primaryLabel}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
        {step.secondaryHref && step.secondaryLabel && (
          <Link
            href={step.secondaryHref}
            className="px-5 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>{step.secondaryLabel}</span>
          </Link>
        )}
      </div>
    </section>
  );
}

// 二、相关机场组件
function RelatedAirportsSection({ article }: { article: UnifiedArticle }) {
  const slugs = article.related_airports || [];
  const airports = slugs
    .map(slug => mockAirports.find(a => a.slug === slug || a.id === slug))
    .filter((a): a is Airport => a !== undefined)
    .slice(0, 3);

  // 判断是否为空状态
  const isEmpty = airports.length === 0;

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-slate-700" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              相关机场
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500">
              测试数据 / Demo
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            根据本文涉及的协议、客户端或使用场景展示。
          </p>
        </div>

        {!isEmpty && (
          <Link
            href="/airports"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            查看全大盘 <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {isEmpty ? (
        <div className="p-6 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Radio className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-700">暂未关联具体机场</p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              本文为纯技术原理与客户端使用教程普及，未直接绑定特定服务商。
            </p>
          </div>
          <div>
            <Link
              href="/airports"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold shadow-sm transition-all"
            >
              <span>浏览机场大全</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {airports.map(ap => {
            const reason = getAirportReasonBadge(ap, article.tags);
            return (
              <div
                key={ap.id}
                className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {ap.name}
                    </h4>
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      正常运营
                    </span>
                  </div>

                  {/* 推荐理由 */}
                  <div className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold">
                    {reason}
                  </div>

                  {/* 核心指标 */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-100 text-slate-600">
                    <div>
                      <span className="text-[10px] text-slate-400 block">最低价格</span>
                      <span className="font-semibold text-slate-800">{ap.price_summary}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">流量额度</span>
                      <span className="font-semibold text-slate-800">{ap.traffic_summary}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 line-clamp-1">
                    <span className="text-slate-400">线路：</span>
                    {ap.line_type}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" /> {ap.last_checked}
                  </span>
                  <Link
                    href={`/airport/${ap.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-colors shadow-sm"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

// 三、同主题推荐阅读组件
function RelatedContentSection({ article }: { article: UnifiedArticle }) {
  const allArticles = getUnifiedAllArticles();

  // 1. 获取明确配置的 related_articles
  const explicitSlugs = article.related_articles || [];
  const explicitMatches = explicitSlugs
    .map(slug => allArticles.find(a => (a.slug === slug || a.id === slug) && a.slug !== article.slug && a.id !== article.id))
    .filter((a): a is UnifiedArticle => a !== undefined);

  // 2. 补齐逻辑（无重复、排除自身）
  const pickedIds = new Set(explicitMatches.map(a => a.id));

  const candidates = allArticles.filter(a => a.id !== article.id && a.slug !== article.slug && !pickedIds.has(a.id));

  // 计算相关度
  const scored = candidates.map(cand => {
    let score = 0;
    // 相同标签加分
    const commonTags = cand.tags.filter(t => article.tags.includes(t));
    score += commonTags.length * 3;

    // 相同类别加分
    if (cand.category === article.category) {
      score += 2;
    }

    // 页面类型偏好
    if (article.type === 'guide') {
      if (cand.type === 'guide') score += 2;
      if (cand.type === 'wiki') score += 1;
    } else if (article.type === 'wiki') {
      if (cand.type === 'wiki') score += 2;
      if (cand.type === 'guide') score += 1;
    } else if (article.type === 'blog') {
      if (cand.type === 'blog') score += 2;
      if (cand.type === 'guide') score += 1;
    }

    return { cand, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const fallbackMatches = scored.map(s => s.cand);
  const finalRelated = [...explicitMatches, ...fallbackMatches].slice(0, 3);

  const sectionTitle = article.type === 'wiki' ? '相关教程与百科' : '同主题推荐阅读';
  const sectionIcon = article.type === 'wiki' ? ShieldCheck : BookOpen;
  const IconComponent = sectionIcon;

  if (finalRelated.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <IconComponent className="w-4 h-4 text-blue-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {sectionTitle}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            深入了解相近客户端设置、网络协议与技术架构。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {finalRelated.map(item => {
          const itemHref =
            item.type === 'guide'
              ? `/guides/${item.slug}`
              : item.type === 'wiki'
              ? `/wiki/${item.slug}`
              : `/blog/${item.id}`;

          return (
            <Link
              key={item.id}
              href={itemHref}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-600">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">
                    {item.updated_at}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>阅读全文</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// 主 ContentFooter 导出
export default function ContentFooter({ article }: ContentFooterProps) {
  // 根据页面类型决定模块渲染次序
  // Guide / Wiki: NextStep -> RelatedAirports -> RelatedContent
  // Blog: NextStep -> RelatedContent (高权重) -> RelatedAirports
  const isBlog = article.type === 'blog';

  return (
    <div className="pt-8 border-t border-slate-200/80 space-y-8 font-sans">
      <NextStepSection article={article} />

      {isBlog ? (
        <>
          <RelatedContentSection article={article} />
          <RelatedAirportsSection article={article} />
        </>
      ) : (
        <>
          <RelatedAirportsSection article={article} />
          <RelatedContentSection article={article} />
        </>
      )}
    </div>
  );
}
