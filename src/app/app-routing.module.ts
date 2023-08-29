import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TachesComponent } from './taches/taches.component';
import { CardTachesComponent } from './taches/components/card-taches/card-taches.component';
import { ListTachesComponent } from './taches/components/list-taches/list-taches.component';

const routes: Routes = [
  {path : "", component : TachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
