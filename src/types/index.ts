export type MetodologiaTipo = 'tradicional' | 'agil';

export interface FaseMetodologia {
  nombre: string;
  descripcion: string;
}

export interface Metodologia {
  id: string;
  nombre: string;
  tipo: MetodologiaTipo;
  lema: string;
  descripcionCorta: string;
  descripcionCompleta: string;
  complejidad: 'Baja' | 'Media' | 'Alta';
  frecuenciaEntrega: string;
  flexibilidad: 'Rígida' | 'Moderada' | 'Alta (Adaptativa)';
  enfoque: 'Predictivo' | 'Adaptativo / Empírico';
  fases: FaseMetodologia[];
  rolesClave: string[];
  ventajas: string[];
  desventajas: string[];
  casosUsoIdeales: string;
  origen: string;
  colorHex: string;
}

export interface CriterioComparativa {
  id: string;
  criterio: string;
  descripcion: string;
  tradicional: string;
  agil: string;
  ganadorEnfoque?: 'tradicional' | 'agil' | 'depende';
}

export interface MiembroEquipo {
  id: string;
  nombre: string;
  alias: string;
  rol: string;
  tituloEspecialidad: string;
  descripcion: string;
  responsabilidades: string[];
  tecnologias: string[];
  entregable: string;
  fechaCompromiso: string;
  estado: 'Completado' | 'En Progreso' | 'Planificado';
  colorAcento: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  source: 'backend-api' | 'mock-fallback';
  timestamp: string;
  message?: string;
}
