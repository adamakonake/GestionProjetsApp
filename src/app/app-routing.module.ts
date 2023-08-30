import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './registration/signup/signup.component';
import { SigninComponent } from './registration/signin/signin.component';
import {ListCardProjectComponent} from "./project/components/list-card-project/list-card-project.component";
import { TachesComponent } from './taches/taches.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path : 'projects/:id', loadChildren : () => import ('./taches/taches.module').then(mod => mod.TachesModule)},
  {path: '', component : ListCardProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
