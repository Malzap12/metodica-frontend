import React from 'react';
import { RefreshCw, LayoutDashboard, Boxes, Scale, Users, Compass } from 'lucide-react';

export type TabModule = 'overview' | 'metodologias' | 'comparativa' | 'asistente' | 'equipo';

interface NavbarProps {
  apiOnline: boolean;
  isCheckingApi: boolean;
  onRefreshApi: () => void;
  latencyMs?: number;
  activeTab: TabModule;
  onSelectTab: (tab: TabModule) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  apiOnline,
  isCheckingApi,
  onRefreshApi,
  latencyMs,
  activeTab,
  onSelectTab
}) => {
  const tabs: { id: TabModule; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Inicio', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'metodologias', label: 'Metodologías', icon: <Boxes className="w-4 h-4" /> },
    { id: 'comparativa', label: 'Comparativa', icon: <Scale className="w-4 h-4" /> },
    { id: 'asistente', label: 'Recomendador', icon: <Compass className="w-4 h-4" /> },
    { id: 'equipo', label: 'Equipo', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Top Header: Desktop & Mobile (Apple Frosted Glass Standard) */}
      <header className="sticky top-0 z-40 w-full border-b border-black/[0.06] dark:border-white/[0.08] bg-white/75 dark:bg-black/70 backdrop-blur-2xl transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          
          {/* Logo & Platform Label */}
          <div 
            onClick={() => onSelectTab('overview')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center text-[#1d1d1f] dark:text-white group-hover:border-black/30 dark:group-hover:border-white/30 transition-colors shadow-sm">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#1d1d1f] dark:bg-white group-hover:scale-110 transition-transform"></div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight text-sm sm:text-base">
                Metódica
              </span>
              <span className="text-xs text-[#86868b] font-normal hidden sm:inline-block">
                / Guía de Metodologías
              </span>
            </div>
          </div>

          {/* Desktop Modular Segmented Control (Apple Capsule style) */}
          <nav className="hidden md:flex items-center p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs backdrop-blur-md">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white shadow-sm border border-black/[0.06] dark:border-white/15'
                      : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:bg-black/[0.02] dark:hover:bg-white/[0.03]'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Status Indicator */}
          <div className="flex items-center gap-3">
            <div 
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs border transition-all duration-200 ${
                apiOnline 
                  ? 'bg-emerald-500/[0.08] border-emerald-500/25 text-emerald-600 dark:text-emerald-300' 
                  : 'bg-black/[0.04] dark:bg-[#1c1c1e] border-black/[0.06] dark:border-white/[0.08] text-[#86868b]'
              }`}
              title={apiOnline ? `Servidor en línea (${latencyMs}ms)` : 'Servidor local'}
            >
              <span className="relative flex h-1.5 w-1.5">
                {apiOnline && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500"></span>
                )}
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${apiOnline ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-500'}`}></span>
              </span>
              
              <span className="text-[11px] font-medium tracking-tight">
                {apiOnline ? 'En línea' : 'Local'}
              </span>

              <button
                onClick={onRefreshApi}
                disabled={isCheckingApi}
                className="ml-1 text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors disabled:opacity-40"
                title="Sincronizar API"
              >
                <RefreshCw className={`w-3 h-3 ${isCheckingApi ? 'animate-spin text-[#1d1d1f] dark:text-white' : ''}`} />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Bottom Ergonomic Navigation Bar (Apple Dock style) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 border-t border-black/[0.06] dark:border-white/[0.08] backdrop-blur-2xl px-3 py-2 flex items-center justify-around touch-manipulation">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#1d1d1f] dark:text-white font-medium'
                  : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-black/[0.05] dark:bg-white/10' : ''}`}>
                {tab.icon}
              </div>
              <span className="text-[10px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

