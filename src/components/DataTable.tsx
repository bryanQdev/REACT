import { useState } from 'react';
import type { ColumnaConfig } from '../types';

interface DataTableProps<T extends { id: string }> {
    datos: T[];
    columnas: ColumnaConfig<T>[];
    onEditar?: (item: T) => void;
}

export function DataTable<T extends { id: string }>({
    datos,
    columnas,
    onEditar
}: DataTableProps<T>) {
    const [editandoId, setEditandoId] = useState<string | null>(null);
    const [cambios, setCambios] = useState<Partial<T>>({});

    function iniciarEdicion(item: T) {
        setEditandoId(item.id);
        setCambios(item);
    }

    function guardarEdicion(item: T) {
        const itemEditado = { ...item, ...cambios } as T;
        onEditar?.(itemEditado);
        setEditandoId(null);
        setCambios({});
    }

    function cancelarEdicion() {
        setEditandoId(null);
        setCambios({});
    }

    function handleCambio(col: ColumnaConfig<T>, valor: string, item: T) {
        let valorTipado: any;
        const valorOriginal = item[col.key];

        // Detectar el tipo del valor original y convertir apropiadamente
        if (typeof valorOriginal === 'number') {
            valorTipado = Number(valor);
        } else if (valorOriginal instanceof Date) {
            // Convertir string a Date
            valorTipado = new Date(valor);
        } else if (typeof valorOriginal === 'boolean') {
            valorTipado = valor === 'true';
        } else {
            valorTipado = valor;
        }
        
        setCambios({
            ...cambios,
            [col.key]: valorTipado as T[typeof col.key]
        });
    }

    function renderInput(col: ColumnaConfig<T>, item: T) {
        const valor = cambios[col.key];
        const valorOriginal = item[col.key];

        // Si es una fecha, usar input tipo date
        if (valorOriginal instanceof Date) {
            const fechaString = valor instanceof Date 
                ? valor.toISOString().split('T')[0]
                : '';
            
            return (
                <input
                    type="date"
                    className="border border-indigo-400 rounded px-2 py-1 text-sm w-full"
                    value={fechaString}
                    onChange={e => handleCambio(col, e.target.value, item)}
                />
            );
        }

        // Si es un número, usar input tipo number
        if (typeof valorOriginal === 'number') {
            return (
                <input
                    type="number"
                    className="border border-indigo-400 rounded px-2 py-1 text-sm w-full"
                    value={Number(valor ?? "")}
                    onChange={e => handleCambio(col, e.target.value, item)}
                />
            );
        }

        // Si es boolean, usar checkbox
        if (typeof valorOriginal === 'boolean') {
            return (
                <input
                    type="checkbox"
                    checked={Boolean(valor)}
                    onChange={e => handleCambio(col, String(e.target.checked), item)}
                />
            );
        }

        // Por defecto, input de texto
        return (
            <input
                type="text"
                className="border border-indigo-400 rounded px-2 py-1 text-sm w-full"
                value={String(valor ?? "")}
                onChange={e => handleCambio(col, e.target.value, item)}
            />
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow rounded-lg">
                <thead>
                    <tr className="bg-indigo-600 text-white">
                        {columnas.map(col => (
                            <th key={String(col.key)} className="px-4 py-3 text-left text-sm font-semibold">
                                {col.label}
                            </th>
                        ))}
                        <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(item => (
                        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                            {columnas.map(col => (
                                <td key={String(col.key)} className="px-4 py-3 text-sm text-gray-700">
                                    {editandoId === item.id ? (
                                        renderInput(col, item)
                                    ) : (
                                        // 🔥 ESTO ES LO QUE CHATGPT DIJO QUE FALTABA
                                        col.formatear 
                                            ? col.formatear(item[col.key])
                                            : String(item[col.key])
                                    )}
                                </td>
                            ))}
                            <td className="px-4 py-3 text-sm flex gap-2">
                                {editandoId === item.id ? (
                                    <>
                                        <button
                                            onClick={() => guardarEdicion(item)}
                                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-xs"
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            onClick={cancelarEdicion}
                                            className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-xs"
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => iniciarEdicion(item)}
                                        className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-xs"
                                    >
                                        Editar
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}