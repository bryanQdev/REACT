import { useState } from 'react';
import { DataTable } from './components/DataTable';
import type { Estudiante, Producto } from './types';
import { formatearFechaCorta } from './utils/fechas';

const estudiantesIniciales: Estudiante[] = [
    {
        id: "EST-001",
        nombre: "Bryan",
        apellido: "Quispe",
        email: "bryan123@gmail.com",
        fechaNacimiento: new Date("1998-10-26"),
        creditosCompletados: 120
    },
    {
        id: "EST-002",
        nombre: "Ana",
        apellido: "García",
        email: "ana@gmail.com",
        fechaNacimiento: new Date("2000-05-15"),
        creditosCompletados: 80
    },
    {
        id: "EST-003",
        nombre: "Luis",
        apellido: "Martínez",
        email: "luis@gmail.com",
        fechaNacimiento: new Date("1999-03-22"),
        creditosCompletados: 60
    }
];

const productosIniciales: Producto[] = [
    { id: "PROD-001", nombre: "Laptop", precio: 999, stock: 5 },
    { id: "PROD-002", nombre: "Mouse", precio: 25, stock: 50 },
    { id: "PROD-003", nombre: "Teclado", precio: 45, stock: 30 }
];

function App() {
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesIniciales);
    const [productos, setProductos] = useState<Producto[]>(productosIniciales);

    function handleEditarEstudiante(editado: Estudiante) {
        setEstudiantes(prev =>
            prev.map(e => e.id === editado.id ? editado : e)
        );
    }

    function handleEditarProducto(editado: Producto) {
        setProductos(prev =>
            prev.map(p => p.id === editado.id ? editado : p)
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
                DataTable genérico con TypeScript
            </h1>

            <div className="max-w-5xl mx-auto space-y-10">
                
                {/* ESTUDIANTES */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Estudiantes
                    </h2>

                    <DataTable<Estudiante>
                        datos={estudiantes}
                        columnas={[
                            { key: "nombre", label: "Nombre" },
                            { key: "apellido", label: "Apellido" },
                            { key: "email", label: "Email" },
                            {
                                key: "fechaNacimiento",
                                label: "Fecha Nacimiento",
                                formatear: (valor) =>
                                    formatearFechaCorta(valor as Date)
                            },
                            {
                                key: "creditosCompletados",
                                label: "Créditos"
                            }
                        ]}
                        onEditar={handleEditarEstudiante}
                    />
                </section>

                {/* PRODUCTOS */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Productos
                    </h2>

                    <DataTable<Producto>
                        datos={productos}
                        columnas={[
                            { key: "nombre", label: "Nombre" },
                            { key: "precio", label: "Precio" },
                            { key: "stock", label: "Stock" }
                        ]}
                        onEditar={handleEditarProducto}
                    />
                </section>

            </div>
        </div>
    );
}

export default App;