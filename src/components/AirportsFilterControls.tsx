"use client";

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { mockPlans, mockNodes, mockProtocols, mockClients } from '@/data/mock';
import { Airport } from '@/types/database';
import { Search, ArrowRight, X, RotateCcw, SlidersHorizontal } from 'lucide-react';

export default function AirportsFilterControls({ airports }: { airports: Airport[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Read initial filter values from URL params
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [statusFilter, setStatusFilter] = useState(searchParams.get('status') || 'all');
  const [priceMax, setPriceMax] = useState(searchParams.get('priceMax') || 'all');
  const [lineType, setLineType] = useState(searchParams.get('lineType') || 'all');
  const [protocol, setProtocol] = useState(searchParams.get('protocol') || 'all');
  const [region, setRegion] = useState(searchParams.get('region') || 'all');
  const [client, setClient] = useState(searchParams.get('client') || 'all');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Helper to extract numeric minimum price for an airport
  const getMinPrice = (airportId: string, priceSummary: string): number => {
    const plansForAirport = mockPlans.filter(p => p.airport_id === airportId);
    if (plansForAirport.length > 0) {
      const min = Math.min(...plansForAirport.map(p => p.price));
      if (!isNaN(min) && min > 0) return min;
    }
    const match = priceSummary.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 20;
  };

  // Sync state to URL search parameters
  const updateUrlParams = (newFilters: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newFilters).forEach(([key, val]) => {
      if (val && val !== 'all') {
        params.set(key, val);
      } else {
        params.delete(key);
      }
    });
    const queryString = params.toString();
    startTransition(() => {
      router.push(queryString ? `/airports?${queryString}` : '/airports', { scroll: false });
    });
  };

  const handleFilterChange = (key: string, val: string) => {
    if (key === 'q') setQuery(val);
    if (key === 'status') setStatusFilter(val);
    if (key === 'priceMax') setPriceMax(val);
    if (key === 'lineType') setLineType(val);
    if (key === 'protocol') setProtocol(val);
    if (key === 'region') setRegion(val);
    if (key === 'client') setClient(val);

    updateUrlParams({
      q: key === 'q' ? val : query,
      status: key === 'status' ? val : statusFilter,
      priceMax: key === 'priceMax' ? val : priceMax,
      lineType: key === 'lineType' ? val : lineType,
      protocol: key === 'protocol' ? val : protocol,
      region: key === 'region' ? val : region,
      client: key === 'client' ? val : client,
    });
  };

  const clearAllFilters = () => {
    setQuery('');
    setStatusFilter('all');
    setPriceMax('all');
    setLineType('all');
    setProtocol('all');
    setRegion('all');
    setClient('all');
    router.push('/airports', { scroll: false });
  };

  // Check how many active filters are applied
  const activeCount = [
    query ? 1 : 0,
    statusFilter !== 'all' ? 1 : 0,
    priceMax !== 'all' ? 1 : 0,
    lineType !== 'all' ? 1 : 0,
    protocol !== 'all' ? 1 : 0,
    region !== 'all' ? 1 : 0,
    client !== 'all' ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  // Perform Numeric & Object Filtering
  const filteredAirports = airports.filter(ap => {
    if (query) {
      const q = query.toLowerCase();
      const matchName = ap.name.toLowerCase().includes(q);
      const matchLine = ap.line_type.toLowerCase().includes(q);
      const matchDesc = ap.description.toLowerCase().includes(q);
      const matchAlias = ap.aliases.some(a => a.toLowerCase().includes(q));
      if (!matchName && !matchLine && !matchDesc && !matchAlias) return false;
    }

    if (statusFilter !== 'all' && ap.status !== statusFilter) return false;

    if (priceMax !== 'all') {
      const minPrice = getMinPrice(ap.id, ap.price_summary);
      if (priceMax === '10' && minPrice > 10) return false;
      if (priceMax === '20' && minPrice > 20) return false;
      if (priceMax === '30' && minPrice > 30) return false;
      if (priceMax === '30+' && minPrice <= 30) return false;
    }

    if (lineType !== 'all') {
      const lt = ap.line_type.toUpperCase();
      if (lineType === 'iepl' && !lt.includes('IEPL')) return false;
      if (lineType === 'iplc' && !lt.includes('IPLC')) return false;
      if (lineType === 'bgp' && !lt.includes('BGP')) return false;
    }

    if (protocol !== 'all') {
      const protos = mockProtocols.filter(p => p.airport_id === ap.id && p.supported).map(p => p.protocol_name.toLowerCase());
      if (protos.length > 0 && !protos.some(pr => pr.includes(protocol.toLowerCase()))) {
        return false;
      }
    }

    if (region !== 'all') {
      const nodes = mockNodes.filter(n => n.airport_id === ap.id && n.supported).map(n => n.region);
      const regionNames: { [k: string]: string } = { hk: '香港', jp: '日本', tw: '台湾', sg: '新加坡', us: '美国' };
      const targetRegionName = regionNames[region] || region;
      if (nodes.length > 0 && !nodes.includes(targetRegionName)) {
        return false;
      }
    }

    if (client !== 'all') {
      const clientsList = mockClients.filter(c => c.airport_id === ap.id && c.supported).map(c => c.client_name.toLowerCase());
      if (clientsList.length > 0 && !clientsList.some(cl => cl.includes(client.toLowerCase()))) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* Search Input Bar */}
      <div className="flex justify-end">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="搜索机场名称、线路、协议..."
            value={query}
            onChange={(e) => handleFilterChange('q', e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-8 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 shadow-sm transition-all font-sans"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {query && (
            <button
              type="button"
              onClick={() => handleFilterChange('q', '')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Control Panel */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex sm:hidden items-center justify-between border-b border-slate-100 pb-3">
          <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-blue-600" />
            <span>高级筛选条件 {activeCount > 0 && `(${activeCount})`}</span>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
            className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {isMobileDrawerOpen ? '收起选项 ▲' : '展开选项 ▼'}
          </button>
        </div>

        <div className={`space-y-3.5 ${isMobileDrawerOpen ? 'block' : 'hidden sm:block'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">运营状态</label>
              <select
                value={statusFilter}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              >
                <option value="all">不限状态 (全部)</option>
                <option value="normal">正常运营 (Normal)</option>
                <option value="unconfirmed">待核实 (Unconfirmed)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">最低价格门槛</label>
              <select
                value={priceMax}
                onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              >
                <option value="all">不限价格</option>
                <option value="10">≤ ¥10 / 月</option>
                <option value="20">≤ ¥20 / 月</option>
                <option value="30">≤ ¥30 / 月</option>
                <option value="30+">¥30+ / 月</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">线路架构</label>
              <select
                value={lineType}
                onChange={(e) => handleFilterChange('lineType', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              >
                <option value="all">不限线路类型</option>
                <option value="iepl">企业级 IEPL 专线</option>
                <option value="iplc">全 IPLC 专线</option>
                <option value="bgp">BGP 中转</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">传输协议</label>
              <select
                value={protocol}
                onChange={(e) => handleFilterChange('protocol', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              >
                <option value="all">不限协议</option>
                <option value="vless">VLESS</option>
                <option value="trojan">Trojan</option>
                <option value="shadowsocks">Shadowsocks</option>
                <option value="vmess">VMess</option>
                <option value="hysteria2">Hysteria2</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">核心节点地区</label>
              <select
                value={region}
                onChange={(e) => handleFilterChange('region', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              >
                <option value="all">不限地区</option>
                <option value="hk">中国香港</option>
                <option value="jp">日本</option>
                <option value="tw">中国台湾</option>
                <option value="sg">新加坡</option>
                <option value="us">美国</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">客户端兼容</label>
              <select
                value={client}
                onChange={(e) => handleFilterChange('client', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              >
                <option value="all">不限客户端</option>
                <option value="clash">Clash / Clash Verge</option>
                <option value="shadowrocket">Shadowrocket (小火箭)</option>
                <option value="sing-box">sing-box</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-medium">
              找到 <strong className="text-blue-600 font-bold">{filteredAirports.length}</strong> 个符合条件的机场
            </span>

            {statusFilter !== 'all' && (
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium flex items-center gap-1">
                状态: {statusFilter}
                <button type="button" onClick={() => handleFilterChange('status', 'all')}><X size={12} /></button>
              </span>
            )}
            {priceMax !== 'all' && (
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium flex items-center gap-1">
                价格: ≤ ¥{priceMax}
                <button type="button" onClick={() => handleFilterChange('priceMax', 'all')}><X size={12} /></button>
              </span>
            )}
            {lineType !== 'all' && (
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium flex items-center gap-1">
                线路: {lineType.toUpperCase()}
                <button type="button" onClick={() => handleFilterChange('lineType', 'all')}><X size={12} /></button>
              </span>
            )}
            {protocol !== 'all' && (
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium flex items-center gap-1">
                协议: {protocol.toUpperCase()}
                <button type="button" onClick={() => handleFilterChange('protocol', 'all')}><X size={12} /></button>
              </span>
            )}
            {region !== 'all' && (
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium flex items-center gap-1">
                地区: {region.toUpperCase()}
                <button type="button" onClick={() => handleFilterChange('region', 'all')}><X size={12} /></button>
              </span>
            )}
          </div>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors ml-auto cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>清除全部筛选</span>
            </button>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredAirports.map((airport) => (
          <div
            key={airport.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <Link href={`/airport/${airport.slug}`}>
                    {airport.name}
                  </Link>
                </h2>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  {airport.aliases.join(' / ')}
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {airport.description}
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs text-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">起步价格门槛</span>
                <strong className="text-slate-900 font-bold">{airport.price_summary}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">基础套餐流量</span>
                <strong className="text-slate-900 font-bold">{airport.traffic_summary}</strong>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-200/60 text-[11px]">
                <span className="text-slate-500 truncate max-w-[65%]">线路：{airport.line_type}</span>
                <span className="text-slate-400 font-mono">{airport.last_checked}</span>
              </div>
            </div>

            <Link
              href={`/airport/${airport.slug}`}
              className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-center text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 group"
            >
              <span>查看完整数据与评测</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      {filteredAirports.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-xs space-y-3">
          <p className="font-semibold text-slate-700">未检索到符合条件的机场数据</p>
          <p className="text-slate-400">请尝试放宽价格区间、线路类型或点击“清除全部筛选”重置。</p>
          <div>
            <button
              type="button"
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              重置筛选条件
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
