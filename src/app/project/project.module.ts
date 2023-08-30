import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './components/card-project/card-project.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgAvatarModule} from "../utils/components/ng-avatar/ng-avatar.module";
import { ListCardProjectComponent } from './components/list-card-project/list-card-project.component';
import { StatisticalProjectComponent } from './components/statistical-project/statistical-project.component';
import {ProgressBarModule} from "../utils/components/progress-bar/angular-progress-bar.module";
import {ProgressRadiusBarModule} from "../utils/components/progress-radius-bar/progress-radius-bar.module";
import { StatusGlobalProjectComponent } from './components/status-global-project/status-global-project.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { AddProjectComponent } from './components/add-project/add-project.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from '@angular/material/paginator';
import {HeaderModule} from "../utils/components/header/header.module";
import {ProfileIconModule} from "../utils/components/profile-icon/profile-icon.module";
import {MatMenuModule} from "@angular/material/menu";
import {ReactiveFormsModule} from "@angular/forms";
import {ProjectRoutingModule} from "./project-routing.module";

@NgModule({
  declarations: [
    CardProjectComponent,
    ListCardProjectComponent,
    StatisticalProjectComponent,
    StatusGlobalProjectComponent,
    ToolbarComponent,
    AddProjectComponent
  ],
  exports: [
    CardProjectComponent,
    ListCardProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressBarModule,
    NgAvatarModule,
    ProgressBarModule,
    ProgressRadiusBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatPaginatorModule,
    HeaderModule,
    ProfileIconModule,
    MatMenuModule,
    ReactiveFormsModule,
  ]
})
export class ProjectModule { }
