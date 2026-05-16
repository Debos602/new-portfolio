import { buildApiUrl } from '../client';
import { Project, ApiResponse } from '../../types';

/**
 * Fetches projects from the API.
 * Returns the `data` array from the API response.
 */
export async function fetchProjects(): Promise<Project[]> {
	const url = buildApiUrl('/api/project');
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
	const url = buildApiUrl('/api/project/reorder');
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

