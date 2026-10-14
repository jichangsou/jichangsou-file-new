import { mockAirports, mockPlans, mockNodes, mockProtocols, mockAISupport, mockArticles } from './mock';
import { Airport } from '../types/database';

export interface TopicFAQ {
  question: string;
  answer: string;
}

export interface TopicSection {
  title: string;
  content: string;
}

export interface TopicConfig {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  notice?: string;
  filterSlug: string;
  filter: (airport: Airport) => boolean;
  sections: TopicSection[];
  faq: TopicFAQ[];
  relatedGuidesSlugs: string[];
  relatedWikiSlugs: string[];
  relatedTopicsSlugs: string[];
}

// Helper to extract numeric minimum price for an airport
export function getMinPrice(airportId: string, priceSummary: string): number {
  const plansForAirport = mockPlans.filter(p => p.airport_id === airportId);
  if (plansForAirport.length > 0) {
    const min = Math.min(...plansForAirport.map(p => p.price));
    if (!isNaN(min) && min > 0) return min;
  }
  const match = priceSummary.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 20;
}

export const TOPIC_CONFIGS: Record<string, TopicConfig> = {
  'airport-recommendations': {
    slug: 'airport-recommendations',
    title: '2026 机场推荐与资料精选',
    shortTitle: '机场推荐',
    h1: '2026机场推荐与机场资料精选',
    description: '汇总全站已收录的主流机场套餐、线路架构与适用场景，提供客观的机场数据浏览与对比。',
    seoTitle: '2026机场推荐与资料精选｜稳定便宜机场与线路大盘',
    seoDescription: '整理2026年主流机场套餐价格、流量分配、节点地区、IEPL/IPLC专线、VLESS协议与客户端兼容性，提供客观的机场资料浏览与索引。',
    intro: '机场搜（jichangsou.com）基于自动化监测与公开测试数据，整理了数十家主流网络加速服务商的基础资料。在科学上网与网络加速的选择中，不同用户对预算、延迟、流量及 AI/流媒体解锁有截然不同的要求。本专题整合了全站已收录的机场服务，帮助你快速了解各家服务商的线路特征、套餐价格与协议支持。',
    notice: '机场资料精选：依据公开价格、线路及节点数据动态汇总，所有信息定期自动更新。',
    filterSlug: 'all',
    filter: (ap) => true,
    sections: [
      {
        title: '如何快速筛选适合自己的机场服务？',
        content: '挑选机场时不应仅凭营销宣传或单一的价格高低做决定。建议优先明确自身使用需求：如果仅用于日常文献检索与社交软件，入门级中转或便宜套餐即可满足需求；如果经常观看 4K/8K 超高清流媒体或进行远程办公，则应重点考量包含物理专线（IEPL/IPLC）的机场；若有极高频的 ChatGPT 或 Claude 使用需求，则需要重点选择提供原生 IP 节点的机场。'
      },
      {
        title: '挑选机场时必须关注的四个核心指标',
        content: '1. **套餐价格与周期**：关注月付起步价以及是否有门槛较低的轻量套餐。\n2. **线路架构**：分清公网直连、BGP 中转与 IEPL/IPLC 物理专线的区别，专线在晚高峰时期抗丢包能力更强。\n3. **节点倍率**：注意不同节点的扣费倍率，避免在 5.0x 高倍率节点下载大文件导致流量瞬间耗尽。\n4. **流媒体与 AI 解锁**：确认节点 IP 是否为原生 IP 资源，能否稳定绕过 OpenAI 或 Netflix 的封锁限制。'
      },
      {
        title: '月付套餐与不限时流量包如何选择？',
        content: '按月/按年计费的周期套餐通常提供较大的每月固定流量，适合每日高频上网或作为主力代理的用户；而不限时流量包（一次性购入流量）没有过期时间限制，非常适合作为备用线路，或者用网频率较低的轻度用户。'
      }
    ],
    faq: [
      {
        question: '机场搜上的机场数据是如何更新的？',
        answer: '机场搜定期通过自动化脚本与监测点对已收录机场的价格、官网状态、节点覆盖及支持协议进行复核与更新。'
      },
      {
        question: '新手入门第一次买机场，建议买多久的套餐？',
        answer: '强烈建议优先选择月付套餐，切勿在未充分测试晚高峰表现前直接购买长周期（如年付）套餐，以保障个人资金安全与灵活调整空间。'
      },
      {
        question: '为什么不同机场的节点在客户端里测速差异很大？',
        answer: '节点延迟与速度受本地运营商（电信/联通/移动）、物理距离、代理协议效率以及机场入口服务器的实时负载共同影响。'
      }
    ],
    relatedGuidesSlugs: ['clash-verge-beginner-guide', 'shadowrocket-beginner-tutorial'],
    relatedWikiSlugs: ['iepl-iplc-bgp-explained', 'node-traffic-rate-explained'],
    relatedTopicsSlugs: ['cheap-airports', 'stable-airports', 'iepl-airports', 'vless-airports']
  },
  'cheap-airports': {
    slug: 'cheap-airports',
    title: '2026 便宜机场推荐｜低价机场套餐、流量与线路整理',
    shortTitle: '便宜机场',
    h1: '2026便宜机场推荐与低价套餐整理',
    description: '筛选起步套餐价格低于或等于 20 元/月的性价比机场，帮助预算有限的用户寻找平价替代方案。',
    seoTitle: '2026便宜机场推荐｜低价机场套餐、流量与线路整理',
    seoDescription: '整理价格较低的机场套餐，并对比流量、线路、协议、节点地区及最近更新时间，帮助筛选适合预算有限用户的机场服务。',
    intro: '对于学生群体、轻度上网用户或仅需要备用节点的用户而言，高昂的高端专线套餐往往存在流量过剩或性价比偏低的问题。本专题专门筛选了起步门槛低于 20 元/月的性价比机场服务。通过整理套餐价格、月度流量大包及线路架构，让你在预算可控的前提下挑选到能够满足日常使用的便宜机场。',
    filterSlug: 'cheap',
    filter: (ap) => getMinPrice(ap.id, ap.price_summary) <= 20,
    sections: [
      {
        title: '什么算便宜机场？',
        content: '在现代机场市场中，通常将月付价格在 10 元至 20 元之间、或者年付折合每月十几元的套餐定义为便宜/性价比机场。部分性价比服务商甚至提供几元钱/月的低门槛入门包，或者 20 元左右即可购入的 100GB+ 流量套餐。'
      },
      {
        title: '价格低时应该注意什么？',
        content: '低价机场在降低运营成本的同时，可能会在带宽冗余、客服响应速度或晚高峰抗压能力上做出折中。在挑选便宜机场时，重点关注以下三点：\n1. **确认是否有隐形高倍率**：部分低价套餐虽然便宜，但主节点扣费倍率高达 2.0x 或 3.0x，导致实际可用流量打折。\n2. **检查节点在线率**：低价服务商可能使用公网直连或普通中转，晚高峰期间可能产生丢包现象。\n3. **坚持月付原则**：选择低价机场时更应坚持月付，随用随续，降低小服务商跑路或线路故障带来的潜在风险。'
      },
      {
        title: '流量、倍率和价格应该一起怎么看？',
        content: '评价一款便宜机场不能单看表面售价。例如，A 机场 15 元/月给 100GB（全节点 1.0x 倍率），B 机场 10 元/月给 200GB（但节点全为 3.0x 倍率），实际 A 机场的可透支流量与稳定性反而优于 B 机场。因此，计算“实际单 GB 成本”时必须将扣费倍率纳入考虑。'
      },
      {
        title: '便宜机场适合哪些用户？',
        content: '便宜机场非常适合：日常用于 Google 搜索与学术资料查阅的科研学生、主要在手机上使用 Telegram/Twitter 的社交用户、以及拥有主线路但需要第二条冗余节点防备突发断网的备用需求者。'
      }
    ],
    faq: [
      {
        question: '便宜机场能顺畅观看 4K 视频吗？',
        answer: '在非晚高峰时段，绝大多数便宜机场的节点均能提供数十兆以上的带宽，满足 4K 视频缓冲；但在晚高峰（20:00-23:00）期间，公网线路可能受骨干网拥堵影响降速。'
      },
      {
        question: '几块钱一个月的不限速机场靠谱吗？',
        answer: '价格极低的套餐往往超卖率较高。建议将其作为短期临时过度或备用节点，不要存储重要个人隐私，且切记避免一次性购买多年。'
      },
      {
        question: '便宜机场支持解锁 ChatGPT 吗？',
        answer: '部分便宜机场通过共享 DNS 或中转机房提供 AI 解锁，具体能否解锁需以节点实际原生 IP 测试结果为准。'
      }
    ],
    relatedGuidesSlugs: ['clash-verge-beginner-guide'],
    relatedWikiSlugs: ['node-traffic-rate-explained', 'vless-vs-vmess-trojan-wiki'],
    relatedTopicsSlugs: ['stable-airports', 'airport-recommendations', 'iepl-airports', 'vless-airports']
  },
  'stable-airports': {
    slug: 'stable-airports',
    title: '2026 稳定机场整理｜中转与专线线路资料',
    shortTitle: '稳定机场',
    h1: '2026稳定机场整理与线路资料大盘',
    description: '整理主打中转与物理专线的高稳定性机场服务，提供线路类型、冗余带宽与节点表现数据。',
    seoTitle: '2026稳定机场整理｜IEPL专线与BGP中转机场资料',
    seoDescription: '整理主打中转与物理专线的高稳定性机场服务，提供线路类型、冗余带宽与节点表现数据，供追求连通性用户参考。',
    intro: '网络的连通率与抗干扰能力是衡量机场服务质量的核心指标。对于经常需要进行远程跨国会议、关键业务传输、实时在线游戏或科研交付的用户而言，线路在晚高峰时段的低丢包率与持续在线率远比单纯的高峰下载峰值更重要。本专题整理了全站具备中转与专线网络保障的机场资料。',
    notice: '稳定性数据模型建设中：当前展示已测线路资料，暂不生成主观稳定性排名。',
    filterSlug: 'stable',
    filter: (ap) => true,
    sections: [
      {
        title: '什么样的线路架构保障机场稳定性？',
        content: '机场服务的稳定性首先取决于其底层网络传输架构：\n- **BGP 多入口智能中继**：在靠近大陆用户的入口机房部署电信/联通/移动三网 BGP 入口，自动将用户流量调度至最优入口，避免跨网抖动。\n- **IEPL / IPLC 物理专线**：使用过境内网点对点物理专线传输，流量不过公网防火墙深层检测，从根本上隔离了公网拥拥堵与封锁。'
      },
      {
        title: '晚高峰断连与丢包的根本原因解析',
        content: '每天 20:00 至 23:00 为国际出口骨干网的流量高峰期。普通直连线路受公网国际出口总带宽瓶颈影响，丢包率可能有所增加；而拥有独立物理专线冗余的机场因具备独立带宽配给，在晚高峰拥堵期能显著降低丢包率，维持连通稳定。'
      },
      {
        title: '商务与科研场景下的机场挑选建议',
        content: '商务办公、跨境电商与科研人员在挑选高稳定性机场时，建议关注服务商是否拥有多入口冗余架构、是否提供自建双重 DoH 加密 DNS 节点，以及客服是否有快速响应机制，以确保突发线路故障时能及时修复。'
      }
    ],
    faq: [
      {
        question: '为什么有的机场号称 99.9% 在线依然会出现短时间断连？',
        answer: '网络链路包含本地运营商、中转入口、过境专线及落地机房多个环节，任何上游骨干网故障或落地 IP 被封锁都可能导致局部节点短暂不可用。'
      },
      {
        question: '高稳定度的机场价格一般在什么区间？',
        answer: '配备高端 IEPL 专线与充足冗余带宽的服务商，月付价格通常在 20 元至 80 元以上不等。'
      }
    ],
    relatedGuidesSlugs: ['tun-mode-setup-guide'],
    relatedWikiSlugs: ['iepl-iplc-bgp-explained', 'fullcone-udp-explained'],
    relatedTopicsSlugs: ['iepl-airports', 'cheap-airports', 'airport-recommendations', 'chatgpt-airports']
  },
  'iepl-airports': {
    slug: 'iepl-airports',
    title: '2026 IEPL/IPLC 专线机场整理｜物理专线与低延迟线路',
    shortTitle: 'IEPL专线机场',
    h1: '2026 IEPL / IPLC 专线机场整理',
    description: '汇总全线采用或包含企业级 IEPL 与 IPLC 物理专线的机场服务，整理延迟表现与流媒体解锁支持。',
    seoTitle: '2026 IEPL/IPLC专线机场整理｜低延迟内网专线机场汇总',
    seoDescription: '汇集全线采用或包含企业级 IEPL 与 IPLC 物理专线的机场服务，整理延迟表现、扣费倍率及流媒体解锁支持。',
    intro: 'IEPL（International Ethernet Private Line，国际以太网专线）与 IPLC（International Private Leased Circuit，国际私用出租电路）代表了当前翻墙与代理中最高规格的物理传输线路。专线流量通过光纤内网直接穿过边境，不经过公网 GFW 防火墙的深层数据包检测（DPI）。本专题汇总了明确配备 IEPL / IPLC 物理专线架构的机场服务。',
    filterSlug: 'iepl',
    filter: (ap) => ap.line_type.toUpperCase().includes('IEPL') || ap.line_type.toUpperCase().includes('IPLC') || ap.pros.some(p => p.includes('IEPL') || p.includes('IPLC')),
    sections: [
      {
        title: '什么是 IEPL / IPLC 专线？',
        content: 'IEPL 与 IPLC 是电信运营商提供的内网点对点数据传输电路。相比于普通的互联网公网路由，内网专线具备物理层隔离、无公网封锁风险、传输延迟极其固定（物理光纤延迟）等突出优势，是目前对抗网络干扰最可靠的硬件方案。'
      },
      {
        title: '专线机场相比普通中转的核心优势',
        content: '1. **极致低延迟与低抖动**：广深到香港专线延迟通常低至 5ms-12ms，上海到日本专线低至 25ms-35ms，特别适合实时联机游戏与语音通讯。\n2. **高抗干扰能力**：由于数据不过公网出口 DPI 监测，在敏感时期或网络波动期依然具备极高的连通率。\n3. **较低丢包率**：专线带宽为独享或按协议定额配给，在晚高峰期依然能控制丢包率。'
      },
      {
        title: '识别假专线与隐形高倍率的注意事项',
        content: '市场上部分不良商家会将普通公网 BGP 隧道标注为“专线”进行宣传。识别真伪的方法包括：观察特殊时期是否依然连通、测试 Ping 延迟抖动方差是否极小（物理专线延迟抖动通常保持在较低区间），以及检查节点列表中的扣费倍率设置是否合理。'
      }
    ],
    faq: [
      {
        question: 'IEPL 专线和 IPLC 专线有什么区别？',
        answer: '在实际机场使用体验中，IEPL（以太网接口）与 IPLC（电路接口）的性能表现几乎完全一致，均代表了顶级物理内网传输。'
      },
      {
        question: '专线机场的价格为什么普遍偏贵？',
        answer: '由于过境物理专线需要按兆（Mbps/月）向电信运营商支付昂贵的物理租金，底层硬件成本远高于普通 VPS 服务器。'
      }
    ],
    relatedGuidesSlugs: ['tun-mode-setup-guide'],
    relatedWikiSlugs: ['iepl-iplc-bgp-explained', 'node-traffic-rate-explained'],
    relatedTopicsSlugs: ['stable-airports', 'vless-airports', 'hong-kong-nodes', 'japan-nodes']
  },
  'vless-airports': {
    slug: 'vless-airports',
    title: '2026 VLESS 协议机场整理｜支持 VLESS 协议与线路资料',
    shortTitle: 'VLESS协议机场',
    h1: '支持 VLESS 协议的机场整理',
    description: '筛选支持新一代 VLESS 协议（含 Reality / XTLS 架构）的机场服务，整理节点列表与客户端支持。',
    seoTitle: '2026 VLESS机场整理｜支持VLESS协议的机场与线路资料',
    seoDescription: '筛选支持新一代 VLESS 协议（含 Reality / XTLS 架构）的机场服务，整理节点列表、客户端支持及配置说明。',
    intro: 'VLESS 是一种轻量级的无状态传输协议，作为 VMess 协议的升级替代者，它舍弃了传统协议中冗余的双重加密握手环节，显著降低了节点服务器与客户端设备（尤其是手机端）的 CPU 算力开销。结合现代 Reality 或 XTLS 伪装技术，VLESS 协议在抗封锁性与传输效率上取得了极佳表现。本专题整理了全站支持 VLESS 协议的机场服务。',
    filterSlug: 'vless',
    filter: (ap) => {
      const protos = mockProtocols.filter(p => p.airport_id === ap.id && p.supported).map(p => p.protocol_name.toUpperCase());
      return protos.some(pr => pr.includes('VLESS')) || ap.description.toUpperCase().includes('VLESS');
    },
    sections: [
      {
        title: '为什么越来越多的机场开始支持 VLESS 协议？',
        content: 'VLESS 协议具备以下核心优势：\n- **性能极致提升**：去掉无必要的内存加解密计算后，在高并发大流量传输（如 4K 视频缓冲）时速度更快，设备发热量明显减少。\n- **配合 Reality 前沿伪装**：直接借用合法的知名网站 TLS 证书进行握手伪装，无需自行购买域名，使得流量特征更加接近正常 HTTPS 访问。'
      },
      {
        title: 'VLESS 与 VMess / Trojan / Shadowsocks 的异同',
        content: 'Shadowsocks 属于经典的对称加密协议；VMess 自带复杂的身份认证机制但报文开销较大；Trojan 模仿标准 HTTPS 流量；而 VLESS 则是模块化设计，将身份认证与传输层解耦，既能提供极高的安全性，又保留了最高的传输效能。'
      },
      {
        title: '客户端对 VLESS 协议的兼容现状',
        content: '目前主流代理客户端均已全面支持 VLESS 协议。Windows / macOS 推荐使用基于 Mihomo 内核的 Clash Verge Rev 或 sing-box；iOS 端 Shadowrocket (小火箭) 与 Stash 均支持直接导入 VLESS 订阅链接。'
      }
    ],
    faq: [
      {
        question: 'VLESS 协议在老旧设备上体验会更好吗？',
        answer: '是的。由于 VLESS 减少了解密计算逻辑，在性能较低的电视盒子、路由器或旧款智能手机上运行效果尤为显著。'
      },
      {
        question: 'VLESS 订阅链接格式有什么特点？',
        answer: 'VLESS 节点的链接通常以 `vless://` 开头，包含 UUID 标识符、服务器地址、端口及伪装参数（如 tls, flow, sni 等）。'
      }
    ],
    relatedGuidesSlugs: ['sing-box-universal-guide', 'clash-verge-beginner-guide'],
    relatedWikiSlugs: ['vless-vs-vmess-trojan-wiki'],
    relatedTopicsSlugs: ['iepl-airports', 'chatgpt-airports', 'hong-kong-nodes', 'japan-nodes']
  },
  'chatgpt-airports': {
    slug: 'chatgpt-airports',
    title: '2026 ChatGPT / AI 解锁机场整理｜支持 AI 服务的机场资料',
    shortTitle: 'ChatGPT解锁机场',
    h1: '支持 ChatGPT 与 AI 工具解锁的机场整理',
    description: '汇总明确支持 ChatGPT、Claude、Gemini 等主流 AI 工具原生 IP 解锁的机场服务。',
    seoTitle: '2026 ChatGPT机场推荐｜支持ChatGPT与Claude AI解锁的机场资料',
    seoDescription: '汇总明确支持 ChatGPT、Claude、Gemini 等主流 AI 工具原生 IP 解锁的机场服务，提供节点地区与连通状态说明。',
    intro: '随着 OpenAI (ChatGPT)、Anthropic (Claude) 以及 Google (Gemini) 等人工智能大模型工具的普及，许多用户发现使用传统数据中心 VPS 节点访问时，常会遇到“Access Denied”、“Service Unavailable”或频繁触发安全验证的问题。本专题筛选了明确具备原生 IP 落地资源、能够稳定支持 ChatGPT 等 AI 服务解锁的机场资料。',
    filterSlug: 'chatgpt',
    filter: (ap) => {
      const aiItems = mockAISupport.filter(a => a.airport_id === ap.id && a.service_name === 'ChatGPT');
      if (aiItems.some(a => a.status === 'supported')) return true;
      if (aiItems.some(a => a.status === 'unsupported')) return false;
      return ap.pros.some(p => p.includes('AI 解锁') || p.includes('ChatGPT'));
    },
    sections: [
      {
        title: '为什么部分机场节点提示 Access Denied 或无法登录 OpenAI？',
        content: 'OpenAI 等 AI 服务商采用了极其严格的风控机制。当系统检测到某个节点 IP 属于万人共享的大型机房 IP 段、或者该 IP 曾被批量注册滥用时，就会触发自动化封锁。只有使用干净的住宅 IP、原生 IP，或者通过 DNS 智能分流代理访问，才能正常登录。'
      },
      {
        title: '解锁 ChatGPT / Claude 的关键要素',
        content: '1. **落地节点原生 IP**：选择落地机房拥有 ISP 住宅标记或无风险记录的原生 IP 节点。\n2. **防范 DNS 泄漏**：在客户端配置中开启 DNS 远程解析与假 IP 模式，防止请求发送至本地运营商 DNS。\n3. **选择热门地区节点**：美国（US）、新加坡（SG）、日本（JP）及台湾（TW）节点通常拥有最好的 AI 服务兼容性。'
      },
      {
        title: 'AI 开发者与高频用户的节点选择技巧',
        content: '如果是使用 API 进行调用的开发者或高频对话用户，建议固定使用新加坡或美国专线节点，并在代理工具中为 `*.openai.com` 与 `*.anthropic.com` 域名单独设置分流规则，确保请求路径固定稳定。'
      }
    ],
    faq: [
      {
        question: '香港节点支持访问 ChatGPT 吗？',
        answer: 'OpenAI 官方目前未对中国香港地区开放服务。大部分机场的香港节点无法直接访问 ChatGPT，除非机场在后台设置了流量转分流至美/新落地节点。'
      },
      {
        question: '出现“Sorry, you have been blocked”怎么办？',
        answer: '尝试清理浏览器 Cookie/缓存、开启无痕模式，并在代理客户端中切换至带“AI解锁”标识的美国或新加坡节点。'
      }
    ],
    relatedGuidesSlugs: ['shadowrocket-beginner-tutorial'],
    relatedWikiSlugs: ['dns-pollution-leak-prevention'],
    relatedTopicsSlugs: ['vless-airports', 'hong-kong-nodes', 'japan-nodes', 'stable-airports']
  },
  'hong-kong-nodes': {
    slug: 'hong-kong-nodes',
    title: '2026 香港节点机场整理｜包含香港线路的机场资料',
    shortTitle: '香港节点机场',
    h1: '包含香港节点的机场整理与线路资料',
    description: '整理提供香港节点（HK BGP / IEPL 专线）的机场服务，对比直连延迟与流媒体解锁表现。',
    seoTitle: '2026 香港节点机场整理｜低延迟香港线路与流媒体解锁',
    seoDescription: '整理提供香港节点（HK BGP / IEPL 专线）的机场服务，对比大陆直连延迟、流媒体解锁表现与套餐性价比。',
    intro: '由于地理位置毗邻中国大陆，中国香港地区节点一直是大容量加速与低延迟代理的首选。对于华南地区用户，广深至香港专线延迟可低至 10ms 左右，北方地区用户直连延迟亦可控制在 30ms-50ms 内。本专题汇总了覆盖高质量香港节点的机场服务。',
    filterSlug: 'hk',
    filter: (ap) => {
      const nodes = mockNodes.filter(n => n.airport_id === ap.id && n.supported).map(n => n.region);
      return nodes.includes('香港') || ap.description.includes('香港') || ap.line_type.includes('香港');
    },
    sections: [
      {
        title: '香港节点为什么的大陆用户的首选？',
        content: '香港拥有极其丰富的国际海缆资源与极短的物理直线距离。无论是网页打开速度、4K 视频首帧秒开体验，还是日常社交应用推送，香港节点都能提供最接近本土宽带的高速连通体验。'
      },
      {
        title: '香港节点在流媒体与 AI 解锁上的表现',
        content: '香港节点可完美支持 Netflix HK、Disney+ HK、YouTube Premium 以及 bilibili 港澳台限制内容的解锁；但由于 OpenAI 政策限制，使用香港节点访问 ChatGPT 时需结合服务商的智能代理分流。'
      },
      {
        title: '挑选香港线路时的防踩坑指南',
        content: '部分低端机场采用绕路线（例如从大陆先连至新加坡/日本再绕回香港），导致物理延迟激增。在挑选时应确认机场是否标明“广深直连”或“HK BGP 直连”。'
      }
    ],
    faq: [
      {
        question: '香港节点的延迟大概在什么范围？',
        answer: '广东地区通常在 8-15ms；江浙沪华东地区约 25-40ms；北京华北地区约 35-55ms。'
      },
      {
        question: '香港节点支持 Steam 游戏下载加速吗？',
        answer: '完全支持。香港节点带宽储备充裕，通常能跑满 500M-1000M 的家庭宽带带宽。'
      }
    ],
    relatedGuidesSlugs: ['clash-verge-beginner-guide'],
    relatedWikiSlugs: ['iepl-iplc-bgp-explained'],
    relatedTopicsSlugs: ['japan-nodes', 'iepl-airports', 'vless-airports', 'cheap-airports']
  },
  'japan-nodes': {
    slug: 'japan-nodes',
    title: '2026 日本节点机场整理｜包含日本线路的机场资料',
    shortTitle: '日本节点机场',
    h1: '包含日本节点的机场整理与线路资料',
    description: '汇总配备日本（东京、大阪）优质节点的机场服务，整理三网直连延迟、游戏联机与 DMM 解锁支持。',
    seoTitle: '2026 日本节点机场整理｜日本东京/大阪线路与游戏加速',
    seoDescription: '汇总配备日本（东京、大阪）优质节点的机场服务，整理三网直连延迟、游戏联机 ping 值与 DMM/AbemaTV 解锁支持。',
    intro: '日本节点（东京、大阪）凭借优秀的东北亚海缆连接质量与丰富的二次元/游戏资源，一直是华北、华东地区用户以及二次元游戏玩家的核心选择。日本节点不仅在日区游戏联机（如 APEX、Valorant 日服）中表现出色，还广泛用于 AbemaTV、DMM、Pixiv 及 ChatGPT 解锁。本专题汇总了包含高质量日本节点的机场资料。',
    filterSlug: 'jp',
    filter: (ap) => {
      const nodes = mockNodes.filter(n => n.airport_id === ap.id && n.supported).map(n => n.region);
      return nodes.includes('日本') || ap.description.includes('日本') || ap.line_type.includes('日本');
    },
    sections: [
      {
        title: '日本节点的技术优势与适用场景',
        content: '上海至东京物理光纤专线延迟仅在 28ms-35ms 左右，北京直连日本亦仅需 40ms-50ms。低延迟结合极高的出口带宽，使日本节点成为外服游戏联机、DMM 游戏加载及日区影音资源播放的最佳支撑。'
      },
      {
        title: '电信、联通、移动三网对日本线路的路由差异',
        content: '北方联通直连日本 NTT / SoftBank 线路体验极佳；电信用户推荐搭配包含 BGP 中转或上海 IEPL 专线出口的日本节点；移动用户则需依赖经过 CMI 中转的日本线路以保证丢包率稳定。'
      },
      {
        title: '如何利用日本节点实现原生 IP 解锁？',
        content: '部分日本网站（如 DMM、TVer）会严查数据中心 IP。具备优质落地资源的机场通常会采购带日本本土 ISP 标记的原生 IP，确保相关版权视频与游戏服务畅通访问。'
      }
    ],
    faq: [
      {
        question: '日本节点适合玩日服游戏吗？',
        answer: '非常适合。搭配支持 FullCone UDP 转发的专线日本节点，可将游戏内 NAT 类型提升为 Open/Type A，极大改善联机匹配与语音质量。'
      },
      {
        question: '日本节点可以顺利解锁 ChatGPT 吗？',
        answer: '可以。日本属于 OpenAI 官方支持的服务地区，只要落地 IP 无异常风控记录，即可顺畅登录和使用。'
      }
    ],
    relatedGuidesSlugs: ['sing-box-universal-guide'],
    relatedWikiSlugs: ['fullcone-udp-explained'],
    relatedTopicsSlugs: ['hong-kong-nodes', 'iepl-airports', 'chatgpt-airports', 'stable-airports']
  }
};

export function getMatchedAirportsForTopic(slug: string): Airport[] {
  const config = TOPIC_CONFIGS[slug];
  if (!config) return [];
  return mockAirports.filter(config.filter);
}

export function getTopicStats(slug: string) {
  const matched = getMatchedAirportsForTopic(slug);
  const count = matched.length;
  if (count === 0) {
    return {
      count: 0,
      priceMin: 0,
      priceMax: 0,
      commonLines: '暂无数据'
    };
  }

  const prices = matched.map(ap => getMinPrice(ap.id, ap.price_summary));
  const priceMin = Math.min(...prices);
  const priceMax = Math.max(...prices);

  const hasIEPL = matched.some(ap => ap.line_type.toUpperCase().includes('IEPL'));
  const hasIPLC = matched.some(ap => ap.line_type.toUpperCase().includes('IPLC'));
  const hasBGP = matched.some(ap => ap.line_type.toUpperCase().includes('BGP'));

  const lines = [];
  if (hasIEPL) lines.push('IEPL专线');
  if (hasIPLC) lines.push('IPLC专线');
  if (hasBGP) lines.push('BGP中转');
  if (lines.length === 0) lines.push('BGP中转 / 企业级专线');

  return {
    count,
    priceMin,
    priceMax,
    commonLines: lines.slice(0, 3).join(' / ')
  };
}
