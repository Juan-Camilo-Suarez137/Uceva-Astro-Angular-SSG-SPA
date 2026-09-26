import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MacProcessor } from '../../interfaces/mac.interface';
import { MAC_PROCESSORS } from '../../data/mac.interface';

/**
 * Servicio encargado de la gestión de los datos del procesador Mac.
 *
 * Proporciona métodos para obtener información de procesadores Apple
 * Silicon, ya sea desde un backend o desde la data local.
 *
 * @example
 * ```ts
 * constructor(private macService: MacService) {}
 *
 * this.macService.getAllMacProcessors().subscribe(mac => {
 *   console.log(mac);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MacService {
  /**
   * Obtiene una lista de procesadores Mac desde el backend.
   *
   * @returns Observable que emite un array de procesadores Mac.
   *
   * @example
   * ```ts
   * this.macService.getAllMacProcessors().subscribe(mac => {
   *   console.log(mac);
   * });
   * ```
   */
  getAllMacProcessors(): Observable {
    return of(MAC_PROCESSORS);
  }
}
