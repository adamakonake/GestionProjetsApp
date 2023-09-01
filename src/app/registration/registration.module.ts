import {NgModule} from "@angular/core";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
    imports: [
        RegistrationRoutingModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        NgIf,
        MatDatepickerModule,
    ],
  exports: [
    SigninComponent,
    SignupComponent
  ]
})
export class RegistrationModule{

}
