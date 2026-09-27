import { MacProcessor } from '../interfaces/mac.interface';

/**
 * Listado de procesadores Apple Silicon (Mac).
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {MacProcessor[]}
 */

export const MAC_PROCESSORS: MacProcessor[] = [
  {
    id: 1,
    model: 'Apple M1',
    chipFamily: 'M1',
    cores: 8,
    gpuCores: 8,
    maxClockGHz: 3.2,
    process: '5nm (N5)',
    releaseYear: 2020,
    hasMediaEngine: false
  },
  {
    id: 2,
    model: 'Apple M1 Pro',
    chipFamily: 'M1',
    cores: 10,
    gpuCores: 16,
    maxClockGHz: 3.2,
    process: '5nm (N5)',
    releaseYear: 2021,
    hasMediaEngine: true
  },
  {
    id: 3,
    model: 'Apple M1 Max',
    chipFamily: 'M1',
    cores: 10,
    gpuCores: 32,
    maxClockGHz: 3.2,
    process: '5nm (N5)',
    releaseYear: 2021,
    hasMediaEngine: true
  },
  {
    id: 4,
    model: 'Apple M1 Ultra',
    chipFamily: 'M1',
    cores: 20,
    gpuCores: 64,
    maxClockGHz: 3.2,
    process: '5nm (N5)',
    releaseYear: 2022,
    hasMediaEngine: true
  },
  {
    id: 5,
    model: 'Apple M2',
    chipFamily: 'M2',
    cores: 8,
    gpuCores: 10,
    maxClockGHz: 3.5,
    process: '5nm (N5P)',
    releaseYear: 2022,
    hasMediaEngine: false
  },
  {
    id: 6,
    model: 'Apple M2 Pro',
    chipFamily: 'M2',
    cores: 12,
    gpuCores: 19,
    maxClockGHz: 3.5,
    process: '5nm (N5P)',
    releaseYear: 2023,
    hasMediaEngine: true
  },
  {
    id: 7,
    model: 'Apple M2 Max',
    chipFamily: 'M2',
    cores: 12,
    gpuCores: 38,
    maxClockGHz: 3.5,
    process: '5nm (N5P)',
    releaseYear: 2023,
    hasMediaEngine: true
  },
  {
    id: 8,
    model: 'Apple M3',
    chipFamily: 'M3',
    cores: 8,
    gpuCores: 10,
    maxClockGHz: 4.05,
    process: '3nm (N3B)',
    releaseYear: 2023,
    hasMediaEngine: false
  },
  {
    id: 9,
    model: 'Apple M3 Pro',
    chipFamily: 'M3',
    cores: 12,
    gpuCores: 18,
    maxClockGHz: 4.05,
    process: '3nm (N3B)',
    releaseYear: 2023,
    hasMediaEngine: true
  },
  {
    id: 10,
    model: 'Apple M4',
    chipFamily: 'M4',
    cores: 10,
    gpuCores: 10,
    maxClockGHz: 4.4,
    process: '3nm (N3E)',
    releaseYear: 2024,
    hasMediaEngine: true
  }
];
