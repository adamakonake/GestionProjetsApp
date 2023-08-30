import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Project} from "../../../model/Project";
import {ProjetService} from "../../services/projet.service";
import {MemberService} from "../../../member/service/member.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string},
    private formBuilder: FormBuilder,
    private projectService: ProjetService,
    private dialogRef: MatDialogRef<AddProjectComponent>,
    private memberService: MemberService) {
  }

  project!: Project;
  projectForm!: FormGroup;
  id: number = 0;
  color: string[] = ['rgba(255, 193, 7)', 'rgba(255, 193, 7, 0.3)'];

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.minLength(3)]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      description: [null]
    });
    this.id = this.projectService.getNewId();
    this.color = this.projectService.getRandomColor();
  }

  addProject() {
    let project: Project = {
      nom: this.projectForm.value.nom,
      startDate: this.projectForm.value.startDate,
      endDate: this.projectForm.value.endDate,
      description: this.projectForm.value.description,
      pourcentage: 0,
      membreId: this.memberService.getCurrentUser()!.id,
      id: this.id,
      etat: "En cours",
      createdDate: new Date(),
      color: this.color
    }

    // Ajouter le projet au service
    this.projectService.insertData(project);

    // Fermer la boîte de dialogue
    this.dialogRef.close();
  }

  annuler() {
    this.dialogRef.close();
  }
}
