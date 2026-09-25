import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { RyzenTableComponent } from '../../components/ryzen-table/ryzen-table.component';
import { State } from '../../interfaces/state.interface';
import { RyzenProcessor } from '../../interfaces/ryzen.interface';
import { RyzenService } from '../../services/ryzen/ryzen.service';

/**
 * Componente contenedor de procesadores Ryzen.
 *
 * Se utiliza para gestionar y mostrar un listado de procesadores Ryzen
 * utilizando el componente `RyzenTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `RyzenService`
 * para obtener los procesadores Ryzen y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-ryzen.pages',
  imports: [AlertComponent, RyzenTableComponent],
  templateUrl: './ryzen.pages.html'
})
export class RyzenPages {
  /**
   * Lista de procesadores Ryzen.
   *
   * @type {RyzenProcessor[]}
   */
  processors: RyzenProcessor[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   * */
  state: State = 'init';

  /**
   * Servicio para obtener productos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private ryzenService = inject(RyzenService);

  /**
   * Inicializa el componente y carga los procesadores Ryzen.
   * @remarks
   * Se suscribe al método `getAllRyzenProcessors()` del servicio y
   * asigna los datos recibidos a la propiedad `processors`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ryzenService.getAllRyzenProcessors().subscribe({
      next: (processors) => {
        this.processors = processors;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
