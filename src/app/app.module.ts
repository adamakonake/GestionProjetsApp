import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TachesComponent } from './taches/taches.component';
import { IgxCardModule, IgxDateRangePickerModule, IgxInputGroupModule, IgxProgressBarModule } from 'igniteui-angular';
import { ListTachesComponent } from './taches/components/list-taches/list-taches.component';
import {CdkDrag, CdkDropList, CdkDropListGroup, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop'
import { MatCardModule} from '@angular/material/card';
import { CardTachesComponent } from './taches/components/card-taches/card-taches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ColorPickerModule } from 'ngx-color-picker';
import {ProjectModule} from "./project/project.module";
import {NgAvatarModule} from "./utils/components/ng-avatar/ng-avatar.module";
import {ProgressBarModule} from "./utils/components/progress-bar/angular-progress-bar.module";
import {ProgressRadiusBarModule} from "./utils/components/progress-radius-bar/progress-radius-bar.module";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import { DialogComponent } from './utils/components/dialog/dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import { SignupComponent } from './registration/signup/signup.component';
import { SigninComponent } from './registration/signin/signin.component';
import {RegistrationModule} from "./registration/registration.module";
import { HeaderModule } from "./utils/components/header/header.module";
import { ProfileComponent } from './member/component/profile/profile.component';
import {ToolbarComponent} from "./utils/components/toolbar/toolbar.component";
import {ProfileModule} from "./member/component/profile/profile.module";

@NgModule({
    declarations: [
      AppComponent,
      TachesComponent,
      ListTachesComponent,
      CardTachesComponent,
      DialogComponent,
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      IgxProgressBarModule,
      IgxCardModule,
      DragDropModule,
      MatCardModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      IgxDateRangePickerModule,
      IgxInputGroupModule,
      FormsModule,
      MatButtonModule,
      MatDividerModule,
      ColorPickerModule,
      ProjectModule,
      HeaderModule,
      MatDialogModule,
      ProfileModule
    ]
})
export class AppModule {
}
