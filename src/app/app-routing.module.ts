import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ErrorComponent } from './componentes/iniciar-sesion/error/error.component';
import { RegistroExitosoComponent } from './componentes/iniciar-sesion/registro-exitoso/registro-exitoso.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp/nueva-exp.component';
import { NuevaFormComponent } from './componentes/formacion/nueva-form/nueva-form.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { EditarEncabezadoComponent } from './componentes/encabezado/editar-encabezado/editar-encabezado.component';
import { EditarPerfilComponent } from './componentes/perfil/editar-perfil/editar-perfil.component';
import { EditarFormComponent } from './componentes/formacion/editar-form/editar-form.component';
import { NuevaHabComponent } from './componentes/habilidades/nueva-hab/nueva-hab.component';
import { EditarHabComponent } from './componentes/habilidades/editar-hab/editar-hab.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { AccesoNegadoComponent } from './componentes/iniciar-sesion/acceso-negado/acceso-negado.component';
import { ResetComponent } from './componentes/registrarse/reset/reset.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full',
  },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'acceso-negado', component: AccesoNegadoComponent },
  { path: 'registro-exitoso', component: RegistroExitosoComponent },
  { path: 'reset', component: ResetComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'nueva-exp',
    component: NuevaExpComponent,
    canActivate: [AuthGuard] },
  {
    path: 'nueva-form',
    component: NuevaFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-exp/:id',
    component: EditarExpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-encabezado/:id',
    component: EditarEncabezadoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-perfil/:id',
    component: EditarPerfilComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-form/:id',
    component: EditarFormComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'nueva-hab',
    component: NuevaHabComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editar-hab/:id',
    component: EditarHabComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nueva-proyecto',
    component: NuevoProyectoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-proyecto/:id',
    component: EditarProyectoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
