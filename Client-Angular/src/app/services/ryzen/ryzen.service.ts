import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RyzenProcessor } from '../../interfaces/ryzen.interface';
import { RYZENPROCESSORS } from '../../data/ryzen.interface';

/**
 * Servicio encargado de la gestión de los datos del procesador ryzen.
 *
 * Proporciona métodos para obtener información de procesadores ryzen, ya sea desde un backend o
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private ryzenService: RyzenService) {}
 *
 * this.ryzenService.getAllRyzenProcessors().subscribe(ryzen => {
 *   console.log(ryzen);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class RyzenService {
  /**
   * Obtiene una lista de procesadores ryzen desde el backend.
   *
   * @param countRyzen Número de procesadores ryzen a obtener.
   * @returns Observable que emite un array de procesadores ryzen.

   *
   * @example
   * ```ts
   * this.ryzenService.getAllRyzenProcessors().subscribe(ryzen => {
   *   console.log(ryzen);
   * });
   * ```
   */
  getAllRyzenProcessors(): Observable<RyzenProcessor[]> {
    return of(RYZENPROCESSORS);
  }
}
