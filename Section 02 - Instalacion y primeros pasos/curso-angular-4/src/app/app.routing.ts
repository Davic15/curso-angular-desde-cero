import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponents } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:page', component: ContactoComponent },
  { path: 'coches', component: CochesComponents },
  { path: 'plantillas', component: PlantillasComponent },
  {
    path: '**',
    component: HomeComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<Route> =
  RouterModule.forRoot(appRoutes);
