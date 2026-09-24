import type { IntelProcessor } from '@interfaces/Intel';

/** Procesadores Intel mostrados en la vista */
export const INTEL_PROCESSORS: IntelProcessor[] = [
  { id: 1, model: 'Core i9-14900K', generation: '14.ª gen', cores: 24, threads: 32, maxBoostGHz: 6.0, socket: 'LGA1700', releaseYear: 2023, unlocked: true },
  { id: 2, model: 'Core i7-14700K', generation: '14.ª gen', cores: 20, threads: 28, maxBoostGHz: 5.6, socket: 'LGA1700', releaseYear: 2023, unlocked: true },
  { id: 3, model: 'Core i5-14600K', generation: '14.ª gen', cores: 14, threads: 20, maxBoostGHz: 5.3, socket: 'LGA1700', releaseYear: 2023, unlocked: true },
  { id: 4, model: 'Core i5-14400', generation: '14.ª gen', cores: 10, threads: 16, maxBoostGHz: 4.7, socket: 'LGA1700', releaseYear: 2024, unlocked: false },
  { id: 5, model: 'Core i5-12400', generation: '12.ª gen', cores: 6, threads: 12, maxBoostGHz: 4.4, socket: 'LGA1700', releaseYear: 2022, unlocked: false },
  { id: 6, model: 'Core Ultra 9 285K', generation: 'Core Ultra Serie 2', cores: 24, threads: 24, maxBoostGHz: 5.7, socket: 'LGA1851', releaseYear: 2024, unlocked: true },
];