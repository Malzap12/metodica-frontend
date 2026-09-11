import React, { useState } from 'react';
import { GitCompare, Shield, Zap, HelpCircle } from 'lucide-react';
import { CriterioComparativa } from '../types';

interface ComparisonMatrixProps {
  criterios: CriterioComparativa[];
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ criterios }) => {
  const [hoveredCriterio, setHoveredCriterio] = useState<string | null>(null);

  return (
    <section id="comparativa" className="py-20 border-t border-black/[0.06] dark:border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#1d1d1f] dark:text-white mb-3">
            <GitCompare className="w-3.5 h-3.5" />
            <span>Análisis Crítico Comparativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
            Matriz Tradicional vs. Ágil
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base mt-2">
            No existe una metodología universalmente superior; la elección óptima depende de la certidumbre de requerimientos, criticidad técnica y tolerancia al cambio.
          </p>
        </div>

        {/* Responsive Comparison Table Container (Apple Card Style) */}
        <div className="rounded-2xl linear-card overflow-hidden">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/[0.06] dark:border-white/[0.06] text-xs font-medium text-[#86868b] p-4 sm:p-5">
            <div className="md:col-span-4 font-semibold text-[#1d1d1f] dark:text-slate-200 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#86868b]" />
              <span>Dimensión / Criterio Técnico</span>
            </div>
            <div className="hidden md:flex md:col-span-4 items-center gap-2 text-[#86868b]">
              <Shield className="w-4 h-4 text-[#86868b]" />
              <span>Enfoque Predictivo (Tradicional)</span>
            </div>
            <div className="hidden md:flex md:col-span-4 items-center gap-2 text-[#1d1d1f] dark:text-white">
              <Zap className="w-4 h-4 text-[#1d1d1f] dark:text-white" />
              <span>Enfoque Adaptativo (Ágil)</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-black/[0.06] dark:divide-white/5">
            {criterios.map((criterio) => {
              const isHovered = hoveredCriterio === criterio.id;
              return (
                <div
                  key={criterio.id}
                  onMouseEnter={() => setHoveredCriterio(criterio.id)}
                  onMouseLeave={() => setHoveredCriterio(null)}
                  className={`grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 transition-colors ${
                    isHovered ? 'bg-black/[0.02] dark:bg-white/[0.02]' : 'bg-transparent'
                  }`}
                >
                  {/* Criterio Column */}
                  <div className="md:col-span-4 pr-4 mb-3 md:mb-0">
                    <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f] dark:bg-white"></span>
                      {criterio.criterio}
                    </h4>
                    <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                      {criterio.descripcion}
                    </p>
                  </div>

                  {/* Tradicional Column */}
                  <div className="md:col-span-4 pr-4 mb-3 md:mb-0 p-3 md:p-0 rounded-xl bg-black/[0.03] dark:bg-slate-900/40 md:bg-transparent">
                    <span className="md:hidden text-[10px] font-mono uppercase text-[#86868b] block mb-1">
                      Tradicional:
                    </span>
                    <p className="text-xs sm:text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
                      {criterio.tradicional}
                    </p>
                  </div>

                  {/* Ágil Column */}
                  <div className="md:col-span-4 p-3 md:p-0 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] md:bg-transparent border border-black/[0.06] dark:border-white/[0.08] md:border-none">
                    <span className="md:hidden text-[10px] font-mono uppercase text-[#1d1d1f] dark:text-white block mb-1">
                      Ágil:
                    </span>
                    <p className="text-xs sm:text-sm text-[#1d1d1f] dark:text-slate-200 leading-relaxed font-medium">
                      {criterio.agil}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
