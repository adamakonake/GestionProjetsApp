import { Injectable } from '@angular/core';

// @ts-ignore
import * as projectData from './../../data/project.json';
// @ts-ignore
import * as projectColor from './../../data/color.json';
import {Project} from "../../model/Project";

import {Observable, Subject} from "rxjs";
import {Member} from "../../model/Member";

@Injectable({
  providedIn: 'root'
})
export class ProjetService{
  constructor() { }

  private dataChangedSubject: Subject<void> = new Subject<void>();
  private dataKey = 'projects';
  private dataList: Project[] = JSON.parse(localStorage.getItem(this.dataKey) || '[]');
  color: any = projectColor;

  private updateProjectList(): void {
    localStorage.setItem(this.dataKey, JSON.stringify(this.dataList));
    this.dataChangedSubject.next();
  }

  insertData(newProject: Project): void {
    this.dataList.push(newProject);
    this.updateProjectList();
  }

  // Méthode pour supprimer un projet en utilisant son ID
  deleteProject(id: number): void {
    // Trouver l'index du projet dans la liste des projets
    const index = this.dataList.findIndex(project => project.id === id);

    // Vérifier si l'index a été trouvé (s'il est différent de -1)
    if (index !== -1) {
      // Utiliser la méthode splice pour supprimer le projet à l'index trouvé
      // Ici, on supprime un seul élément à partir de l'index trouvé
      this.dataList.splice(index, 1);

      // Mettre à jour la liste des projets dans le localStorage
      this.updateProjectList();
    }
  }


  getProjectList(): Project[] {
    return [...this.dataList];
  }

  getProjectChangedObservable(): Observable<void> {
    return this.dataChangedSubject.asObservable();
  }

  // @ts-ignore
  getProjectById(id: number): Project|null {
    const index = this.dataList.findIndex(project=> project.id === id);
    if (index !== -1) {
      return this.dataList[index];
    }
  }

  getRandomNumber(max: number): number {
    // Génère un nombre aléatoire entre 0 (inclus) et max (inclus)
    return Math.floor(Math.random() * (max + 1));
  }

  getRandomColor(): string[] {
    let indice: number = this.getRandomNumber(13);
    return this.color[`${indice}`];
  }

  getNewId(): number {
    return this.getProjectList()[this.getProjectList().length - 1].id + 1;
  }

/*
  data: any = projectData;
  color: any = projectColor;

  getAllProjetsForMembre(): Project[] {
    return this.data.data;

  }

  getNewId(): number {
    return this.getAllProjetsForMembre()[this.getAllProjetsForMembre().length - 1].id + 1;
  }


  addNewProject(project: Project): Project[] {
    let data = this.getAllProjetsForMembre();
    data.push(project);
    return data;


    //const jsonData = JSON.stringify(data);
    //localStorage.setItem('projectData', jsonData);
    /
    // conversion de data d'une objet en chaine
    let json = JSON.stringify(data);

    // ecriture du fichier sur le disque
    let fs = require('fs');
    fs.writeFile('./../../data/project.json', json, 'utf8', (err:any) => {
      console.log(err);
    });/


  }*/

}
