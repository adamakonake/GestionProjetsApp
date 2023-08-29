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
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    ListTachesComponent,
    CardTachesComponent
  ],
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
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
