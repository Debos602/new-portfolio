export type Project = {
	_id: string;
	title: string;
	image?: string;
	description?: string;
	githubLinkFrontend?: string;
	githubLinkBackend?: string;
	liveLink?: string;
	technologies: string[];
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
	// Allow overriding with Vite env var `VITE_API_URL`
	try {
		const env = (import.meta as any).env as Record<string, any> | undefined;
		const v = env?.VITE_API_URL;
		return v || DEFAULT_BASE;
	} catch {
		return DEFAULT_BASE;
	}
}

/**
 * Fetches projects from the API.
 * Returns the `data` array from the API response.
 */
export async function fetchProjects(): Promise<Project[]> {
	const base = getBaseUrl();
	const url = `${base.replace(/\/$/, '')}/api/project`;
	const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
	if (!res.ok) {
		const text = await res.text().catch(() => res.statusText || 'request failed');
		throw new Error(`Failed to fetch projects: ${res.status} ${text}`);
	}
	const json = (await res.json()) as ApiResponse<Project[]>;
	if (!json || !Array.isArray(json.data)) {
		throw new Error('Invalid projects response');
	}
	console.log('Fetched projects:', json.data);
	return json.data ;

}

export default fetchProjects;

/**
 * Reorder projects on the server.
 * Sends an array of project IDs in the desired order to the API.
 */
export async function reorderProjects(order: string[]): Promise<void> {
	const base = getBaseUrl();
	const url = `${base.replace(/\/$/, '')}/api/project/reorder`;
	const res = await fetch(url, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({ order }),
	});

	if (!res.ok) {
		const text = await res.text().catch(() => res.statusText || 'request failed');
		throw new Error(`Failed to reorder projects: ${res.status} ${text}`);
	}

	// Optionally, could parse response here if needed.
}

