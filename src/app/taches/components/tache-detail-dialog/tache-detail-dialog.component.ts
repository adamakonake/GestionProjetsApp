import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateRange } from 'igniteui-angular';
import { Tache } from 'src/app/modele/tache';
import { CardTachesComponent } from '../card-taches/card-taches.component';
import { ListeService } from '../../service/liste.service';
import { Liste } from 'src/app/modele/liste';

@Component({
  selector: 'app-tache-detail-dialog',
  templateUrl: './tache-detail-dialog.component.html',
  styleUrls: ['./tache-detail-dialog.component.css']
})
export class TacheDetailDialogComponent implements OnInit {

  tache! : Tache ;
  date : DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
  liste! : Liste;
  //test : any;

  // constructor(
  //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  // ) {}

  constructor(public dialogRef: MatDialogRef<CardTachesComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private listeService : ListeService) {}

  ngOnInit(): void {
    this.tache = this.data.tache;
    this.date.start = this.tache.dateDebut;
    this.date.end = this.tache.dateFin;
    this.liste = this.listeService.getListById(this.tache.list) as Liste;
  }

  chooseDate(){
    const dateInput = document.getElementById("tacheDate");
    dateInput?.click();
  }

  uptadeTacheDate(){
    this.tache.dateDebut = new Date(this.date.start);
    console.log(this.tache.dateDebut);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
