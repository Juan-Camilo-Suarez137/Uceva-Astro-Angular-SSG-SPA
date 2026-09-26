import { RyzenProcessor } from '../interfaces/ryzen.interface';

/**
 * Listado de procesadores AMD Ryzen.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {RyzenProcessor[]}
 */

export const RYZEN_PROCESSORS: RyzenProcessor[] = [
  {
    id: 1,
    model: 'Ryzen 5 5600X',
    architecture: 'Zen 3',
    cores: 6,
    threads: 12,
    maxBoostGHz: 4.6,
    socket: 'AM4',
    releaseYear: 2020,
    hasIntegratedGraphics: false
  },
  {
    id: 2,
    model: 'Ryzen 7 5800X3D',
    architecture: 'Zen 3',
    cores: 8,
    threads: 16,
    maxBoostGHz: 4.5,
    socket: 'AM4',
    releaseYear: 2022,
    hasIntegratedGraphics: false
  },
  {
    id: 3,
    model: 'Ryzen 9 5950X',
    architecture: 'Zen 3',
    cores: 16,
    threads: 32,
    maxBoostGHz: 4.9,
    socket: 'AM4',
    releaseYear: 2020,
    hasIntegratedGraphics: false
  },
  {
    id: 4,
    model: 'Ryzen 5 7600X',
    architecture: 'Zen 4',
    cores: 6,
    threads: 12,
    maxBoostGHz: 5.3,
    socket: 'AM5',
    releaseYear: 2022,
    hasIntegratedGraphics: true
  },
  {
    id: 5,
    model: 'Ryzen 7 7700X',
    architecture: 'Zen 4',
    cores: 8,
    threads: 16,
    maxBoostGHz: 5.4,
    socket: 'AM5',
    releaseYear: 2022,
    hasIntegratedGraphics: true
  },
  {
    id: 6,
    model: 'Ryzen 9 7900X',
    architecture: 'Zen 4',
    cores: 12,
    threads: 24,
    maxBoostGHz: 5.6,
    socket: 'AM5',
    releaseYear: 2022,
    hasIntegratedGraphics: true
  },
  {
    id: 7,
    model: 'Ryzen 9 7950X',
    architecture: 'Zen 4',
    cores: 16,
    threads: 32,
    maxBoostGHz: 5.7,
    socket: 'AM5',
    releaseYear: 2022,
    hasIntegratedGraphics: true
  },
  {
    id: 8,
    model: 'Ryzen 9 7950X3D',
    architecture: 'Zen 4',
    cores: 16,
    threads: 32,
    maxBoostGHz: 5.7,
    socket: 'AM5',
    releaseYear: 2023,
    hasIntegratedGraphics: true
  },
  {
    id: 9,
    model: 'Ryzen 3 4100',
    architecture: 'Zen 2',
    cores: 4,
    threads: 8,
    maxBoostGHz: 4.0,
    socket: 'AM4',
    releaseYear: 2021,
    hasIntegratedGraphics: false
  },
  {
    id: 10,
    model: 'Ryzen 9 9950X',
    architecture: 'Zen 5',
    cores: 16,
    threads: 32,
    maxBoostGHz: 5.7,
    socket: 'AM5',
    releaseYear: 2024,
    hasIntegratedGraphics: true
  }
];