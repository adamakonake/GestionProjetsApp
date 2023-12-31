import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './registration/signup/signup.component';
import { SigninComponent } from './registration/signin/signin.component';
import {ListCardProjectComponent} from "./project/components/list-card-project/list-card-project.component";
import { TachesComponent } from './taches/taches.component';
import { ListTachesComponent } from './taches/components/list-taches/list-taches.component';
import { TacheDetailDialogComponent } from './taches/components/tache-detail-dialog/tache-detail-dialog.component';
import {ProfileComponent} from "./member/component/profile/profile.component";
import {NotFoundComponent} from "./not-found/not-found/not-found.component";

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path : 'projects/:id', loadChildren : () => import ('./taches/taches.module').then(mod => mod.TachesModule)},
  {path: '', component : ListCardProjectComponent},
  //{path: 'account', loadChildren: ()=> import('./member/component/profile/profile.module').then(mod => mod.ProfileModule)},
  {path: 'account', component: ProfileComponent},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
