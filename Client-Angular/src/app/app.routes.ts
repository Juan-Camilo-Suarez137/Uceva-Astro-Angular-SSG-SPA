import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { IntelPage } from './pages/intel/intel.page';
import { RyzenPages } from './pages/ryzen/ryzen.pages';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },

   /**
   * Ruta de procesadores Ryzen.
   *
   * @remarks
   * Renderiza el componente `RyzenPages`, encargado
   * de mostrar y gestionar el listado de procesadores Ryzen.
   */
  { path: 'ryzen', component: RyzenPages },

  /**
   * Ruta de procesadores Ryzen.
   *
   * @remarks
   * Renderiza el componente `IntelPage`, encargado
   * de mostrar y gestionar el listado de procesadores Intel.
   */
  { path: 'intel', component: IntelPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];