/**
 * Interfaz que representa un procesador de escritorio AMD Ryzen.
 *
 * @remarks
 * Cada procesador debe tener un `id` único, el nombre del modelo, la
 * arquitectura (Zen, Zen 2, Zen 3, Zen 4...), núcleos, hilos, frecuencia
 * turbo máxima, socket y año de lanzamiento.
 *
 * @example
 * ```ts
 * const procesador: RyzenProcessor = {
 *   id: 1,
 *   model: 'Ryzen 9 7950X',
 *   architecture: 'Zen 4',
 *   cores: 16,
 *   threads: 32,
 *   maxBoostGHz: 5.7,
 *   socket: 'AM5',
 *   releaseYear: 2022,
 *   hasIntegratedGraphics: false
 * };
 * ```
 */
export interface RyzenProcessor {
  /** Identificador único del procesador */
  id: number;

  /** Nombre comercial del modelo */
  model: string;

  /** Arquitectura del procesador (Zen, Zen 2, Zen 3, Zen 4, etc.) */
  architecture: string;

  /** Cantidad de núcleos físicos */
  cores: number;

  /** Cantidad de hilos de ejecución */
  threads: number;

  /** Frecuencia turbo máxima en GHz */
  maxBoostGHz: number;

  /** Socket de la placa base compatible */
  socket: string;

  /** Año de lanzamiento */
  releaseYear: number;

  /** Indica si el procesador incluye gráficos integrados */
  hasIntegratedGraphics: boolean;
}