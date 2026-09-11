import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, Lightbulb, Users, Layers } from 'lucide-react';
import { Metodologia } from '../types';

interface MethodologyModalProps {
  metodologia: Metodologia | null;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ metodologia, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!metodologia) return null;

  const isAgil = metodologia.tipo === 'agil';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#1c1c1e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.08] dark:border-white/10 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white bg-black/[0.05] hover:bg-black/[0.1] dark:bg-white/10 dark:hover:bg-white/20 border border-black/[0.08] dark:border-white/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
              isAgil 
                ? 'bg-black/[0.05] dark:bg-white/10 text-[#1d1d1f] dark:text-white border border-black/[0.08] dark:border-white/15' 
                : 'bg-black/[0.04] dark:bg-white/[0.03] text-[#86868b] border border-black/[0.06] dark:border-white/[0.08]'
            }`}>
              {isAgil ? 'Marco Ágil' : 'Modelo Tradicional'}
            </span>

            <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-black/[0.03] dark:bg-white/[0.02] text-[#86868b] border border-black/[0.06] dark:border-white/[0.06]">
              Origen: {metodologia.origen}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
            {metodologia.nombre}
          </h3>

          <p className="mt-1 text-[#86868b] text-sm italic">
            "{metodologia.lema}"
          </p>
        </div>

        {/* Description */}
        <div className="mt-6 text-[#1d1d1f] dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {metodologia.descripcionCompleta}
        </div>

        {/* Quick Specs Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-black/[0.03] dark:bg-black/40 border border-black/[0.06] dark:border-white/5">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#86868b] block font-mono">Complejidad</span>
            <span className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-0.5 block">{metodologia.complejidad}</span>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#86868b] block font-mono">Frecuencia de Entrega</span>
            <span className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-0.5 block">{metodologia.frecuenciaEntrega}</span>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#86868b] block font-mono">Flexibilidad al Cambio</span>
            <span className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-0.5 block">{metodologia.flexibilidad}</span>
          </div>
        </div>

        {/* Fases del Ciclo de Vida */}
        <div className="mt-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-slate-300 flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-[#1d1d1f] dark:text-white" />
            <span>Fases / Flujo del Ciclo de Vida</span>
          </h4>
          <div className="space-y-2.5">
            {metodologia.fases.map((fase, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/5 flex items-start gap-3.5">
                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-black/[0.04] dark:bg-white/10 border border-black/[0.08] dark:border-white/15 text-[#1d1d1f] dark:text-white text-xs font-mono font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#1d1d1f] dark:text-white">{fase.nombre}</h5>
                  <p className="text-xs text-[#86868b] mt-0.5 leading-relaxed">{fase.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Clave */}
        <div className="mt-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-slate-300 flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>Roles y Estructura Humana</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {metodologia.rolesClave.map((rol, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-medium bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/20 dark:border-violet-500/30 text-violet-700 dark:text-violet-200">
                {rol}
              </span>
            ))}
          </div>
        </div>

        {/* Ventajas & Desventajas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ventajas */}
          <div className="p-4 rounded-2xl bg-emerald-500/[0.05] dark:bg-emerald-950/20 border border-emerald-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-2.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ventajas Competitivas</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#1d1d1f] dark:text-slate-300">
              {metodologia.ventajas.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desventajas */}
          <div className="p-4 rounded-2xl bg-rose-500/[0.05] dark:bg-rose-950/20 border border-rose-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-2.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Limitaciones y Desafíos</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#1d1d1f] dark:text-slate-300">
              {metodologia.desventajas.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Casos de Uso Ideales */}
        <div className="mt-6 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-[#1d1d1f] dark:text-white flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-white">¿Cuándo implementarla?</h4>
            <p className="text-xs text-[#1d1d1f] dark:text-slate-300 mt-1 leading-relaxed">{metodologia.casosUsoIdeales}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
