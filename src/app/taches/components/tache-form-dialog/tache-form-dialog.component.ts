import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListTachesComponent } from '../list-taches/list-taches.component';

@Component({
  selector: 'app-tache-form-dialog',
  templateUrl: './tache-form-dialog.component.html',
  styleUrls: ['./tache-form-dialog.component.css']
})
export class TacheFormDialogComponent {


  constructor(public dialogRef: MatDialogRef<ListTachesComponent>,
    @Inject(MAT_DIALOG_DATA) public data : FormGroup , private formBuilder : FormBuilder){
    this.data = this.formBuilder.group({
      titreTache : ['',Validators.required],
      description : [''],
      dateEcheance : [{ start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) },Validators.required]
    })
  }

  onAnnulerClick(): void {
    this.data.reset();
    this.dialogRef.close();
  }

}
