import { RyzenProcessor } from '../interfaces/ryzen.interface';

export const RYZEN_MOCK: RyzenProcessor[] = [
  {
    id: 1,
    model: 'Ryzen 5 5600X',
    architecture: 'Zen 3',
    cores: 6,
    threads: 12,
    maxBoostGHz: 4.6,
    socket: 'AM4',
    releaseYear: 2020,
    hasIntegratedGraphics: false,
  },
  {
    id: 2,
    model: 'Ryzen 7 7700X',
    architecture: 'Zen 4',
    cores: 8,
    threads: 16,
    maxBoostGHz: 5.4,
    socket: 'AM5',
    releaseYear: 2022,
    hasIntegratedGraphics: true,
  },
];
