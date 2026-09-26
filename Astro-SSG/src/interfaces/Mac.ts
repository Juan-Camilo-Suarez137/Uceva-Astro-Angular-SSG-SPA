/**
 * Interfaz que representa un procesador Apple Silicon (chip Mac).
 *
 * @remarks
 * Cada procesador debe tener un `id` único, el nombre del modelo, la
 * familia de chip (M1, M2, M3, M4...), núcleos de CPU, núcleos de GPU,
 * frecuencia máxima, proceso de fabricación y año de lanzamiento.
 *
 * @example
 * ```ts
 * const procesador: MacProcessor = {
 *   id: 1,
 *   model: 'Apple M3 Pro',
 *   chipFamily: 'M3',
 *   cores: 12,
 *   gpuCores: 18,
 *   maxClockGHz: 4.05,
 *   process: '3nm (N3B)',
 *   releaseYear: 2023,
 *   hasMediaEngine: true
 * };
 * ```
 */
export interface MacProcessor {
  /** Identificador único del procesador */
  id: number;

  /** Nombre comercial del modelo */
  model: string;

  /** Familia del chip (M1, M2, M3, M4, etc.) */
  chipFamily: string;

  /** Cantidad de núcleos de CPU (rendimiento + eficiencia) */
  cores: number;

  /** Cantidad de núcleos de GPU */
  gpuCores: number;

  /** Frecuencia máxima en GHz */
  maxClockGHz: number;

  /** Proceso de fabricación del chip */
  process: string;

  /** Año de lanzamiento */
  releaseYear: number;

  /** Indica si el chip incluye motor de medios dedicado (ProRes) */
  hasMediaEngine: boolean;
}
