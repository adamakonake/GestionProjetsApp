import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() title!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string,
      textContent: string,
      textButton1: string,
      textButton2: string,function1: Function, function2: Function },
    private dialogRef: MatDialogRef<DialogComponent> ) {
    // Définition des valeurs par défaut si elles ne sont pas fournies
    this.data.function1 = this.data.function1 || (() => {this.dialogRef.close();});
    this.data.function2 = this.data.function2 || (() => {this.dialogRef.close();});
  }

  closeDialog() {
   this.dialogRef.close();
  }
}
