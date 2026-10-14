import {
  Airport,
  AirportPlan,
  AirportNode,
  AirportClient,
  AirportProtocol,
  AirportAI,
  AirportStreaming,
  Article,
  CompareItem
} from '../../types/database';

// 1. 10 个测试机场基础数据
export const mockAirports: Airport[] = [
  {
    "id": "invisibles",
    "name": "隐形人机场",
    "slug": "invisibles",
    "aliases": [
      "隐形人机场"
    ],
    "description": "隐形人机场已运营约 2 年，主打企业级 IEPL 纯专线传输与 BGP 智能调度，宣称全节点 1 倍率计费、不限速且常规周期套餐不限制设备数量。本文整理了隐形人机场的基础信息、周期与不限时套餐明细及选购注意事项。",
    "website": "https://yinxingren1.invisibleaff.com/#/register?code=Gcp1CRso",
    "status": "normal",
    "traffic_summary": "144 GB / 月起",
    "price_summary": "¥24 / 月起",
    "line_type": "企业级 IEPL 纯专线（支持云端多链路 / BGP 智能调度优化，全节点 1 倍率计费）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "twilight",
    "name": "暮光加速",
    "slug": "twilight",
    "aliases": [
      "暮光加速"
    ],
    "description": "暮光加速成立于 2025 年，由新加坡海外团队运营，采用 VLESS 协议及专线传输，覆盖香港、台湾、日本、新加坡及美国等热门地区节点。本文汇总了暮光加速的基础信息、套餐价格表、测速表现及购买注意事项。",
    "website": "https://twilight.net/#/register",
    "status": "normal",
    "traffic_summary": "120 GB起",
    "price_summary": "¥20 / 月起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun",
    "name": "飞猫云",
    "slug": "feimaoyun",
    "aliases": [
      "飞猫云"
    ],
    "description": "根据服务商公开宣称，飞猫云提供全 IPLC 专线网络加速服务，最高带宽支持 2.5Gbps。全节点 1 倍速率、具备较高可用带宽且不限制设备连接数量。节点覆盖全球多个主要地区，原生 IP 解锁主流流媒体与 AI 服务，同时提供灵活的周期套餐、不限时流量包及独享企业定制方案。",
    "website": "https://flycat1.flycatvipaff.cc/#/?code=3NlSNiJl",
    "status": "normal",
    "traffic_summary": "150GB / 月起",
    "price_summary": "¥25 / 月起",
    "line_type": "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "slug": "weifeng",
    "aliases": [
      "微风网络"
    ],
    "description": "微风网络是一家高性价比的入门级网络加速服务商。服务提供约 61 个节点，采用 IEPL 专线、IPLC 专线与 BGP 中继架构，解锁主流流媒体及 AI 工具。门槛低至 10 元/月，非常适合学生党、轻度翻墙用户及文献资料查询需求。",
    "website": "https://wep01.breezenetaff.com/#/?code=JHqHSog8",
    "status": "normal",
    "traffic_summary": "200GB / 月起",
    "price_summary": "¥27 / 月起",
    "line_type": "IEPL 专线、IPLC 专线、BGP 中继",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang",
    "name": "浪网",
    "slug": "langwang",
    "aliases": [
      "浪网"
    ],
    "description": "发布时间：2026-07-23   > 文章信息：约 2896 字 \\| 阅读约 10 分钟 \\| 标签：科学上网、VPN、机场推荐、浪网 \\| 浏览：66 \\| 喜欢：0",
    "website": "https://jichangsou.com",
    "status": "normal",
    "traffic_summary": "150GB/月起",
    "price_summary": "¥30 / 年起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud",
    "name": "梯子云",
    "slug": "laddercloud",
    "aliases": [
      "梯子云"
    ],
    "description": "梯子云成立于 2025 年，主打 IEPL 专线传输、三网入口优化与全平台自研客户端。提供通用订阅及一键连接客户端，覆盖香港、日本、新加坡、美国、台湾等地区的 60+ 节点，支持主流流媒体与 AI 工具解锁。本文整理了梯子云的基础信息、周期与不限时套餐明细及选购建议。",
    "website": "https://asfeoasf.ladderttt.sbs/#/?code=rhKeiJTM",
    "status": "normal",
    "traffic_summary": "125 GB / 月起",
    "price_summary": "¥25 / 年起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "slug": "lingdongyun",
    "aliases": [
      "灵动云"
    ],
    "description": "📖 约 2102 字 大约 7 分钟 | 🏷️ 机场推荐 科学上网 Trojan 不限时流量包 | 👁️ 111 | 📅 2026-07-23",
    "website": "https://yinxing4.lingdongaff.com/#/?code=mW96wgI4",
    "status": "normal",
    "traffic_summary": "100GB/月起",
    "price_summary": "¥20 / 年起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv",
    "name": "flyv 机场",
    "slug": "flyv",
    "aliases": [
      "flyv 机场"
    ],
    "description": "FlyV 是一家深耕游戏加速与跨境专线的高性能机场。全线采用 IEPL 游戏与流媒体双特化专线，全节点 1x 计费且无限速、不限设备数。完美支持 4K/8K 影音与 ChatGPT 等 AI 工具。",
    "website": "https://rtu23u5.flyvttt.sbs/#/?code=28mmffKv",
    "status": "normal",
    "traffic_summary": "150G 起步大流量，性价比优选（推荐）起",
    "price_summary": "¥25 / 月起",
    "line_type": "IEPL 专线（游戏与流媒体双特化）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly",
    "name": "Firefly 机场",
    "slug": "firefly",
    "aliases": [
      "Firefly 机场"
    ],
    "description": "Firefly 是由海外团队运营的加速服务商。服务主打 IPLC 专线与 VLESS 协议，提供原生 IP，不限速且不限制客户端与设备数量。支持流媒体与 AI 工具解锁，包含多种周期套餐及一次性不限时流量包。",
    "website": "https://vip02.fireflyaff.com/#/?code=QvtWcNbI",
    "status": "normal",
    "rating": 9,
    "traffic_summary": "150GB / 月起",
    "price_summary": "¥25 / 月起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun",
    "name": "Sogo 云",
    "slug": "sogoyun",
    "aliases": [
      "Sogo 云"
    ],
    "description": "根据服务商公开宣称，Sogo云全线采用 IPLC 专线网络，单节点最高速率达 2.5Gbps。所有节点均为 1x 倍率且具备较高可用带宽，完全不限制在线设备/客户端数量。全线支持原生 IP 资源，支持解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、TikTok 等 AI 与社媒应用。",
    "website": "https://wzjc.sogoyunaff.cc/#/?code=Da28sVAh",
    "status": "normal",
    "traffic_summary": "150GB / 月起",
    "price_summary": "¥25 / 月起",
    "line_type": "全 IPLC 专线（单节点最高速率 2.5Gbps）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone",
    "name": "SSONE 机场",
    "slug": "ssone",
    "aliases": [
      "SSONE 机场"
    ],
    "description": "SSONE 是一家主打性价比的网络加速服务商，采用 BGP 隧道中转线路，支持 SS/V2Ray/Trojan 多种协议。提供 1天 1G 免费试用，月付低至 10元/60G，解锁主流流媒体及 AI 工具，支持多设备同时在线。",
    "website": "https://m.ssone.io/#/register?code=GeTpX1Qx",
    "status": "normal",
    "traffic_summary": "标准流量起",
    "price_summary": "¥10 / 月起",
    "line_type": "BGP 隧道中转",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1",
    "name": "U1S1 机场",
    "slug": "u1s1",
    "aliases": [
      "U1S1 机场"
    ],
    "description": "U1S1 采用 BGP 三网智能优化 + IEPL 专线出口，全平台支持 SS (Shadowsocks) 协议。全套餐维持不限速、不限制在线设备数量，且官方每两个月固定扩容 +200Mbps 带宽以保障晚高峰冗余。完美秒开解锁 Netflix、Disney+、HBO、DAZN 等流媒体及 ChatGPT、Claude、Midjourney 等 AI 平台。",
    "website": "https://pkdj7.vipaff.cc/#/?code=SrIisw0u",
    "status": "normal",
    "traffic_summary": "120GB / 月起",
    "price_summary": "¥20 / 月起",
    "line_type": "BGP 三网智能优化 + IEPL 专线出口",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "aliases": [
      "WgetCloud"
    ],
    "description": "WgetCloud（原 GaCloud）是一家老牌高端加速服务商。平台采用 BGP 服务器接入与亚马逊 Global Accelerator 专线，支持 Trojan 协议，主打低延迟与高稳定性。",
    "website": "https://invite.wgetcloud.ltd/auth/register?code=1i8Pgu",
    "status": "normal",
    "traffic_summary": "200 GB / 月起",
    "price_summary": "¥79 / 月起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun",
    "name": "一翻云",
    "slug": "yifanyun",
    "aliases": [
      "一翻云"
    ],
    "description": "一翻云全线配备 IEPL 企业级专线，拥有顶级带宽冗余与低延迟表现。全套餐不限制在线设备与客户端数量，提供自研客户端支持一键连接，完美解锁主流流媒体及各类 AI 智能工具。",
    "website": "https://wzjc.1flyunaff.cc/#/?code=cX5Pnju4",
    "status": "normal",
    "traffic_summary": "150GB / 月起",
    "price_summary": "¥20 / 月起",
    "line_type": "全 IEPL 企业级专线（最高级带宽冗余）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun",
    "name": "二猫云",
    "slug": "ermaoyun",
    "aliases": [
      "二猫云"
    ],
    "description": "根据服务商公开宣称，二猫云全线配备 IEPL 专线网络，单节点峰值速率最高可达 2.5Gbps。所有节点均维持 1x 倍率且具备较高可用带宽，完全不限制在线设备/客户端数量。全线采用原生 IP 资源，支持解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、TikTok 等 AI 与社媒应用。",
    "website": "https://waaa.2maoyunaff.cc/#/?code=dzgbKSSJ",
    "status": "normal",
    "traffic_summary": "130GB / 月起",
    "price_summary": "¥20 / 月起",
    "line_type": "全 IEPL 专线（单节点最高速率 2.5Gbps）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "slug": "guangnianti",
    "aliases": [
      "光年梯"
    ],
    "description": "根据服务商公开宣称，光年梯（Guangnianti）全线基于 IPLC/IEPL 专线网络 架构构建，最高单节点带宽可达 2.5Gbps。全节点按 1x 倍率扣费，具备较高可用带宽，且不限制同时在线客户端/设备数量。节点配备纯净原生 IP 资源，全面解锁 Netflix、Disney+、HBO 等主流流媒体及 ChatGPT、Claude、Gemini、TikTok 等 AI 与社媒平台。",
    "website": "https://ggmq.gntaff.com/#/?code=oTY2f32o",
    "status": "normal",
    "traffic_summary": "110GB / 月起",
    "price_summary": "¥18 / 年起",
    "line_type": "全程 IPLC 专线（最高 2.5Gbps 速率） / 独享 IEPL 专线",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun",
    "name": "光速云",
    "slug": "guangshuyun",
    "aliases": [
      "光速云"
    ],
    "description": "根据服务商公开宣称，光速云（Lightspeed Cloud）全线采用全球 IPLC 专线网络接入，单节点最高速率可达 2.5Gbps。节点统一 1 倍率计费、晚高峰满速且不限制设备连接数量。线路搭配原生 IP，轻松解锁 Netflix、Disney+、ChatGPT 及 TikTok 等主流服务。",
    "website": "https://mdlky.gsyaff.com/#/?code=BEXBm84c",
    "status": "normal",
    "traffic_summary": "148GB / 月起",
    "price_summary": "¥23 / 月起",
    "line_type": "全球 IPLC 专线（单节点速率最高可达 2.5Gbps）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "slug": "quanqiuyun",
    "aliases": [
      "全球云"
    ],
    "description": "全球云主打出海线路与流媒体解锁服务，采用企业级 IPLC/IEPL 专线传输、智能负载均衡与三网入口优化。提供 70+ 节点并基于 VLESS 协议，支持常见的第三方客户端（Shadowrocket、Clash、V2Ray 等）以及多平台场景使用。本文整理了全球云的基础信息、周期套餐、不限时流量包及选购建议。",
    "website": "https://vbfdvfj1.quanqiugttt1.club/#/?code=NKII9ZkH`",
    "status": "normal",
    "traffic_summary": "标准流量起",
    "price_summary": "¥20 / 月起",
    "line_type": "IPLC / IEPL 专线（宣称配有智能负载均衡与三网入口优化）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin",
    "name": "可信云 Kexin Cloud",
    "slug": "kexin",
    "aliases": [
      "可信云 Kexin Cloud"
    ],
    "description": "根据服务商公开宣称，可信云全线搭载 60+ IEPL 专线节点，覆盖港/台/新/日/美等核心地区。线路维持高品质稳定输出，完全不限制在线设备与客户端数量。全线采用原生 IP 资源，支持解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、TikTok 等 AI 与社媒应用。",
    "website": "https://work.kosingaff.com/#/?code=JDeEfOcq",
    "status": "normal",
    "rating": 8,
    "traffic_summary": "60GB / 月起",
    "price_summary": "¥15 / 月起",
    "line_type": "60+ 顶级 IEPL 专线节点",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "slug": "weitu",
    "aliases": [
      "唯兔云"
    ],
    "description": "唯兔云全线基于 IPLC 专线 + VLESS 协议 打造，并配有备用直连节点。全节点 1x 速率扣费，不限速且不限制客户端/设备连接数量。依靠纯净原生 IP 资源，全面解锁 Netflix、Hulu、HBO、Disney+ 等主流流媒体及 ChatGPT、TikTok 等 AI 与社媒平台。",
    "website": "https://fast.v2yunvipaff.com/#/?code=4WmxN4Tr",
    "status": "normal",
    "traffic_summary": "100GB / 月起",
    "price_summary": "¥14.9 / 月起",
    "line_type": "全 IPLC 专线 + 备用直连节点",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun",
    "name": "大哥云",
    "slug": "dageyun",
    "aliases": [
      "大哥云"
    ],
    "description": "本指南针对大哥云（DeGeYun）网络加速服务进行整体解析，包含注册入口、各档位套餐配置、节点使用建议、常见疑问及全平台客户端支持列表。",
    "website": "https://a03.dgy02.com/#/register?code=X8MBmftq",
    "status": "normal",
    "traffic_summary": "100 GB/月起",
    "price_summary": "¥19 / 月起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun",
    "name": "宇宙云",
    "slug": "yuzhouyun",
    "aliases": [
      "宇宙云"
    ],
    "description": "宇宙云配备 70+ 顶级 IEPL/IPLC 专线节点，覆盖港/台/新/日/美/马/德等核心地区。节点统一维持不限速，完全不限制设备与客户端在线数量。全线支持自研客户端一键连接，完美解锁各大主流流媒体及 ChatGPT、Claude、TikTok 等 AI 与社媒工具。",
    "website": "https://wzjc.yuzoucloud.cc/#/?code=4FJ182Jl",
    "status": "normal",
    "traffic_summary": "160GB / 月起",
    "price_summary": "¥25 / 月起",
    "line_type": "70+ 精品 IEPL/IPLC 专线节点",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili",
    "name": "快狸 Kuaili Cloud",
    "slug": "kuaili",
    "aliases": [
      "快狸 Kuaili Cloud"
    ],
    "description": "根据服务商公开宣称，快狸全线采用 全 IEPL 专线网络，单节点峰值带宽高达 2.5Gbps。全节点保持 1x 倍率 且具备较高可用带宽，完全不限制在线设备与客户端数量。配备原生 IP 资源，支持解锁 Netflix、Disney+ 等流媒体及 ChatGPT、TikTok 等 AI 与社媒工具。",
    "website": "https://work.kuailicloud.cc/#/?code=xVU3Wv16",
    "status": "normal",
    "traffic_summary": "50GB / 月起",
    "price_summary": "¥15 / 月起",
    "line_type": "全 IEPL 专线网络 (单节点峰值 2.5Gbps)",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "slug": "wuyou",
    "aliases": [
      "无忧链接"
    ],
    "description": "无忧链接（WUYOU LINK）是一家运营约 1 年的网络加速服务商。服务主打不限速、不限制客户端使用，支持通用订阅协议及小火箭（Shadowrocket）等主流客户端，解锁常见流媒体与 AI 工具，提供多种周期套餐及一次性不限时流量包。",
    "website": "https://lsitel.worryfreettt.homes/#/?code=SaSZbwak",
    "status": "normal",
    "traffic_summary": "100 GB/月起",
    "price_summary": "¥12.92 / 年起",
    "line_type": "BGP 中转 / 企业级专线",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "aliases": [
      "星岛梦"
    ],
    "description": "根据服务商公开宣称，星岛梦采用全 IPLC/IEPL 专线网络接入，单节点峰值速率高达 2.5Gbps。全节点 1x 速率扣费，高峰时段不降速，且完全不限制客户端在线设备数量。原生 IP 支持支持解锁 Netflix、Disney+、ChatGPT 及 TikTok 等主流服务。",
    "website": "https://kfccbb.xingdaomeng.com/#/?code=0gckwZkN",
    "status": "normal",
    "traffic_summary": "150GB / 月起",
    "price_summary": "¥25 / 月起",
    "line_type": "全 IPLC / IEPL 专线（单节点速率最高可达 2.5Gbps）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun",
    "name": "极连云",
    "slug": "jilianyun",
    "aliases": [
      "极连云"
    ],
    "description": "根据服务商公开宣称，极连云全线接入 IPLC 专线 网络，单节点最高速率达 2.5Gbps。节点统一 1x 速率扣费且具备较高可用带宽，完全不限制在线设备/客户端数量。全线搭配原生 IP 资源，支持解锁 Netflix 等主流流媒体及 ChatGPT、TikTok 等 AI/社媒应用。",
    "website": "https://kdjhao.jlyvipaff.com/#/?code=YCC3SRLe",
    "status": "normal",
    "traffic_summary": "标准流量起",
    "price_summary": "¥1 / 年起",
    "line_type": "全 IPLC 专线（单节点最高速率 2.5Gbps）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "slug": "lingmao",
    "aliases": [
      "灵猫网络"
    ],
    "description": "灵猫网络（Spirit Cat）于 2026 年上线运营，主打 IPLC 专线线路。服务宣传全节点 1 倍倍率、不限速且不限制设备连接数量，支持通用订阅导入及主流流媒体与 AI 工具解锁。",
    "website": "https://edp01.civetaff.com/#/?code=8n0vbtUD",
    "status": "normal",
    "traffic_summary": "150 GB起",
    "price_summary": "¥25 / 月起",
    "line_type": "IPLC 专线（宣传所有套餐均为 1 倍流量倍率）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun",
    "name": "赛博云",
    "slug": "saiboyun",
    "aliases": [
      "赛博云"
    ],
    "description": "赛博云机场是一家提供高速网络加速服务的平台，主打低延迟与高性价比。支持油管 8K 秒开，解锁主流流媒体与 AI 工具，线路涵盖 CN2/CMIN2/4837 高端专线及中转线路，节点覆盖全球多地。",
    "website": "https://saiboyun.pages.dev/",
    "status": "normal",
    "traffic_summary": "100 GB/月起",
    "price_summary": "¥3 / 月起",
    "line_type": "CN2 / CMIN2 / 4837 高端专线、高端直连、高速中转线路",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie",
    "name": "跨界云",
    "slug": "kuajie",
    "aliases": [
      "跨界云"
    ],
    "description": "跨界云（Crossover）于 2026 年开业，宣称网络已全面升级为“全专线链路”。套餐覆盖 120GB 至 1500GB 多档流量，支持通用订阅导入及微信、支付宝付款。包含 50 条 Vless 节点，可解锁主流流媒体。",
    "website": "https://vip02.kuajieaff.com/#/?code=kTdpCGi9",
    "status": "normal",
    "rating": 7,
    "traffic_summary": "120 GB起",
    "price_summary": "¥20 / 月起",
    "line_type": "宣称全专线升级链路",
    "pros": [
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持",
      "全平台客户端通用订阅导入"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova",
    "name": "边缘节点 EdgeNova",
    "slug": "edgenova",
    "aliases": [
      "边缘节点 EdgeNova"
    ],
    "description": "边缘节点全线搭载 IPLC 专线网络，单节点峰值速率达 2.5Gbps。所有节点统一为 1x 倍率，晚高峰不降速，且完全不限制在线设备与客户端数量。全线采用原生 IP，流畅解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、TikTok 等 AI 与社媒应用。",
    "website": "https://work.edgenovaaff.cc/#/?code=PCoJq5SC",
    "status": "normal",
    "traffic_summary": "30GB / 月起",
    "price_summary": "¥15 / 月起",
    "line_type": "全 IPLC 专线（最高带宽 2.5Gbps）",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie",
    "name": "速界 Speed World",
    "slug": "sujie",
    "aliases": [
      "速界 Speed World"
    ],
    "description": "根据服务商公开宣称，速界全线搭载 全 IPLC 专线网络，最高提供 2.5Gbps 稳定速率。全节点保持 1x 节点倍率 且具备较高可用带宽，完全不限制设备在线数量与客户端连接数。全线配备原生 IP 线路，支持解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、TikTok 等 AI 与社交平台。",
    "website": "https://work.speedworldaff.cc/#/?code=rLgiidtU",
    "status": "normal",
    "traffic_summary": "50GB / 月起",
    "price_summary": "¥15 / 月起",
    "line_type": "全 IPLC 专线网络 (最高 2.5Gbps 稳定带宽)",
    "pros": [
      "企业级 IPLC / IEPL 物理专线",
      "提供专线高速中转",
      "原生 IP 流媒体/AI 解锁支持"
    ],
    "cons": [
      "高峰期丢包受本地网络质量影响",
      "长周期套餐需注意服务稳定性"
    ],
    "last_checked": "2026-09-16",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  }
];

// 2. 测试套餐数据
export const mockPlans: AirportPlan[] = [
  {
    "id": "invisibles-plan-1",
    "airport_id": "invisibles",
    "name": "隐形人·白银纪元",
    "price": 24,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "144 GB / 月",
    "device_limit": "不限制",
    "description": "首次体验、日常轻度学习与办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-2",
    "airport_id": "invisibles",
    "name": "隐形人·黄金序列",
    "price": 48,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "360 GB / 月",
    "device_limit": "不限制",
    "description": "中高频视频观赏、日常主力使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-3",
    "airport_id": "invisibles",
    "name": "隐形人·铂金至臻",
    "price": 105,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "750 GB / 月",
    "device_limit": "不限制",
    "description": "大文件传输、高流量重度用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-4",
    "airport_id": "invisibles",
    "name": "隐形人·钻石穹顶",
    "price": 185,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1600 GB / 月",
    "device_limit": "不限制",
    "description": "团队协作或多设备重度流量需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-5",
    "airport_id": "invisibles",
    "name": "隐形人·星耀风暴 365天不熄",
    "price": 109,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "80 GB / 年",
    "device_limit": "不限制",
    "description": "低频备用，能接受年付风险的用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-6",
    "airport_id": "invisibles",
    "name": "隐形人·一次性小流量",
    "price": 229,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "160 GB",
    "device_limit": "1 设备",
    "description": "严格限 1 台",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-7",
    "airport_id": "invisibles",
    "name": "隐形人·一次性标准流量包",
    "price": 549,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "420 GB",
    "device_limit": "2 设备",
    "description": "支持 2 台",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-8",
    "airport_id": "invisibles",
    "name": "隐形人·一次性精英流量包",
    "price": 1199,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "1000 GB",
    "device_limit": "3 设备",
    "description": "支持 3 台",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "invisibles-plan-9",
    "airport_id": "invisibles",
    "name": "王者定制版",
    "price": 600,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500 GB / 月",
    "device_limit": "不限制",
    "description": "独立带宽、不限速直传；服务周期未明确说明",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "twilight-plan-1",
    "airport_id": "twilight",
    "name": "暮光·基础版",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "120 GB",
    "device_limit": "不限制",
    "description": "¥57",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "twilight-plan-2",
    "airport_id": "twilight",
    "name": "暮光·标准版",
    "price": 40,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "¥114",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "twilight-plan-3",
    "airport_id": "twilight",
    "name": "暮光·旗舰版",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "700 GB",
    "device_limit": "不限制",
    "description": "¥285",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "twilight-plan-4",
    "airport_id": "twilight",
    "name": "暮光·至尊版",
    "price": 180,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.5 TB",
    "device_limit": "不限制",
    "description": "¥513",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "twilight-plan-5",
    "airport_id": "twilight",
    "name": "暮光·年付轻量版",
    "price": 109,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "70 GB / 全年",
    "device_limit": "不限制",
    "description": "低频使用、年付小流量备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-1",
    "airport_id": "feimaoyun",
    "name": "飞猫·学生版",
    "price": 84,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "50GB / 月",
    "device_limit": "不限制",
    "description": "年费小包，适用于低流量用户与学生党，每月自动刷新流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-2",
    "airport_id": "feimaoyun",
    "name": "飞猫·星耀版",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "日常轻中度流量使用，季付及以上买即起每 30 天自动刷新",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-3",
    "airport_id": "feimaoyun",
    "name": "飞猫·星环版",
    "price": 45,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300GB / 月",
    "device_limit": "不限制",
    "description": "办公、AI 工具与中高频流媒体影音播放",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-4",
    "airport_id": "feimaoyun",
    "name": "飞猫·银河版",
    "price": 85,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "600GB / 月",
    "device_limit": "不限制",
    "description": "多设备共享与大流量重度使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-5",
    "airport_id": "feimaoyun",
    "name": "飞猫·宇宙版",
    "price": 150,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "极致超大流量与重度业务/影音需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-6",
    "airport_id": "feimaoyun",
    "name": "飞猫·不限时套餐",
    "price": 680,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "1.0TB",
    "device_limit": "不限制",
    "description": "永不按周期自动清零，支持手动付费重置（原价 9 折即 ¥612）；全 IPLC 专线",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "feimaoyun-plan-7",
    "airport_id": "feimaoyun",
    "name": "飞猫·定制套餐",
    "price": 550,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500GB",
    "device_limit": "不限制",
    "description": "专属独立部署节点与独享原生 IP，专为跨境电商、TikTok 直播及企业级应用设计",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng-plan-1",
    "airport_id": "weifeng",
    "name": "清风（微风）",
    "price": 137,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "100GB / 月",
    "device_limit": "不限制",
    "description": "轻度长期使用，极低成本备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng-plan-2",
    "airport_id": "weifeng",
    "name": "乘风（骑马）",
    "price": 27,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "200GB / 月",
    "device_limit": "不限制",
    "description": "日常网页、社交与 1080P 视频播放",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng-plan-3",
    "airport_id": "weifeng",
    "name": "破风（破）",
    "price": 57,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "高频使用、多设备共享与资料下载",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng-plan-4",
    "airport_id": "weifeng",
    "name": "御风（精通）",
    "price": 127,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.2TB / 月",
    "device_limit": "不限制",
    "description": "大流量需求与重度影音办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng-plan-5",
    "airport_id": "weifeng",
    "name": "信风·不限时",
    "price": 200,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "270GB",
    "device_limit": "不限制",
    "description": "永不过期，低频备用首选",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weifeng-plan-6",
    "airport_id": "weifeng",
    "name": "长风·不限时",
    "price": 370,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "570GB",
    "device_limit": "不限制",
    "description": "永不过期，长期灵活使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-1",
    "airport_id": "langwang",
    "name": "浪网 入门",
    "price": 30,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "150GB/月",
    "device_limit": "不限制",
    "description": "网页、社交、短视频和轻度流媒体",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-2",
    "airport_id": "langwang",
    "name": "浪网 进阶",
    "price": 70,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "400GB/月",
    "device_limit": "不限制",
    "description": "日常办公、AI 工具和中等频率视频",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-3",
    "airport_id": "langwang",
    "name": "浪网 高端",
    "price": 120,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "800GB/月",
    "device_limit": "不限制",
    "description": "高频视频、下载和远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-4",
    "airport_id": "langwang",
    "name": "浪网 商业",
    "price": 200,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "2TB/月",
    "device_limit": "不限制",
    "description": "团队、大流量和高并发使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-5",
    "airport_id": "langwang",
    "name": "浪网 年付标准",
    "price": 119,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "80GB/月",
    "device_limit": "不限制",
    "description": "轻度长期使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-6",
    "airport_id": "langwang",
    "name": "浪网 定制线路包",
    "price": 640,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "500GB/月",
    "device_limit": "不限制",
    "description": "独立 IP、直播和跨境业务",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-7",
    "airport_id": "langwang",
    "name": "浪网 小流量包",
    "price": 239,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "180GB",
    "device_limit": "1 设备",
    "description": "独立 IP、限 1 台设备",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-8",
    "airport_id": "langwang",
    "name": "浪网 标准流量包",
    "price": 569,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "450GB",
    "device_limit": "不限制",
    "description": "适合经常出差及两台设备使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "langwang-plan-9",
    "airport_id": "langwang",
    "name": "浪网 精英流量包",
    "price": 1099,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "900GB",
    "device_limit": "不限制",
    "description": "面向重度生产力和业务用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-1",
    "airport_id": "laddercloud",
    "name": "初阶网络·基础视野",
    "price": 25,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "125 GB / 月",
    "device_limit": "不限制",
    "description": "轻度日常使用，适合首先月付体验",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-2",
    "airport_id": "laddercloud",
    "name": "中阶加速·极清多线",
    "price": 60,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "350 GB / 月",
    "device_limit": "不限制",
    "description": "日常视频、AI 工具与远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-3",
    "airport_id": "laddercloud",
    "name": "高阶专线·全球智联",
    "price": 110,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "750 GB / 月",
    "device_limit": "不限制",
    "description": "中重度视频与多设备使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-4",
    "airport_id": "laddercloud",
    "name": "顶阶商业·全球骨干",
    "price": 190,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "1.6 TB / 月",
    "device_limit": "不限制",
    "description": "大流量或团队用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-5",
    "airport_id": "laddercloud",
    "name": "天梯随行·年度保活方案",
    "price": 89,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60 GB / 年",
    "device_limit": "不限制",
    "description": "使用频率较低、希望控制年费的备用用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-6",
    "airport_id": "laddercloud",
    "name": "云端独享·私人定制专线",
    "price": 650,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500 GB / 月",
    "device_limit": "不限制",
    "description": "有私人定制线路需求的用户（咨询购买）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-7",
    "airport_id": "laddercloud",
    "name": "云端买断·永不限时轻量包",
    "price": 169,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "120 GB",
    "device_limit": "不限制",
    "description": "低频备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-8",
    "airport_id": "laddercloud",
    "name": "云端买断·永不限时标准包",
    "price": 449,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "350 GB",
    "device_limit": "不限制",
    "description": "阶段性补充流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "laddercloud-plan-9",
    "airport_id": "laddercloud",
    "name": "云端买断·永不限时精英包",
    "price": 849,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "700 GB",
    "device_limit": "不限制",
    "description": "较高流量的长期备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-1",
    "airport_id": "lingdongyun",
    "name": "灵动·拂风",
    "price": 20,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "100GB/月",
    "device_limit": "不限制",
    "description": "轻度日常使用，适合先月付体验",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-2",
    "airport_id": "lingdongyun",
    "name": "灵动·驭浪",
    "price": 50,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "300GB/月",
    "device_limit": "不限制",
    "description": "日常视频与 AI 工具使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-3",
    "airport_id": "lingdongyun",
    "name": "灵动·破晓",
    "price": 100,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "700GB/月",
    "device_limit": "不限制",
    "description": "中重度视频与多设备使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-4",
    "airport_id": "lingdongyun",
    "name": "灵动·凌霄",
    "price": 180,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "1.5TB/月",
    "device_limit": "不限制",
    "description": "大流量用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-5",
    "airport_id": "lingdongyun",
    "name": "灵动·穿云",
    "price": 99,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "70GB/年",
    "device_limit": "不限制",
    "description": "使用频率较低、希望控制年费",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-6",
    "airport_id": "lingdongyun",
    "name": "灵动云·至尊私人定制",
    "price": 620,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB/月",
    "device_limit": "不限制",
    "description": "有定制线路需求的用户，下单前确认具体交付内容",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-7",
    "airport_id": "lingdongyun",
    "name": "灵动·闲云（小流量包）",
    "price": 199,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "150GB",
    "device_limit": "不限制",
    "description": "低频备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-8",
    "airport_id": "lingdongyun",
    "name": "灵动·惊云（标准流量包）",
    "price": 499,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "400GB",
    "device_limit": "不限制",
    "description": "阶段性补充流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingdongyun-plan-9",
    "airport_id": "lingdongyun",
    "name": "灵动·飞云（精英流量包）",
    "price": 899,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "800GB",
    "device_limit": "不限制",
    "description": "较高流量的长期备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-1",
    "airport_id": "flyv",
    "name": "FlyV 会员·入门方案",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150G 起步大流量，性价比优选（推荐）",
    "device_limit": "不限制",
    "description": "150G 起步大流量，性价比优选（推荐）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-2",
    "airport_id": "flyv",
    "name": "FlyV 会员·进阶方案",
    "price": 50,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "日常高频使用与中度影音需求",
    "device_limit": "不限制",
    "description": "日常高频使用与中度影音需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-3",
    "airport_id": "flyv",
    "name": "FlyV 会员·高端方案",
    "price": 110,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "多设备共享与大流量重度用户",
    "device_limit": "不限制",
    "description": "多设备共享与大流量重度用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-4",
    "airport_id": "flyv",
    "name": "FlyV 会员·商业方案",
    "price": 190,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "团队办公与高并发业务需求",
    "device_limit": "不限制",
    "description": "团队办公与高并发业务需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-5",
    "airport_id": "flyv",
    "name": "FlyV 会员·年付标准轻量版",
    "price": 99,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "低成本长期轻度备用",
    "device_limit": "不限制",
    "description": "低成本长期轻度备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-6",
    "airport_id": "flyv",
    "name": "FlyV 会员·原生IP·独享黄金专线",
    "price": 600,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "追求独立极高品质 IP 与专属带宽极客用户",
    "device_limit": "不限制",
    "description": "追求独立极高品质 IP 与专属带宽极客用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-7",
    "airport_id": "flyv",
    "name": "单次轻量版·小流量包",
    "price": 189,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "适合低频备用或按需使用",
    "device_limit": "不限制",
    "description": "适合低频备用或按需使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-8",
    "airport_id": "flyv",
    "name": "单次轻量版·标准流量包",
    "price": 479,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "长期不限时中等用量",
    "device_limit": "不限制",
    "description": "长期不限时中等用量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "flyv-plan-9",
    "airport_id": "flyv",
    "name": "单次轻量版·精英流量包",
    "price": 799,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "大容量长期备用",
    "device_limit": "不限制",
    "description": "大容量长期备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly-plan-1",
    "airport_id": "firefly",
    "name": "Firefly 年付版",
    "price": 96,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "轻度长期使用，需一次性支付全年费用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly-plan-2",
    "airport_id": "firefly",
    "name": "Firefly Lite",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "日常网页、社交与轻度视频",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly-plan-3",
    "airport_id": "firefly",
    "name": "Firefly Plus",
    "price": 45,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300GB / 月",
    "device_limit": "不限制",
    "description": "AI 工具、办公与中等频率视频",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly-plan-4",
    "airport_id": "firefly",
    "name": "Firefly Blaze",
    "price": 85,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "600GB / 月",
    "device_limit": "不限制",
    "description": "高频流媒体与多设备使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly-plan-5",
    "airport_id": "firefly",
    "name": "Firefly Nova",
    "price": 150,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1000GB / 月",
    "device_limit": "不限制",
    "description": "大流量与重度使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "firefly-plan-6",
    "airport_id": "firefly",
    "name": "Firefly 不限时",
    "price": 100,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100GB",
    "device_limit": "不限制",
    "description": "适合低频使用或作为备用线路；不按月清零",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-1",
    "airport_id": "sogoyun",
    "name": "小包·年付版",
    "price": 98,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年费福利体验包，适合低流量/日常轻度办公用户（折合约 ¥8.1/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-2",
    "airport_id": "sogoyun",
    "name": "基础版",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "入门性价比推荐，满足日常网页浏览、AI 工具与社交软件",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-3",
    "airport_id": "sogoyun",
    "name": "优选版",
    "price": 45,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "350GB / 月",
    "device_limit": "不限制",
    "description": "主流中度使用，适合高清流媒体追剧、日常远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-4",
    "airport_id": "sogoyun",
    "name": "强化版",
    "price": 80,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "550GB / 月",
    "device_limit": "不限制",
    "description": "高速专线大流量，适合重度影音发烧友、大文件频繁下载",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-5",
    "airport_id": "sogoyun",
    "name": "顶配版",
    "price": 150,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.1TB / 月",
    "device_limit": "不限制",
    "description": "顶级大流量方案，适合全天候视频访问、多终端/团队共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-6",
    "airport_id": "sogoyun",
    "name": "SOGO基础餐不限时版",
    "price": 120,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "120GB",
    "device_limit": "不限制",
    "description": "永久有效不限时，重置流量享 9 折 (¥108.00)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-7",
    "airport_id": "sogoyun",
    "name": "SOGO优选餐不限时版",
    "price": 220,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "250GB",
    "device_limit": "不限制",
    "description": "永久有效不限时，重置流量享 9 折 (¥198.00)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-8",
    "airport_id": "sogoyun",
    "name": "SOGO强化餐不限时版",
    "price": 450,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500GB",
    "device_limit": "不限制",
    "description": "永久有效不限时，重置流量享 9 折 (¥405.00)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sogoyun-plan-9",
    "airport_id": "sogoyun",
    "name": "SOGO至尊餐不限时版",
    "price": 850,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "1.0TB (1000GB)",
    "device_limit": "不限制",
    "description": "极致大流量永久包，重置流量享 9 折 (¥765.00)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-1",
    "airport_id": "ssone",
    "name": "最低门槛",
    "price": 10,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "标准流量",
    "device_limit": "不限制",
    "description": "",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-2",
    "airport_id": "ssone",
    "name": "每月-128G",
    "price": 15,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "128 GB/周期",
    "device_limit": "不限制",
    "description": "日常浏览、社交与轻度视频",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-3",
    "airport_id": "ssone",
    "name": "每月-192G",
    "price": 22,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "192 GB/周期",
    "device_limit": "不限制",
    "description": "AI 工具、办公与日常追剧",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-4",
    "airport_id": "ssone",
    "name": "每月-256G",
    "price": 28,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "256 GB/周期",
    "device_limit": "不限制",
    "description": "中度流媒体播放与多设备共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-5",
    "airport_id": "ssone",
    "name": "每月-512G",
    "price": 52,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "512 GB/周期",
    "device_limit": "不限制",
    "description": "4K/8K 极清视频与重度流量需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-6",
    "airport_id": "ssone",
    "name": "不限时-128G",
    "price": 36,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "128 GB",
    "device_limit": "不限制",
    "description": "不限时长，用完为止",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-7",
    "airport_id": "ssone",
    "name": "不限时-256G",
    "price": 68,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "256 GB",
    "device_limit": "不限制",
    "description": "低频备用推荐",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-8",
    "airport_id": "ssone",
    "name": "不限时-512G",
    "price": 128,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "512 GB",
    "device_limit": "不限制",
    "description": "灵活多设备备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ssone-plan-9",
    "airport_id": "ssone",
    "name": "不限时-1024G",
    "price": 238,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "1024 GB",
    "device_limit": "不限制",
    "description": "大容量长期备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1-plan-1",
    "airport_id": "u1s1",
    "name": "u1s1·就是好用包",
    "price": 96,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年费轻量包，适合学生党查资料、日常网页查阅、社交聊天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1-plan-2",
    "airport_id": "u1s1",
    "name": "u1s1·普通人真够了包",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "120GB / 月",
    "device_limit": "不限制",
    "description": "主流性价比推荐，适合日常刷视频、追剧、远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1-plan-3",
    "airport_id": "u1s1",
    "name": "u1s1·你以为用不到包",
    "price": 40,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300GB / 月",
    "device_limit": "不限制",
    "description": "进阶大流量，适合高清影音发烧友、频繁大文件下载",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1-plan-4",
    "airport_id": "u1s1",
    "name": "u1s1·瘾大就拉满包",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "700GB / 月",
    "device_limit": "不限制",
    "description": "重度使用，适合多终端家庭共享、远程办公团队",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1-plan-5",
    "airport_id": "u1s1",
    "name": "u1s1·我全部都要包",
    "price": 180,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.5TB / 月",
    "device_limit": "不限制",
    "description": "极致超大流量，适合多人共享、小团队运营、跨境协作与 AI 效率工作",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "u1s1-plan-6",
    "airport_id": "u1s1",
    "name": "u1s1·定制包",
    "price": 600,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "专属定制",
    "device_limit": "不限制",
    "description": "企业级量身定制，赋能跨境电商业务、TikTok 运营与海外直播",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud-plan-1",
    "airport_id": "wgetcloud",
    "name": "基础专线",
    "price": 0,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "¥79.00 / 月 ｜ ¥225.00 / 季 ｜ ¥758.00 / 年",
    "device_limit": "不限制",
    "description": "160G/月（月付） ｜ 230G/月（季付） ｜ 280G/月（年付）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud-plan-2",
    "airport_id": "wgetcloud",
    "name": "优质专线",
    "price": 0,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "¥89.00 / 月 ｜ ¥253.00 / 季 ｜ ¥854.00 / 年",
    "device_limit": "不限制",
    "description": "180G/月（月付） ｜ 250G/月（季付） ｜ 320G/月（年付）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud-plan-3",
    "airport_id": "wgetcloud",
    "name": "精品专线",
    "price": 0,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "¥99.00 / 月 ｜ ¥281.00 / 季 ｜ ¥950.00 / 年",
    "device_limit": "不限制",
    "description": "200G/月（月付） ｜ 270G/月（季付） ｜ 360G/月（年付）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-1",
    "airport_id": "yifanyun",
    "name": "98元·年付小包",
    "price": 98,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年付专属（折合 ¥8.16/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-2",
    "airport_id": "yifanyun",
    "name": "轻享版",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "季付¥55 ｜ 半年付¥90 ｜ 年付¥168",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-3",
    "airport_id": "yifanyun",
    "name": "舒享版",
    "price": 35,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "350GB / 月",
    "device_limit": "不限制",
    "description": "季付¥98 ｜ 半年付¥178 ｜ 年付¥298",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-4",
    "airport_id": "yifanyun",
    "name": "尊享版",
    "price": 55,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "600GB / 月",
    "device_limit": "不限制",
    "description": "季付¥155 ｜ 半年付¥288 ｜ 年付¥498",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-5",
    "airport_id": "yifanyun",
    "name": "极致版",
    "price": 95,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.2TB / 月",
    "device_limit": "不限制",
    "description": "季付¥268 ｜ 半年付¥498 ｜ 年付¥888",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-6",
    "airport_id": "yifanyun",
    "name": "轻享版·不限时包",
    "price": 100,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100GB",
    "device_limit": "不限制",
    "description": "长期有效不过期，零续费压力，按需使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-7",
    "airport_id": "yifanyun",
    "name": "舒享版·不限时包",
    "price": 200,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "250GB",
    "device_limit": "不限制",
    "description": "长期有效不过期，适合用量不固定的备用场景",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yifanyun-plan-8",
    "airport_id": "yifanyun",
    "name": "尊享版·不限时包",
    "price": 400,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500GB",
    "device_limit": "不限制",
    "description": "长期有效不过期，大容量按量计费套餐",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun-plan-1",
    "airport_id": "ermaoyun",
    "name": "二猫年付小包",
    "price": 89,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年费极高性价比入门包，适合低流量/日常轻度办公（折合约 ¥7.4/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun-plan-2",
    "airport_id": "ermaoyun",
    "name": "二猫云·白猫套餐",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "130GB / 月",
    "device_limit": "不限制",
    "description": "最多人选套餐，满足日常网页浏览、AI 工具与社交沟通需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun-plan-3",
    "airport_id": "ermaoyun",
    "name": "二猫云·橘猫畅玩版",
    "price": 40,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "230GB / 月",
    "device_limit": "不限制",
    "description": "进阶性价比推荐，适合高清流媒体追剧、日常远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun-plan-4",
    "airport_id": "ermaoyun",
    "name": "二猫云·牛奶猫尊享版",
    "price": 80,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "430GB / 月",
    "device_limit": "不限制",
    "description": "大流量尊享方案，适合重度影音发烧友、大文件频繁下载",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun-plan-5",
    "airport_id": "ermaoyun",
    "name": "二猫云·黑猫重度用户版",
    "price": 160,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "850GB / 月",
    "device_limit": "不限制",
    "description": "重度用户专属方案，适合全天候视频访问、多终端/团队共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "ermaoyun-plan-6",
    "airport_id": "ermaoyun",
    "name": "二猫云·不限时套餐",
    "price": 99,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100GB",
    "device_limit": "不限制",
    "description": "流量永久有效不限时，随用随停；支持后续单独补充流量，无需重复购买套餐",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti-plan-1",
    "airport_id": "guangnianti",
    "name": "年付限时套餐",
    "price": 89,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "50GB / 月",
    "device_limit": "不限制",
    "description": "年费性价比体验包，适合低频查资料、轻度网页浏览（折合仅 ¥7.4/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti-plan-2",
    "airport_id": "guangnianti",
    "name": "光年梯·入门版",
    "price": 18,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "110GB / 月",
    "device_limit": "不限制",
    "description": "入门档位，适合日常网页查阅、AI 工具及社交沟通",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti-plan-3",
    "airport_id": "guangnianti",
    "name": "光年梯·晋级版",
    "price": 34,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "220GB / 月",
    "device_limit": "不限制",
    "description": "性价比推荐，满足高清流媒体播放、日常远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti-plan-4",
    "airport_id": "guangnianti",
    "name": "光年梯·专业版",
    "price": 68,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "450GB / 月",
    "device_limit": "不限制",
    "description": "重度影音与办公，适合大流量下载、多终端共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti-plan-5",
    "airport_id": "guangnianti",
    "name": "光年梯·至尊版",
    "price": 130,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "900GB / 月",
    "device_limit": "不限制",
    "description": "极致大流量方案，适合全天候视频观看、大文件传输与小团队",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangnianti-plan-6",
    "airport_id": "guangnianti",
    "name": "独享私人专线节点",
    "price": 680,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月 (私人独享)",
    "device_limit": "不限制",
    "description": "一人一线 独享 IP 与独立带宽，采用顶级 IEPL 专线；适用于跨境电商、TikTok 直播、远程会议及企业级高稳定性 AI 业务",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-1",
    "airport_id": "guangshuyun",
    "name": "光速云·轻量版",
    "price": 99,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "59GB / 月",
    "device_limit": "不限制",
    "description": "年费福利小包（折合一天不到 ¥0.16），适合办公、查邮件、聊天等轻度用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-2",
    "airport_id": "guangshuyun",
    "name": "光速云·极速版",
    "price": 23,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "148GB / 月",
    "device_limit": "不限制",
    "description": "入门首选，适合日常网页浏览、AI 工具使用与中度流媒体观看",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-3",
    "airport_id": "guangshuyun",
    "name": "光速云·流光版",
    "price": 34,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "238GB / 月",
    "device_limit": "不限制",
    "description": "性价比推荐，适合高频 4K 影音与多设备共享需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-4",
    "airport_id": "guangshuyun",
    "name": "光速云·量子版",
    "price": 68,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "450GB / 月",
    "device_limit": "不限制",
    "description": "大流量档位，适合重度下载与多终端高频率使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-5",
    "airport_id": "guangshuyun",
    "name": "光速云·无界版",
    "price": 130,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "900GB / 月",
    "device_limit": "不限制",
    "description": "极致超大流量，适合多设备重度影音或小微团队共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-6",
    "airport_id": "guangshuyun",
    "name": "光速云·不限时套餐",
    "price": 680,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "1.0TB (1000GB)",
    "device_limit": "不限制",
    "description": "一次性买断，流量永久有效不按月重置；用完支持原价 9 折 (¥612) 手动重置流量；全 IPLC 专线 1x 倍率",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "guangshuyun-plan-7",
    "airport_id": "guangshuyun",
    "name": "光速云·定制套餐",
    "price": 680,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "独立部署 + 独享原生 IP + 独立带宽，专为 TikTok 直播、跨境电商及企业级应用定制（提供 1v1 技术支持）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud-plan-1",
    "airport_id": "wgetcloud",
    "name": "基础专线 - 月付",
    "price": 79,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "200 GB / 月",
    "device_limit": "不限制",
    "description": "200GB 基础月付专线套餐",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud-plan-2",
    "airport_id": "wgetcloud",
    "name": "基础专线 - 季付",
    "price": 225,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "200 GB / 月",
    "device_limit": "不限制",
    "description": "季付优惠套餐，折合月付 ¥75",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wgetcloud-plan-3",
    "airport_id": "wgetcloud",
    "name": "基础专线 - 年付",
    "price": 758,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "200 GB / 月",
    "device_limit": "不限制",
    "description": "年付特惠套餐，折合月付 ¥63.17",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-1",
    "airport_id": "quanqiuyun",
    "name": "最低月付",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "标准流量",
    "device_limit": "不限制",
    "description": "",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-2",
    "airport_id": "quanqiuyun",
    "name": "年付轻量版",
    "price": 99,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "59 GB （重置方式未说明）",
    "device_limit": "不限制",
    "description": "低频备用，能接受年付风险的用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-3",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·入门方案",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "120 GB / 月",
    "device_limit": "不限制",
    "description": "首次测试、轻中度日常使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-4",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·进阶方案",
    "price": 40,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300 GB / 月",
    "device_limit": "不限制",
    "description": "日常视频与 AI 工具依赖者",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-5",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·高端方案",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "700 GB / 月",
    "device_limit": "不限制",
    "description": "多设备、高流量消耗用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-6",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·商业方案",
    "price": 180,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1500 GB / 月",
    "device_limit": "不限制",
    "description": "团队或重度大流量用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-7",
    "airport_id": "quanqiuyun",
    "name": "独享私人专线节点",
    "price": 680,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500 GB / 月",
    "device_limit": "不限制",
    "description": "需要独享节点并需确认线路规格的用户（咨询购买）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-8",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·不限时轻量包",
    "price": 100,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100 GB",
    "device_limit": "不限制",
    "description": "低频备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-9",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·不限时标准包",
    "price": 360,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "400 GB",
    "device_limit": "不限制",
    "description": "中等流量备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "quanqiuyun-plan-10",
    "airport_id": "quanqiuyun",
    "name": "BGP 智能优化·不限时大容量包",
    "price": 700,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "800 GB",
    "device_limit": "不限制",
    "description": "高流量长期备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-1",
    "airport_id": "kexin",
    "name": "可信云月付小包",
    "price": 15,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "仅支持月付",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-2",
    "airport_id": "kexin",
    "name": "可信云年费小礼包",
    "price": 96,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年付专属（折合 ¥8/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-3",
    "airport_id": "kexin",
    "name": "基础版 (Basic)",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "季付95折 ｜ 半年9折 ｜ 年付85折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-4",
    "airport_id": "kexin",
    "name": "标准版 (Standard)",
    "price": 50,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300GB / 月",
    "device_limit": "不限制",
    "description": "季付95折 ｜ 半年9折 ｜ 年付85折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-5",
    "airport_id": "kexin",
    "name": "专业版 (Pro)",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "600GB / 月",
    "device_limit": "不限制",
    "description": "季付95折 ｜ 半年9折 ｜ 年付85折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-6",
    "airport_id": "kexin",
    "name": "旗舰版 (Ultimate)",
    "price": 200,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.2TB / 月",
    "device_limit": "不限制",
    "description": "季付95折 ｜ 半年9折 ｜ 年付85折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kexin-plan-7",
    "airport_id": "kexin",
    "name": "可信云轻量不限时",
    "price": 50,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "50GB",
    "device_limit": "不限制",
    "description": "限时限量特惠（仅限前 1w 名客户），流量永久有效，用完即止",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-1",
    "airport_id": "weitu",
    "name": "唯兔云·年付限量款",
    "price": 79.9,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "45GB / 月",
    "device_limit": "不限制",
    "description": "年费性价比小包，适合低频查资料、轻度办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-2",
    "airport_id": "weitu",
    "name": "唯兔云·年付加强专线",
    "price": 120,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "75GB / 月",
    "device_limit": "不限制",
    "description": "年费加强专线，适合轻度网页浏览与日常社媒使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-3",
    "airport_id": "weitu",
    "name": "唯兔云·普通版",
    "price": 19.9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "入门档位，适合高频网页查阅、AI 工具及日常流媒体观看",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-4",
    "airport_id": "weitu",
    "name": "唯兔云·进阶版",
    "price": 29.9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "200GB / 月",
    "device_limit": "不限制",
    "description": "性价比推荐，满足多设备 4K 流媒体播放与日常办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-5",
    "airport_id": "weitu",
    "name": "唯兔云·专业版",
    "price": 59.9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "重度使用，适合大流量下载、多设备共享与影音发烧友",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-6",
    "airport_id": "weitu",
    "name": "唯兔云·至尊版",
    "price": 119.9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "极致大流量套餐，适合小微团队或重度业务并发",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-7",
    "airport_id": "weitu",
    "name": "唯兔云·节假日限时开启",
    "price": 14.9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "100GB / 月",
    "device_limit": "不限制",
    "description": "活动特惠包（支持月付 ¥14.9 / 年付 ¥142.9 / 三年付 ¥321.9）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-8",
    "airport_id": "weitu",
    "name": "唯兔云·永久不限时 100G",
    "price": 100,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100GB",
    "device_limit": "不限制",
    "description": "不按周期自动刷新，长期有效；使用完点击重置享 永久 9 折 (¥90)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-9",
    "airport_id": "weitu",
    "name": "唯兔云·永久不限时 200G",
    "price": 160,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "200GB",
    "device_limit": "不限制",
    "description": "无限时长备用流量包；后续重置享 永久 9 折 (¥144)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "weitu-plan-10",
    "airport_id": "weitu",
    "name": "唯兔云·永久不限时 500G",
    "price": 340,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500GB",
    "device_limit": "不限制",
    "description": "大容量永久流量包；后续重置享 永久 9 折 (¥306)",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun-plan-1",
    "airport_id": "dageyun",
    "name": "小流量套餐",
    "price": 88,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "15 GB/月",
    "device_limit": "不限制",
    "description": "365天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun-plan-2",
    "airport_id": "dageyun",
    "name": "单月套餐 100GB",
    "price": 19,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "100 GB/月",
    "device_limit": "不限制",
    "description": "30天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun-plan-3",
    "airport_id": "dageyun",
    "name": "单月套餐B 150GB",
    "price": 29.9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150 GB/月",
    "device_limit": "不限制",
    "description": "30天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun-plan-4",
    "airport_id": "dageyun",
    "name": "季付套餐A 200GB",
    "price": 69,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "200 GB/月",
    "device_limit": "不限制",
    "description": "90天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun-plan-5",
    "airport_id": "dageyun",
    "name": "套餐A 300GB",
    "price": 199,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "300 GB/月",
    "device_limit": "不限制",
    "description": "365天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "dageyun-plan-6",
    "airport_id": "dageyun",
    "name": "套餐A 500GB",
    "price": 299,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "500 GB/月",
    "device_limit": "不限制",
    "description": "365天",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-1",
    "airport_id": "yuzhouyun",
    "name": "星云年付小包",
    "price": 96,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年费性价比轻量包，适合低流量、日常查资料与社交沟通（折合仅 ¥8/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-2",
    "airport_id": "yuzhouyun",
    "name": "行星基础版",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "160GB / 月",
    "device_limit": "不限制",
    "description": "基础入门推荐，满足日常网页浏览、AI 工具使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-3",
    "airport_id": "yuzhouyun",
    "name": "恒星标准版",
    "price": 50,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300GB / 月",
    "device_limit": "不限制",
    "description": "性价比主力款，流畅看高清流媒体视频、日常远程办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-4",
    "airport_id": "yuzhouyun",
    "name": "星系专业版",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "700GB / 月",
    "device_limit": "不限制",
    "description": "高速专线大流量，适合影音发烧友、频繁大文件传输",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-5",
    "airport_id": "yuzhouyun",
    "name": "寰宇旗舰版",
    "price": 200,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.5TB / 月",
    "device_limit": "不限制",
    "description": "极致超大流量方案，适合多终端家庭共享、小团队与跨境运营",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-6",
    "airport_id": "yuzhouyun",
    "name": "行星基础版 (不限时)",
    "price": 110,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "120GB",
    "device_limit": "不限制",
    "description": "流量永久有效，用完即止；支持按需补充流量，无需重复购买套餐",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "yuzhouyun-plan-7",
    "airport_id": "yuzhouyun",
    "name": "恒星标准版 (不限时)",
    "price": 220,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "240GB",
    "device_limit": "不限制",
    "description": "大容量永久有效包，适合高频防封备用、轻度长周期使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili-plan-1",
    "airport_id": "kuaili",
    "name": "月狸月付小套餐",
    "price": 15,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "50GB / 月",
    "device_limit": "不限制",
    "description": "仅限月付",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili-plan-2",
    "airport_id": "kuaili",
    "name": "森狸年付小套餐",
    "price": 120,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "30GB / 月",
    "device_limit": "不限制",
    "description": "年付专属（折合 ¥10/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili-plan-3",
    "airport_id": "kuaili",
    "name": "小狸基础版",
    "price": 22,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "100GB / 月",
    "device_limit": "不限制",
    "description": "年付8折 ｜ 两年7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili-plan-4",
    "airport_id": "kuaili",
    "name": "灵狸标准版",
    "price": 35,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "250GB / 月",
    "device_limit": "不限制",
    "description": "年付8折 ｜ 两年7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili-plan-5",
    "airport_id": "kuaili",
    "name": "夜狸强化版",
    "price": 95,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "年付8折 ｜ 两年7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuaili-plan-6",
    "airport_id": "kuaili",
    "name": "天狸顶配版",
    "price": 180,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "年付8折 ｜ 两年7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou-plan-1",
    "airport_id": "wuyou",
    "name": "mini链接",
    "price": 79,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "40 GB/月",
    "device_limit": "不限制",
    "description": "偶尔使用、低频备用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou-plan-2",
    "airport_id": "wuyou",
    "name": "舒心链接",
    "price": 12.92,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "100 GB/月",
    "device_limit": "不限制",
    "description": "日常网页、社交与轻度视频",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou-plan-3",
    "airport_id": "wuyou",
    "name": "省心链接",
    "price": 22.44,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "200 GB/月",
    "device_limit": "不限制",
    "description": "AI 工具、办公与中等频率视频",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou-plan-4",
    "airport_id": "wuyou",
    "name": "随心链接",
    "price": 52.36,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "500 GB/月",
    "device_limit": "不限制",
    "description": "高频流媒体与多设备使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou-plan-5",
    "airport_id": "wuyou",
    "name": "忘忧链接",
    "price": 117,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "1 TB/月",
    "device_limit": "不限制",
    "description": "大流量与重度使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "wuyou-plan-6",
    "airport_id": "wuyou",
    "name": "不限时 100GB 流量包",
    "price": 16.15,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100 GB",
    "device_limit": "不限制",
    "description": "适合低频备用；流量不按月清零，使用期限以结算页规则为准",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-1",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·贴心小包",
    "price": 96,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年费小包，适合低流量/新手用户，年付折合约 ¥8/月",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-2",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·超量150G",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150GB / 月",
    "device_limit": "不限制",
    "description": "日常高频查阅、AI 工具及中度流媒体观看",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-3",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·进阶300G",
    "price": 50,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300GB / 月",
    "device_limit": "不限制",
    "description": "4K 影音发烧友与多设备高用量需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-4",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·闪光500G",
    "price": 70,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "重度使用、大文件下载与家庭共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-5",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·旗舰1T版",
    "price": 130,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "极致大流量需求与小微团队/工作室共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-6",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·永久不限时100",
    "price": 100,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100GB",
    "device_limit": "不限制",
    "description": "一次性流量包，无限时长不自动重置；支持原价 9 折 (¥90) 手动重置流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-7",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·永久不限时300",
    "price": 300,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "300GB",
    "device_limit": "不限制",
    "description": "长期低频备用，无限时长；支持原价 9 折 (¥270) 手动重置流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-8",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·永久不限时1TB",
    "price": 600,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "1.0TB",
    "device_limit": "不限制",
    "description": "大容量长效备用流量包；支持原价 9 折 (¥540) 手动重置流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "xingdaomeng-plan-9",
    "airport_id": "xingdaomeng",
    "name": "星岛梦·定制套餐",
    "price": 680,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "500GB",
    "device_limit": "不限制",
    "description": "独享原生 IP 与独立带宽部署，专为跨境电商、直播与企业级应用设计",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-1",
    "airport_id": "jilianyun",
    "name": "优惠政策",
    "price": 1,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "标准流量",
    "device_limit": "不限制",
    "description": "",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-2",
    "airport_id": "jilianyun",
    "name": "限时年付套餐体验",
    "price": 96,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "60GB / 月",
    "device_limit": "不限制",
    "description": "年费福利体验包，适合低流量/日常轻度办公用户（折合 ¥8/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-3",
    "airport_id": "jilianyun",
    "name": "极连云·基础套餐",
    "price": 18,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "100GB / 月",
    "device_limit": "不限制",
    "description": "入门性价比首选，满足日常网页浏览、AI 工具使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-4",
    "airport_id": "jilianyun",
    "name": "极连云·进阶套餐",
    "price": 32,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "200GB / 月",
    "device_limit": "不限制",
    "description": "流畅观看各大流媒体与 AI 服务，适合中度影音与办公需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-5",
    "airport_id": "jilianyun",
    "name": "极连云·旗舰套餐",
    "price": 61,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "高速专线大流量，适合重度影音发烧友、大文件下载",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-6",
    "airport_id": "jilianyun",
    "name": "极连云·尊享套餐",
    "price": 122,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "顶级大流量方案，适合全视频访问、学术科研及多端共享",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "jilianyun-plan-7",
    "airport_id": "jilianyun",
    "name": "极连云·不限时套餐",
    "price": 399,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "600GB",
    "device_limit": "不限制",
    "description": "一次性买断，无限时长不按月重置；用完支持原价 9 折 (¥359.10) 手动重置流量",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-1",
    "airport_id": "lingmao",
    "name": "灵猫·年付小包",
    "price": 85,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "45 GB",
    "device_limit": "不限制",
    "description": "低频备用，能接受年付风险",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-2",
    "airport_id": "lingmao",
    "name": "灵猫·年付 Small",
    "price": 195,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "150 GB",
    "device_limit": "不限制",
    "description": "中低用量，已完成短期测试用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-3",
    "airport_id": "lingmao",
    "name": "灵猫·年付 Big",
    "price": 295,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "中等用量，长期稳定需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-4",
    "airport_id": "lingmao",
    "name": "灵猫·季付 Small",
    "price": 65,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "150 GB",
    "device_limit": "不限制",
    "description": "减少续费次数的轻中度用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-5",
    "airport_id": "lingmao",
    "name": "灵猫·季付 Big",
    "price": 125,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "中等流量需求，先用季度验证",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-6",
    "airport_id": "lingmao",
    "name": "灵猫·月付 Small",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "150 GB",
    "device_limit": "不限制",
    "description": "首次体验、日常轻中度使用（推荐）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "lingmao-plan-7",
    "airport_id": "lingmao",
    "name": "灵猫·月付 Big",
    "price": 45,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "多设备共享或较高流量需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun-plan-1",
    "airport_id": "saiboyun",
    "name": "轻量套餐",
    "price": 3,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "100 GB/月",
    "device_limit": "不限制",
    "description": "基础节点（美/英/德/法/日/新/港/澳/台等），无高端线路与中转节点",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun-plan-2",
    "airport_id": "saiboyun",
    "name": "入门套餐",
    "price": 6,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300 GB/月",
    "device_limit": "不限制",
    "description": "含美/日/欧/新等 CN2/CMIN2/4837 高端专线，无中转节点",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun-plan-3",
    "airport_id": "saiboyun",
    "name": "基础套餐",
    "price": 9,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500 GB/月",
    "device_limit": "不限制",
    "description": "增加港/日/新 ss 中转节点、香港/日本专线线路，包含冷门地区节点",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun-plan-4",
    "airport_id": "saiboyun",
    "name": "进阶套餐",
    "price": 12,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "700 GB/月",
    "device_limit": "不限制",
    "description": "包含所有入门套餐节点，超低延迟豪华专线线路",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun-plan-5",
    "airport_id": "saiboyun",
    "name": "高级套餐",
    "price": 16,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1000 GB/月",
    "device_limit": "不限制",
    "description": "包含所有入门套餐节点，超低延迟豪华专线线路",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "saiboyun-plan-6",
    "airport_id": "saiboyun",
    "name": "豪华套餐",
    "price": 28,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "2000 GB/月",
    "device_limit": "不限制",
    "description": "包含所有入门套餐节点，最高流量配额，超低延迟豪华专线线路",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-1",
    "airport_id": "kuajie",
    "name": "轻云 Lite (月付)",
    "price": 20,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "120 GB",
    "device_limit": "不限制",
    "description": "首次体验、轻中度使用（推荐）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-2",
    "airport_id": "kuajie",
    "name": "轻云 Lite (季付)",
    "price": 54,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "120 GB",
    "device_limit": "不限制",
    "description": "已完成月付测试，减少续费次数",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-3",
    "airport_id": "kuajie",
    "name": "轻云 Lite (年付)",
    "price": 192,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "120 GB",
    "device_limit": "不限制",
    "description": "用量稳定，可接受预付风险",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-4",
    "airport_id": "kuajie",
    "name": "跃云 Leap (月付)",
    "price": 40,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "日常中等流量需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-5",
    "airport_id": "kuajie",
    "name": "跃云 Leap (季付)",
    "price": 108,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "用量稳定，先用季度验证",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-6",
    "airport_id": "kuajie",
    "name": "跃云 Leap (年付)",
    "price": 384,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "300 GB",
    "device_limit": "不限制",
    "description": "持续使用且能承担预付风险",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-7",
    "airport_id": "kuajie",
    "name": "凌云 Soar (月付)",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "700 GB",
    "device_limit": "不限制",
    "description": "多设备或较高流量需求",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-8",
    "airport_id": "kuajie",
    "name": "凌云 Soar (季付)",
    "price": 270,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "700 GB",
    "device_limit": "不限制",
    "description": "已验证线路的高流量用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-9",
    "airport_id": "kuajie",
    "name": "凌云 Soar (年付)",
    "price": 960,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "700 GB",
    "device_limit": "不限制",
    "description": "长期高流量，能承担预付风险",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-10",
    "airport_id": "kuajie",
    "name": "无界 Infinity (月付)",
    "price": 180,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1500 GB",
    "device_limit": "不限制",
    "description": "重度流量使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-11",
    "airport_id": "kuajie",
    "name": "无界 Infinity (季付)",
    "price": 486,
    "currency": "CNY",
    "billing_period": "quarterly",
    "traffic": "1500 GB",
    "device_limit": "不限制",
    "description": "已确认实际用量的重度用户",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "kuajie-plan-12",
    "airport_id": "kuajie",
    "name": "无界 Infinity (年付)",
    "price": 1728,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "1500 GB",
    "device_limit": "不限制",
    "description": "长期重度使用，能承担预付风险",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-1",
    "airport_id": "edgenova",
    "name": "限时体验月付小包",
    "price": 15,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "30GB / 月",
    "device_limit": "不限制",
    "description": "纯粹体验试用包，适合日常极低用量或轻度网页浏览",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-2",
    "airport_id": "edgenova",
    "name": "限时年付",
    "price": 98,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "45GB / 月",
    "device_limit": "不限制",
    "description": "年费性价比小包，适合学生党及低流量日常办公（折合约 ¥8.16/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-3",
    "airport_id": "edgenova",
    "name": "极界-标准套餐",
    "price": 22,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "120GB / 月",
    "device_limit": "不限制",
    "description": "基础性价比主力款，满足日常网页访问与 AI 工具使用",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-4",
    "airport_id": "edgenova",
    "name": "极界-专家套餐",
    "price": 35,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "200GB / 月",
    "device_limit": "不限制",
    "description": "进阶实用款，适合日常高清流媒体追剧与频繁办公",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-5",
    "airport_id": "edgenova",
    "name": "极界-进阶套餐",
    "price": 50,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "250GB / 月",
    "device_limit": "不限制",
    "description": "高中度用量推荐，保障多设备及中度视频播放",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-6",
    "airport_id": "edgenova",
    "name": "极界-高级套餐",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "499GB / 月",
    "device_limit": "不限制",
    "description": "大流量尊享方案，适合重度影音发烧友、大文件下载",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-7",
    "airport_id": "edgenova",
    "name": "极界-极限套餐",
    "price": 200,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "旗舰级超大流量包，适合多终端家庭共享或跨境团队运营",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-8",
    "airport_id": "edgenova",
    "name": "永久不限时100G",
    "price": 100,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "100GB",
    "device_limit": "不限制",
    "description": "8折重置（¥80）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "edgenova-plan-9",
    "airport_id": "edgenova",
    "name": "永久不限时450G",
    "price": 399,
    "currency": "CNY",
    "billing_period": "one_time",
    "traffic": "450GB",
    "device_limit": "不限制",
    "description": "8折重置（¥320）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie-plan-1",
    "airport_id": "sujie",
    "name": "单月试用",
    "price": 15,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "50GB / 月",
    "device_limit": "不限制",
    "description": "仅限月付",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie-plan-2",
    "airport_id": "sujie",
    "name": "限时年付",
    "price": 90,
    "currency": "CNY",
    "billing_period": "yearly",
    "traffic": "50GB / 月",
    "device_limit": "不限制",
    "description": "年付专属（折合 ¥7.5/月）",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie-plan-3",
    "airport_id": "sujie",
    "name": "极速版",
    "price": 25,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "120GB / 月",
    "device_limit": "不限制",
    "description": "季付9折 ｜ 半年8折 ｜ 年付7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie-plan-4",
    "airport_id": "sujie",
    "name": "超速版",
    "price": 50,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "250GB / 月",
    "device_limit": "不限制",
    "description": "季付9折 ｜ 半年8折 ｜ 年付7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie-plan-5",
    "airport_id": "sujie",
    "name": "光速版",
    "price": 100,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "500GB / 月",
    "device_limit": "不限制",
    "description": "季付9折 ｜ 半年8折 ｜ 年付7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  },
  {
    "id": "sujie-plan-6",
    "airport_id": "sujie",
    "name": "跃迁版",
    "price": 200,
    "currency": "CNY",
    "billing_period": "monthly",
    "traffic": "1.0TB / 月",
    "device_limit": "不限制",
    "description": "季付9折 ｜ 半年8折 ｜ 年付7折 ｜ 三年6折",
    "created_at": "2024-01-01",
    "updated_at": "2026-09-16"
  }
];

// 3. 测试节点分布
export const mockNodes: AirportNode[] = [
  {
    "id": "invisibles-node-1",
    "airport_id": "invisibles",
    "region": "香港",
    "country": "中国香港",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-node-2",
    "airport_id": "invisibles",
    "region": "日本",
    "country": "日本",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-node-3",
    "airport_id": "invisibles",
    "region": "美国",
    "country": "美国",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-node-4",
    "airport_id": "invisibles",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-node-1",
    "airport_id": "twilight",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-node-2",
    "airport_id": "twilight",
    "region": "香港",
    "country": "中国香港",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-node-3",
    "airport_id": "twilight",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-node-4",
    "airport_id": "twilight",
    "region": "日本",
    "country": "日本",
    "node_count": 18,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-node-5",
    "airport_id": "twilight",
    "region": "美国",
    "country": "美国",
    "node_count": 18,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-node-1",
    "airport_id": "feimaoyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-node-2",
    "airport_id": "feimaoyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-node-3",
    "airport_id": "feimaoyun",
    "region": "日本",
    "country": "日本",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-node-4",
    "airport_id": "feimaoyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-node-5",
    "airport_id": "feimaoyun",
    "region": "美国",
    "country": "美国",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-node-6",
    "airport_id": "feimaoyun",
    "region": "韩国",
    "country": "韩国",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-node-1",
    "airport_id": "weifeng",
    "region": "香港",
    "country": "中国香港",
    "node_count": 5,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-node-2",
    "airport_id": "weifeng",
    "region": "日本",
    "country": "日本",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-node-3",
    "airport_id": "weifeng",
    "region": "韩国",
    "country": "韩国",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-node-4",
    "airport_id": "weifeng",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-node-5",
    "airport_id": "weifeng",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-node-6",
    "airport_id": "weifeng",
    "region": "美国",
    "country": "美国",
    "node_count": 18,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-node-1",
    "airport_id": "langwang",
    "region": "香港",
    "country": "中国香港",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-node-2",
    "airport_id": "langwang",
    "region": "日本",
    "country": "日本",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-node-3",
    "airport_id": "langwang",
    "region": "美国",
    "country": "美国",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-node-4",
    "airport_id": "langwang",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 5,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-node-1",
    "airport_id": "laddercloud",
    "region": "香港",
    "country": "中国香港",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-node-2",
    "airport_id": "laddercloud",
    "region": "日本",
    "country": "日本",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-node-3",
    "airport_id": "laddercloud",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-node-4",
    "airport_id": "laddercloud",
    "region": "美国",
    "country": "美国",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-node-5",
    "airport_id": "laddercloud",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-node-1",
    "airport_id": "lingdongyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-node-2",
    "airport_id": "lingdongyun",
    "region": "日本",
    "country": "日本",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-node-3",
    "airport_id": "lingdongyun",
    "region": "美国",
    "country": "美国",
    "node_count": 5,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-node-4",
    "airport_id": "lingdongyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-node-1",
    "airport_id": "flyv",
    "region": "香港",
    "country": "中国香港",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-node-2",
    "airport_id": "flyv",
    "region": "日本",
    "country": "日本",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-node-3",
    "airport_id": "flyv",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-node-1",
    "airport_id": "firefly",
    "region": "香港",
    "country": "中国香港",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-node-2",
    "airport_id": "firefly",
    "region": "日本",
    "country": "日本",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-node-3",
    "airport_id": "firefly",
    "region": "美国",
    "country": "美国",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-node-4",
    "airport_id": "firefly",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-node-1",
    "airport_id": "sogoyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-node-2",
    "airport_id": "sogoyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-node-3",
    "airport_id": "sogoyun",
    "region": "日本",
    "country": "日本",
    "node_count": 5,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-node-4",
    "airport_id": "sogoyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-node-5",
    "airport_id": "sogoyun",
    "region": "美国",
    "country": "美国",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-node-6",
    "airport_id": "sogoyun",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-node-1",
    "airport_id": "ssone",
    "region": "香港",
    "country": "中国香港",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-node-2",
    "airport_id": "ssone",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-node-3",
    "airport_id": "ssone",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-node-4",
    "airport_id": "ssone",
    "region": "美国",
    "country": "美国",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-node-5",
    "airport_id": "ssone",
    "region": "日本",
    "country": "日本",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-node-6",
    "airport_id": "ssone",
    "region": "韩国",
    "country": "韩国",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-node-1",
    "airport_id": "u1s1",
    "region": "香港",
    "country": "中国香港",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-node-2",
    "airport_id": "u1s1",
    "region": "日本",
    "country": "日本",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-node-3",
    "airport_id": "u1s1",
    "region": "美国",
    "country": "美国",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-node-4",
    "airport_id": "u1s1",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-node-1",
    "airport_id": "wgetcloud",
    "region": "香港",
    "country": "中国香港",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-node-2",
    "airport_id": "wgetcloud",
    "region": "日本",
    "country": "日本",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-node-3",
    "airport_id": "wgetcloud",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-node-4",
    "airport_id": "wgetcloud",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-node-5",
    "airport_id": "wgetcloud",
    "region": "美国",
    "country": "美国",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-node-6",
    "airport_id": "wgetcloud",
    "region": "韩国",
    "country": "韩国",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-node-1",
    "airport_id": "yifanyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-node-2",
    "airport_id": "yifanyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-node-3",
    "airport_id": "yifanyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-node-4",
    "airport_id": "yifanyun",
    "region": "日本",
    "country": "日本",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-node-5",
    "airport_id": "yifanyun",
    "region": "美国",
    "country": "美国",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-node-1",
    "airport_id": "ermaoyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-node-2",
    "airport_id": "ermaoyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-node-3",
    "airport_id": "ermaoyun",
    "region": "日本",
    "country": "日本",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-node-4",
    "airport_id": "ermaoyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-node-5",
    "airport_id": "ermaoyun",
    "region": "美国",
    "country": "美国",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-node-1",
    "airport_id": "guangnianti",
    "region": "香港",
    "country": "中国香港",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-node-2",
    "airport_id": "guangnianti",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-node-3",
    "airport_id": "guangnianti",
    "region": "日本",
    "country": "日本",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-node-4",
    "airport_id": "guangnianti",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-node-5",
    "airport_id": "guangnianti",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-node-6",
    "airport_id": "guangnianti",
    "region": "美国",
    "country": "美国",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-node-1",
    "airport_id": "guangshuyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-node-2",
    "airport_id": "guangshuyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-node-3",
    "airport_id": "guangshuyun",
    "region": "日本",
    "country": "日本",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-node-4",
    "airport_id": "guangshuyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-node-5",
    "airport_id": "guangshuyun",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-node-6",
    "airport_id": "guangshuyun",
    "region": "美国",
    "country": "美国",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-node-1",
    "airport_id": "quanqiuyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-node-2",
    "airport_id": "quanqiuyun",
    "region": "日本",
    "country": "日本",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-node-3",
    "airport_id": "quanqiuyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-node-4",
    "airport_id": "quanqiuyun",
    "region": "美国",
    "country": "美国",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-node-5",
    "airport_id": "quanqiuyun",
    "region": "英国",
    "country": "英国",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-node-6",
    "airport_id": "quanqiuyun",
    "region": "德国",
    "country": "德国",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-node-1",
    "airport_id": "kexin",
    "region": "香港",
    "country": "中国香港",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-node-2",
    "airport_id": "kexin",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 18,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-node-3",
    "airport_id": "kexin",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-node-4",
    "airport_id": "kexin",
    "region": "日本",
    "country": "日本",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-node-5",
    "airport_id": "kexin",
    "region": "美国",
    "country": "美国",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-node-1",
    "airport_id": "weitu",
    "region": "香港",
    "country": "中国香港",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-node-2",
    "airport_id": "weitu",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-node-3",
    "airport_id": "weitu",
    "region": "日本",
    "country": "日本",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-node-4",
    "airport_id": "weitu",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-node-5",
    "airport_id": "weitu",
    "region": "美国",
    "country": "美国",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-node-6",
    "airport_id": "weitu",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-node-1",
    "airport_id": "dageyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-node-2",
    "airport_id": "dageyun",
    "region": "日本",
    "country": "日本",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-node-3",
    "airport_id": "dageyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-node-4",
    "airport_id": "dageyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 18,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-node-5",
    "airport_id": "dageyun",
    "region": "美国",
    "country": "美国",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-node-6",
    "airport_id": "dageyun",
    "region": "英国",
    "country": "英国",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-node-1",
    "airport_id": "yuzhouyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-node-2",
    "airport_id": "yuzhouyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-node-3",
    "airport_id": "yuzhouyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-node-4",
    "airport_id": "yuzhouyun",
    "region": "日本",
    "country": "日本",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-node-5",
    "airport_id": "yuzhouyun",
    "region": "美国",
    "country": "美国",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-node-6",
    "airport_id": "yuzhouyun",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-node-1",
    "airport_id": "kuaili",
    "region": "香港",
    "country": "中国香港",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-node-2",
    "airport_id": "kuaili",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-node-3",
    "airport_id": "kuaili",
    "region": "日本",
    "country": "日本",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-node-4",
    "airport_id": "kuaili",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-node-5",
    "airport_id": "kuaili",
    "region": "美国",
    "country": "美国",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-node-6",
    "airport_id": "kuaili",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-node-1",
    "airport_id": "wuyou",
    "region": "香港",
    "country": "中国香港",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-node-2",
    "airport_id": "wuyou",
    "region": "日本",
    "country": "日本",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-node-3",
    "airport_id": "wuyou",
    "region": "美国",
    "country": "美国",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-node-4",
    "airport_id": "wuyou",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-node-1",
    "airport_id": "xingdaomeng",
    "region": "香港",
    "country": "中国香港",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-node-2",
    "airport_id": "xingdaomeng",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-node-3",
    "airport_id": "xingdaomeng",
    "region": "日本",
    "country": "日本",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-node-4",
    "airport_id": "xingdaomeng",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-node-5",
    "airport_id": "xingdaomeng",
    "region": "美国",
    "country": "美国",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-node-6",
    "airport_id": "xingdaomeng",
    "region": "韩国",
    "country": "韩国",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-node-1",
    "airport_id": "jilianyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-node-2",
    "airport_id": "jilianyun",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-node-3",
    "airport_id": "jilianyun",
    "region": "日本",
    "country": "日本",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-node-4",
    "airport_id": "jilianyun",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-node-5",
    "airport_id": "jilianyun",
    "region": "美国",
    "country": "美国",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-node-6",
    "airport_id": "jilianyun",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 15,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-node-1",
    "airport_id": "lingmao",
    "region": "香港",
    "country": "中国香港",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-node-2",
    "airport_id": "lingmao",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-node-3",
    "airport_id": "lingmao",
    "region": "日本",
    "country": "日本",
    "node_count": 16,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-node-4",
    "airport_id": "lingmao",
    "region": "美国",
    "country": "美国",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-node-5",
    "airport_id": "lingmao",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-node-6",
    "airport_id": "lingmao",
    "region": "韩国",
    "country": "韩国",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-node-1",
    "airport_id": "saiboyun",
    "region": "马来西亚",
    "country": "马来西亚",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-node-2",
    "airport_id": "saiboyun",
    "region": "澳大利亚",
    "country": "澳大利亚",
    "node_count": 7,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-node-3",
    "airport_id": "saiboyun",
    "region": "香港",
    "country": "中国香港",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-node-4",
    "airport_id": "saiboyun",
    "region": "日本",
    "country": "日本",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-node-1",
    "airport_id": "kuajie",
    "region": "美国",
    "country": "美国",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-node-2",
    "airport_id": "kuajie",
    "region": "日本",
    "country": "日本",
    "node_count": 18,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-node-3",
    "airport_id": "kuajie",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-node-4",
    "airport_id": "kuajie",
    "region": "香港",
    "country": "中国香港",
    "node_count": 9,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-node-5",
    "airport_id": "kuajie",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 12,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-node-1",
    "airport_id": "edgenova",
    "region": "香港",
    "country": "中国香港",
    "node_count": 17,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-node-2",
    "airport_id": "edgenova",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-node-3",
    "airport_id": "edgenova",
    "region": "日本",
    "country": "日本",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-node-4",
    "airport_id": "edgenova",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 19,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-node-5",
    "airport_id": "edgenova",
    "region": "美国",
    "country": "美国",
    "node_count": 5,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-node-6",
    "airport_id": "edgenova",
    "region": "英国",
    "country": "英国",
    "node_count": 10,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-node-1",
    "airport_id": "sujie",
    "region": "香港",
    "country": "中国香港",
    "node_count": 11,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-node-2",
    "airport_id": "sujie",
    "region": "台湾",
    "country": "中国台湾",
    "node_count": 6,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-node-3",
    "airport_id": "sujie",
    "region": "日本",
    "country": "日本",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-node-4",
    "airport_id": "sujie",
    "region": "新加坡",
    "country": "新加坡",
    "node_count": 8,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-node-5",
    "airport_id": "sujie",
    "region": "美国",
    "country": "美国",
    "node_count": 14,
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-node-6",
    "airport_id": "sujie",
    "region": "韩国",
    "country": "韩国",
    "node_count": 13,
    "supported": true,
    "last_checked": "2026-09-16"
  }
];

// 4. 客户端支持状态
export const mockClients: AirportClient[] = [
  {
    "id": "invisibles-client-1",
    "airport_id": "invisibles",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-client-2",
    "airport_id": "invisibles",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-client-3",
    "airport_id": "invisibles",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-client-4",
    "airport_id": "invisibles",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-client-5",
    "airport_id": "invisibles",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-client-1",
    "airport_id": "twilight",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-client-2",
    "airport_id": "twilight",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-client-3",
    "airport_id": "twilight",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-client-4",
    "airport_id": "twilight",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-client-5",
    "airport_id": "twilight",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-client-1",
    "airport_id": "feimaoyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-client-2",
    "airport_id": "feimaoyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-client-3",
    "airport_id": "feimaoyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-client-4",
    "airport_id": "feimaoyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-client-5",
    "airport_id": "feimaoyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-client-1",
    "airport_id": "weifeng",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-client-2",
    "airport_id": "weifeng",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-client-3",
    "airport_id": "weifeng",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-client-4",
    "airport_id": "weifeng",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-client-5",
    "airport_id": "weifeng",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-client-1",
    "airport_id": "langwang",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-client-2",
    "airport_id": "langwang",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-client-3",
    "airport_id": "langwang",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-client-4",
    "airport_id": "langwang",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-client-5",
    "airport_id": "langwang",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-client-1",
    "airport_id": "laddercloud",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-client-2",
    "airport_id": "laddercloud",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-client-3",
    "airport_id": "laddercloud",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-client-4",
    "airport_id": "laddercloud",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-client-5",
    "airport_id": "laddercloud",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-client-1",
    "airport_id": "lingdongyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-client-2",
    "airport_id": "lingdongyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-client-3",
    "airport_id": "lingdongyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-client-4",
    "airport_id": "lingdongyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-client-5",
    "airport_id": "lingdongyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-client-1",
    "airport_id": "flyv",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-client-2",
    "airport_id": "flyv",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-client-3",
    "airport_id": "flyv",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-client-4",
    "airport_id": "flyv",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-client-5",
    "airport_id": "flyv",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-client-1",
    "airport_id": "firefly",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-client-2",
    "airport_id": "firefly",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-client-3",
    "airport_id": "firefly",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-client-4",
    "airport_id": "firefly",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-client-5",
    "airport_id": "firefly",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-client-1",
    "airport_id": "sogoyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-client-2",
    "airport_id": "sogoyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-client-3",
    "airport_id": "sogoyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-client-4",
    "airport_id": "sogoyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-client-5",
    "airport_id": "sogoyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-client-1",
    "airport_id": "ssone",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-client-2",
    "airport_id": "ssone",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-client-3",
    "airport_id": "ssone",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-client-4",
    "airport_id": "ssone",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-client-5",
    "airport_id": "ssone",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-client-1",
    "airport_id": "u1s1",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-client-2",
    "airport_id": "u1s1",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-client-3",
    "airport_id": "u1s1",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-client-4",
    "airport_id": "u1s1",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-client-5",
    "airport_id": "u1s1",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-client-1",
    "airport_id": "wgetcloud",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-client-2",
    "airport_id": "wgetcloud",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-client-3",
    "airport_id": "wgetcloud",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-client-4",
    "airport_id": "wgetcloud",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-client-5",
    "airport_id": "wgetcloud",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-client-1",
    "airport_id": "yifanyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-client-2",
    "airport_id": "yifanyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-client-3",
    "airport_id": "yifanyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-client-4",
    "airport_id": "yifanyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-client-5",
    "airport_id": "yifanyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-client-1",
    "airport_id": "ermaoyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-client-2",
    "airport_id": "ermaoyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-client-3",
    "airport_id": "ermaoyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-client-4",
    "airport_id": "ermaoyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-client-5",
    "airport_id": "ermaoyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-client-1",
    "airport_id": "guangnianti",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-client-2",
    "airport_id": "guangnianti",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-client-3",
    "airport_id": "guangnianti",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-client-4",
    "airport_id": "guangnianti",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-client-5",
    "airport_id": "guangnianti",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-client-1",
    "airport_id": "guangshuyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-client-2",
    "airport_id": "guangshuyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-client-3",
    "airport_id": "guangshuyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-client-4",
    "airport_id": "guangshuyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-client-5",
    "airport_id": "guangshuyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-client-1",
    "airport_id": "quanqiuyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-client-2",
    "airport_id": "quanqiuyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-client-3",
    "airport_id": "quanqiuyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-client-4",
    "airport_id": "quanqiuyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-client-5",
    "airport_id": "quanqiuyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-client-1",
    "airport_id": "kexin",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-client-2",
    "airport_id": "kexin",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-client-3",
    "airport_id": "kexin",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-client-4",
    "airport_id": "kexin",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-client-5",
    "airport_id": "kexin",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-client-1",
    "airport_id": "weitu",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-client-2",
    "airport_id": "weitu",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-client-3",
    "airport_id": "weitu",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-client-4",
    "airport_id": "weitu",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-client-5",
    "airport_id": "weitu",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-client-1",
    "airport_id": "dageyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-client-2",
    "airport_id": "dageyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-client-3",
    "airport_id": "dageyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-client-4",
    "airport_id": "dageyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-client-5",
    "airport_id": "dageyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-client-1",
    "airport_id": "yuzhouyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-client-2",
    "airport_id": "yuzhouyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-client-3",
    "airport_id": "yuzhouyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-client-4",
    "airport_id": "yuzhouyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-client-5",
    "airport_id": "yuzhouyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-client-1",
    "airport_id": "kuaili",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-client-2",
    "airport_id": "kuaili",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-client-3",
    "airport_id": "kuaili",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-client-4",
    "airport_id": "kuaili",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-client-5",
    "airport_id": "kuaili",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-client-1",
    "airport_id": "wuyou",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-client-2",
    "airport_id": "wuyou",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-client-3",
    "airport_id": "wuyou",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-client-4",
    "airport_id": "wuyou",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-client-5",
    "airport_id": "wuyou",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-client-1",
    "airport_id": "xingdaomeng",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-client-2",
    "airport_id": "xingdaomeng",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-client-3",
    "airport_id": "xingdaomeng",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-client-4",
    "airport_id": "xingdaomeng",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-client-5",
    "airport_id": "xingdaomeng",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-client-1",
    "airport_id": "jilianyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-client-2",
    "airport_id": "jilianyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-client-3",
    "airport_id": "jilianyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-client-4",
    "airport_id": "jilianyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-client-5",
    "airport_id": "jilianyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-client-1",
    "airport_id": "lingmao",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-client-2",
    "airport_id": "lingmao",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-client-3",
    "airport_id": "lingmao",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-client-4",
    "airport_id": "lingmao",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-client-5",
    "airport_id": "lingmao",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-client-1",
    "airport_id": "saiboyun",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-client-2",
    "airport_id": "saiboyun",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-client-3",
    "airport_id": "saiboyun",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-client-4",
    "airport_id": "saiboyun",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-client-5",
    "airport_id": "saiboyun",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-client-1",
    "airport_id": "kuajie",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-client-2",
    "airport_id": "kuajie",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-client-3",
    "airport_id": "kuajie",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-client-4",
    "airport_id": "kuajie",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-client-5",
    "airport_id": "kuajie",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-client-1",
    "airport_id": "edgenova",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-client-2",
    "airport_id": "edgenova",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-client-3",
    "airport_id": "edgenova",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-client-4",
    "airport_id": "edgenova",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-client-5",
    "airport_id": "edgenova",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-client-1",
    "airport_id": "sujie",
    "client_name": "Clash",
    "platform": "Windows/macOS/Android",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-client-2",
    "airport_id": "sujie",
    "client_name": "Shadowrocket",
    "platform": "iOS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-client-3",
    "airport_id": "sujie",
    "client_name": "sing-box",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-client-4",
    "airport_id": "sujie",
    "client_name": "V2RayN",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-client-5",
    "airport_id": "sujie",
    "client_name": "Surfboard",
    "platform": "全平台",
    "supported": true,
    "last_checked": "2026-09-16"
  }
];

// 5. 协议支持状态
export const mockProtocols: AirportProtocol[] = [
  {
    "id": "invisibles-proto-1",
    "airport_id": "invisibles",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-proto-2",
    "airport_id": "invisibles",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-proto-3",
    "airport_id": "invisibles",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-proto-1",
    "airport_id": "twilight",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-proto-2",
    "airport_id": "twilight",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-proto-1",
    "airport_id": "feimaoyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-proto-2",
    "airport_id": "feimaoyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-proto-3",
    "airport_id": "feimaoyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-proto-1",
    "airport_id": "weifeng",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-proto-2",
    "airport_id": "weifeng",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-proto-1",
    "airport_id": "langwang",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-proto-2",
    "airport_id": "langwang",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-proto-3",
    "airport_id": "langwang",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-proto-1",
    "airport_id": "laddercloud",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-proto-2",
    "airport_id": "laddercloud",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-proto-3",
    "airport_id": "laddercloud",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-proto-1",
    "airport_id": "lingdongyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-proto-1",
    "airport_id": "flyv",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-proto-2",
    "airport_id": "flyv",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-proto-3",
    "airport_id": "flyv",
    "protocol_name": "Hysteria2",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-proto-1",
    "airport_id": "firefly",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-proto-2",
    "airport_id": "firefly",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-proto-1",
    "airport_id": "sogoyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-proto-2",
    "airport_id": "sogoyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-proto-3",
    "airport_id": "sogoyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-proto-1",
    "airport_id": "ssone",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-proto-2",
    "airport_id": "ssone",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-proto-1",
    "airport_id": "u1s1",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-proto-1",
    "airport_id": "wgetcloud",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-proto-1",
    "airport_id": "yifanyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-proto-2",
    "airport_id": "yifanyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-proto-3",
    "airport_id": "yifanyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-proto-1",
    "airport_id": "ermaoyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-proto-1",
    "airport_id": "guangnianti",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-proto-2",
    "airport_id": "guangnianti",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-proto-3",
    "airport_id": "guangnianti",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-proto-1",
    "airport_id": "guangshuyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-proto-2",
    "airport_id": "guangshuyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-proto-3",
    "airport_id": "guangshuyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-proto-1",
    "airport_id": "quanqiuyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-proto-2",
    "airport_id": "quanqiuyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-proto-1",
    "airport_id": "kexin",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-proto-2",
    "airport_id": "kexin",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-proto-3",
    "airport_id": "kexin",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-proto-1",
    "airport_id": "weitu",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-proto-2",
    "airport_id": "weitu",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-proto-1",
    "airport_id": "dageyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-proto-1",
    "airport_id": "yuzhouyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-proto-2",
    "airport_id": "yuzhouyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-proto-3",
    "airport_id": "yuzhouyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-proto-1",
    "airport_id": "kuaili",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-proto-2",
    "airport_id": "kuaili",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-proto-3",
    "airport_id": "kuaili",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-proto-1",
    "airport_id": "wuyou",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-proto-2",
    "airport_id": "wuyou",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-proto-3",
    "airport_id": "wuyou",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-proto-1",
    "airport_id": "xingdaomeng",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-proto-2",
    "airport_id": "xingdaomeng",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-proto-3",
    "airport_id": "xingdaomeng",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-proto-1",
    "airport_id": "jilianyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-proto-2",
    "airport_id": "jilianyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-proto-3",
    "airport_id": "jilianyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-proto-1",
    "airport_id": "lingmao",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-proto-2",
    "airport_id": "lingmao",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-proto-3",
    "airport_id": "lingmao",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-proto-1",
    "airport_id": "saiboyun",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-proto-2",
    "airport_id": "saiboyun",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-proto-3",
    "airport_id": "saiboyun",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-proto-1",
    "airport_id": "kuajie",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-proto-2",
    "airport_id": "kuajie",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-proto-3",
    "airport_id": "kuajie",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-proto-1",
    "airport_id": "edgenova",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-proto-2",
    "airport_id": "edgenova",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-proto-3",
    "airport_id": "edgenova",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-proto-1",
    "airport_id": "sujie",
    "protocol_name": "VLESS",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-proto-2",
    "airport_id": "sujie",
    "protocol_name": "Trojan",
    "supported": true,
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-proto-3",
    "airport_id": "sujie",
    "protocol_name": "Shadowsocks",
    "supported": true,
    "last_checked": "2026-09-16"
  }
];

// 6. AI 解锁支持（恪守客观，未知标“unknown”）
export const mockAISupport: AirportAI[] = [
  {
    "id": "invisibles-ai-1",
    "airport_id": "invisibles",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-ai-2",
    "airport_id": "invisibles",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-ai-3",
    "airport_id": "invisibles",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-ai-1",
    "airport_id": "twilight",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-ai-2",
    "airport_id": "twilight",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-ai-3",
    "airport_id": "twilight",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-ai-1",
    "airport_id": "feimaoyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-ai-2",
    "airport_id": "feimaoyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-ai-3",
    "airport_id": "feimaoyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-ai-1",
    "airport_id": "weifeng",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-ai-2",
    "airport_id": "weifeng",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-ai-3",
    "airport_id": "weifeng",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-ai-1",
    "airport_id": "langwang",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-ai-2",
    "airport_id": "langwang",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-ai-3",
    "airport_id": "langwang",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-ai-1",
    "airport_id": "laddercloud",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-ai-2",
    "airport_id": "laddercloud",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-ai-3",
    "airport_id": "laddercloud",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-ai-1",
    "airport_id": "lingdongyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-ai-2",
    "airport_id": "lingdongyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-ai-3",
    "airport_id": "lingdongyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-ai-1",
    "airport_id": "flyv",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-ai-2",
    "airport_id": "flyv",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-ai-3",
    "airport_id": "flyv",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-ai-1",
    "airport_id": "firefly",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-ai-2",
    "airport_id": "firefly",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-ai-3",
    "airport_id": "firefly",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-ai-1",
    "airport_id": "sogoyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-ai-2",
    "airport_id": "sogoyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-ai-3",
    "airport_id": "sogoyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-ai-1",
    "airport_id": "ssone",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-ai-2",
    "airport_id": "ssone",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-ai-3",
    "airport_id": "ssone",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-ai-1",
    "airport_id": "u1s1",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-ai-2",
    "airport_id": "u1s1",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-ai-3",
    "airport_id": "u1s1",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-ai-1",
    "airport_id": "wgetcloud",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-ai-2",
    "airport_id": "wgetcloud",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-ai-3",
    "airport_id": "wgetcloud",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-ai-1",
    "airport_id": "yifanyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-ai-2",
    "airport_id": "yifanyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-ai-3",
    "airport_id": "yifanyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-ai-1",
    "airport_id": "ermaoyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-ai-2",
    "airport_id": "ermaoyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-ai-3",
    "airport_id": "ermaoyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-ai-1",
    "airport_id": "guangnianti",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-ai-2",
    "airport_id": "guangnianti",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-ai-3",
    "airport_id": "guangnianti",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-ai-1",
    "airport_id": "guangshuyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-ai-2",
    "airport_id": "guangshuyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-ai-3",
    "airport_id": "guangshuyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-ai-1",
    "airport_id": "quanqiuyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-ai-2",
    "airport_id": "quanqiuyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-ai-3",
    "airport_id": "quanqiuyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-ai-1",
    "airport_id": "kexin",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-ai-2",
    "airport_id": "kexin",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-ai-3",
    "airport_id": "kexin",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-ai-1",
    "airport_id": "weitu",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-ai-2",
    "airport_id": "weitu",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-ai-3",
    "airport_id": "weitu",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-ai-1",
    "airport_id": "dageyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-ai-2",
    "airport_id": "dageyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-ai-3",
    "airport_id": "dageyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-ai-1",
    "airport_id": "yuzhouyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-ai-2",
    "airport_id": "yuzhouyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-ai-3",
    "airport_id": "yuzhouyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-ai-1",
    "airport_id": "kuaili",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-ai-2",
    "airport_id": "kuaili",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-ai-3",
    "airport_id": "kuaili",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-ai-1",
    "airport_id": "wuyou",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-ai-2",
    "airport_id": "wuyou",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-ai-3",
    "airport_id": "wuyou",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-ai-1",
    "airport_id": "xingdaomeng",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-ai-2",
    "airport_id": "xingdaomeng",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-ai-3",
    "airport_id": "xingdaomeng",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-ai-1",
    "airport_id": "jilianyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-ai-2",
    "airport_id": "jilianyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-ai-3",
    "airport_id": "jilianyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-ai-1",
    "airport_id": "lingmao",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-ai-2",
    "airport_id": "lingmao",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-ai-3",
    "airport_id": "lingmao",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-ai-1",
    "airport_id": "saiboyun",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-ai-2",
    "airport_id": "saiboyun",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-ai-3",
    "airport_id": "saiboyun",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-ai-1",
    "airport_id": "kuajie",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-ai-2",
    "airport_id": "kuajie",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-ai-3",
    "airport_id": "kuajie",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-ai-1",
    "airport_id": "edgenova",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-ai-2",
    "airport_id": "edgenova",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-ai-3",
    "airport_id": "edgenova",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-ai-1",
    "airport_id": "sujie",
    "service_name": "ChatGPT",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-ai-2",
    "airport_id": "sujie",
    "service_name": "Claude",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-ai-3",
    "airport_id": "sujie",
    "service_name": "Gemini",
    "status": "supported",
    "last_checked": "2026-09-16"
  }
];

// 7. 流媒体支持
export const mockStreamingSupport: AirportStreaming[] = [
  {
    "id": "invisibles-st-1",
    "airport_id": "invisibles",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-st-2",
    "airport_id": "invisibles",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "invisibles-st-3",
    "airport_id": "invisibles",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-st-1",
    "airport_id": "twilight",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-st-2",
    "airport_id": "twilight",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "twilight-st-3",
    "airport_id": "twilight",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-st-1",
    "airport_id": "feimaoyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-st-2",
    "airport_id": "feimaoyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "feimaoyun-st-3",
    "airport_id": "feimaoyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-st-1",
    "airport_id": "weifeng",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-st-2",
    "airport_id": "weifeng",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weifeng-st-3",
    "airport_id": "weifeng",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-st-1",
    "airport_id": "langwang",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-st-2",
    "airport_id": "langwang",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "langwang-st-3",
    "airport_id": "langwang",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-st-1",
    "airport_id": "laddercloud",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-st-2",
    "airport_id": "laddercloud",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "laddercloud-st-3",
    "airport_id": "laddercloud",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-st-1",
    "airport_id": "lingdongyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-st-2",
    "airport_id": "lingdongyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingdongyun-st-3",
    "airport_id": "lingdongyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-st-1",
    "airport_id": "flyv",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-st-2",
    "airport_id": "flyv",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "flyv-st-3",
    "airport_id": "flyv",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-st-1",
    "airport_id": "firefly",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-st-2",
    "airport_id": "firefly",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "firefly-st-3",
    "airport_id": "firefly",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-st-1",
    "airport_id": "sogoyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-st-2",
    "airport_id": "sogoyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sogoyun-st-3",
    "airport_id": "sogoyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-st-1",
    "airport_id": "ssone",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-st-2",
    "airport_id": "ssone",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ssone-st-3",
    "airport_id": "ssone",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-st-1",
    "airport_id": "u1s1",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-st-2",
    "airport_id": "u1s1",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "u1s1-st-3",
    "airport_id": "u1s1",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-st-1",
    "airport_id": "wgetcloud",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-st-2",
    "airport_id": "wgetcloud",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wgetcloud-st-3",
    "airport_id": "wgetcloud",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-st-1",
    "airport_id": "yifanyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-st-2",
    "airport_id": "yifanyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yifanyun-st-3",
    "airport_id": "yifanyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-st-1",
    "airport_id": "ermaoyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-st-2",
    "airport_id": "ermaoyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "ermaoyun-st-3",
    "airport_id": "ermaoyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-st-1",
    "airport_id": "guangnianti",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-st-2",
    "airport_id": "guangnianti",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangnianti-st-3",
    "airport_id": "guangnianti",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-st-1",
    "airport_id": "guangshuyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-st-2",
    "airport_id": "guangshuyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "guangshuyun-st-3",
    "airport_id": "guangshuyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-st-1",
    "airport_id": "quanqiuyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-st-2",
    "airport_id": "quanqiuyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "quanqiuyun-st-3",
    "airport_id": "quanqiuyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-st-1",
    "airport_id": "kexin",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-st-2",
    "airport_id": "kexin",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kexin-st-3",
    "airport_id": "kexin",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-st-1",
    "airport_id": "weitu",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-st-2",
    "airport_id": "weitu",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "weitu-st-3",
    "airport_id": "weitu",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-st-1",
    "airport_id": "dageyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-st-2",
    "airport_id": "dageyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "dageyun-st-3",
    "airport_id": "dageyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-st-1",
    "airport_id": "yuzhouyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-st-2",
    "airport_id": "yuzhouyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "yuzhouyun-st-3",
    "airport_id": "yuzhouyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-st-1",
    "airport_id": "kuaili",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-st-2",
    "airport_id": "kuaili",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuaili-st-3",
    "airport_id": "kuaili",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-st-1",
    "airport_id": "wuyou",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-st-2",
    "airport_id": "wuyou",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "wuyou-st-3",
    "airport_id": "wuyou",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-st-1",
    "airport_id": "xingdaomeng",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-st-2",
    "airport_id": "xingdaomeng",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "xingdaomeng-st-3",
    "airport_id": "xingdaomeng",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-st-1",
    "airport_id": "jilianyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-st-2",
    "airport_id": "jilianyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "jilianyun-st-3",
    "airport_id": "jilianyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-st-1",
    "airport_id": "lingmao",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-st-2",
    "airport_id": "lingmao",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "lingmao-st-3",
    "airport_id": "lingmao",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-st-1",
    "airport_id": "saiboyun",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-st-2",
    "airport_id": "saiboyun",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "saiboyun-st-3",
    "airport_id": "saiboyun",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-st-1",
    "airport_id": "kuajie",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-st-2",
    "airport_id": "kuajie",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "kuajie-st-3",
    "airport_id": "kuajie",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-st-1",
    "airport_id": "edgenova",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-st-2",
    "airport_id": "edgenova",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "edgenova-st-3",
    "airport_id": "edgenova",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-st-1",
    "airport_id": "sujie",
    "service_name": "Netflix",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-st-2",
    "airport_id": "sujie",
    "service_name": "Disney+",
    "status": "supported",
    "last_checked": "2026-09-16"
  },
  {
    "id": "sujie-st-3",
    "airport_id": "sujie",
    "service_name": "YouTube",
    "status": "supported",
    "last_checked": "2026-09-16"
  }
];

// 8. 测试文章/教程/百科数据集 (5篇教程, 5篇百科, 3篇对比)
export const mockArticles: Article[] = [
  // 教程 5篇
  {
    id: "g1",
    title: "Clash Verge 多平台下载安装与订阅导入新手教程",
    slug: "clash-verge-beginner-guide",
    type: "guide",
    summary: "详细介绍新一代 Clash Verge (Rev) 客户端在 Windows 与 macOS 系统下的安装步骤、配置导入及 TUN 模式启用指南。",
    content: `Clash Verge（包含衍生分支 Clash Verge Rev）是当前跨平台桌面端（Windows、macOS、Linux）使用最广泛的图形化代理客户端之一。它基于 Tauri 框架打造，内存占用较低，原生集成了 Clash Meta (Mihomo) 内核，支持 VLESS、REALITY、Hysteria2 等新一代传输协议。

## Clash Verge 是什么

Clash Verge 是一个开放源代码的图形界面（GUI）软件，其核心作用是读取规则配置文件，将操作系统或特定软件的网络请求流量，根据规则转发至指定的代理节点服务器。

需要明确的是：**Clash Verge 本身只是一个客户端软件工具，不包含任何网络节点或订阅服务**。用户需要配合合规的代理服务器节点或服务商订阅链接使用。

## 使用前需要准备什么

在开始配置前，请确保你已经准备好以下要素：
1. **支持的操作系统**：Windows 10/11 (64位) 或 macOS 11.0+ (支持 Intel 及 Apple Silicon 芯片)。
2. **有效的节点订阅链接**：由服务商提供的一串以 \`http://\` 或 \`https://\` 开头的 URL 链接，格式通常为 Clash / Clash Meta 兼容格式。
3. **稳定的网络连接**：初次下载软件和更新配置文件时需要能够连通互联网。

> 提示：具体菜单名称和界面排版可能随 Clash Verge / Clash Verge Rev 版本更新而略有变化，但核心逻辑与配置步骤保持一致。

## Windows 安装步骤

1. **获取安装包**：前往官方 Release 页面下载适用于 Windows 的 \`.msi\` 或 \`.exe\` 安装程序（通常建议选择 \`x64-setup.exe\`）。
2. **运行安装**：双击运行安装包，按照提示选择安装路径。如遇到 Windows Defender 拦截提示，选择“仍要运行”即可。
3. **完成启动**：安装完成后启动 Clash Verge。软件默认会在 Windows 系统右下角托盘区显示一个小图标。

## macOS 安装步骤

1. **获取安装包**：下载适用于 macOS 的 \`.dmg\` 镜像文件。请根据苹果芯片类型选择对应的安装包（Intel 芯片选择 \`x64.dmg\`，M1/M2/M3 等 Apple 芯片选择 \`aarch64.dmg\`）。
2. **拖拽安装**：双击打开 \`.dmg\` 文件，将 Clash Verge 图标拖入 Applications（应用程序）文件夹中。
3. **安全权限**：首次打开时若提示“无法确认开发者”，请在 macOS 的“系统设置” -> “隐私与安全性”中点击“仍要打开”。

## 导入订阅配置文件

将订阅链接导入 Clash Verge 的通用步骤如下：

1. **打开配置界面**：在客户端左侧导航栏中点击 **Profiles（配置）** 选项。
2. **黏贴订阅链接**：在顶部的链接输入框（或“URL”栏）中，粘贴你获取到的 Clash 订阅 URL 链接。
3. **下载配置**：点击右侧的 **Import（导入）** 或 **Download（下载）** 按钮。
4. **选中配置文件**：下载成功后，列表中会显示该配置文件。右键或单击将其设为当前生效的激活配置（激活状态通常显示为高亮或勾选标示）。

| 配置项目 | 说明 | 推荐操作 |
| --- | --- | --- |
| 自动更新 | 设置订阅配置文件的定时刷新周期 | 建议设置为 24 小时或 12 小时 |
| 内核切换 | 选择使用 Clash Alpha 或 Clash Meta (Mihomo) | 建议选择 Meta (Mihomo) 以获得新协议支持 |

## 选择节点与代理模式

1. **进入节点页面**：点击左侧导航栏的 **Proxies（代理）**。
2. **选择分流组**：在代理列表中，你会看到不同的策略组（如 \`节点选择\`、\`自动选择\`、\`国外媒体\`、\`谷歌服务\` 等）。
3. **切换节点**：在对应的策略组下，点击你希望使用的具体节点名称。
4. **系统代理总开关**：在左侧或顶部开启 **System Proxy（系统代理）** 开关。此时操作系统的 HTTP/HTTPS 流量即开始通过 Clash Verge 进行转发。

## System Proxy 与 TUN Mode 的区别

理解这两种模式对于日常使用和排查网络故障至关重要：

| 模式类型 | 工作层级 | 接管范围 | 典型应用场景 | 管理员权限 |
| --- | --- | --- | --- | --- |
| **System Proxy (系统代理)** | 应用层 (HTTP/HTTPS) | 浏览器、大部分标准 API 请求 | 网页浏览、日常查阅资料 | 不需要 |
| **TUN Mode (虚拟网卡)** | 网络层 (IP/L3) | 全局网络流量、终端命令、游戏 UDP、终端应用 | 终端命令行、在线游戏、UDP 语音、特殊客户端 | 需要高权限 |

## 如何正确启用 TUN 模式

当部分软件不遵循系统代理设置（如 Windows CMD/PowerShell、部分游戏客户端）时，建议开启 TUN 模式：

1. **开启管理员权限启动**：确保 Clash Verge 以管理员身份（macOS 下需要授权 Helper）运行。
2. **开启 TUN 开关**：在 **Settings（设置）** 界面中，找到 **TUN Mode** 开关并将其开启。
3. **检查虚拟网卡**：开启后，系统网络适配器中会出现一个名为 \`clash\` 或 \`Mihomo\` 的虚拟网卡。

## 常见问题排查

### 导入订阅失败
- **原因 1**：订阅 URL 粘贴有误或包含不可见字符。请检查链接完整性。
- **原因 2**：网络问题导致无法连接服务商服务器。可尝试在浏览器中直接打开该订阅 URL 检查是否能下载文本内容。

### 有节点但打不开网页
- **原因 1**：未开启 **System Proxy** 或 **TUN Mode**。
- **原因 2**：节点失效。请在 Proxies 页面点击延迟测试按钮（⚡ 图标），观察节点是否有延迟响应数值。

### TUN 模式无法启动
- **原因 1**：缺乏系统管理员权限。请关闭软件后右键选择“以管理员身份运行”。
- **原因 2**：与其他虚拟网卡（如 VPN 软件、虚拟机网卡）发生冲突。尝试关闭其他网络接管工具。

### 延迟测试失败 (Timeout)
- **原因**：节点配置错误或本地网络无法联通节点服务器。请检查服务商公告或更换节点重试。

## 安全与使用提醒

- **定期更新软件**：前往官方发布渠道更新客户端，以修补已知安全漏洞。
- **保护订阅链接**：订阅链接相当于你的账号密钥，切勿公开发布到社交平台或代码仓库中。
- **合规使用**：请严格遵守当地法律法规与网络使用规范。

## FAQ

**Q: Clash Verge 支持 Clash 官方标准订阅格式吗？**
A: 支持。Clash Verge 原生兼容标准 Clash 及 Clash Meta YAML 格式配置文件。

**Q: 为什么开启代理后本地局域网设备无法访问了？**
A: 请在设置中检查“Bypass LAN（绕过局域网）”选项是否开启。开启后局域网 IP（如 \`192.168.x.x\`）将直连不经过代理。

---
> 声明：软件版本、操作系统和界面可能更新，实际设置请以对应项目官方说明和当前版本为准。`,
    category: "客户端教程",
    tags: ["Clash Verge", "新手教程", "订阅导入"],
    author: "网络工程编辑部",
    related_airports: ["twilight", "invisibles", "laddercloud"],
    related_articles: ["tun-mode-setup-guide", "sing-box-universal-guide", "vless-vs-vmess-trojan-wiki"],
    next_step: {
      title: "下一步行动：选购并配置 Clash Verge 节点",
      description: "选购兼容 Clash Verge (Mihomo 内核) 的高速专线节点，或继续阅读 TUN 模式高级配置指南。",
      primaryHref: "/airports",
      primaryLabel: "查看 Clash Verge 适用机场",
      secondaryHref: "/ranking",
      secondaryLabel: "查看机场排行榜"
    },
    created_at: "2026-09-01",
    updated_at: "2026-09-15"
  },
  {
    id: "g2",
    title: "Shadowrocket (小火箭) iOS 节点订阅与配置入门",
    slug: "shadowrocket-ios-setup",
    type: "guide",
    summary: "适用于 iOS 设备的 Shadowrocket 规则配置教程，包含一键订阅、节点延迟测试及全局/按规则分流设置。",
    content: `Shadowrocket（俗称“小火箭”）是 iOS 平台上功能丰富、使用极其广泛的代理客户端软件。它支持多种主流代理协议，并具备强大的规则分流、域名解析与流量统计功能。

## Shadowrocket 是什么与适用设备

Shadowrocket 是一款专门针对 iOS / iPadOS 开发的第三方网络代理应用。

- **支持设备**：iPhone、iPad，以及搭载 Apple Silicon (M1/M2/M3) 芯片并允许运行 iOS 应用的 macOS 设备。
- **获取方式**：需要在非中国大陆区（如美区、港区、日区等）Apple ID 的 App Store 中付费购买下载。
- **重要提醒**：Shadowrocket 并非免费软件，官方在 App Store 中需一次性买断付费。请勿相信任何所谓的“免费破解版”或来源不明的安装包，以免隐私泄露或设备安全受损。

## 订阅导入步骤

你可以通过以下几种常见方式将代理服务商提供的节点导入 Shadowrocket：

### 方法一：一键导入（推荐）
1. 在 iOS 设备上使用 Safari 浏览器打开代理服务商的控制台页面。
2. 找到“一键导入 Shadowrocket”或“导入到小火箭”按钮并点击。
3. 系统将弹出提示“在 Shadowrocket 中打开吗？”，选择“打开”。
4. 软件将自动启动并完成订阅节点的添加。

### 方法二：扫码导入
1. 打开 Shadowrocket，点击首页右上角的 **\`+\`** 号。
2. 点击左上角的“扫码”图标，扫描服务商提供的订阅二维码。
3. 扫描成功后，软件会自动填充配置并完成保存。

### 方法三：手动粘贴 URL
1. 打开 Shadowrocket，点击右上角 **\`+\`** 按钮。
2. 将 **Type（类型）** 切换为 \`Subscribes\`（订阅）。
3. 在 **URL** 一栏粘贴服务商给出的订阅链接，备注写上服务商名称。
4. 点击右上角 **Save（保存）**。随后在首页下拉列表刷新，即可获取全部节点。

## 代理模式概念解析

Shadowrocket 首页提供了三种核心的“全局路由”模式：

| 模式名称 | 英文标识 | 工作原理 | 适用场景 |
| --- | --- | --- | --- |
| **配置 / 规则** | Config / Rule | 根据规则文件判断：国内流量直连，国外/被封锁流量走代理 | 推荐日常使用，省流量且不影响国内应用速度 |
| **代理 / 全局** | Proxy / Global | 所有网络流量强制经过当前选中的代理节点 | 仅在规则失效或特定国外服务异常时临时开启 |
| **直连** | Direct | 所有流量均不经过代理，直接由本地网络发起请求 | 临时关闭代理测试网络 |

## 节点选择与延迟测试

1. **测试节点延迟**：在软件首页点击“节点连接测试”或点击右侧的 ICMP/TCP 延迟数值。此时软件会测试各个节点的连通性与响应时间。
2. **选中节点**：点击列表中延迟较低、状态稳定的节点，节点左侧会出现高亮选中标记。
3. **启动服务**：开启首页最顶部的未连接开关。如果是首次开启，iOS 系统会弹出“Shadowrocket 想要添加 VPN 配置”的系统提示，点击“允许”并输入 iPhone 解锁密码或完成 Face ID 验证。

## 常见连接问题与排查

### 1. 节点测试全红或显示 Timeout
- **检查订阅状态**：检查服务商订阅是否到期或流量是否耗尽。
- **刷新订阅**：在“首页”的订阅分组上向左滑动点击“更新”，或点击底栏“设置” -> “订阅”中开启“打开时更新”。

### 2. 节点有延迟但连上后无网络
- **检查时间同步**：iOS 系统时间如果不准确会导致 TLS 握手失败。进入 iPhone“设置” -> “通用” -> “日期与时间”，开启“自动设置”。
- **路由模式错误**：确认当前全局路由是否误设为了“直连”或不相符的规则。

## DNS 注意事项与隐私安全

- **DNS 泄漏**：在 Shadowrocket“设置” -> “DNS”中，建议保持默认的系统或 DoH (DNS over HTTPS) 设置，避免恶意 DNS 劫持。
- **订阅安全**：切勿将自己的订阅 URL 分享给他人。订阅链接内包含了你的身份凭证，泄露可能导致流量被他人占用。

## FAQ

**Q: 为什么我在中国区 App Store 搜索不到 Shadowrocket？**
A: 由于苹果公司政策要求，该软件已在中国区 App Store 下架。需要使用其他地区（如美国、香港等）的 Apple ID 登录 App Store 下载。

**Q: 开启小火箭后电池消耗变快是正常的吗？**
A: 系统设置中显示的“Shadowrocket 耗电”大多包含了所有被接管应用产生的网络通信耗电，实际上软件本身的后台开销很低。

---
> 声明：软件版本、操作系统和界面可能更新，实际设置请以对应项目官方说明和当前版本为准。`,
    category: "客户端教程",
    tags: ["Shadowrocket", "iOS", "小火箭"],
    author: "网络工程编辑部",
    related_airports: ["twilight", "invisibles"],
    related_articles: ["clash-meta-android-guide", "sing-box-universal-guide", "fullcone-udp-explained"],
    next_step: {
      title: "下一步行动：选购 iOS 兼容订阅",
      description: "浏览支持 Shadowrocket 一键导入与全节点 UDP 的高速专线机场。",
      primaryHref: "/airports",
      primaryLabel: "查看 iOS 适用机场",
      secondaryHref: "/ranking",
      secondaryLabel: "查看机场排行榜"
    },
    created_at: "2026-09-02",
    updated_at: "2026-09-15"
  },
  {
    id: "g3",
    title: "sing-box 全平台通用订阅转换与规则配置指南",
    slug: "sing-box-universal-guide",
    type: "guide",
    summary: "解析下一代代理核心 sing-box 的工作原理，如何将传统 V2Ray/Clash 订阅转换为 sing-box 格式。",
    content: `sing-box 是近年来备受瞩目的下一代通用网络代理框架。它由 Go 语言编写，主打极致性能、低内存占用以及对最新代理协议（如 VLESS REALITY、TUIC v5、Hysteria2）的原生支持。

## sing-box 是什么与优势

sing-box 既是一个代理核心（Executable Core），也拥有覆盖 iOS、Android、Windows、macOS 和 Linux 的官方客户端。

### 核心优势
1. **高性能与低延迟**：优化了网络栈与路由匹配树，在大流量吞吐和多规则匹配时 CPU 占用更低。
2. **新协议支持快**：对 REALITY、Hysteria2、TUIC 等新兴抗封锁与高吞吐协议支持非常迅速。
3. **架构模块化**：采用结构清晰的 JSON 配置文件，解耦入站（Inbound）、出站（Outbound）与路由（Route）。

## sing-box 配置文件的四大基本模块

sing-box 的核心 JSON 配置文件主要由以下四个模块构成：

| 模块名称 | 作用说明 | 常见配置内容 |
| --- | --- | --- |
| **\`inbounds\`** | 定义客户端本地接管流量的入口 | HTTP/SOCKS5 本地端口、TUN 虚拟网卡配置 |
| **\`outbounds\`** | 定义流量出口与代理节点 | Direct（直连）、Block（拦截）、各个代理服务器节点信息 |
| **\`route\`** | 决定特定流量走哪一个出站 | 域名规则 (geosite)、IP段规则 (geoip)、端口匹配逻辑 |
| **\`dns\`** | 处理域名解析逻辑 | 远程 DNS、本地 DNS 服务商与分流解析规则 |

## 订阅转换概念与操作流程

由于目前许多代理服务商原生仅提供 Clash 或 V2Ray 格式的订阅，因此使用 sing-box 时常需要进行订阅格式转换。

### 订阅转换逻辑
1. **在线/本地转换**：使用第三方的开源订阅转换工具（如 Subconverter）将 Clash / V2Ray 订阅链接转换为 sing-box 兼容的 JSON 配置结构。
2. **客户端内置转换**：许多第三方 sing-box 图形客户端（如 GUI.for.sing-box、Sing-Box GUI 等）已内置自动转换引擎，粘贴 Clash 订阅网址即可自动完成解析。

> 注意：请选择信誉良好的知名开源转换工具，切勿在未经确认的公共未知转换节点提交包含个人敏感信息的订阅。

## 客户端与核心的区别

在使用 sing-box 时，需要明确“核心”与“客户端”的区别：

- **sing-box 核心 (Core)**：命令行可执行程序，适合运行在路由器（OpenWrt）、Linux 服务器或高级用户手动运行。
- **sing-box 客户端 (GUI App)**：带图形界面的应用程序，内部封装了核心，并提供直观的开关、节点选择列表和系统代理集成。

## 常见错误与排查

### 1. JSON 语法解析报错 (\`JSON parse error\`)
sing-box 对 JSON 格式语法非常严格。多花一个逗号或缺失括号均会导致报错。修改配置时建议使用带有 JSON 校验功能的编辑器（如 VS Code）。

### 2. 规则文件缺少 (\`geosite / geoip not found\`)
sing-box 依赖规则数据库文件。若客户端未自动下载 \`geosite.db\` 或 \`geoip.db\`，会导致路由匹配失效。请确保客户端中包含了规则库更新机制。

## FAQ

**Q: sing-box 能完全替代 Clash 吗？**
A: 在协议支持和底层性能上，sing-box 表现非常出色；但在图形界面生态的丰富程度上，Clash 社区积累的工具链依然十分庞大。用户可根据实际需求选择。

---
> 声明：软件版本、操作系统和界面可能更新，实际设置请以对应项目官方说明和当前版本为准。`,
    category: "高阶教程",
    tags: ["sing-box", "订阅转换", "规则配置"],
    author: "网络工程编辑部",
    related_airports: ["twilight", "laddercloud"],
    related_articles: ["vless-vs-vmess-trojan-wiki", "clash-verge-beginner-guide", "tun-mode-setup-guide"],
    next_step: {
      title: "下一步行动：运行 sing-box 新协议节点",
      description: "挑选支持 VLESS REALITY / Hysteria2 等新一代抗封锁协议的高极速机场。",
      primaryHref: "/airports",
      primaryLabel: "查看 sing-box 适用机场",
      secondaryHref: "/updates",
      secondaryLabel: "查看最近更新"
    },
    created_at: "2026-09-03",
    updated_at: "2026-09-15"
  },
  {
    id: "g4",
    title: "如何开启 TUN 模式解决网页与游戏 UDP 代理失效问题",
    slug: "tun-mode-setup-guide",
    type: "guide",
    summary: "排查代理开启后系统网卡流量未接管、Discord 或在线游戏 UDP 无法连接的解决方案。",
    content: `在日常使用代理客户端时，许多用户会遇到这样的困惑：“为什么浏览器打得开国外网页，但终端命令行、Discord 语音或 Steam/Epic 联机游戏却依然提示断网或无法连接？”

本文将详细剖析 TUN 模式的工作原理、应用场景以及配置排查方法。

## 什么是 TUN 模式

**TUN（Network TUNnel）模式** 是一种在操作系统内核层创建虚拟网卡（Virtual Network Adapter）的流量接管技术。

- **系统代理 (System Proxy)**：仅修改操作系统的环境变量或注册表，向支持 HTTP/HTTPS 代理的应用（如 Chrome、Edge 浏览器）宣示代理端口。不支持标准代理的软件会直接忽略此设置。
- **TUN 模式**：在网络层（L3）创建一张虚拟网卡，将操作系统所有网口进出的流量强制路由至该虚拟网卡，再由代理客户端进行解包、规则分流与转发。

## 什么时候需要开启 TUN 模式

| 使用场景 | 系统代理模式 | TUN 模式 |
| --- | --- | --- |
| 网页浏览 (Chrome/Firefox) | ✅ 完全满足 | ✅ 满足 |
| 命令行终端 (CMD / PowerShell / Git) | ❌ 需额外配置环境变量 | ✅ 自动接管 |
| 联机游戏 (Steam / Origin / P2P) | ❌ 无法接管 UDP 流量 | ✅ 自动接管网络层 |
| 语音通讯 (Discord / Teamspeak) | ⚠️ 部分语音通道失效 | ✅ 完全接管 |
| 虚拟机 / Android 模拟器网络 | ❌ 无法接管 | ✅ 完全接管 |

## 开启 TUN 模式的前置条件

1. **管理员 / Root 权限**：创建和修改系统虚拟网卡属于高权限操作。Windows 下必须右键“以管理员身份运行”客户端；macOS 需要授权 Helper 组件。
2. **防火墙放行**：确保系统自带防火墙或第三方安全软件未拦截代理客户端生成的虚拟网卡。
3. **内核支持**：使用的代理核心必须支持 TUN 设备驱动（如 Clash Meta / Mihomo / sing-box / Xray）。

## 核心设置要点：DNS、IPv6 与防火墙

在客户端中启用 TUN 模式时，建议关注以下几项核心参数：

- **\`stack\`（协议栈选项）**：\`system\` 性能最高，\`gvisor\` 兼容性与安全性最好。若出现网络卡顿，可尝试切换协议栈。
- **\`dns-hijack\`（DNS 劫持）**：强制将所有发往 53 端口的局域网 DNS 请求重定向至代理客户端，防止 DNS 泄漏与域名污染。
- **IPv6 处理**：若本地网络未完美配置 IPv6 代理，建议在客户端中关闭 IPv6 代理开关或启用 IPv6 拦截，防止流量走本地 IPv6 直连导致泄漏。

## 常见错误排查

### 1. 启动 TUN 报错 “permission denied” 或 “adapter create failed”
- **排查**：未以管理员权限运行软件。彻底退出客户端进程后，右键选择“以管理员身份运行”。

### 2. 开启 TUN 后本地局域网（如打印机、NAS）无法连接
- **排查**：检查配置中是否漏掉了局域网直连规则。必须确保 \`192.168.0.0/16\`、\`10.0.0.0/8\` 等私有 IP 段被划入 \`DIRECT\`（直连）规则。

### 3. 开启 TUN 后完全断网
- **排查**：通常是虚拟网卡路由表冲突导致。尝试在客户端中关闭 TUN 开关，重置系统网络设置或重启电脑。

## FAQ

**Q: TUN 模式能完全替代游戏加速器吗？**
A: 不一定。代理客户端的 TUN 模式解决了流量接管和 UDP 传输问题，但线路的实际游戏延迟和丢包率依然取决于节点服务器的网络质量与路由优化。

---
> 声明：软件版本、操作系统和界面可能更新，实际设置请以对应项目官方说明和当前版本为准。`,
    category: "网络故障排查",
    tags: ["TUN模式", "UDP代理", "故障排除"],
    author: "网络工程编辑部",
    related_airports: ["twilight", "invisibles"],
    related_articles: ["clash-verge-beginner-guide", "fullcone-udp-explained", "sing-box-universal-guide"],
    next_step: {
      title: "下一步行动：测试游戏与 UDP 全局直连",
      description: "配合支持 FullCone UDP 转发的企业级专线机场，实现低延迟联机与语音交流。",
      primaryHref: "/airports",
      primaryLabel: "查看 FullCone 专线机场",
      secondaryHref: "/ranking",
      secondaryLabel: "查看机场排行榜"
    },
    created_at: "2026-09-04",
    updated_at: "2026-09-15"
  },
  {
    id: "g5",
    title: "Android 平台 Clash Meta 客户端全套配置教程",
    slug: "clash-meta-android-guide",
    type: "guide",
    summary: "安卓系统下 Clash Meta (CMFA) 的安装使用、节点切换及分流规则配置完全手册。",
    content: `在 Android 系统中，基于 Mihomo (Clash Meta) 内核的图形客户端一度是实现高效规则分流与代理接入的核心选择。

## 生态演进与兼容性说明

> ⚠️ **软件生态重要提示**：Android 平台的开源客户端生态更新非常迅速。早期广泛使用的 Clash Meta for Android (CMFA) 等项目目前已处于**停止维护或归档**状态。
>
> 本教程保留相关配置逻辑与使用说明，主要作为历史兼容与通用配置参考。当前 Android 用户在选择客户端时，建议优先关注社区最新活跃维护的替代方案（如基于 sing-box 或 Flclash 等现代化客户端）。

## 客户端基础配置流程

若你正在使用兼容 Clash Meta 规范的 Android 客户端，其核心配置步骤如下：

### 1. 订阅配置导入
1. 打开客户端，在主界面找到 **配置 (Profiles)** 菜单。
2. 点击 **添加配置 (Add Profile)**，选择“新订阅 (URL)”。
3. 在 URL 栏粘贴服务商提供的 Clash 格式订阅地址，设置刷新间隔后保存。
4. 在配置列表中选中并下载该配置文件。

### 2. 启动代理与权限授权
1. 返回客户端首页，点击 **启动 (Start)** 开关。
2. Android 系统会弹出“网络连接请求 (VPN 权限)”对话框，必须点击“确定”或“允许”。
3. 授权后，系统状态栏会出现一个“钥匙”或“VPN”图标，表示虚拟网卡已成功接管流量。

## 常见问题与注意事项

| 现象 | 可能原因 | 解决办法 |
| --- | --- | --- |
| 无法更新订阅 | 移动网络拦截或 URL 错误 | 尝试连接 Wi-Fi 更新，或检查订阅链接 |
| 后台经常自动断开 | 系统省电策略杀后台 | 在 Android 系统设置中将该软件加入“电池优化白名单” |
| 部分国内 App 打开缓慢 | 规则集未将国内流量直连 | 确认分流模式设置为“规则 (Rule)”而非“全局 (Global)” |

---
> 声明：软件版本、操作系统和界面可能更新，实际设置请以对应项目官方说明和当前版本为准。`,
    category: "客户端教程",
    tags: ["Android", "Clash Meta"],
    author: "网络工程编辑部",
    related_airports: ["twilight", "lingmao"],
    related_articles: ["shadowrocket-ios-setup", "clash-verge-beginner-guide", "dns-pollution-leak-prevention"],
    next_step: {
      title: "下一步行动：导入 Android 订阅",
      description: "选购支持 Clash Meta Android 一键订阅的高性价比机场。",
      primaryHref: "/airports",
      primaryLabel: "查看 Android 适用机场",
      secondaryHref: "/ranking",
      secondaryLabel: "查看机场排行榜"
    },
    created_at: "2026-09-05",
    updated_at: "2026-09-15"
  },

  // 百科 5篇
  {
    id: "w1",
    title: "什么是 IEPL 与 IPLC 专线？与 BGP 中转有何区别？",
    slug: "iepl-iplc-bgp-explained",
    type: "wiki",
    summary: "深入剖析跨国企业级物理专线 (IEPL/IPLC) 的工作原理，对比 BGP 公网中转在晚高峰抖动、丢包率及延迟上的本质差异。",
    content: `在挑选代理节点或评估服务商线路质量时，经常会遇到 **IEPL**、**IPLC** 以及 **BGP 中转** 等专业网络术语。理解这些技术架构的本质区别，有助于理性评估节点性能，避免盲目被营销词汇误导。

## 核心概念定义

### 1. IPLC (International Private Leased Circuit)
IPLC 即“国际私用出租线路”。它是电信运营商（如中国电信、中国联通等）为跨国企业建立的端到端物理层/数据链路层专用点对点连接通道。

### 2. IEPL (International Ethernet Private Line)
IEPL 即“国际以太网专线”。它是基于二层以太网技术的专线服务，在业务逻辑上与 IPLC 非常接近，但提供了更灵活的带宽切分与以太网接口接入能力。

### 3. BGP 中转 (Border Gateway Protocol Relay)
BGP 中转并不是跨国物理专线。它是指服务商在境内租用拥有 BGP 多线接入能力的机房服务器，将用户的流量在境内机房汇总后，通过公网国际出口或优化骨干网转发至境外节点。

## 线路架构对比与性能特征

| 线路类型 | 物理传输通道 | 是否经过 GFW 审查 | 晚高峰抗抖动能力 | 成本与门槛 |
| --- | --- | --- | --- | --- |
| **IPLC 专线** | 运营商专属物理/光纤通道 | 不经过标准公网 GFW 检查 | 极高（不受公网拥塞影响） | 极昂贵 |
| **IEPL 专线** | 二层以太网点对点通道 | 不经过标准公网 GFW 检查 | 极高（延迟极其稳定） | 极昂贵 |
| **BGP 中转** | 境内 BGP 机房 + 公网出口 | 经过公网国际出口审查 | 中等（受公网骨干网拥塞影响） | 适中 |
| **公网直连 (直连)** | 普通家用宽带公网出口 | 严格经过 GFW 检查 | 较低（晚高峰丢包率高） | 低廉 |

## 常见误区与理性认识

### 误区一：“IEPL 专线一定比 IPLC 快”
**事实**：IEPL 与 IPLC 在物理底层均属于专线传输，传输速率主要取决于运营商分配的带宽大小与物理距离（光纤延迟）。两者在速度体验上没有本质高下之分。

### 误区二：“专线永远绝对不会断网”
**事实**：专线虽然避开了公网国际出口的拥塞与深度包检测（DPI），但依然可能受到光缆物理中断、机房设备故障、运营商维护或不可抗力影响。

### 误区三：“标注专线的节点一定比普通节点好”
**事实**：实际体验不仅取决于境内到境外的传输通道，还取决于服务商在境外节点的落地网络质量、机房带宽切分倍率以及节点上的承载用户密度。

## 适用场景建议

- **普通网页与视频浏览**：优质的 BGP 中转线路即可提供良好的 4K 播放体验。
- **高要求实时交互（如实时对战游戏、高频交易、重要跨国会议）**：建议优先考虑真正的 IEPL / IPLC 专线节点，以获得低抖动与低丢包率体验。`,
    category: "网络原理",
    tags: ["IEPL专线", "IPLC专线", "BGP中转", "网络原理"],
    author: "技术百科组",
    related_airports: ["invisibles", "wgetcloud", "lingmao"],
    related_articles: ["vless-vs-vmess-trojan-wiki", "node-traffic-rate-explained", "sing-box-universal-guide"],
    next_step: {
      title: "下一步行动：挑选企业级专线机场",
      description: "查阅采用真正的 IEPL / IPLC 国际专线并保证晚高峰带宽冗余的机场榜单。",
      primaryHref: "/search?q=IEPL",
      primaryLabel: "查看 IEPL / IPLC 专线机场",
      secondaryHref: "/updates",
      secondaryLabel: "查看最近更新"
    },
    created_at: "2026-08-20",
    updated_at: "2026-09-15"
  },
  {
    id: "w2",
    title: "VLESS 协议与 Vmess / Trojan 协议原理对比科普",
    slug: "vless-vs-vmess-trojan-wiki",
    type: "wiki",
    summary: "对比解析 VLESS 协议的无状态轻量设计与 Trojan / Vmess 协议在握手开销与特征防探测上的异同。",
    content: `代理传输协议是决定代理通信隐蔽性、握手开销及性能体验的关键底层技术。目前主流的协议包括 **VMess**、**VLESS** 和 **Trojan**。

## 协议工作原理概述

### 1. VMess 协议
VMess 是 V2Ray 项目最初设计的核心传输协议。它是一个基于时钟同步的无状态加密协议。
- **特点**：自带复杂的加密与认证机制，不依赖外部 TLS。
- **缺点**：由于自带加密开销，且要求客户端与服务器的系统时间误差不能超过 90 秒，在高并发吞吐时 CPU 资源消耗较大。

### 2. VLESS 协议
VLESS 是 Project V 社区推出的下一代轻量级传输协议。
- **设计理念**：“LESS is More”（少即是多）。VLESS 本身**取消了强制的内置加密**，将加密与安全防护彻底交由下层的 TLS（或 REALITY / Vision）协议处理。
- **优势**：显著降低了 CPU 在重复加密上的性能开销，提高了吞吐量与握手效率。

### 3. Trojan 协议
Trojan 协议的设计哲学是“模仿”。它模仿最常见的 HTTPS 网站通信特征。
- **特点**：将代理流量直接封装在标准的 TLS 握手与加密流中，外观与访问常规 HTTPS 网站高度一致。

## 协议维度综合对比

| 协议名称 | 自身加密设计 | TLS 依赖度 | 性能开销 | 主要优势 |
| --- | --- | --- | --- | --- |
| **VMess** | 自带对称加密 | 可选（推荐加 TLS） | 中等偏高 | 兼容性极佳，历史悠久 |
| **VLESS** | 无状态轻量设计 | 强依赖 (TLS/REALITY) | 极低 | 性能极高，适配新抗封锁扩展 |
| **Trojan** | 依赖 TLS 协议 | 强依赖 (TLS) | 低 | 特征伪装自然，兼容性好 |

## 常见误区与理性认识

### 误区一：“VLESS 协议一定比 VMess 更安全”
**事实**：VLESS 的安全性完全取决于其下层配置的传输层安全协议（如 TLS 1.3 / REALITY）。若 VLESS 运行在明文 TCP 下，其安全性远低于自带加密的 VMess。

### 误区二：“使用 Trojan 就绝对不会被识别”
**事实**：防火墙不仅依赖简单特征匹配，还会结合主动探测、流量行为统计（如长连接吞吐特征、SNI 域名吻合度）进行综合分析。任何协议都不存在绝对不可识别的神话。

## 总结

协议的选择应综合考虑客户端设备的硬件性能、服务商的节点配置以及传输层加密技术。在当下生态中，**VLESS 配合 REALITY / Vision** 凭借优秀的性能与隐蔽性，成为了现代代理节点的主流技术方案之一。`,
    category: "协议科普",
    tags: ["VLESS", "VMess", "Trojan", "协议对比"],
    author: "技术百科组",
    related_airports: ["twilight", "laddercloud"],
    related_articles: ["iepl-iplc-bgp-explained", "sing-box-universal-guide", "clash-verge-beginner-guide"],
    next_step: {
      title: "下一步行动：体验 VLESS 与 REALITY 协议",
      description: "选购原生部署 VLESS / REALITY 架构的高性能节点数据库。",
      primaryHref: "/airports",
      primaryLabel: "查看 VLESS 协议机场",
      secondaryHref: "/updates",
      secondaryLabel: "查看最近更新"
    },
    created_at: "2026-08-22",
    updated_at: "2026-09-15"
  },
  {
    id: "w3",
    title: "什么是 FullCone UDP？为什么在线游戏需要它？",
    slug: "fullcone-udp-explained",
    type: "wiki",
    summary: "解释 NAT 类型（NAT1 至 NAT4）与 FullCone 全锥形 UDP 转发对联机游戏 Voice & P2P 匹配的影响。",
    content: `在进行语音通话、P2P 下载或在线联机游戏时，经常会看到节点属性中标注了是否支持 **FullCone UDP**（全锥形 NAT）。

## 什么是 NAT 类型

NAT（Network Address Translation，网络地址转换）是路由器将局域网私有 IP 地址转换为公网 IP 地址的技术。在 RFC 规范中，NAT 行为通常被划分为四个等级：

1. **NAT 1 (FullCone - 全锥型)**：最宽松开放的 NAT 类型。一旦内网设备通过某端口向外建立映射，任何外部主机均可通过该映射端口向内网设备发送数据包。
2. **NAT 2 (Address Restricted Cone - 地址限制锥型)**：仅允许内网设备曾经发过数据包的外部 IP 往回发送数据。
3. **NAT 3 (Port Restricted Cone - 端口限制锥型)**：要求外部 IP 和端口必须与内网设备先前发送的目标完全一致。
4. **NAT 4 (Symmetric - 对称型)**：最严格的类型。内网设备每次向不同目标请求，路由器都会分配全新的端口映射，极难建立 P2P 直连。

## FullCone UDP 在代理中的作用

许多网络应用（如 Discord 语音、Nintendo Switch / PS5 / Xbox 联机匹配、Steam P2P 组队）高度依赖 UDP 协议的直连能力。

| 应用场景 | 普通 Symmetric / 限制型 UDP | FullCone UDP |
| --- | --- | --- |
| **主机 / 游戏联机** | 联机匹配困难、NAT 类型显示严格 (Type 3/C/D) | 容易建立 P2P 房间、NAT 类型改善 (Type 1/2/A/B) |
| **语音通话** | 经常提示“语音已连接”但听不到声音 | 语音双向通道稳定畅通 |
| **P2P 传输** | 无法直接与公网其他 Peer 节点握手 | 提高 BT/P2P 节点连接成功率 |

## 常见误区与理性认识

### 误区一：“FullCone UDP 一定能大幅降低游戏延迟”
**事实**：FullCone UDP 解决的是**连接建立与 NAT 连通性**问题（即能不能连上、能不能语音）。游戏的物理延迟（Ping 值）主要取决于节点服务器到游戏服务器的物理距离与线路质量。

### 误区二：“只要开启代理，所有节点就都是 FullCone”
**事实**：FullCone UDP 需要代理客户端、代理服务端软件（如 Mihomo / Xray）以及服务端所在的 VPS 操作系统共同开启对应支持，任何一环受限均无法实现 FullCone。`,
    category: "网络原理",
    tags: ["FullCone", "UDP", "NAT类型"],
    author: "技术百科组",
    related_airports: ["twilight"],
    related_articles: ["tun-mode-setup-guide", "dns-pollution-leak-prevention", "iepl-iplc-bgp-explained"],
    next_step: {
      title: "下一步行动：开启 FullCone UDP 支持",
      description: "了解哪些机场节点支持 FullCone NAT 转发并提供 TUN 模式最佳兼容。",
      primaryHref: "/airports",
      primaryLabel: "查看 FullCone 兼容机场",
      secondaryHref: "/ranking",
      secondaryLabel: "查看排行榜"
    },
    created_at: "2026-08-25",
    updated_at: "2026-09-15"
  },
  {
    id: "w4",
    title: "DNS 污染与 DNS Leak（DNS 泄漏）防御机制科普",
    slug: "dns-pollution-leak-prevention",
    type: "wiki",
    summary: "解释 GFW 域名投毒的阻断原理，以及通过 DoH (DNS over HTTPS) / DoT 结合客户端规则防止 DNS 泄漏的方法。",
    content: `在网络访问过程中，域名系统（DNS）扮演着将人类可读的域名（如 \`google.com\`）解析为计算机可读的 IP 地址（如 \`142.250.x.x\`）的关键角色。然而在复杂网络环境中，**DNS 污染**与 **DNS 泄漏** 是导致网站无法打开或隐私泄露的两大主因。

## 什么是 DNS 污染 (DNS Pollution)

DNS 污染（又称 DNS 投毒）是网络防护设备在公网出口上针对明文 DNS 请求（UDP 53 端口）进行实时监测与伪造响应的技术。

- **工作过程**：当用户向本地 DNS 发起对被阻断域名的查询请求时，检测设备会在真实的 DNS 服务器响应返回之前，抢先向用户返回一个错误的、伪造的 IP 地址。
- **后果**：用户的浏览器尝试连接该错误 IP，导致页面提示“连接超时”或“无法访问”。

## 什么是 DNS 泄漏 (DNS Leak)

DNS 泄漏是指：即使你已经开启了代理软件，系统在解析域名时，**DNS 请求依然通过未加密的本地运营商 DNS 服务器发了出去**。

- **隐私风险**：你的 ISP（网络服务提供商）虽然无法看到你传输的具体加密内容，但可以通过 DNS 解析日志清楚地知道你试图访问哪些网站域名。
- **访问失败**：若发往本地 ISP 的请求遭到 DNS 污染，即使后续建立了代理通道，也会因解析到错误的 IP 而无法正常连通。

## 主流防御与解决方案

为了解决 DNS 污染与 DNS 泄漏，现代代理工具采用了以下技术组合：

1. **DoH (DNS over HTTPS) / DoT (DNS over TLS)**：将 DNS 请求封装在加密的 HTTPS 或 TLS 协议中传输，使中间设备无法识别和篡改 DNS 报文内容。
2. **假 IP 模式 (Fake-IP / Redir-Host)**：代理客户端在本地直接给域名分配一个虚拟的假 IP（如 \`198.18.x.x\`），浏览器直接向假 IP 发起连接，真实域名解析过程推迟到代理节点远端进行，从而彻底免疫本地 DNS 污染。

## FAQ

**Q: 为什么开启了代理，在 DNS 泄漏测试网站上依然能看到本地运营商？**
A: 可能是客户端中未开启“分流 DNS”或“远程 DNS 优先”设置。建议在客户端配置中检查 DNS 模块，确保代理域名的 DNS 解析交由代理通道或加密 DNS 处理。`,
    category: "网络安全",
    tags: ["DNS污染", "DNS泄漏", "DoH"],
    author: "技术百科组",
    related_airports: [],
    related_articles: ["fullcone-udp-explained", "tun-mode-setup-guide", "sing-box-universal-guide"],
    next_step: {
      title: "下一步行动：防范 DNS 污染与泄漏",
      description: "搭配拥有自建安全 DoH / DoT 解析节点与规避污染防线的机场网络。",
      primaryHref: "/airports",
      primaryLabel: "浏览机场大盘",
      secondaryHref: "/guides",
      secondaryLabel: "查阅相关教程"
    },
    created_at: "2026-08-28",
    updated_at: "2026-09-15"
  },
  {
    id: "w5",
    title: "什么是节点扣费倍率？如何计算实际消耗流量？",
    slug: "node-traffic-rate-explained",
    type: "wiki",
    summary: "科普机场节点 0.1x / 1.0x / 2.0x / 5.0x 倍率扣费含义，避免套餐流量迅速耗尽的注意事项。",
    content: `在订阅和使用代理服务时，经常会看到节点列表中标注着 **\`0.1x\`**、**\`1.0x\`**、**\`2.0x\`** 甚至 **\`5.0x\`** 等倍率字样。理解节点倍率对于合理规划套餐流量至关重要。

## 节点倍率的定义与计算公式

**节点扣费倍率** 是服务商根据不同节点的服务器租用成本、带宽单价以及传输线路类型（如公网直连、BGP 中转、IEPL 专线），对消耗流量设置的乘数系数。

### 举例说明
如果你的套餐总流量为 100 GB：
- **在 1.0x 倍率节点**：下载 1 GB 文件，套餐实际扣除 1 GB 流量。
- **在 0.1x 倍率节点**：下载 1 GB 文件，套餐实际扣除 0.1 GB 流量（相当于原流量放大 10 倍使用）。
- **在 5.0x 倍率节点**：下载 1 GB 文件，套餐实际扣除 5 GB 流量。

## 为什么不同节点的倍率差异巨大

服务商设置不同倍率的主要原因在于**底层运营成本的差异**：

| 节点倍率范围 | 常见线路类型 | 成本与资源特征 | 适用场景 |
| --- | --- | --- | --- |
| **0.1x - 0.5x (低倍率)** | 公网直连、普通大带宽 VPS | 带宽成本极低，晚高峰稳定性一般 | 大文件下载、系统更新、看长视频 |
| **1.0x (标准倍率)** | 标准 BGP 中转、优质公网 | 成本与质量较为均衡的通用节点 | 日常网页浏览、社交应用、视频 |
| **2.0x - 5.0x (高倍率)** | 企业级 IEPL/IPLC 专线、高门槛节点 | 专线带宽租金高昂，提供低延迟与稳定连通性 | 实时游戏、关键业务、高清直播 |

## 常见误区与使用建议

### 误区：“倍率越高，节点速度就一定越快”
**事实**：倍率反映的是服务商的成本定价策略，并非直接等同于速度承诺。高倍率节点通常具备更好的晚高峰稳定性与更低丢包率，但最大下载峰值速度依然受到本地宽带及节点总带宽瓶颈的限制。

### 使用建议
1. **看视频 / 下载大文件**：优先选择 \`1.0x\` 或低倍率节点，避免套餐流量短时间内被高倍率扣完。
2. **联机游戏 / 重要会议**：优先选择稳定性更高的高倍率专线节点。`,
    category: "机场名词",
    tags: ["节点倍率", "流量计算"],
    author: "技术百科组",
    related_airports: ["invisibles", "lingmao"],
    related_articles: ["iepl-iplc-bgp-explained", "vless-vs-vmess-trojan-wiki", "clash-verge-beginner-guide"],
    next_step: {
      title: "下一步行动：选购 1 倍率纯专线",
      description: "查阅全节点保持 1 倍率扣费且无隐形倍率卡扣的诚信机场。",
      primaryHref: "/ranking/cheap",
      primaryLabel: "查看高性价比机场",
      secondaryHref: "/updates",
      secondaryLabel: "查看最近更新"
    },
    created_at: "2026-08-30",
    updated_at: "2026-09-15"
  }
];

// 9. 对比数据集 (3篇对比)
export const mockCompareItems: CompareItem[] = [
  {
    id: "comp-1",
    slug: "twilight-vs-invisibles",
    title: "暮光加速 VS 隐形人机场 深度对比",
    airport1_id: "twilight",
    airport2_id: "invisibles",
    summary: "暮光加速在 VLESS 协议大机房线路与节点覆盖上更具优势；隐形人机场主打企业级 IEPL 1倍率扣费与千兆不限连接设备数。",
    recommendation: {
      price_sensitive: "暮光加速 (起步价格略低)",
      traffic_demanding: "隐形人机场 (全节点 1倍率扣费更加划算)"
    }
  },
  {
    id: "comp-2",
    slug: "laddercloud-vs-wgetcloud",
    title: "梯子云 VS WgetCloud 高端线路对比",
    airport1_id: "laddercloud",
    airport2_id: "wgetcloud",
    summary: "梯子云自带一键全平台自研客户端，新手门槛极低；WgetCloud 采用 BGP + 亚马逊 GA 专线，适合追求 99.99% 在线率的商务用户。",
    recommendation: {
      price_sensitive: "梯子云 (门槛低且自带自研客户端)",
      traffic_demanding: "WgetCloud (适合极度看重稳定性的商务与科研用户)"
    }
  },
  {
    id: "comp-3",
    slug: "lingmao-vs-weifeng",
    title: "灵猫网络 VS 微风网络 IPLC专线对比",
    airport1_id: "lingmao",
    airport2_id: "weifeng",
    summary: "灵猫网络主打全节点 1 倍率 IPLC 专线；微风网络基础套餐提供高达 200GB/月 流量大包。",
    recommendation: {
      price_sensitive: "微风网络 (200G/月大容量体验)",
      traffic_demanding: "灵猫网络 (全节点 IPLC 1倍率)"
    }
  }
];
