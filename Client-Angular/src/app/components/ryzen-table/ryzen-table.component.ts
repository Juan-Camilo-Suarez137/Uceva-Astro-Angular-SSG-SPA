import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { RyzenProcessor } from '../../interfaces/ryzen.interface';

/**
 * Tabla que muestra el listado de procesadores AMD Ryzen.
 *
 * Recibe los procesadores desde un componente padre y presenta sus
 * especificaciones técnicas principales.
 */
@Component({
  selector: 'app-ryzen-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './ryzen-table.component.html',
})
export class RyzenTableComponent {
  /**
   * Procesadores Ryzen que se mostrarán en la tabla.
   *
   * @remarks
   * Cada elemento debe cumplir la interfaz `RyzenProcessor`.
   */
  @Input() processors: RyzenProcessor[] = [];

  /**
   * Mapeo de disponibilidad de gráficos integrados a tipos de Badge.
   *
   * @remarks
   * Se utiliza para asignar colores según si el procesador incluye gráficos
   * integrados o requiere una tarjeta gráfica dedicada.
   */
  graphicsMap: Record<'integrated' | 'none', BadgeType> = {
    integrated: 'success',
    none: 'secondary',
  };
}