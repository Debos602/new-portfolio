export type Skill = {
  _id: string;
  category: string;
  name: string;
  proficiency?: number;
  icon?: string;
  level?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
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

export async function fetchSkills(): Promise<Skill[]> {
  const base = getBaseUrl();
  const url = `${base.replace(/\/$/, '')}/api/skills`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText || 'request failed');
    throw new Error(`Failed to fetch skills: ${res.status} ${text}`);
  }
  const json = (await res.json()) as ApiResponse<Skill[]>;
  if (!json || !Array.isArray(json.data)) throw new Error('Invalid skills response');
  return json.data;
}

export default fetchSkills;
