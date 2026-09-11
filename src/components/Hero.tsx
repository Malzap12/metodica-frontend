import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { TabModule } from './Navbar';

interface HeroProps {
  onNavigate: (tab: TabModule) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="concepto" className="relative min-h-[calc(85vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-black/[0.02] dark:bg-white/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtle Minimal Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#86868b] mb-6">
          <span>Metódica</span>
        </div>

        {/* Editorial Apple Minimalist Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white leading-[1.1]">
          Cómo se construye
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-b from-[#1d1d1f] via-[#424245] to-[#86868b] dark:from-white dark:via-[#f5f5f7] dark:to-[#86868b]">
            el software moderno.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#86868b] font-normal leading-relaxed max-w-xl mx-auto">
          Una guía visual e interactiva para explorar las diferencias entre planificar cada etapa con rigor o avanzar con entregas continuas y valor ágil.
        </p>

        {/* Minimalist Apple Pill Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('metodologias')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111111] dark:bg-white hover:bg-black dark:hover:bg-[#f2f2f2] text-white dark:text-black font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 active:scale-[0.98]"
          >
            <span>Explorar Metodologías</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('comparativa')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7] font-medium text-xs sm:text-sm transition-all duration-150 active:scale-[0.98]"
          >
            <span>Comparar Modelos</span>
          </button>

          <button
            onClick={() => onNavigate('asistente')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] font-medium text-xs sm:text-sm transition-all duration-150 active:scale-[0.98]"
          >
            <Compass className="w-3.5 h-3.5 text-[#1d1d1f] dark:text-white" />
            <span>¿Cuál elegir?</span>
          </button>
        </div>
      </div>
    </section>
  );
};
