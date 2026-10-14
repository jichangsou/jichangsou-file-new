import ComparePage from '@/views/ComparePage';
import { mockCompareItems } from '@/data/mock';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return mockCompareItems.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = mockCompareItems.find(c => c.slug === slug || c.id === slug);

  if (!item) {
    return {
      title: '对比项目不存在',
    };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `https://jichangsou.com/compare/${item.slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      url: `https://jichangsou.com/compare/${item.slug}`,
    },
  };
}

export default async function CompareDetail({ params }: Props) {
  const { slug } = await params;
  const item = mockCompareItems.find(c => c.slug === slug || c.id === slug);
  if (!item) {
    notFound();
  }

  return <ComparePage slug={slug} />;
}
