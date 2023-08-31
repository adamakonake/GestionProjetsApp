import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tache } from 'src/app/modele/tache';
import { TacheDetailDialogComponent } from '../tache-detail-dialog/tache-detail-dialog.component';

@Component({
  selector: 'app-card-taches',
  templateUrl: './card-taches.component.html',
  styleUrls: ['./card-taches.component.css'],
})
export class CardTachesComponent {

  @Input("tachee") tache! : Tache;
  @Input("lis") lis! : number;
  @Output() eventEmit = new EventEmitter<Tache>();

  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(TacheDetailDialogComponent, {
      data: {
        tache: this.tache ,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eventEmit.emit(result);
    });
  }

}
