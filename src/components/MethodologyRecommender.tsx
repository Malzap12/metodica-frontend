import React, { useState } from 'react';
import { ArrowRight, RotateCcw, CheckCircle2, ArrowUpRight, Compass } from 'lucide-react';
import { Metodologia } from '../types';

interface MethodologyRecommenderProps {
  metodologias: Metodologia[];
  onSelectMetodologia: (metodologia: Metodologia) => void;
}

interface Question {
  id: number;
  title: string;
  description: string;
  options: {
    label: string;
    description: string;
    scores: { [key: string]: number };
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: '¿Qué tan claros están los requerimientos de tu proyecto?',
    description: 'La estabilidad del alcance determina si necesitas control estricto o adaptabilidad.',
    options: [
      {
        label: 'Muy cambiantes o por definir',
        description: 'Estamos explorando el producto y aprenderemos con el feedback de los usuarios.',
        scores: { 'scrum': 3, 'xp': 3, 'kanban': 2, 'cascada': 0 }
      },
      {
        label: 'Claros, detallados y no deberían cambiar',
        description: 'Tenemos contratos o regulaciones estrictas donde el alcance debe cumplirse al pie de la letra.',
        scores: { 'cascada': 4, 'espiral': 3, 'scrum': 0, 'xp': 0 }
      },
      {
        label: 'Tareas y solicitudes continuas',
        description: 'Soporte, mantenimiento o mejoras continuas con prioridades que cambian a diario.',
        scores: { 'kanban': 4, 'scrum': 2, 'cascada': 0 }
      }
    ]
  },
  {
    id: 2,
    title: '¿Cómo es el tamaño y dinámica de tu equipo?',
    description: 'El tamaño influye en la velocidad de comunicación y la formalidad de la gestión.',
    options: [
      {
        label: 'Equipo pequeño (3 a 9 personas)',
        description: 'Multidisciplinario, con alta autonomía y comunicación directa diaria.',
        scores: { 'scrum': 3, 'kanban': 3, 'xp': 2, 'cascada': 1 }
      },
      {
        label: 'Parejas de desarrolladores enfocados en código',
        description: 'Priorizamos calidad extrema, pruebas automatizadas (TDD) y programación en pares.',
        scores: { 'xp': 4, 'scrum': 2, 'kanban': 1, 'cascada': 0 }
      },
      {
        label: 'Equipo grande o estructurado en departamentos',
        description: 'Roles especializados (analistas, diseñadores, devs, testers) trabajando en fases separadas.',
        scores: { 'cascada': 4, 'espiral': 3, 'scrum': 1 }
      }
    ]
  },
  {
    id: 3,
    title: '¿Con qué frecuencia necesitas entregar resultados al usuario?',
    description: 'El ritmo de entrega define la necesidad de iteraciones cortas o flujo continuo.',
    options: [
      {
        label: 'En ciclos fijos (cada 1 a 2 semanas)',
        description: 'Queremos presentar avances funcionales medibles al cierre de cada sprint.',
        scores: { 'scrum': 4, 'xp': 3, 'kanban': 1, 'cascada': 0 }
      },
      {
        label: 'Flujo continuo según se terminen tareas',
        description: 'Sin sprints cerrados; publicamos inmediatamente cada funcionalidad cuando esté lista.',
        scores: { 'kanban': 4, 'xp': 2, 'scrum': 1, 'cascada': 0 }
      },
      {
        label: 'Una única entrega final o por grandes fases',
        description: 'El cliente prefiere recibir el producto completo verificado tras meses de desarrollo.',
        scores: { 'cascada': 4, 'espiral': 2, 'scrum': 0, 'kanban': 0 }
      }
    ]
  },
  {
    id: 4,
    title: '¿Cuál es el nivel de involucramiento de tu cliente o usuario?',
    description: 'La cercanía del cliente es el motor principal de los enfoques ágiles.',
    options: [
      {
        label: 'Constante y participativo',
        description: 'Disponible semanalmente para probar versiones y priorizar el backlog.',
        scores: { 'scrum': 4, 'xp': 3, 'kanban': 3, 'cascada': 0 }
      },
      {
        label: 'En el día a día directamente con el equipo',
        description: 'El cliente actúa como un miembro más definiendo pruebas y criterios en tiempo real.',
        scores: { 'xp': 4, 'scrum': 3, 'kanban': 2, 'cascada': 0 }
      },
      {
        label: 'Solo en acuerdos iniciales y entrega final',
        description: 'Firma de requerimientos al inicio y recepción formal al concluir el cronograma.',
        scores: { 'cascada': 4, 'espiral': 3, 'scrum': 0, 'xp': 0 }
      }
    ]
  },
  {
    id: 5,
    title: '¿Qué tan crítico es el impacto de un fallo en el sistema?',
    description: 'La gestión de riesgos y la rigurosidad técnica dependen de lo que está en juego.',
    options: [
      {
        label: 'Crítico (salud, finanzas, infraestructura o vidas humanas)',
        description: 'Se requiere análisis preventivo exhaustivo de riesgos antes de cada paso.',
        scores: { 'espiral': 4, 'cascada': 3, 'scrum': 0, 'kanban': 0 }
      },
      {
        label: 'Moderado o enfocado en producto comercial',
        description: 'Equilibrio entre velocidad de salida al mercado y estabilidad técnica controlada.',
        scores: { 'scrum': 4, 'kanban': 3, 'xp': 2, 'cascada': 1 }
      },
      {
        label: 'Bajo o enfocado en experimentación rápida',
        description: 'Priorizamos aprender rápido del usuario y toleramos cambios inmediatos en el código.',
        scores: { 'xp': 4, 'scrum': 3, 'kanban': 3, 'cascada': 0 }
      }
    ]
  }
];

export const MethodologyRecommender: React.FC<MethodologyRecommenderProps> = ({
  metodologias,
  onSelectMetodologia
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [questionId: number]: number }>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = { ...answers, [currentStep]: optionIndex };
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calcular puntajes
  const computeResults = () => {
    const scores: { [key: string]: number } = {
      scrum: 0,
      kanban: 0,
      xp: 0,
      cascada: 0,
      espiral: 0
    };

    Object.entries(answers).forEach(([qIdx, optIdx]) => {
      const q = QUESTIONS[Number(qIdx)];
      if (q && q.options[optIdx]) {
        const optionScores = q.options[optIdx].scores;
        Object.entries(optionScores).forEach(([key, val]) => {
          scores[key] = (scores[key] || 0) + val;
        });
      }
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const maxScore = Math.max(...sorted.map(s => s[1]), 1);

    return sorted.map(([key, rawScore]) => {
      const match = metodologias.find(m => m.id.toLowerCase().includes(key) || m.nombre.toLowerCase().includes(key));
      const percentage = Math.min(Math.round((rawScore / maxScore) * 96), 98);
      return {
        key,
        rawScore,
        percentage: Math.max(percentage, 55),
        metodologia: match
      };
    }).filter(r => r.metodologia !== undefined);
  };

  const results = isCompleted ? computeResults() : [];
  const bestMatch = results[0];
  const runnersUp = results.slice(1, 3);

  const currentQ = QUESTIONS[currentStep];

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#1d1d1f] dark:text-white mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Asistente de Decisión</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
          ¿Indeciso sobre qué metodología usar?
        </h2>
        <p className="text-[#86868b] text-sm sm:text-base mt-2">
          Responde 5 preguntas breves sobre tu equipo y proyecto. El sistema calculará la metodología con mayor compatibilidad para ti.
        </p>
      </div>

      {!isCompleted ? (
        /* Quiz Card */
        <div className="linear-card p-6 sm:p-10 rounded-3xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="flex items-center justify-between text-xs text-[#86868b] mb-4 font-mono">
            <span>Pregunta {currentStep + 1} de {QUESTIONS.length}</span>
            <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
          </div>
          <div className="w-full h-1.5 bg-black/[0.05] dark:bg-white/[0.06] rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-[#111111] dark:bg-white transition-all duration-300 rounded-full"
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-white tracking-tight mb-2">
            {currentQ.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#86868b] mb-8">
            {currentQ.description}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className="w-full p-4 sm:p-5 rounded-2xl text-left border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] hover:border-black/20 dark:hover:border-white/20 transition-all duration-150 group flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-semibold text-[#1d1d1f] dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                    {option.label}
                  </h4>
                  <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                    {option.description}
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full border border-black/[0.1] dark:border-white/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-black/40 dark:group-hover:border-white/40 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#86868b] group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
              </button>
            ))}
          </div>

          {/* Back Step */}
          {currentStep > 0 && (
            <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex justify-start">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
              >
                ← Pregunta anterior
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-fadeIn">
          {bestMatch && bestMatch.metodologia && (
            <div className="linear-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-black/[0.1] dark:border-white/[0.15] shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#1d1d1f] dark:text-white">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tu Recomendación Principal</span>
                </div>
                <div className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#111111] dark:bg-white text-white dark:text-black">
                  {bestMatch.percentage}% de Compatibilidad
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                {bestMatch.metodologia.nombre}
              </h3>
              <p className="text-sm italic text-[#86868b] dark:text-[#a1a1a6] mt-0.5">
                "{bestMatch.metodologia.lema}"
              </p>
              <p className="mt-4 text-xs sm:text-sm text-[#86868b] leading-relaxed">
                {bestMatch.metodologia.descripcionCompleta || bestMatch.metodologia.descripcionCorta}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectMetodologia(bestMatch.metodologia!)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111] dark:bg-white hover:bg-black dark:hover:bg-[#f2f2f2] text-white dark:text-black font-medium text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Ver Fases, Roles y Guía Completa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.03] dark:bg-white/[0.04] text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir Test</span>
                </button>
              </div>
            </div>
          )}

          {/* Runners Up Alternatives */}
          {runnersUp.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#86868b] mb-3 px-1">
                Otras Alternativas Viables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {runnersUp.map((alt) => {
                  if (!alt.metodologia) return null;
                  return (
                    <div
                      key={alt.key}
                      onClick={() => onSelectMetodologia(alt.metodologia!)}
                      className="linear-card p-5 rounded-2xl flex flex-col justify-between cursor-pointer group hover:border-black/20 dark:hover:border-white/20 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-semibold text-[#1d1d1f] dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                            {alt.metodologia.nombre}
                          </span>
                          <span className="font-mono text-[#1d1d1f] dark:text-white">
                            {alt.percentage}% Match
                          </span>
                        </div>
                        <p className="text-xs text-[#86868b] line-clamp-2">
                          {alt.metodologia.descripcionCorta}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-[#1d1d1f] dark:text-white">
                        <span>Explorar detalles</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
