import {Component, OnInit, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit{
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() backgroundColor!: string;

  constructor(private dialog: MatDialog) {
  }
  ngOnInit() {
    this.imageUrl = 'assets/1.jpg';
    this.backgroundColor = '#F2F6FE';
    //#F2F6FE
  }

  logout() {
    this.dialog.open(DialogComponent, {
      data: {
        title: "Se deconnecter",
        textContent: "Voulez-vous vraiment vous deconnecté ?"
      },
    });
  }
}
