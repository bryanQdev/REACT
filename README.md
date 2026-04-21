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
