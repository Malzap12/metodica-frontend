# Metodologías SDLC — Plataforma Interactiva de Ingeniería de Software

Plataforma frontend de vanguardia construida con **React, TypeScript, Tailwind CSS y Vite**, orientada a la sustentación académica de la **Unidad 4** bajo modalidad Shark Tank.

##  Arquitectura: Single Source of Truth (SSOT)

El Frontend no contiene textos quemados ni lógica de dominio acoplada. Sigue rigurosamente el principio de separación de responsabilidades:
- **Backend First**: Realiza peticiones automáticas hacia `/api/metodologias`, `/api/metodologias/:id` y `/api/equipo`.
- **Resiliencia y Fallback**: Si el servidor está apagado o en desarrollo (hasta el sábado), la UI activa automáticamente un modelo de datos mock de alta fidelidad sin arrojar errores visuales ni romper la interacción.
- **Detección Dinámica**: Incluye un indicador de estado en la barra de navegación que monitorea la latencia y la conectividad del backend en tiempo real.

---



##  Instalación y Ejecución Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

---

##  Endpoints que consume el Frontend

- `GET /api/metodologias`: Lista completa de metodologías (Scrum, Cascada, XP, Kanban, Modelo V).
- `GET /api/metodologias/:id`: Detalle extendido, fases del ciclo de vida y roles.
- `GET /api/comparativa`: Criterios técnicos de comparación entre modelos predictivos y adaptativos.
- `GET /api/equipo`: Créditos dinámicos de los 4 integrantes del equipo.
- `POST /api/recomendar`: Algoritmo de recomendación adaptativa de metodologías según requerimientos del proyecto.
