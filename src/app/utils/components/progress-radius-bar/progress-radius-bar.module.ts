import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ProgressRadiusBarComponent} from "./progress-radius-bar.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressRadiusBarComponent],
  exports: [ProgressRadiusBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressRadiusBarModule { }
