import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { Metodologia, MetodologiaTipo } from '../types';

interface MethodologiesExplorerProps {
  metodologias: Metodologia[];
  isLoading: boolean;
  dataSource: 'backend-api' | 'mock-fallback';
  onSelectMetodologia: (metodologia: Metodologia) => void;
  onRetry: () => void;
}

export const MethodologiesExplorer: React.FC<MethodologiesExplorerProps> = ({
  metodologias,
  isLoading,
  dataSource,
  onSelectMetodologia,
  onRetry
}) => {
  const [filterType, setFilterType] = useState<MetodologiaTipo | 'todas'>('todas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredList = useMemo(() => {
    return metodologias.filter((m) => {
      const matchesType = filterType === 'todas' || m.tipo === filterType;
      const matchesSearch = 
        m.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.lema.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [metodologias, filterType, searchQuery]);

  return (
    <section id="clasificacion" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#1d1d1f] dark:text-white mb-3">
            <span>Clasificación del SDLC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
            Catálogo de Metodologías
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base mt-2 max-w-xl">
            Análisis comparativo de paradigmas: modelos predictivos orientados a control y gobernanza vs. marcos adaptativos iterativos centrados en el valor continuo.
          </p>
        </div>

        {/* Data Source Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto text-xs">
          <span className="text-[#86868b]">Fuente de datos:</span>
          <span className={`px-2.5 py-1 rounded-md border font-medium ${
            dataSource === 'backend-api' 
              ? 'bg-emerald-500/[0.08] border-emerald-500/25 text-emerald-600 dark:text-emerald-300' 
              : 'bg-black/[0.04] dark:bg-white/[0.03] border-black/[0.06] dark:border-white/[0.06] text-[#86868b]'
          }`}>
            {dataSource === 'backend-api' ? 'REST API (/api/metodologias)' : 'SSOT Mock Schema'}
          </span>
        </div>
      </div>

      {/* Filter and Search Bar (Apple Capsule Minimal Bar) */}
      <div className="p-2 rounded-2xl bg-white/70 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
        {/* Type Selector Segmented Control */}
        <div className="flex items-center gap-1 w-full sm:w-auto p-1 rounded-full bg-black/[0.05] dark:bg-black/40 border border-black/[0.04] dark:border-white/[0.04]">
          <button
            onClick={() => setFilterType('todas')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterType === 'todas'
                ? 'bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white shadow-sm border border-black/[0.06] dark:border-white/[0.1]'
                : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
            }`}
          >
            Todas ({metodologias.length})
          </button>
          <button
            onClick={() => setFilterType('agil')}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterType === 'agil'
                ? 'bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white border border-black/[0.06] dark:border-white/[0.1] shadow-sm'
                : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
            }`}
          >
            <span>Ágiles</span>
          </button>
          <button
            onClick={() => setFilterType('tradicional')}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterType === 'tradicional'
                ? 'bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.06] dark:border-white/[0.1] shadow-sm'
                : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
            }`}
          >
            <span>Tradicionales</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#86868b]" />
          <input
            type="text"
            placeholder="Filtrar por nombre o enfoque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 transition-all"
          />
        </div>
      </div>

      {/* Loading Skeletons */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-2xl bg-black/[0.03] dark:bg-slate-900/40 border border-black/[0.06] dark:border-white/5 p-6 animate-pulse flex flex-col justify-between">
              <div>
                <div className="h-4 w-24 bg-black/10 dark:bg-slate-800 rounded-full mb-3"></div>
                <div className="h-6 w-40 bg-black/10 dark:bg-slate-800 rounded-md mb-2"></div>
                <div className="h-3 w-full bg-black/5 dark:bg-slate-800/60 rounded-md mb-2"></div>
                <div className="h-3 w-3/4 bg-black/5 dark:bg-slate-800/60 rounded-md"></div>
              </div>
              <div className="h-8 w-full bg-black/5 dark:bg-slate-800/40 rounded-xl"></div>
            </div>
          ))}
        </div>
      ) : filteredList.length === 0 ? (
        <div className="p-12 text-center rounded-2xl linear-card">
          <Filter className="w-8 h-8 text-[#86868b] mx-auto mb-3" />
          <h4 className="text-base font-semibold text-[#1d1d1f] dark:text-white">No se encontraron metodologías</h4>
          <p className="text-sm text-[#86868b] mt-1">Prueba cambiando el término de búsqueda o el filtro.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => { setFilterType('todas'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-full bg-black/[0.05] dark:bg-white/10 text-xs text-[#1d1d1f] dark:text-white hover:bg-black/[0.08] dark:hover:bg-white/15 transition-colors"
            >
              Limpiar filtros
            </button>
            <button
              onClick={onRetry}
              className="px-4 py-2 rounded-full bg-black/[0.05] dark:bg-white/10 border border-black/[0.08] dark:border-white/15 text-xs text-[#1d1d1f] dark:text-white hover:bg-black/[0.08] dark:hover:bg-white/15 transition-colors"
            >
              Recargar API
            </button>
          </div>
        </div>
      ) : (
        /* Dynamic Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((metodologia) => {
            const isAgil = metodologia.tipo === 'agil';
            return (
              <div
                key={metodologia.id}
                className="linear-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Card Meta Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-tight ${
                      isAgil
                        ? 'bg-black/[0.05] dark:bg-white/10 text-[#1d1d1f] dark:text-white border border-black/[0.08] dark:border-white/15'
                        : 'bg-black/[0.03] dark:bg-white/[0.03] text-[#86868b] border border-black/[0.06] dark:border-white/[0.06]'
                    }`}>
                      {isAgil ? 'Ágil' : 'Tradicional'}
                    </span>

                    <span className="text-[11px] font-mono text-[#86868b]">
                      {metodologia.enfoque}
                    </span>
                  </div>

                  {/* Title & Lema */}
                  <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                    {metodologia.nombre}
                  </h3>
                  <p className="text-xs text-[#86868b] italic mt-0.5 line-clamp-1">
                    "{metodologia.lema}"
                  </p>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#86868b] leading-relaxed line-clamp-3">
                    {metodologia.descripcionCorta}
                  </p>

                  {/* Quick Tags */}
                  <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.02] text-[11px] text-[#86868b] font-mono border border-black/[0.06] dark:border-white/[0.06]">
                      {metodologia.frecuenciaEntrega}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.02] text-[11px] text-[#86868b] font-mono border border-black/[0.06] dark:border-white/[0.06]">
                      {metodologia.flexibilidad}
                    </span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  <button
                    onClick={() => onSelectMetodologia(metodologia)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.08] text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] transition-all duration-150"
                  >
                    <span>Detalle de Fases &amp; Roles</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-[#1d1d1f] dark:group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
