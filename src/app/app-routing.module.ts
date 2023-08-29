import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './registration/signup/signup.component';
import { SigninComponent } from './registration/signin/signin.component';
import {ListCardProjectComponent} from "./project/components/list-card-project/list-card-project.component";
import { TachesComponent } from './taches/taches.component';
import { CardTachesComponent } from './taches/components/card-taches/card-taches.component';
import { ListTachesComponent } from './taches/components/list-taches/list-taches.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component : ListCardProjectComponent}
];
const routes: Routes = [
  {path : "", component : TachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
