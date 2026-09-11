import { Metodologia, CriterioComparativa, MiembroEquipo } from '../types';

export const MOCK_METODOLOGIAS: Metodologia[] = [
  {
    id: 'scrum',
    nombre: 'Scrum',
    tipo: 'agil',
    lema: 'Entregas iterativas de alto valor e inspección continua',
    descripcionCorta: 'Marco de trabajo ágil iterativo e incremental basado en sprints de 1 a 4 semanas para resolver problemas complejos adaptativos.',
    descripcionCompleta: 'Scrum es un framework de desarrollo ágil que estructura el trabajo en ciclos de duración fija llamados Sprints. Fomenta la autoorganización del equipo, la mejora continua a través de retrospectivas y la entrega frecuente de incrementos de producto potencialmente desplegables.',
    complejidad: 'Media',
    frecuenciaEntrega: 'Iterativa (1 a 4 semanas)',
    flexibilidad: 'Alta (Adaptativa)',
    enfoque: 'Adaptativo / Empírico',
    fases: [
      { nombre: 'Sprint Planning', descripcion: 'Definición del objetivo del sprint y selección de historias del Product Backlog.' },
      { nombre: 'Daily Scrum', descripcion: 'Sincronización diaria de 15 minutos para inspeccionar el avance hacia la meta.' },
      { nombre: 'Sprint Review', descripcion: 'Demostración del incremento terminado a los stakeholders para recibir feedback directo.' },
      { nombre: 'Sprint Retrospective', descripcion: 'Análisis interno del equipo para identificar mejoras de proceso, personas y herramientas.' }
    ],
    rolesClave: ['Product Owner', 'Scrum Master', 'Development Team'],
    ventajas: [
      'Respuesta ultra rápida ante cambios en los requerimientos del negocio.',
      'Transparencia total mediante ceremonias periódicas y artefactos visibles.',
      'Mitigación temprana de riesgos al validar incrementos funcionales frecuentemente.',
      'Alta motivación y compromiso del equipo autónomo.'
    ],
    desventajas: [
      'Riesgo de desvío de alcance (Scope Creep) si el Product Owner no gestiona bien el backlog.',
      'Requiere alto compromiso y madurez de todos los participantes.',
      'Dificultad de estimación presupuestaria a muy largo plazo.'
    ],
    casosUsoIdeales: 'Proyectos innovadores con requerimientos cambiantes, startups, desarrollo de productos SaaS y aplicaciones web dinámicas.',
    origen: 'Ken Schwaber y Jeff Sutherland (década de 1990)',
    colorHex: '#06b6d4'
  },
  {
    id: 'waterfall',
    nombre: 'Cascada (Waterfall)',
    tipo: 'tradicional',
    lema: 'Secuencia lineal y rigurosa basada en especificación exhaustiva previa',
    descripcionCorta: 'Modelo secuencial clásico donde cada fase de ingeniería debe completarse y validarse formalmente antes de iniciar la siguiente.',
    descripcionCompleta: 'El modelo en Cascada concibe el desarrollo de software como un flujo ordenado y descendente a través de fases discretas: Requisitos, Análisis, Diseño, Implementación, Verificación y Mantenimiento. Pone énfasis estricto en la documentación formal y la trazabilidad antes de escribir código.',
    complejidad: 'Media',
    frecuenciaEntrega: 'Lineal (Al final del proyecto)',
    flexibilidad: 'Rígida',
    enfoque: 'Predictivo',
    fases: [
      { nombre: '1. Ingeniería de Requisitos', descripcion: 'Captura y firma de especificaciones completas (SRS) sin margen de ambigüedad.' },
      { nombre: '2. Diseño del Sistema', descripcion: 'Arquitectura de software, modelos ER de base de datos y diagramas UML de componentes.' },
      { nombre: '3. Implementación / Codificación', descripcion: 'Construcción estricta del código fuente siguiendo al pie de la letra las especificaciones.' },
      { nombre: '4. Verificación y Pruebas', descripcion: 'Pruebas de integración, sistema y aceptación contra los documentos de diseño.' },
      { nombre: '5. Despliegue y Mantenimiento', descripcion: 'Pase a producción y corrección de defectos post-lanzamiento.' }
    ],
    rolesClave: ['Project Manager (PM)', 'Analista de Requisitos', 'Arquitecto de Software', 'Equipo de QA / Testers'],
    ventajas: [
      'Documentación exhaustiva que minimiza la dependencia de personas específicas.',
      'Estructura clara y predecible de hitos, fechas y presupuestos fijos.',
      'Facilidad de auditoría y cumplimiento regulatorio riguroso.'
    ],
    desventajas: [
      'El cliente no ve software funcional hasta etapas muy tardías del ciclo.',
      'Costo exorbitante para corregir errores de requerimientos detectados en fases avanzadas.',
      'Nula tolerancia a cambios dinámicos del mercado una vez iniciado el desarrollo.'
    ],
    casosUsoIdeales: 'Sistemas aeroespaciales, dispositivos médicos críticos, infraestructura bancaria central o licitaciones públicas con pliegos inmutables.',
    origen: 'Winston W. Royce (1970)',
    colorHex: '#64748b'
  },
  {
    id: 'xp',
    nombre: 'Extreme Programming (XP)',
    tipo: 'agil',
    lema: 'Excelencia en ingeniería técnica, refactorización y feedback inmediato',
    descripcionCorta: 'Metodología ágil centrada en las mejores prácticas de programación: TDD, Pair Programming, integración continua y entregas ultra cortas.',
    descripcionCompleta: 'Extreme Programming lleva las prácticas de ingeniería de software a sus extremos lógicos. Si las pruebas son buenas, se prueban constantemente con TDD; si la revisión de código es buena, se programa en pareja (Pair Programming); si la integración es crítica, se integra de forma continua.',
    complejidad: 'Alta',
    frecuenciaEntrega: 'Continua / Semanal',
    flexibilidad: 'Alta (Adaptativa)',
    enfoque: 'Adaptativo / Empírico',
    fases: [
      { nombre: 'Historias de Usuario y Planificación', descripcion: 'Tarjetas de usuarios priorizadas por valor comercial con estimación de esfuerzo técnico.' },
      { nombre: 'Test-Driven Development (TDD)', descripcion: 'Escribir la prueba unitaria antes de escribir una sola línea de código de producción.' },
      { nombre: 'Pair Programming & Refactor', descripcion: 'Dos ingenieros en una misma pantalla mejorando el diseño continuamente.' },
      { nombre: 'Integración Continua (CI)', descripcion: 'Unión y verificación automatizada del código varias veces al día.' }
    ],
    rolesClave: ['Programmer / Pair Partner', 'Customer On-Site', 'Tracker', 'Coach'],
    ventajas: [
      'Tasa de defectos prácticamente nula gracias a TDD y cobertura de pruebas estricta.',
      'Código limpio, legible y modular fácil de mantener a largo plazo.',
      'Satisfacción inmediata del cliente al contar con un representante in situ.'
    ],
    desventajas: [
      'Fuerte resistencia cultural por el costo percibido de dos ingenieros en una sola máquina.',
      'Agotamiento si no se respetan estrictamente las 40 horas semanales que promueve el manifiesto.',
      'Poca documentación formal externa para terceros ajenos al equipo.'
    ],
    casosUsoIdeales: 'Desarrollo de módulos críticos de software donde la fiabilidad, cero bugs y la rapidez de cambio son prioritarios.',
    origen: 'Kent Beck (1996 - Proyecto Chrysler C3)',
    colorHex: '#8b5cf6'
  },
  {
    id: 'kanban',
    nombre: 'Kanban',
    tipo: 'agil',
    lema: 'Visualización del flujo de valor y limitación del trabajo en progreso (WIP)',
    descripcionCorta: 'Método visual de gestión del flujo de trabajo que optimiza la eficiencia operativa, elimina cuellos de botella y entrega valor continuo.',
    descripcionCompleta: 'Derivado del sistema de producción Toyota, Kanban en software promueve la visualización del flujo de trabajo en tableros, limita estrictamente la cantidad de tareas en curso (WIP Limits) y se enfoca en métricas de ciclo de tiempo (Lead Time y Cycle Time) sin imponer sprints fijos.',
    complejidad: 'Baja',
    frecuenciaEntrega: 'Flujo Continuo (Pull System)',
    flexibilidad: 'Alta (Adaptativa)',
    enfoque: 'Adaptativo / Empírico',
    fases: [
      { nombre: 'Visualizar el Trabajo', descripcion: 'Mapeo visual de cada etapa de desarrollo en columnas del tablero.' },
      { nombre: 'Limitar el WIP (Work In Progress)', descripcion: 'Restricción numérica de ítems simultáneos por columna para evitar sobrecarga.' },
      { nombre: 'Gestionar el Flujo', descripcion: 'Monitorización del tiempo de ciclo para detectar cuellos de botella y bloqueos.' },
      { nombre: 'Políticas Explícitas y Mejora', descripcion: 'Criterios claros de definición de "Hecho" (DoD) y optimización colaborativa continua.' }
    ],
    rolesClave: ['Service Delivery Manager', 'Service Request Manager', 'Equipo Multidisciplinario Autónomo'],
    ventajas: [
      'Flexibilidad instantánea para reordenar prioridades en cualquier momento.',
      'Reducción drástica del estrés operativo al eliminar la sobrecarga de tareas concurrentes.',
      'Fácil adopción sin romper estructuras jerárquicas preexistentes.'
    ],
    desventajas: [
      'Puede volverse caótico si el equipo carece de autodisciplina para actualizar el tablero.',
      'No define un horizonte temporal rígido de lanzamiento para planes comerciales cerrados.'
    ],
    casosUsoIdeales: 'Equipos de soporte, mantenimiento continuo, operaciones DevOps, soporte de infraestructura y desarrollo con flujo incesante de tickets.',
    origen: 'David J. Anderson (2010), inspirado en Taiichi Ohno (Toyota)',
    colorHex: '#10b981'
  },
  {
    id: 'modelo-v',
    nombre: 'Modelo en V (V-Model)',
    tipo: 'tradicional',
    lema: 'Correspondencia simétrica y directa entre fases de desarrollo y fases de prueba',
    descripcionCorta: 'Variante rigurosa de cascada donde cada etapa descendente de diseño tiene una fase ascendente correspondiente de aseguramiento y pruebas.',
    descripcionCompleta: 'El Modelo en V enfatiza la verificación y validación en cada nivel. La rama izquierda desciende en especificación (Requisitos -> Arquitectura -> Diseño detallado), mientras que la rama derecha asciende en niveles de testing (Pruebas unitarias -> Integración -> Sistema -> Aceptación).',
    complejidad: 'Alta',
    frecuenciaEntrega: 'Lineal / Por etapas verificadas',
    flexibilidad: 'Rígida',
    enfoque: 'Predictivo',
    fases: [
      { nombre: 'Definición de Requisitos <-> Pruebas de Aceptación', descripcion: 'Los criterios de aceptación del cliente se escriben junto con los requerimientos.' },
      { nombre: 'Diseño del Sistema <-> Pruebas del Sistema', descripcion: 'La arquitectura global define el plan de pruebas integradas de extremo a extremo.' },
      { nombre: 'Diseño Detallado <-> Pruebas de Integración', descripcion: 'Las interfaces de componentes definen los casos de prueba entre módulos.' },
      { nombre: 'Codificación <-> Pruebas Unitarias', descripcion: 'El código fuente se valida inmediatamente contra su especificación de función.' }
    ],
    rolesClave: ['Arquitecto de Solución', 'Ingeniero de Validación y Verificación (V&V)', 'Lead QA Engineer'],
    ventajas: [
      'Garantía extrema de calidad y cobertura de pruebas desde la concepción del proyecto.',
      'Detección temprana de defectos conceptuales antes de llegar a la codificación.',
      'Documentación de pruebas estructurada y estandarizada.'
    ],
    desventajas: [
      'Cero tolerancia al cambio dinámico una vez completada la rama descendente.',
      'Tiempo prolongado antes de contar con un prototipo ejecutable en manos del usuario final.'
    ],
    casosUsoIdeales: 'Sistemas embebidos automotrices (ISO 26262), aviónica civil, dispositivos médicos de soporte vital y plantas nucleares.',
    origen: 'Paul Rook (1986)',
    colorHex: '#38bdf8'
  }
];

export const MOCK_COMPARATIVA: CriterioComparativa[] = [
  {
    id: 'tol-cambio',
    criterio: 'Tolerancia al Cambio',
    descripcion: 'Capacidad de absorber modificaciones en requerimientos durante el ciclo de vida.',
    tradicional: 'Baja y costosa. Requiere un proceso formal de control de cambios (Change Request) y renegociación contractual.',
    agil: 'Bienvenida y adaptativa. Los cambios son vistos como oportunidades competitivas para aportar más valor al cliente.',
    ganadorEnfoque: 'agil'
  },
  {
    id: 'documentacion',
    criterio: 'Documentación vs Software Funcional',
    descripcion: 'Prioridad asignada a la generación de artefactos formales versus entregables operativos.',
    tradicional: 'Exhaustiva y mandatoria previa a la codificación (SRS, diagramas UML, manuales extensos).',
    agil: 'Suficiente y orientada al código. Se prioriza el software funcionando sobre la documentación comprensiva (Manifiesto Ágil).',
    ganadorEnfoque: 'agil'
  },
  {
    id: 'entrega-valor',
    criterio: 'Entrega de Valor al Negocio',
    descripcion: 'Momento y frecuencia en que el cliente recibe software operativo y usable.',
    tradicional: 'Tardía. Todo el valor se entrega al final del ciclo de vida (Big Bang release). Alto riesgo de desfase con el mercado.',
    agil: 'Temprana y continua. Se entregan incrementos de producto potencialmente desplegables cada 1 a 4 semanas.',
    ganadorEnfoque: 'agil'
  },
  {
    id: 'participacion-cliente',
    criterio: 'Participación del Cliente / Stakeholder',
    descripcion: 'Nivel de interacción y feedback del usuario final durante el desarrollo.',
    tradicional: 'Puntual y contractual. Participa al inicio (firma de requisitos) y al final (pruebas de aceptación / UAT).',
    agil: 'Continua y colaborativa. El Product Owner o cliente interactúa diariamente o en cada revisión de sprint.',
    ganadorEnfoque: 'agil'
  },
  {
    id: 'metricas-control',
    criterio: 'Métricas de Control y Éxito',
    descripcion: 'Indicadores utilizados para evaluar el avance y la salud del proyecto.',
    tradicional: 'Cumplimiento del plan base: Diagramas de Gantt, apego estricto a fechas, costes devengados y hitos de entregables.',
    agil: 'Velocidad del equipo, Burn-down charts, Lead/Cycle Time y valor de negocio efectivamente entregado y utilizado.',
    ganadorEnfoque: 'depende'
  },
  {
    id: 'gestion-riesgos',
    criterio: 'Gestión y Mitigación de Riesgos',
    descripcion: 'Estrategia para identificar y neutralizar desviaciones técnicas o de producto.',
    tradicional: 'Análisis de riesgos analítico y preventivo en la fase inicial de planificación mediante matrices formales.',
    agil: 'Descubrimiento empírico continuo. Las hipótesis se prueban directamente con software real en producción o demos.',
    ganadorEnfoque: 'agil'
  }
];

export const MOCK_EQUIPO: MiembroEquipo[] = [
  {
    id: 'erika',
    nombre: 'Erika',
    alias: 'Investigadora Principal',
    rol: 'Líder de Investigación y Arquitectura de Contenidos',
    tituloEspecialidad: 'Content & Research Architect',
    descripcion: 'Responsable de estructurar y profundizar en el marco teórico de las metodologías de desarrollo de software (Unidad 4). Diseña los esquemas y modelos lógicos en formato JSON estructurado, asegurando el cumplimiento de la rúbrica y alimentando la base de datos y la API.',
    responsabilidades: [
      'Investigación rigurosa del marco teórico de la Unidad 4 (tradicionales vs. ágiles).',
      'Estructuración del modelo de datos formal (data.json) para la API.',
      'Elaboración del guion técnico y argumentación conceptual para la sustentación Shark Tank.'
    ],
    tecnologias: ['JSON Schema', 'Research SDLC', 'Technical Writing', 'UML Conceptual'],
    entregable: 'Documento formal de investigación + data.json estructurado para Backend',
    fechaCompromiso: 'Viernes 11:59 PM',
    estado: 'Completado',
    colorAcento: '#ec4899'
  },
  {
    id: 'andrey',
    nombre: 'Andrey',
    alias: 'Lead Backend Engineer',
    rol: 'Ingeniero de Backend y Arquitectura de Datos',
    tituloEspecialidad: 'Backend & API Architect',
    descripcion: 'Encargado del diseño, programación y estabilidad de la lógica del servidor y la capa de datos. Construye la API REST modular, limpia y escalable que expone los endpoints oficiales (/api/metodologias, /api/equipo) con manejo de CORS y documentación técnica.',
    responsabilidades: [
      'Desarrollo de API REST modular y escalable en Spring Boot / Node.',
      'Exposición de endpoints documentados: /api/metodologias y /api/equipo.',
      'Configuración segura de políticas CORS para consumo sin restricciones desde el cliente.',
      'Suministro de la única fuente de la verdad (SSOT) para el Frontend.'
    ],
    tecnologias: ['Spring Boot / Java', 'RESTful APIs', 'CORS Security', 'JSON Architecture'],
    entregable: 'Repositorio del servidor funcional + Endpoints documentados + Mock local',
    fechaCompromiso: 'Sábado 4:00 PM',
    estado: 'En Progreso',
    colorAcento: '#3b82f6'
  },
  {
    id: 'miguel',
    nombre: 'Miguel',
    alias: 'Senior Frontend Developer',
    rol: 'Ingeniero de Frontend y Experiencia de Usuario',
    tituloEspecialidad: 'UI/UX & Frontend Lead (Responsable de Envío)',
    descripcion: 'Líder del diseño e implementación de la interfaz visual moderna, interactiva y responsiva estilo Linear/Vercel. Conecta dinámicamente con la API del Backend garantizando Single Source of Truth, componentes reactivos y la entrega oficial del código ante el docente.',
    responsabilidades: [
      'Construcción de la interfaz interactiva con React, TypeScript, Tailwind CSS y Lucide.',
      'Consumo dinámico de los endpoints del backend con fallback automático y manejo de errores.',
      'Desarrollo del switch interactivo, modales dinámicos y tabla comparativa para Shark Tank.',
      'Responsable operativo de la entrega oficial del Frontend ante el jurado/docente.'
    ],
    tecnologias: ['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'],
    entregable: 'Interfaz UI terminada, responsiva, conectada al Back y lista para pase a producción',
    fechaCompromiso: 'Domingo 2:00 PM',
    estado: 'En Progreso',
    colorAcento: '#06b6d4'
  },
  {
    id: 'sergio',
    nombre: 'Sergio García S.',
    alias: 'DevOps & QA Specialist',
    rol: 'Especialista en QA, DevOps y Despliegue Cloud',
    tituloEspecialidad: 'Cloud, DevOps & Quality Assurance',
    descripcion: 'Encargado del diseño y ejecución de pruebas funcionales para validar tanto los endpoints del backend como la reactividad de la UI. Lidera el despliegue en producción en la nube (Vercel / Render), la verificación de URLs públicas sin errores de CORS y el README técnico.',
    responsabilidades: [
      'Diseño y ejecución de pruebas funcionales y de integración UI/API.',
      'Despliegue automatizado del Frontend en Vercel y Backend en Render / Cloud.',
      'Verificación de comunicación cross-origin sin fallos de CORS en dominios públicos.',
      'Elaboración del README técnico final de arquitectura y despliegue.'
    ],
    tecnologias: ['Vercel', 'Render', 'QA Testing', 'CI/CD Pipeline', 'CORS Troubleshooting'],
    entregable: 'Back y Front desplegados en la nube, URLs públicas operativas y README técnico',
    fechaCompromiso: 'Lunes 9:00 AM',
    estado: 'Planificado',
    colorAcento: '#10b981'
  }
];
