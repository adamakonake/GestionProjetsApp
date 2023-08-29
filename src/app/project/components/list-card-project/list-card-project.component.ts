import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjetService} from "../../services/projet.service";
import {Project} from "../../../model/Project";
import {MatDialog} from "@angular/material/dialog";
import {AddProjectComponent} from "../add-project/add-project.component";
import {map, Observable, pipe, Subscription} from "rxjs";

@Component({
  selector: 'app-list-card-project',
  templateUrl: './list-card-project.component.html',
  styleUrls: ['./list-card-project.component.css'],
})
export class ListCardProjectComponent implements OnInit, OnDestroy{
  constructor(private projetService: ProjetService) {}

  private subscription!: Subscription;
  projects: Project[] = [];

  ngOnInit() {
    this.projects = this.projetService.getProjectList();
    this.subscription = this.projetService.getProjectChangedObservable().subscribe(() => {
      this.projects = this.projetService.getProjectList();
    });


    //this.projets = this.projetService.getAllProjetsForMembre();
    //this.dataList = this.projetService.getProjectList();

    /*this.subscription = this.projetService.getProjectChangedObservable().subscribe(() => {
      this.dataList = this.projetService.getProjectList();
    });this.projetService.getProjectChangedObservable()

    this.projetService.getProjectChangedObservable().subscribe(
      pipe(
        map(data => data*2),
      )
    );*/
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
