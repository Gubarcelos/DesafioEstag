import { PacienteCreateComponent } from './views/components/paciente/paciente-create/paciente-create.component';

import { PacienteReadComponent } from './views/components/paciente/paciente-read/paciente-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
    component: HomeComponent
  },
  {
    path:'pacientes',
    component:PacienteReadComponent
  },

  {
    path: 'pacientes/create',
    component: PacienteCreateComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
