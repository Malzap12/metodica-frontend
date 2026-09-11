import React, { useState, useEffect, useCallback } from 'react';
import { Metodologia, CriterioComparativa, MiembroEquipo } from './types';
import { 
  checkBackendStatus, 
  fetchMetodologias, 
  fetchComparativa, 
  fetchEquipo 
} from './services/api';
import { Navbar, TabModule } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodologiesExplorer } from './components/MethodologiesExplorer';
import { MethodologyModal } from './components/MethodologyModal';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { MethodologyRecommender } from './components/MethodologyRecommender';
import { TeamSection } from './components/TeamSection';

export const App: React.FC = () => {
  const [metodologias, setMetodologias] = useState<Metodologia[]>([]);
  const [comparativa, setComparativa] = useState<CriterioComparativa[]>([]);
  const [equipo, setEquipo] = useState<MiembroEquipo[]>([]);
  const [selectedMetodologia, setSelectedMetodologia] = useState<Metodologia | null>(null);

  // Estados de conexión con el Backend
  const [apiOnline, setApiOnline] = useState<boolean>(false);
  const [latencyMs, setLatencyMs] = useState<number>(0);
  const [isCheckingApi, setIsCheckingApi] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<'backend-api' | 'mock-fallback'>('mock-fallback');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Función para cargar todos los datos respetando SSOT
  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      // 1. Verificar estado de la API
      const health = await checkBackendStatus();
      setApiOnline(health.online);
      setLatencyMs(health.latencyMs);

      // 2. Cargar recursos en paralelo
      const [resMetodologias, resComparativa, resEquipo] = await Promise.all([
        fetchMetodologias(),
        fetchComparativa(),
        fetchEquipo()
      ]);

      setMetodologias(resMetodologias.data);
      setComparativa(resComparativa.data);
      setEquipo(resEquipo.data);
      setDataSource(resMetodologias.source);
    } catch (error) {
      console.error('Error cargando datos de la plataforma:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Carga inicial
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Manejador manual de refresco de API
  const handleRefreshApi = async () => {
    setIsCheckingApi(true);
    await loadData();
    setIsCheckingApi(false);
  };

  const [activeTab, setActiveTab] = useState<TabModule>('overview');

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] flex flex-col selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-black dark:selection:text-white transition-colors duration-200">
      {/* Header Sticky with Modular Tab Switcher */}
      <Navbar
        apiOnline={apiOnline}
        isCheckingApi={isCheckingApi}
        onRefreshApi={handleRefreshApi}
        latencyMs={latencyMs}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Content: Modular Workspace (Responsive Safe Area) */}
      <main className="flex-1 animate-fadeIn pb-24 md:pb-8">
        {activeTab === 'overview' && (
          <Hero onNavigate={(tab) => setActiveTab(tab)} />
        )}
        
        {activeTab === 'metodologias' && (
          <MethodologiesExplorer
            metodologias={metodologias}
            isLoading={isLoading}
            dataSource={dataSource}
            onSelectMetodologia={(m) => setSelectedMetodologia(m)}
            onRetry={loadData}
          />
        )}

        {activeTab === 'comparativa' && (
          <ComparisonMatrix criterios={comparativa} />
        )}

        {activeTab === 'asistente' && (
          <MethodologyRecommender
            metodologias={metodologias}
            onSelectMetodologia={(m) => setSelectedMetodologia(m)}
          />
        )}

        {activeTab === 'equipo' && (
          <TeamSection equipo={equipo} dataSource={dataSource} />
        )}
      </main>

      {/* Modal de Detalle */}
      <MethodologyModal
        metodologia={selectedMetodologia}
        onClose={() => setSelectedMetodologia(null)}
      />
    </div>
  );
};

export default App;
