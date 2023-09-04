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
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      project?: Project,
      isAdd: boolean
    },
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
      nom: [this.data.project?.nom, [Validators.required, Validators.minLength(3)]],
      startDate: [this.data.project?.startDate, [Validators.required]],
      endDate: [this.data.project?.endDate, [Validators.required]],
      description: [this.data.project?.description]
    });
    this.id = (this.data.isAdd)?this.projectService.getNewId():this.data.project?.id!;
    this.color = (this.data.isAdd)?this.projectService.getRandomColor():this.data.project?.color!;
  }

  addProject() {
    let project: Project = {
      nom: this.projectForm.value.nom,
      startDate: this.projectForm.value.startDate,
      endDate: this.projectForm.value.endDate,
      description: this.projectForm.value.description,
      pourcentage: 10,
      membreId: this.memberService.getCurrentUser()!.id,
      id: this.id,
      etat: "En cours",
      createdDate: new Date(),
      color: this.color,
      members: []
    }
    if(this.data.isAdd){
      // Ajouter le projet au service
      this.projectService.insertData(project);
    }
    else {
      this.projectService.updateProject(project);
    }

    // Fermer la boîte de dialogue
    this.dialogRef.close();
  }

  annuler() {
    this.dialogRef.close();
  }
}
