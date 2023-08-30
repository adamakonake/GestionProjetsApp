import { Component, Input, OnInit } from '@angular/core';
import { Tache } from 'src/app/modele/tache';
import { TacheService } from '../../service/tache.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { DateRange } from 'igniteui-angular';
import { Liste } from 'src/app/modele/liste';
import { TacheDetailDialogComponent } from '../tache-detail-dialog/tache-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent implements OnInit {

  @Input() titre : string ="";
  @Input("idList") idList! : number ;
  @Input("idProjet") idPojet! : number;
  @Input("liste") liste! : Liste;
  listId : number = 0;
  taches! : any[] ;
  tacheForm = this.formBuilder.group({
    titreTache : ['',Validators.required],
    description : [''],
    dateEcheance : [{ start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) },Validators.required]
  })

  constructor(private tacheService : TacheService, private formBuilder : FormBuilder, public dialog: MatDialog){
    // let listId = this.liste.id;
    // window.onclick = function (event){
    //   let modal = document.getElementById("modale"+listId);
    //   if (event.target == modal) {
    //     modal!.style.display = "none";
    //   }
    // }
  }
  ngOnInit(): void {
    this.tacheService.getTaches(this.liste.id).subscribe(date => {this.taches = date});
    console.log(this.taches);
  }

  //pour le date picker
  // range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };

  //open creation dialogue
  openForm(){
    let modal = document.getElementById("modale"+this.liste.id);
    modal!.setAttribute("style","display : block") ;
    this.listId = this.liste.id;
    console.log(this.liste.id);
  }

  closeForm(){
    let modal = document.getElementById("modale"+this.liste.id);
    this.tacheForm.reset();
    modal!.style.display = "none";
    console.log(this.liste.id);
  }

  //onSubmit de tache formulaire
  onSubmit(){
    const id = this.tacheService.getLastId();
    const position = this.tacheService.getLastPosition();
    let newTache : Tache = new Tache(
      id,
      this.tacheForm.value.titreTache!,
      this.tacheForm.value.description!,
      this.tacheForm.value.dateEcheance?.start!,
      this.tacheForm.value.dateEcheance?.end!,
      position,
      this.idPojet,
      this.liste.id
    )
    this.tacheService.addTache(newTache);
    this.tacheService.getTaches(this.liste.id).subscribe(date => {this.taches = date});
    this.closeForm();
  }

  //Fonction pour le drag drop
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      //console.log("prev = "+event.previousIndex+" curr = "+event.currentIndex+" id = "+event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      let tacheDeplace : any = event.container.data[event.currentIndex];
      this.tacheService.changeTachePosition(tacheDeplace.id,event.currentIndex+1);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let tacheDeplace : any = event.container.data[event.currentIndex];
      this.tacheService.changeTachePosition(tacheDeplace.id,event.currentIndex+1);
      this.tacheService.changeTacheListId(tacheDeplace.id,this.liste.id);
      // console.log("prev = "+event.previousIndex+" curr = "+event.currentIndex);
    }
  }

  openDialog(taches : Tache) {
    this.dialog.open(TacheDetailDialogComponent, {
      data: {
        tache: taches ,
      },
    });
  }

}
