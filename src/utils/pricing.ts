import { Airport } from '@/types/database';
import { mockPlans } from '@/data/mock';

/**
 * Canonical Pricing Utility for jichangsou.com
 * Calculates the effective monthly price for an airport in CNY (¥/month).
 * Returns null if price is unknown, missing, or unparseable.
 */
export function getEffectiveMonthlyPrice(airport: Airport): number | null {
  if (!airport) return null;

  // 1. Search mockPlans for airport plans
  const plans = mockPlans.filter(p => p.airport_id === airport.id && p.price !== undefined && p.price !== null);

  if (plans.length > 0) {
    const monthlyPrices: number[] = [];

    plans.forEach(p => {
      // Ignore invalid or 0 prices unless explicitly free
      if (p.price <= 0) return;

      if (p.billing_period === 'monthly') {
        monthlyPrices.push(p.price);
      } else if (p.billing_period === 'quarterly') {
        monthlyPrices.push(p.price / 3);
      } else if (p.billing_period === 'yearly') {
        monthlyPrices.push(p.price / 12);
      } else if (p.billing_period === 'one_time') {
        // One time / non-expiring packages amortized or ignored for monthly pricing
        // If no periodic plans exist, convert one_time price
      }
    });

    if (monthlyPrices.length > 0) {
      const minMonthly = Math.min(...monthlyPrices);
      if (!isNaN(minMonthly) && minMonthly > 0) {
        return Math.round(minMonthly * 100) / 100;
      }
    }
  }

  // 2. Parse price_summary string fallback (e.g. "¥79 / 月起", "¥30 / 年起", "¥20 / 月起")
  const summary = airport.price_summary || '';
  if (!summary || summary.includes('未知') || summary.includes('待定')) {
    return null;
  }

  // Check for yearly price summary e.g. "¥30 / 年起"
  const yearlyMatch = summary.match(/¥?\s*([\d.]+)\s*\/\s*年/);
  if (yearlyMatch) {
    const yearlyVal = parseFloat(yearlyMatch[1]);
    if (!isNaN(yearlyVal) && yearlyVal > 0) {
      return Math.round((yearlyVal / 12) * 100) / 100;
    }
  }

  // Check for monthly price summary e.g. "¥24 / 月起" or "¥20"
  const monthlyMatch = summary.match(/¥?\s*([\d.]+)/);
  if (monthlyMatch) {
    const val = parseFloat(monthlyMatch[1]);
    if (!isNaN(val) && val > 0) {
      return val;
    }
  }

  return null;
}
