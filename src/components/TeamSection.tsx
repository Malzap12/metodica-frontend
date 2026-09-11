import React from 'react';
import { Users, ShieldCheck, Code, Server, BookOpen } from 'lucide-react';
import { MiembroEquipo } from '../types';

interface TeamSectionProps {
  equipo: MiembroEquipo[];
  dataSource: 'backend-api' | 'mock-fallback';
}

export const TeamSection: React.FC<TeamSectionProps> = ({ equipo, dataSource }) => {
  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0: return <BookOpen className="w-5 h-5 text-[#86868b] dark:text-[#a1a1a6]" />;
      case 1: return <Server className="w-5 h-5 text-[#86868b] dark:text-[#a1a1a6]" />;
      case 2: return <Code className="w-5 h-5 text-[#86868b] dark:text-[#a1a1a6]" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-[#86868b] dark:text-[#a1a1a6]" />;
      default: return <Users className="w-5 h-5 text-[#86868b] dark:text-[#a1a1a6]" />;
    }
  };

  return (
    <section id="equipo" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/[0.06] dark:border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#1d1d1f] dark:text-white mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Estructura de Ingeniería &amp; Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
            Panel de Roles de Ingeniería
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base mt-2 max-w-2xl">
            Especialización modular bajo un pipeline continuo de entrega: dominio conceptual, arquitectura backend REST, experiencia frontend reactiva y gobernanza cloud.
          </p>
        </div>

        {/* Data Source Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto text-xs">
          <span className="text-[#86868b]">Endpoint:</span>
          <span className="px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-[#1d1d1f] dark:text-white font-mono text-[11px]">
            /api/equipo {dataSource === 'backend-api' ? '(Live)' : '(Mock)'}
          </span>
        </div>
      </div>

      {/* Grid of 4 Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {equipo.map((miembro, index) => {
          return (
            <div
              key={miembro.id}
              className="linear-card p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Avatar & Role Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 bg-black/[0.03] dark:bg-white/[0.04] border-black/[0.08] dark:border-white/[0.1]"
                  >
                    {getRoleIcon(index)}
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.02] text-[#86868b] border border-black/[0.06] dark:border-white/[0.06]">
                    {miembro.alias}
                  </span>
                </div>

                {/* Name & Official Title */}
                <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                  {miembro.nombre}
                </h3>
                <h4 className="text-xs font-medium text-[#86868b] dark:text-[#a1a1a6] mt-0.5 leading-snug">
                  {miembro.rol}
                </h4>

                {/* Description */}
                <p className="mt-3 text-xs text-[#86868b] leading-relaxed line-clamp-4">
                  {miembro.descripcion}
                </p>

                {/* Responsibilities list */}
                <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/5">
                  <span className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider block mb-2">
                    Responsabilidades Clave:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#1d1d1f] dark:text-slate-300">
                    {miembro.responsabilidades.slice(0, 2).map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-[#1d1d1f] dark:text-white mt-0.5 text-xs">›</span>
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech tags */}
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/5 flex flex-wrap gap-1">
                {miembro.tecnologias.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-black/[0.04] dark:bg-slate-900 text-[#86868b] border border-black/[0.06] dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
