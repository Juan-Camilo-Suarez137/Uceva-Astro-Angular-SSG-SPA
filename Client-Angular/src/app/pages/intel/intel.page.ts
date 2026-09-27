import { Component, OnInit, inject } from '@angular/core';
import { IntelService } from '../../services/intel/intel.service';
import { IntelProcessor } from '../../interfaces/intel.interface';
import { IntelTableComponent } from '../../components/intel-table/intel-table.component';
import { AlertComponent } from '../../components/alert/alert.component';

/** Estados posibles de la página */
type State = 'init' | 'loading' | 'success' | 'error';

/**
 * Página que lista los procesadores Intel.
 */
@Component({
  selector: 'app-intel-page',
  imports: [IntelTableComponent, AlertComponent],
  templateUrl: './intel.page.html',
})
export class IntelPage implements OnInit {
  /** Servicio de procesadores Intel */
  private readonly intelService = inject(IntelService);

  /** Estado actual de la página */
  state: State = 'init';

  /** Procesadores cargados */
  processors: IntelProcessor[] = [];

  /** Carga los procesadores al iniciar la página */
  ngOnInit(): void {
    this.getProcessors();
  }

  /** Solicita los procesadores al servicio y actualiza el estado */
  getProcessors(): void {
    this.state = 'loading';
    this.intelService.getAll().subscribe({
      next: (processors) => {
        this.processors = processors;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}