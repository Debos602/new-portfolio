// experience.ts


import { buildApiUrl } from '../client';
import { TExperience, ApiResponse } from '../../types';

/**
 * Fetches experience entries from the API.
 * Returns the `data` array from the API response, sorted by `order` (ascending).
 */
export async function fetchExperience(): Promise<TExperience[]> {
	const url = buildApiUrl('/api/experience');
	const res = await fetch(url, { headers: { Accept: 'application/json' } });

	if (!res.ok) {
		const text = await res.text().catch(() => res.statusText || 'request failed');
		throw new Error(`Failed to fetch experience: ${res.status} ${text}`);
	}

	const json = (await res.json()) as ApiResponse<TExperience[]>;

	if (!json || !Array.isArray(json.data)) {
		throw new Error('Invalid experience response');
	}

	// Honour the `order` field if present; stable-sort keeps API order as fallback
	return json.data.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export default fetchExperience;