import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Component, Input, OnInit} from '@angular/core';
import { Liste } from '../modele/liste';
import { ListeService } from './service/liste.service';
import { fromEvent } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/Project';
import { ProjetService } from '../project/services/projet.service';
import {MatDialog} from "@angular/material/dialog";
import {AddMemberComponent} from "../member/component/add-member/add-member.component";
import {Member} from "../model/Member";
import {MemberService} from "../member/service/member.service";

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})

export class TachesComponent implements OnInit {

  listes: any = [];
  projets: Project[] = [];
  @Input() currentProject!: Project;
  @Input() currentUser!: Member | null | undefined;
  idP: number = 1; //id du projet
  color: string = "#4460F1";
  addListForm = this.formBuilder.group({
    titreListe: ['', Validators.required]
  })
  //button = document.getElementById("button") as HTMLButtonElement;

  constructor(private listeService: ListeService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private projetService: ProjetService, private dialog: MatDialog, private memberService: MemberService) {
    window.onclick = function (event) {
      let side = document.getElementById("detailSideMenu");
      let sideBack = document.getElementById("detailSideBack");
      console.log(sideBack)
      if (event.target == sideBack) {
        sideBack?.classList.remove("detailSideBackActive");
        side?.classList.remove("datailActive");
        side?.classList.add("detailDefault")
        sideBack?.classList.add("datailSideBackDisable");
      }
    }
  }
  ngOnInit(): void {
    //this.listeService.getListeByIdProjet(this.idP).subscribe(data => {this.listes = data});
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.idP = id as unknown as number;
    });
    this.listeService.getListeByIdProjet(this.idP).subscribe(data => { this.listes = data });
    //this.selecProjet(this.idP);
    this.projets = this.projetService.getProjectList();
    //this.currentProject = this.projets.find(p => p.id == this.idP)!;
    this.currentProject = this.projetService.getProjectById(this.idP)!;
    this.currentUser = this.memberService.getCurrentUser();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listes, event.previousIndex, event.currentIndex);
    let listeDeplace: any = event.container.data[event.currentIndex];
    this.listeService.changeListPosition(listeDeplace.id, event.currentIndex + 1);
    // fromEvent(document.getElementById("button"),"click").subscribe(event =>{

    // })
  }

  depile() {
    let button = document.getElementById("button");
    let side = document.getElementById("sideMenu");
    let sideBack = document.getElementById("sideBack");
    if (button?.classList.contains("depile")) {
      button.classList.remove("depile");
      button.classList.add("depiled");
      //sideMenu
      side?.classList.remove("default");
      side?.classList.add("active");
      //sideBack
      sideBack?.classList.remove("sideBackDisable");
      sideBack?.classList.add("sideBackActive");
    } else {
      button?.classList.remove("depiled");
      button?.classList.add("depile");
      //sideMenu
      side?.classList.remove("active");
      side?.classList.add("default");
      //sideBack
      sideBack?.classList.remove("sideBackActive");
      sideBack?.classList.add("sideBackDisable");
    }
  }

  depileDetail() {
    let side = document.getElementById("detailSideMenu");
    let sideBack = document.getElementById("detailSideBack");
    sideBack?.classList.remove("datailSideBackDisable");
    side?.classList.remove("detailDefault");
    sideBack?.classList.add("detailSideBackActive");
    side?.classList.add("datailActive");
  }

  selecProjet(id: number) {
    this.idP = id;
    this.listeService.getListeByIdProjet(id).subscribe(data => { this.listes = data });
  }

  //onSubmit du formulaire de liste
  onSubmit() {
    const id = this.listeService.getLastId();
    const position = this.listeService.getLastPosition();
    const newListe: Liste = new Liste(
      id,
      this.addListForm.value.titreListe!,
      this.color,
      position,
      this.idP
    )
    this.listeService.addListe(newListe);
    this.listeService.getListeByIdProjet(this.idP).subscribe(data => { this.listes = data });
  }


  onInvited() {
    this.dialog.open(AddMemberComponent);
  }
}
