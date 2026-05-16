export const DEFAULT_API_BASE = 'http://localhost:5000';

export function getApiBase(): string {
  try {
    const env = (import.meta as any).env as Record<string, any> | undefined;
    const v = env?.VITE_API_URL;
    return (v as string) || DEFAULT_API_BASE;
  } catch {
    return DEFAULT_API_BASE;
  }
}

export function buildApiUrl(path: string): string {
  const base = getApiBase();
  return `${base.replace(/\/$/, '')}/${String(path).replace(/^\/+/, '')}`;
}
