export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers as Record<string, string> },
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || errorData.message || 'Error en la solicitud');
  }
  return response.json();
}
