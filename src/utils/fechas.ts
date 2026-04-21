import { differenceInDays, differenceInYears, format } from 'date-fns';
import { es } from 'date-fns/locale';


/**
 * Calcula la diferencia en dìas entre dos fechas
 * @param fechaInicio - Fecha de inicio
 * @param fechaFin - Fecha de fin
 * @returns Número de dìas de diferencia
*/

export function calcularDiferenciaDias(fechaInicio: Date, fechaFin: Date): number {
    return differenceInDays(fechaFin, fechaInicio);
}

/**
 * Calcula la edad en años desde una fecha de nacimiento
 * @param fechaNacimiento - Fecha de nacimiento
 * @returns Eddad en años
 */
export function calcularEdad(fechaNacimiento: Date): number {
    return differenceInYears(new Date(), fechaNacimiento);
}

/**
 * Formatea una fecha en español
 * @param fecha - Fecha a formatear
 * @returns Fecha formateada (ej: "15 de abril de 2024")
 */

export function formatearFechaES(fecha: Date): string {
    return format(fecha, "dd 'de' MMMM 'de' yyyy", {locale: es });
}

/**
 * Formatea una fecha de forma corta
 * @param fecha - Fecha a formatear
 * @returns Fecha en formato DD/MM/YYYY
 */
export function formatearFechaCorta(fecha: Date): string {
    return format(fecha, 'dd/MM/yyyy');
}