import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { MacProcessor } from '../../interfaces/mac.interface';

/**
 * Tabla que muestra el listado de procesadores Apple Silicon (Mac).
 *
 * Recibe los procesadores desde un componente padre y presenta sus
 * especificaciones técnicas principales.
 */
@Component({
  selector: 'app-mac-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './mac-table.component.html',
})
export class MacTableComponent {
  /**
   * Procesadores Mac que se mostrarán en la tabla.
   *
   * @remarks
   * Cada elemento debe cumplir la interfaz `MacProcessor`.
   */
  @Input() processors: MacProcessor[] = [];

  /**
   * Mapeo de disponibilidad de motor de medios a tipos de Badge.
   *
   * @remarks
   * Se utiliza para asignar colores según si el chip incluye motor de
   * medios dedicado (ProRes) o no.
   */
  mediaEngineMap: Record = {
    yes: 'success',
    no: 'secondary',
  };
}
