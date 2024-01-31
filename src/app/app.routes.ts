import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServicioTecnicoComponent } from './servicio-tecnico/servicio-tecnico.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicio-tecnico', component: ServicioTecnicoComponent },
  { path: 'contactanos', component: ContactanosComponent },
];