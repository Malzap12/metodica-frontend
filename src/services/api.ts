import { Metodologia, CriterioComparativa, MiembroEquipo, ApiResponse } from '../types';
import { MOCK_METODOLOGIAS, MOCK_COMPARATIVA, MOCK_EQUIPO } from '../data/mockData';

// Configuración de la URL base del Backend
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

// Timeout para evitar que la interfaz se quede colgada esperando al servidor
const REQUEST_TIMEOUT_MS = 2500;

interface FetchOptions extends RequestInit {
  timeout?: number;
}

/**
 * Función auxiliar para realizar fetch con timeout
 */
async function fetchWithTimeout(resource: string, options: FetchOptions = {}): Promise<Response> {
  const { timeout = REQUEST_TIMEOUT_MS, ...rest } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, {
      ...rest,
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(rest.headers || {})
      }
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

/**
 * Verifica la disponibilidad del Backend en tiempo real
 */
export async function checkBackendStatus(): Promise<{ online: boolean; latencyMs: number }> {
  const start = performance.now();
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/metodologias`, {
      method: 'GET',
      timeout: 2000
    });
    const latencyMs = Math.round(performance.now() - start);
    return { online: res.ok, latencyMs };
  } catch {
    return { online: false, latencyMs: 0 };
  }
}

/**
 * Obtiene el listado completo de metodologías (Backend First, Mock Fallback)
 */
export async function fetchMetodologias(): Promise<ApiResponse<Metodologia[]>> {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/metodologias`);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    return {
      success: true,
      data: Array.isArray(data) ? data : (data.data || MOCK_METODOLOGIAS),
      source: 'backend-api',
      timestamp: new Date().toISOString(),
      message: 'Datos servidos en vivo desde el Backend API (Single Source of Truth)'
    };
  } catch (error) {
    // Fallback silencioso y controlado
    return {
      success: true,
      data: MOCK_METODOLOGIAS,
      source: 'mock-fallback',
      timestamp: new Date().toISOString(),
      message: 'Backend en desarrollo (Sábado). Mostrando datos estructurados del modelo local.'
    };
  }
}

/**
 * Obtiene el detalle de una metodología por su ID
 */
export async function fetchMetodologiaById(id: string): Promise<ApiResponse<Metodologia | null>> {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/metodologias/${id}`);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    return {
      success: true,
      data: data.data || data,
      source: 'backend-api',
      timestamp: new Date().toISOString()
    };
  } catch {
    const found = MOCK_METODOLOGIAS.find(m => m.id.toLowerCase() === id.toLowerCase()) || null;
    return {
      success: !!found,
      data: found,
      source: 'mock-fallback',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Obtiene la matriz comparativa de metodologías
 */
export async function fetchComparativa(): Promise<ApiResponse<CriterioComparativa[]>> {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/comparativa`);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    return {
      success: true,
      data: Array.isArray(data) ? data : (data.data || MOCK_COMPARATIVA),
      source: 'backend-api',
      timestamp: new Date().toISOString()
    };
  } catch {
    return {
      success: true,
      data: MOCK_COMPARATIVA,
      source: 'mock-fallback',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Obtiene la información del equipo y sus roles
 */
export async function fetchEquipo(): Promise<ApiResponse<MiembroEquipo[]>> {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/equipo`);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    return {
      success: true,
      data: Array.isArray(data) ? data : (data.data || MOCK_EQUIPO),
      source: 'backend-api',
      timestamp: new Date().toISOString()
    };
  } catch {
    return {
      success: true,
      data: MOCK_EQUIPO,
      source: 'mock-fallback',
      timestamp: new Date().toISOString()
    };
  }
}
