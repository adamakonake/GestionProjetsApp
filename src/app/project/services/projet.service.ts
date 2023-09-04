import {Injectable, Input} from '@angular/core';

// @ts-ignore
import * as projectData from './../../data/project.json';
// @ts-ignore
import * as projectColor from './../../data/color.json';
import {Project} from "../../model/Project";

import {Observable, Subject} from "rxjs";
import {Member} from "../../model/Member";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProjetService{
  constructor(private router: Router) { }

  private dataChangedSubject: Subject<void> = new Subject<void>();
  private dataKey = 'projects';
  private CurrentProjectKey: string = 'currentProject';
  private dataList: Project[] = JSON.parse(localStorage.getItem(this.dataKey) || '[]');
  private currentProject: Project = JSON.parse(localStorage.getItem(this.CurrentProjectKey) || '{}');

  color: any = projectColor;

  private updateProjectList(): void {
    localStorage.setItem(this.dataKey, JSON.stringify(this.dataList));
    this.dataChangedSubject.next();
  }
  getCurrentProject(): Project|undefined {
    // @ts-ignore
    return JSON.parse(localStorage.getItem(this.CurrentProjectKey));
  }


  updateCurrentProject(project: Project): void {
    this.currentProject = project;
    localStorage.setItem(this.CurrentProjectKey, JSON.stringify(this.currentProject));
    //this.dataChangedSubject.next();
  }

  insertData(newProject: Project): void {
    this.dataList.push(newProject);
    this.updateProjectList();
  }

  addNewMember(member: Member): boolean {
    if(!this.getCurrentProject()?.members.includes(member.id)){
      this.currentProject.members.push(member.id);
      this.updateProject(this.currentProject);
      this.updateCurrentProject(this.currentProject);
      console.log(this.currentProject.members);
      //this.dataChangedSubject.next();
      return true;
    }
    console.log(this.currentProject.members);
    return false;
  }

  // @ts-ignore
  updateProject(project: Project): Project|null {
    const index = this.dataList.findIndex(p => p.id == project.id);
    if(index !== -1){
      this.dataList[index] = project;
      this.updateProjectList();
      return project;
    }
    return null;
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
  getProjectById(id: number): Project|undefined {
    let project = this.dataList.find(p => p.id == id);
    if(project == undefined){
      this.router.navigateByUrl('not-found');
    }
    return project;
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
    if(this.getProjectList().length == 0 || this.getProjectList() == null)
    {
      return 1;
    }
    return this.getProjectList()[this.getProjectList().length - 1].id + 1;
  }

}
