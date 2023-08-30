import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./project.module').then(m=> m.ProjectModule)},
];
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProjectRoutingModule {
}
