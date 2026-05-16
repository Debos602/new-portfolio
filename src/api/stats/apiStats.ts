import { buildApiUrl } from '../client';
import { StatsData, ApiResponse } from '../../types';
export async function getStats(): Promise<StatsData> {
  const url = buildApiUrl('/api/stats');
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText || 'request failed');
    throw new Error(`Failed to fetch stats: ${res.status} ${text}`);
  }
  const json = (await res.json()) as ApiResponse<StatsData>;
  if (!json || !json.data) throw new Error('Invalid stats response');
  return json.data;
}
