import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '数据口径与使用说明',
  description: '了解机场搜如何展示机场价格、节点、协议与服务支持信息，以及资料日期、缺失字段和服务商链接的含义。',
  alternates: { canonical: 'https://jichangsou.com/methodology' },
};

export default function MethodologyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-7 text-sm leading-7 text-slate-700">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600">首页</Link> / 数据口径与使用说明
      </nav>
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">数据口径与使用说明</h1>
        <p>机场搜整理站内已有的服务商、套餐和技术资料，帮助读者缩小比较范围。页面上的价格、节点和支持状态会变化，购买与使用前请到服务商页面核对。</p>
      </header>
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">资料如何展示</h2>
        <p>详情页只列出站内有记录的套餐、节点、协议及 AI／流媒体支持字段。没有记录时会显示“暂未收录”；“暂未收录”不等于服务商不提供。起步价格和流量摘要是已收录资料的概览，不保证是当前可购买的最低价。</p>
        <p>页面的“记录的核对日期”和“资料核对时间”来自站内资料字段，并非实时监控或当前日期。不同字段可能更新于不同时间，不能把某个日期理解为全部信息均已重新测试。</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">如何核实与比较</h2>
        <p>先在详情页查看套餐价格、线路和节点，再打开服务商页面核对套餐条款、设备限制及售后政策。AI 与流媒体能否使用还受节点、账号地区、目标服务规则及当地网络影响；建议按自己的设备和时段测试。站内的使用建议不构成性能保证。</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">服务商链接与更正</h2>
        <p>部分跳转链接可能包含推广或邀请参数。链接的存在不表示本站已对服务质量做独立认证。若发现过期价格、错误字段或失效链接，请在访问服务商页面时优先以其当前公开信息为准。</p>
      </section>
      <p><Link href="/airports" className="font-semibold text-blue-600 hover:underline">浏览机场资料 →</Link></p>
    </article>
  );
}
