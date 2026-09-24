import type { IntelProcessor } from '@interfaces/Intel';

/** Procesadores Intel mostrados en la vista */
export const INTEL_PROCESSORS: IntelProcessor[] = [
  { id: 1, model: 'Core i9-14900K', series: 'Core i9', cores: 24, threads: 32, maxBoostGHz: 6.0, releaseYear: 2023 },
  { id: 2, model: 'Core i7-14700K', series: 'Core i7', cores: 20, threads: 28, maxBoostGHz: 5.6, releaseYear: 2023 },
  { id: 3, model: 'Core i5-14600K', series: 'Core i5', cores: 14, threads: 20, maxBoostGHz: 5.3, releaseYear: 2023 },
  { id: 4, model: 'Core i5-12400', series: 'Core i5', cores: 6, threads: 12, maxBoostGHz: 4.4, releaseYear: 2022 },
  { id: 5, model: 'Core i3-14100', series: 'Core i3', cores: 4, threads: 8, maxBoostGHz: 4.7, releaseYear: 2024 },
  { id: 6, model: 'Core Ultra 9 285K', series: 'Core Ultra', cores: 24, threads: 24, maxBoostGHz: 5.7, releaseYear: 2024 },
];