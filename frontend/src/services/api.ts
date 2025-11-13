/**
 * API Service
 * Centralized API communication layer for the Haevoyage frontend
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * API endpoints
 */
export const api = {
  // Health check
  health: () => fetchAPI<{ status: string }>('/health'),

  // Challenges
  getChallenges: () => fetchAPI<any[]>('/challenges'),
  getChallengeById: (id: number) => fetchAPI<any>(`/challenges/${id}`),

  // User (placeholder for future implementation)
  // getUser: () => fetchAPI<any>('/user'),
  // updateUser: (data: any) => fetchAPI<any>('/user', { method: 'PUT', body: JSON.stringify(data) }),
};

export default api;
