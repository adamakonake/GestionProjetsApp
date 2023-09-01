import {Component, Input, OnInit} from '@angular/core';
import {AddProjectComponent} from "../../../project/components/add-project/add-project.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  @Input() title!: string;
  @Input() actionText?: string;
  @Input() color!: string;
  @Input() buttonColor?: string;

  constructor(private formDialog: MatDialog) {
  }
  ngOnInit() {
    this.color = "#F2F6FE";
    this.buttonColor = "#4460F1";
  }

  openAddProjectDialog() {
    this.formDialog.open(
      AddProjectComponent,
      {
        data: {
          title: "Ajouter un projet",
          isAdd: true
        }
      }
    );
  }
}
