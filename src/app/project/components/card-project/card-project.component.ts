import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../model/Project";
import {ProjetService} from "../../services/projet.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../../../utils/components/dialog/dialog.component";
import {AddProjectComponent} from "../add-project/add-project.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit{
  @Input() project!: Project;
  constructor(
    private projectService: ProjetService,
    private dialog: MatDialog,
    private route: Router,
  ) {}

  ngOnInit() {}

  protected readonly parseInt = parseInt;

  deleteProject() {
    this.dialog.open(DialogComponent, {
      data: {
        title: "Supprimer le projet",
        textContent: "Voulez-vous vraiment supprimer le projet ?",
        textButton1: "Supprimer",
        textButton2: "Annuler",
        function1: () => {
          this.projectService.deleteProject(this.project.id);
        }
      },
    });
  }

  modifProject() {
    this.dialog.open(AddProjectComponent, {
      data: {
        title: "Modifier le projet",
      },
    });
  }

  goToTask() {
    this.route.navigate(['/projects', this.project.id]);
  }
  openMenu(event: Event): void {
    event.stopPropagation();
  }

}
