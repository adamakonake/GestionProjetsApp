import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile.component";
import {HeaderModule} from "../../../utils/components/header/header.module";
import {ProjectModule} from "../../../project/project.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProgressRadiusBarModule} from "../../../utils/components/progress-radius-bar/progress-radius-bar.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    HeaderModule,
    ProjectModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ProgressRadiusBarModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {

}
