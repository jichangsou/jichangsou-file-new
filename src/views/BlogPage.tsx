import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles as templateArticles } from '../data/articles';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ContentFooter from '../components/content/ContentFooter';
import { Rss, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  slug?: string;
}

export default function BlogPage({ slug }: BlogPageProps) {
  if (slug) {
    const article = templateArticles.find(a => a.id === slug);
    if (!article) {
      notFound();
    }

    const breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://jichangsou.com' },
        { '@type': 'ListItem', 'position': 2, 'name': '博客研讨', 'item': 'https://jichangsou.com/blog' },
        { '@type': 'ListItem', 'position': 3, 'name': article.title, 'item': `https://jichangsou.com/blog/${article.id}` }
      ]
    };

    const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'author': { '@type': 'Organization', 'name': article.author },
      'publisher': { '@type': 'Organization', '@id': 'https://jichangsou.com/#organization', 'name': '机场搜' },
      'datePublished': article.pubDate,
      'dateModified': article.pubDate,
      'mainEntityOfPage': `https://jichangsou.com/blog/${article.id}`
    };

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
        />
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
          <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
          <span>&gt;</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">博客研讨</Link>
          <span>&gt;</span>
          <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">{article.title}</span>
        </nav>
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200/80 rounded-lg text-xs font-semibold inline-block">博客研讨</span>
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">{article.title}</h1>
            <p className="text-sm leading-relaxed text-slate-700">{article.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.pubDate}</span>
            </div>
          </div>
          <div className="text-slate-800 leading-relaxed text-sm">
            <MarkdownRenderer content={article.content} />
          </div>

          <ContentFooter
            article={{
              id: article.id,
              slug: article.id,
              type: 'blog',
              title: article.title,
              summary: article.description,
              category: '博客研讨',
              tags: article.tags,
              author: article.author,
              updated_at: article.pubDate,
              related_airports: article.related_airports,
              related_articles: article.related_articles,
              next_step: article.next_step
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <Rss className="w-4 h-4" />
          <span>Technical Blog</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          独立技术博客
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          探讨 Jamstack 开发、网络工程、全栈架构与前沿技术思考
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {templateArticles.map(post => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="p-5 sm:p-6 bg-white hover:bg-slate-50/80 border border-slate-200 rounded-2xl transition-all shadow-sm hover:border-blue-400 hover:shadow-md space-y-3 block group"
          >
            <h2 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <span className="font-mono">{post.pubDate}</span>
              <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                阅读全文 <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

