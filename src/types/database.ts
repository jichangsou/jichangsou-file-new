// 机场搜 (jichangsou.com) 规范化数据库接口定义

export type AirportStatusType = 'normal' | 'unconfirmed' | 'abnormal' | 'stopped';
export type SupportStatus = 'supported' | 'unsupported' | 'partial' | 'unknown';

export interface Airport {
  id: string;
  name: string;
  slug: string;
  aliases: string[];
  description: string;
  website: string;
  status: AirportStatusType;
  rating?: number; // 可选参考评分
  traffic_summary: string; // 例如: "120GB/月起"
  price_summary: string;   // 例如: "¥20.00/月起"
  line_type: string;       // 例如: "BGP入口 + IEPL企业专线"
  telegram?: string;
  email?: string;
  pros: string[];          // 优点
  cons: string[];          // 缺点
  last_checked: string;    // YYYY-MM-DD
  created_at: string;
  updated_at: string;
}

export interface AirportPlan {
  id: string;
  airport_id: string;
  name: string;
  price: number;
  currency: string;
  billing_period: 'monthly' | 'quarterly' | 'yearly' | 'one_time';
  traffic: string;         // 例如: "120 GB"
  device_limit: string;    // 例如: "5 设备" 或 "不限制"
  description: string;
  created_at: string;
  updated_at: string;
}

export interface AirportNode {
  id: string;
  airport_id: string;
  region: string;          // 例如: "香港", "日本", "美国"
  country: string;
  city?: string;
  node_count: number;
  supported: boolean;
  last_checked: string;
}

export interface AirportClient {
  id: string;
  airport_id: string;
  client_name: string;     // 例如: "Clash", "Shadowrocket", "sing-box"
  platform: string;        // "Windows" | "macOS" | "iOS" | "Android" | "Linux"
  supported: boolean;
  last_checked: string;
}

export interface AirportProtocol {
  id: string;
  airport_id: string;
  protocol_name: string;   // 例如: "Shadowsocks", "VMess", "VLESS", "Trojan", "Reality"
  supported: boolean;
  last_checked: string;
}

export interface AirportAI {
  id: string;
  airport_id: string;
  service_name: 'ChatGPT' | 'Claude' | 'Gemini' | 'Grok' | 'Copilot';
  status: SupportStatus;
  last_checked: string;
}

export interface AirportStreaming {
  id: string;
  airport_id: string;
  service_name: 'Netflix' | 'Disney+' | 'YouTube' | 'Prime Video' | 'HBO' | 'Hulu';
  status: SupportStatus;
  last_checked: string;
}

export interface AirportReview {
  id: string;
  airport_id: string;
  title: string;
  content: string;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface AirportPriceHistory {
  id: string;
  airport_id: string;
  plan_id: string;
  old_price: number;
  new_price: number;
  changed_at: string;
}

export interface AirportStatusHistory {
  id: string;
  airport_id: string;
  old_status: AirportStatusType;
  new_status: AirportStatusType;
  changed_at: string;
  note?: string;
}

export interface ArticleNextStep {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  type: 'guide' | 'wiki' | 'blog';
  summary: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  related_airports?: string[];
  related_articles?: string[];
  next_step?: ArticleNextStep;
  created_at: string;
  updated_at: string;
}

export interface CompareItem {
  id: string;
  slug: string;
  title: string;
  airport1_id: string;
  airport2_id: string;
  summary: string;
  recommendation: {
    price_sensitive: string; // 适宜预算敏感用户
    traffic_demanding: string; // 适宜流量大户
  };
}
