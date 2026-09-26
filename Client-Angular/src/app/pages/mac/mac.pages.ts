import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { MacTableComponent } from '../../components/mac-table/mac-table.component';
import { State } from '../../interfaces/state.interface';
import { MacProcessor } from '../../interfaces/mac.interface';
import { MacService } from '../../services/mac/mac.service';

/**
 * Componente contenedor de procesadores Mac.
 *
 * Se utiliza para gestionar y mostrar un listado de procesadores Apple
 * Silicon utilizando el componente `MacTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `MacService`
 * para obtener los procesadores Mac y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-mac.pages',
  imports: [AlertComponent, MacTableComponent],
  templateUrl: './mac.pages.html'
})
export class MacPages {
  /**
   * Lista de procesadores Mac.
   *
   * @type {MacProcessor[]}
   */
  processors: MacProcessor[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   * */
  state: State = 'init';

  /**
   * Servicio para obtener procesadores Mac.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private macService = inject(MacService);

  /**
   * Inicializa el componente y carga los procesadores Mac.
   * @remarks
   * Se suscribe al método `getAllMacProcessors()` del servicio y
   * asigna los datos recibidos a la propiedad `processors`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.macService.getAllMacProcessors().subscribe({
      next: (processors: MacProcessor[]) => {
        this.processors = processors;
        this.state = 'success';
      },
      error: (error: unknown) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
