import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {ProfileIconModule} from "../profile-icon/profile-icon.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        NgOptimizedImage,
        ProfileIconModule,
        RouterLink
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {

}
