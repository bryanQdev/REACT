# 🚀 React + TypeScript Advanced Project

## 📌 Descripción

Este proyecto es una aplicación frontend desarrollada con **React + TypeScript + Vite**, enfocada en la creación de componentes genéricos, tipado estricto y arquitectura escalable.

El objetivo principal es demostrar el uso avanzado de TypeScript en React mediante:
- Componentes reutilizables
- Genéricos
- Tipos de utilidad
- Manejo seguro de estados
- Integración de librerías externas con tipado

---

## 🧠 Funcionalidades principales

### 📊 DataTable genérico
Se ha implementado un componente `DataTable<T>` completamente reutilizable que permite renderizar cualquier tipo de datos de forma tipada.

Características:
- Tipado genérico (`<T>`)
- Columnas dinámicas basadas en `keyof T`
- Soporte para edición de filas
- Validación estricta en tiempo de compilación

---

### ✏️ Sistema de edición de datos
- Uso de `Partial<T>` para edición progresiva
- Estado seguro sin necesidad de objetos completos
- Validación de cambios en tiempo real

---

### 📅 Utilidades de fechas
- Uso de `date-fns` para manipulación de fechas
- Funciones tipadas para formateo y cálculos
- Validación estricta de tipos (`Date`)

---

### 🧱 Arquitectura del proyecto

Estructura del proyecto:
src/
├── components/ # Componentes reutilizables (DataTable, etc.)
├── pages/ # Páginas principales
├── hooks/ # Custom hooks
├── api/ # Cliente de API
├── types/ # Tipos globales TypeScript
├── utils/ # Funciones auxiliares
├── context/ # Estado global (Context API)



---

## ⚙️ Tecnologías utilizadas

- React 18
- TypeScript (strict mode)
- Vite
- React Router DOM
- date-fns
- Tailwind CSS

---

## 🚀 Instalación

Clonar el repositorio:

---
bash
git clone https://github.com/bryanQdev/react.git
cd react



Instalar dependencias:

npm install
▶️ Ejecución en desarrollo
npm run dev

---
## 🧪 Calidad del código

El proyecto utiliza TypeScript en modo estricto:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Además, se aplican buenas prácticas como:

- Tipado fuerte en props
- Evitación de `any`
- Uso de `keyof`, `Partial<T>`, tipos genéricos
- Validación en tiempo de compilación

---

## 🧠 Conceptos aplicados

Este proyecto demuestra conocimientos en:

- Programación genérica (`<T>`)
- Uniones de tipos
- Tipos de utilidad (`Partial`, `Readonly`)
- Inferencia de tipos
- Tipado de componentes en React
- Arquitectura frontend escalable
- Integración de librerías tipadas

---

## 📌 Objetivo académico

Este proyecto forma parte de la **Práctica 4 de TypeScript + React**, cuyo objetivo es consolidar:

- Tipado estricto en aplicaciones reales  
- Componentización avanzada  
- Buenas prácticas de arquitectura frontend  
- Uso profesional de TypeScript en React
