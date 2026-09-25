import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INTEL_PROCESSORS } from '../../data/Intel.interface';
import { IntelProcessor } from '../../interfaces/intel.interface';

/**
 * Servicio encargado de proporcionar los procesadores Intel.
 *
 * @remarks
 * Actualmente obtiene los datos desde la colección local
 * `INTEL_PROCESSORS`. Al exponer un `Observable`, la fuente de datos puede
 * reemplazarse posteriormente por una petición HTTP sin modificar los
 * componentes que consumen este servicio.
 *
 * @example
 * ```ts
 * this.intelService.getAll().subscribe((processors) => {
 *   this.processors = processors;
 * });
 * ```
 */
@Injectable({
	providedIn: 'root',
})
export class IntelService {
	/**
	 * Obtiene todos los procesadores Intel disponibles.
	 *
	 * @returns Observable que emite una lista de procesadores `IntelProcessor`.
	 */
	getAll(): Observable<IntelProcessor[]> {
		return of(INTEL_PROCESSORS);
	}
}
