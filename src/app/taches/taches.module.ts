import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachesRoutingModule } from './taches-routing.module';
import { ListTachesComponent } from './components/list-taches/list-taches.component';
import { CardTachesComponent } from './components/card-taches/card-taches.component';
import { IgxCardModule } from 'igniteui-angular';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { TacheDetailDialogComponent } from './components/tache-detail-dialog/tache-detail-dialog.component';
import { TacheFormDialogComponent } from './components/tache-form-dialog/tache-form-dialog.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    TachesRoutingModule,
    IgxCardModule,
  ]
})
export class TachesModule { }
