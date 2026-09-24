/**
 * Interfaz que representa un procesador de escritorio Intel.
 *
 * Contiene la información técnica básica necesaria para mostrar un procesador
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada procesador debe tener un `id` único, el nombre del modelo, la serie
 * (`series`) a la que pertenece, núcleos, hilos, frecuencia turbo máxima
 * y año de lanzamiento.
 *
 * @example
 * ```ts
 * const procesador: IntelProcessor = {
 *   id: 1,
 *   model: 'Core i9-14900K',
 *   series: 'Core i9',
 *   cores: 24,
 *   threads: 32,
 *   maxBoostGHz: 6.0,
 *   releaseYear: 2023
 * };
 * ```
 */
export interface IntelProcessor {
  /** Identificador único del procesador */
  id: number;

  /** Nombre comercial del modelo */
  model: string;

  /** Serie a la que pertenece el procesador */
  series: IntelSeries;

  /** Cantidad de núcleos físicos */
  cores: number;

  /** Cantidad de hilos de ejecución */
  threads: number;

  /** Frecuencia turbo máxima en GHz */
  maxBoostGHz: number;

  /** Año de lanzamiento */
  releaseYear: number;
}

/**
 * Serie comercial de un procesador Intel.
 *
 * @remarks
 * Este tipo restringe las series a los valores predefinidos:
 * - 'Core i3'
 * - 'Core i5'
 * - 'Core i7'
 * - 'Core i9'
 * - 'Core Ultra'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const serie: IntelSeries = 'Core i7';
 * ```
 */
export type IntelSeries = 'Core i3' | 'Core i5' | 'Core i7' | 'Core i9' | 'Core Ultra';