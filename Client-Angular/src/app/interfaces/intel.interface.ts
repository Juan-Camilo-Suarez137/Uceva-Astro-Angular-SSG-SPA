/**
 * Interfaz que representa un procesador de escritorio Intel.
 *
 * Contiene la información técnica básica necesaria para mostrar un procesador
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada procesador debe tener un `id` único, el nombre del modelo, la
 * generación, núcleos, hilos, frecuencia turbo máxima, socket y año de
 * lanzamiento.
 *
 * @example
 * ```ts
 * const procesador: IntelProcessor = {
 *   id: 1,
 *   model: 'Core i9-14900K',
 *   generation: '14.ª gen',
 *   cores: 24,
 *   threads: 32,
 *   maxBoostGHz: 6.0,
 *   socket: 'LGA1700',
 *   releaseYear: 2023,
 *   unlocked: true
 * };
 * ```
 */
export interface IntelProcessor {
  /** Identificador único del procesador */
  id: number;

  /** Nombre comercial del modelo */
  model: string;

  /** Generación o serie de arquitectura del procesador */
  generation: string;

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

  /** Indica si el multiplicador está desbloqueado */
  unlocked: boolean;
}
