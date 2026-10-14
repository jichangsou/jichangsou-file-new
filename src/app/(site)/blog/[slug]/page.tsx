import BlogPage from '@/views/BlogPage';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.id === slug);

  if (!article) {
    return {
      title: '文章不存在',
    };
  }

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `https://jichangsou.com/blog/${article.id}`,
    },
    openGraph: {
      type: 'article',
      url: `https://jichangsou.com/blog/${article.id}`,
      title: article.title,
      description: article.description,
      publishedTime: article.pubDate,
      authors: [article.author],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.id === slug);
  if (!article) {
    notFound();
  }
  return <BlogPage slug={slug} />;
}
