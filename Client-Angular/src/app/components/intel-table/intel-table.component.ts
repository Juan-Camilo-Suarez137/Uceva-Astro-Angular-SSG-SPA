import { Component, Input } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';
import { IntelProcessor } from '../../interfaces/intel.interface';

/**
 * Tabla que muestra el listado de procesadores Intel.
 */
@Component({
  selector: 'app-intel-table',
  imports: [BadgeAtom],
  templateUrl: './intel-table.component.html',
})
export class IntelTableComponent {
  /** Procesadores a mostrar en la tabla */
  @Input() processors: IntelProcessor[] = [];
}