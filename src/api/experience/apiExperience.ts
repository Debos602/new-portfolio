// experience.ts

export type TResponsibility = {
	icon?: string;
	details: string;
};

export type TExperience = {
	_id: string;
	jobTitle: string;
	company: string;
	startDate: string;        // ISO string from API (Date serializes to string over JSON)
	endDate?: string;         // optional — undefined/null means "Present"
	isPresent: boolean;
	responsibilities: TResponsibility[];
	technologies: string[];
	order?: number;
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

function getBaseUrl(): string {
	try {
		const env = (import.meta as any).env as Record<string, any> | undefined;
		const v = env?.VITE_API_URL;
		return v || DEFAULT_BASE;
	} catch {
		return DEFAULT_BASE;
	}
}

/**
 * Fetches experience entries from the API.
 * Returns the `data` array from the API response, sorted by `order` (ascending).
 */
export async function fetchExperience(): Promise<TExperience[]> {
	const base = getBaseUrl();
	const url = `${base.replace(/\/$/, '')}/api/experience`;
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