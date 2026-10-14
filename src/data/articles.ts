import { ArticleNextStep } from '@/types/database';

export interface Article {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  tags: string[];
  heroImage: string;
  category: 'tutorial' | 'review';
  content: string;
  related_airports?: string[];
  related_articles?: string[];
  next_step?: ArticleNextStep;
}

export const articles: Article[] = [
  {
    id: "2026-airport-protocol-evolution",
    title: "2026 机场节点协议演进：从 VMess/Trojan 到 VLESS 与 Hysteria2",
    description: "深入分析现代网络代理协议的传输开销、抗封锁能力与客户端兼容性选型指南。",
    category: "tutorial",
    author: "机场搜技术团队",
    pubDate: "2026-03-01",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    tags: ["协议对比", "VLESS", "Hysteria2", "网络工程"],
    related_airports: ["twilight", "wgetcloud"],
    related_articles: ["clash-verge-beginner-guide", "sing-box-universal-guide"],
    next_step: {
      title: "下一步行动：浏览机场数据库与技术教程",
      description: "查看包含完整基础设施测评的机场大盘或查阅跨平台客户端指南。",
      primaryHref: "/airports",
      primaryLabel: "浏览机场大盘",
      secondaryHref: "/guides",
      secondaryLabel: "查阅使用教程"
    },
    content: `## 🌟 代理协议演进历史

网络代理协议在过去几年经历了多次重大迭代。从早期简单加密的 Shadowsocks，到引入身份认证机制的 VMess，再到模拟标准 HTTPS 的 Trojan，直到最新一代的 VLESS 与 Hysteria2。

---

## ⚡ VLESS 协议核心优势

1. **去掉冗余双重加密**：VLESS 是一种无状态协议，降低了客户端设备的 CPU 算力开销。
2. **配合 Reality 伪装**：借助真实知名网站 TLS 证书完成 handshake 伪装，有效提高了抗封锁特征屏蔽能力。
3. **单端口多用户高并发**：极大精简了机场服务端节点资源调度占用。

---

## 🚀 Hysteria2 (歇斯底里2) 协议特点

- 基于 UDP (QUIC) 协议开发，专为高丢包、高延迟或劣质网络环境设计。
- 内置拥塞控制算法，在丢包率较高的网络条件下依然能跑满带宽。
`
  },
  {
    id: "iepl-iplc-bgp-line-comparison",
    title: "IEPL 专线、IPLC 专线与 BGP 中转线路技术原理对比",
    description: "解析机场线路架构中的物理专线、内网中转与公网直连原理，教你如何根据延迟与抖动要求选择合适套餐。",
    category: "tutorial",
    author: "机场搜技术团队",
    pubDate: "2026-03-10",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    tags: ["线路原理", "IEPL专线", "IPLC", "BGP中转"],
    related_airports: ["wgetcloud", "kuajie"],
    related_articles: ["iepl-iplc-bgp-explained"],
    next_step: {
      title: "下一步行动：探索专线机场与高稳定性推荐",
      description: "查看 IEPL / IPLC 物理专线机场专题大盘。",
      primaryHref: "/topics/iepl-airports",
      primaryLabel: "IEPL 专线机场专题",
      secondaryHref: "/airports",
      secondaryLabel: "返回机场大盘"
    },
    content: `## 🚀 线路架构的核心区别

评价机场连通质量与稳定度，最关键的在于其底层网络传输架构：

---

### 1. BGP 智能中转线路
- 在靠近大陆用户的节点部署电信/联通/移动三网 BGP 入口。
- 将用户流量通过中继服务器转送至跨境出口，在普通时段表现优秀。

---

### 2. IEPL / IPLC 物理专线
- **物理内网点对点传输**：流量过境不经过公网 GFW 深度包检测。
- **极致低延迟与低抖动**：广深至香港专线延迟可低至 8-15ms，晚高峰抗丢包性能强悍。
`
  }
];
