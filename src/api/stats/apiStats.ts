export type StatsData = {
  codeQuality: string;
  commitsPerYear: string;
  // API may return `projects` (number) or `projectsDone` (string like "11+")
  projects?: number | string;
  projectsDone?: string;
  uptime: string;
};

export type ApiResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};

const DEFAULT_BASE = 'http://localhost:5000';

function getBaseUrl() {
  try {
    const env = (import.meta as any).env as Record<string, any> | undefined;
    const v = env?.VITE_API_URL;
    return v || DEFAULT_BASE;
  } catch {
    return DEFAULT_BASE;
  }
}

export async function getStats(): Promise<StatsData> {
  const base = getBaseUrl();
  const url = `${base.replace(/\/$/, '')}/api/stats`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText || 'request failed');
    throw new Error(`Failed to fetch stats: ${res.status} ${text}`);
  }
  const json = (await res.json()) as ApiResponse<StatsData>;
  if (!json || !json.data) throw new Error('Invalid stats response');
  return json.data;
}
