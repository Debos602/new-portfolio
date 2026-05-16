import { Skill, ApiResponse } from '../../types';
import { buildApiUrl } from '../client';
export async function fetchSkills(): Promise<Skill[]> {
  const url = buildApiUrl('/api/skills');
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
