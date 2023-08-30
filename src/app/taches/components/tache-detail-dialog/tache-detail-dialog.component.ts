import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateRange } from 'igniteui-angular';
import { Tache } from 'src/app/modele/tache';

@Component({
  selector: 'app-tache-detail-dialog',
  templateUrl: './tache-detail-dialog.component.html',
  styleUrls: ['./tache-detail-dialog.component.css']
})
export class TacheDetailDialogComponent implements OnInit {

  tache! : Tache ;
  date : DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
  //test : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.tache = this.data.tache;
    this.date.start = this.tache.dateDebut;
    this.date.end = this.tache.dateFin;
  }

  chooseDate(){
    const dateInput = document.getElementById("tacheDate");
    dateInput?.click();
  }

  uptadeTacheDate(){
    this.tache.dateDebut = new Date(this.date.start);
    console.log(this.tache.dateDebut);
  }
}
