import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  mockAirports,
  mockPlans,
  mockNodes,
  mockClients,
  mockProtocols,
  mockAISupport,
  mockStreamingSupport,
  mockArticles
} from '../data/mock';
import { TOPIC_CONFIGS } from '@/data/topics';
import {
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Server,
  Zap,
  Users,
  Info,
  Tv,
  BookOpen,
  ArrowRight,
  Lock,
  ChevronRight,
  Layers
} from 'lucide-react';

interface AirportDetailPageProps {
  slug: string;
}

export default function AirportDetailPage({ slug }: AirportDetailPageProps) {
  const airport = mockAirports.find(a => a.slug === slug || a.id === slug);

  // If slug is not found, trigger Next.js 404 Page (NO fallback to mockAirports[0]!)
  if (!airport) {
    notFound();
  }

  const plans = mockPlans.filter(p => p.airport_id === airport.id);
  const nodes = mockNodes.filter(n => n.airport_id === airport.id);
  const protocols = mockProtocols.filter(p => p.airport_id === airport.id);
  const aiList = mockAISupport.filter(a => a.airport_id === airport.id);
  const streamingList = mockStreamingSupport.filter(s => s.airport_id === airport.id);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'normal':
        return <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 运营状态：正常</span>;
      case 'unconfirmed':
        return <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><HelpCircle className="w-3.5 h-3.5 text-amber-600" /> 运营状态：待确认</span>;
      case 'abnormal':
        return <span className="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5 text-rose-600" /> 运营状态：异常</span>;
      default:
        return <span className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><XCircle className="w-3.5 h-3.5 text-slate-500" /> 疑似停止运营</span>;
    }
  };

  // Structured Data (JSON-LD)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://jichangsou.com' },
      { '@type': 'ListItem', 'position': 2, 'name': '机场大全', 'item': 'https://jichangsou.com/airports' },
      { '@type': 'ListItem', 'position': 3, 'name': airport.name, 'item': `https://jichangsou.com/airport/${airport.slug}` }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
        <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
        <span>&gt;</span>
        <Link href="/airports" className="hover:text-blue-600 transition-colors">机场大全</Link>
        <span>&gt;</span>
        <span className="text-slate-900 font-medium">{airport.name}</span>
      </nav>

      {/* 1. Header Banner & Title */}
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-600 font-mono tracking-wider uppercase font-semibold">AIRPORT DATABASE RECORD</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500">
                站内资料
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {airport.name} 资料档案：价格、节点、协议与线路配置详解
            </h1>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {getStatusBadge(airport.status)}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
          {airport.description}
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          资料摘要：记录的起步价格为 {airport.price_summary}，流量为 {airport.traffic_summary}，线路为 {airport.line_type}。这些是站内收录信息，不代表当前可购买套餐或实时测速结果。
        </p>

        {/* 核心特征快捷 Pill */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/80 text-xs font-medium">
            起步预算：{airport.price_summary}
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
            初始流量：{airport.traffic_summary}
          </span>
          <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-medium">
            线路类型：{airport.line_type}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <div>记录的核对日期：<strong className="text-slate-800 font-mono">{airport.last_checked}</strong></div>
            <span className="text-slate-300">|</span>
            <div>资料核对时间：<strong className="text-slate-800 font-mono">{airport.updated_at}</strong></div>
            <Link href="/updates" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-0.5 ml-1">
              <span>查看最近更新</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/methodology" className="text-blue-600 font-bold hover:underline">数据口径与使用说明</Link>
          </div>
          <a
            href={airport.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
          >
            <span>访问服务商页面</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 2. 使用场景与选购建议 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>适合人群与使用场景分析</span>
          </h2>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• 先依据自己的预算、流量需求与可用地区筛选。</li>
            <li>• 如需 AI 或流媒体服务，查看下方已收录的服务状态，并在购买前自行验证。</li>
            <li>• 线路、延迟与解锁情况会随地区和时间变化，站内资料不能替代本地实测。</li>
          </ul>
        </div>

        <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-bold text-amber-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700" />
            <span>购买前注意事项与建议</span>
          </h2>
          <ul className="text-xs text-amber-950 space-y-2 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>优先选择月付</strong>：建议首次购买先选择月付体验，在本地网络环境与晚高峰时段测试实际延迟与带宽。</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>核对同时间在线设备数</strong>：周期套餐与一次性流量包的设备限制可能有所不同，请根据多设备并发需求选择。</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>保留备用节点</strong>：任何网络中转均受骨干网波动影响，建议在客户端中同时导入备用订阅。</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. 套餐与价格明细 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span>💳</span> 套餐与价格明细表
          </h2>
          <span className="text-xs text-slate-400 font-mono">（价格与流量以官网结算页为准）</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-800 border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <th className="py-2.5 px-3">套餐名称</th>
                <th className="py-2.5 px-3">估算价格</th>
                <th className="py-2.5 px-3">流量容量</th>
                <th className="py-2.5 px-3">设备并发限制</th>
                <th className="py-2.5 px-3">适用场景与说明</th>
              </tr>
            </thead>
            <tbody>
              {plans.length === 0 && <tr><td colSpan={5} className="py-4 px-3 text-slate-500">暂未收录可核对的套餐明细，请以服务商页面为准。</td></tr>}
              {plans.map((plan) => (
                <tr key={plan.id} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900">{plan.name}</td>
                  <td className="py-3 px-3 text-blue-600 font-bold">
                    ¥{plan.price} {plan.billing_period === 'yearly' ? '/ 年' : plan.billing_period === 'quarterly' ? '/ 季' : plan.billing_period === 'one_time' ? '(一次性)' : '/ 月'}
                  </td>
                  <td className="py-3 px-3 font-medium">{plan.traffic}</td>
                  <td className="py-3 px-3">{plan.device_limit}</td>
                  <td className="py-3 px-3 text-slate-500">{plan.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. 节点、协议、客户端 & AI/流媒体矩阵 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 支持节点地区 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
            <Server className="w-4 h-4 text-blue-600" /> 节点覆盖地区与分布
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {nodes.length === 0 && <span className="text-slate-500">暂未收录节点数量。</span>}
            {nodes.map(n => (
              <span key={n.id} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-slate-800 font-medium">
                {n.region} ({n.node_count} 节点)
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            * 仅展示站内已收录的地区及节点数量；实际可用节点以服务商订阅为准。
          </p>
        </div>

        {/* 支持协议 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" /> 支持传输协议
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {protocols.length === 0 && <span className="text-slate-500">暂未收录协议明细。</span>}
            {protocols.map(p => (
              <span key={p.id} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200/80 rounded-lg font-mono font-semibold">
                {p.protocol_name}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            * 协议支持情况可能随套餐和节点不同而变化。
          </p>
        </div>

        {/* AI 解锁支持 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" /> AI 服务支持记录
          </h3>
          <div className="space-y-2 text-xs">
            {aiList.length === 0 && <p className="text-slate-500">暂未收录 AI 服务支持情况。</p>}
            {aiList.map(a => (
              <div key={a.id} className="flex justify-between items-center text-slate-700">
                <span className="font-medium">{a.service_name}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-50 text-slate-700 border border-slate-200">
                  {a.status === 'supported' ? '记录为支持' : a.status === 'unsupported' ? '记录为不支持' : a.status === 'partial' ? '部分支持' : '待核实'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 流媒体解锁支持 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
            <Tv className="w-4 h-4 text-indigo-600" /> 流媒体支持记录
          </h3>
          <div className="space-y-2 text-xs">
            {streamingList.length === 0 && <p className="text-slate-500">暂未收录流媒体支持情况。</p>}
            {streamingList.map(s => (
              <div key={s.id} className="flex justify-between items-center text-slate-700">
                <span className="font-medium">{s.service_name}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-50 text-slate-700 border border-slate-200">
                  {s.status === 'supported' ? '记录为支持' : s.status === 'unsupported' ? '记录为不支持' : s.status === 'partial' ? '部分支持' : '待核实'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. 优缺点对比 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
            👍 主要优点
          </h3>
          <ul className="space-y-1.5 text-xs text-emerald-950 list-disc list-inside">
            {airport.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-rose-800 flex items-center gap-1.5">
            👎 主要缺点与风险提醒
          </h3>
          <ul className="space-y-1.5 text-rose-950 text-xs list-disc list-inside">
            {airport.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. 常见问题 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <span>❓</span> {airport.name} 常见问题解答 (FAQ)
        </h2>

        <div className="space-y-3 text-xs">
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
            <h3 className="font-bold text-slate-900">Q: {airport.name} 的价格是实时的吗？</h3>
            <p className="text-slate-600 leading-relaxed">
              A: 不是。本站记录的起步价格为 {airport.price_summary}，可能与当前结算页不同；购买前请核对服务商页面。
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
            <h3 className="font-bold text-slate-900">Q: {airport.name} 能稳定使用 AI 或流媒体吗？</h3>
            <p className="text-slate-600 leading-relaxed">
              A: 页面仅展示已收录的服务支持记录，无法保证每个节点、账号或时段都可使用。请先试用并按实际需求验证。
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
            <h3 className="font-bold text-slate-900">Q: 未列出某个套餐或协议代表不支持吗？</h3>
            <p className="text-slate-600 leading-relaxed">
              A: 不代表。未列出说明站内尚未收录对应字段，可向服务商确认。<Link href="/methodology" className="text-blue-600 hover:underline">查看数据口径</Link>。
            </p>
          </div>
        </div>
      </div>

      {/* 7. 相关教程与工具配置指南 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" /> 相关使用教程与技术百科
          </h2>
          <Link href="/guides" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            查阅教程大盘 <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mockArticles.filter(art => art.type === 'guide').slice(0, 4).map(art => (
            <Link
              key={art.id}
              href={`/guides/${art.slug}`}
              className="p-3.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-all block text-xs space-y-1 group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{art.title}</div>
              <div className="text-slate-500 text-[11px] line-clamp-1">{art.summary}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* 8. 相关机场数据专题 (动态相关 Topic) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" /> 相关机场专题资料
          </h2>
          <Link href="/topics" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            浏览全站专题 <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.values(TOPIC_CONFIGS)
            .filter(t => t.filter(airport))
            .map(t => (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}`}
                className="px-3 py-1.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-700 border border-blue-200/80 text-xs font-medium transition-colors inline-flex items-center gap-1"
              >
                <span>{t.title}</span>
                <ChevronRight className="w-3 h-3 text-blue-500" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
