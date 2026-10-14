import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Airport } from '@/types/database';

export default function StaticAirportsList({ airports }: { airports: Airport[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {airports.map((airport) => (
        <div
          key={airport.id}
          className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-5"
        >
          <div className="space-y-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
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
  );
}
