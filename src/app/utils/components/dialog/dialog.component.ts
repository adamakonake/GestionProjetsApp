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
      textContent: string },
    private dialogRef: MatDialogRef<DialogComponent> ) {
  }

  closeDialog() {
   this.dialogRef.close();
  }
}
