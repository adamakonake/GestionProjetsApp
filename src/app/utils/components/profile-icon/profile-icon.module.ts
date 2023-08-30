import {NgModule} from "@angular/core";
import {ProfileIconComponent} from "./profile-icon.component";
import {NgAvatarModule} from "../ng-avatar/ng-avatar.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    ProfileIconComponent
  ],
  imports: [
    NgAvatarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule
  ],
  exports: [ProfileIconComponent]
})
export class ProfileIconModule{}
