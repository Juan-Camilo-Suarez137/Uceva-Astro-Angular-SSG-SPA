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
 */
export interface IntelProcessor {
  /** Identificador único del procesador */
  id: number;

  /** Nombre comercial del modelo */
  model: string;

  /** Serie a la que pertenece el procesador */
  generation: string;

  /** Cantidad de núcleos físicos */
  cores: number;

  /** Cantidad de hilos de ejecución */
  threads: number;

  /** Frecuencia turbo máxima en GHz */
  maxBoostGHz: number;

  socket: string;

  /** Año de lanzamiento */
  releaseYear: number;

  unlocked: boolean;
}

/**
 * Serie comercial de un procesador Intel.
 *
 * @remarks
 * Se utiliza principalmente para mapear badges de colores en la UI.
 */