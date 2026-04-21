export interface Estudiante {
    readonly id: string;
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: Date;
    creditosCompletados: number;

}

export interface Producto {
    readonly id: string;
    nombre: string;
    precio: number;
    stock: number;

}

export interface ColumnaConfig<T> {
    key: keyof T;
    label: string;
    formatear?: (valor: T[keyof T]) => string;
    
}