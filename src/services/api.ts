const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const defaultHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
};

export function setDefaultAuthToken(token: string) {
  defaultHeaders.Authorization = `Bearer ${token}`;
}

export async function fetchData<T>(url: string): Promise<T> {
  return request<T>(url, 'GET');
}

export async function request<T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  payload?: unknown,
  headers?: Record<string, string>
): Promise<T> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    if (payload) {
      options.body = JSON.stringify(payload);
    }

    const response = await fetch(BASE_URL + url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData?.message || response.statusText}`);
    }

    // Only attempt to parse JSON if content-type is json
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data: T = await response.json();
      return data;
    } else {
      // If no JSON, return empty object or handle as needed for non-JSON responses
      return {} as T;
    }
  } catch (error) {
    console.error(`Error with ${method} request to ${url}:`, error);
    throw error;
  }
}

export async function postData<T>(url: string, payload: unknown, headers?: Record<string, string>): Promise<T> {
  return request<T>(url, 'POST', payload, headers);
}

export async function putData<T>(url: string, payload: unknown, headers?: Record<string, string>): Promise<T> {
  return request<T>(url, 'PUT', payload, headers);
}

export async function deleteData<T>(url: string, headers?: Record<string, string>): Promise<T> {
  return request<T>(url, 'DELETE', undefined, headers);
} 