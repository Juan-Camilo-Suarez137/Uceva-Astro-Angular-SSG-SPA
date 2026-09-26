import { IntelProcessor } from '../interfaces/intel.interface';

export const INTEL_MOCK: IntelProcessor[] = [
  {
    id: 1,
    model: 'Core i9-14900K',
    generation: '14th gen',
    cores: 24,
    threads: 32,
    maxBoostGHz: 6.0,
    socket: 'LGA1700',
    releaseYear: 2023,
    unlocked: true,
  },
  {
    id: 2,
    model: 'Core i7-14700K',
    generation: '14th gen',
    cores: 20,
    threads: 28,
    maxBoostGHz: 5.6,
    socket: 'LGA1700',
    releaseYear: 2023,
    unlocked: true,
  },
];