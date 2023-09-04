import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from 'src/app/modele/tache';

@Injectable({
  providedIn: 'any'
})
export class TacheService {
  public taches : Tache[] = [
    new Tache(1,"Faire l'analyse du ","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),1,1,1),
    new Tache(2,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),2,1,1),
    new Tache(3,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),1,1,2),
    new Tache(4,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),2,1,2),
    new Tache(5,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),3,1,2),
    new Tache(6,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),3,1,1),
    new Tache(6,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),1,1,3),
    new Tache(8,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),2,1,3),
    new Tache(9,"Faire l'analyse du projet","Analyser le contexte du problème en relévant les fonctionnalitées clé.",new Date("2023-08-26"),new Date("2023-08-27"),3,1,3),
  ]
  constructor() { }

  addTache(tache : Tache){
    this.taches.push(tache);
  }

  getTaches(idL : number) :Observable<Tache[]>{
    let tache : Tache[] =[];
    this.taches.forEach(el =>{
      if(el.list == idL){
        tache.push(el);
      }
    });
    tache.sort((a,b)=>{
      return a.position - b.position;
    })
    return new Observable(result =>{
      result.next(tache);
    });
  }

  getLastId(){
    let taches = this.taches
    taches.sort((a,b)=>{
      const result = a.id - b.id;
      return result*-1
    })

    return taches[0].id+1;
  }

  getLastPosition(){
    let taches = this.taches
    taches.sort((a,b)=>{
      const result = a.position - b.position;
      return result*-1
    });
      return taches[0].id+1;
  }

  changeTachePosition(id : number,position : number){
    // const list = this.listes.find(el=>{el.id == id});
    const index = this.taches.findIndex(el=>{ return el.id == id});
    this.taches[index].position=position;

  }

  changeTacheListId(id : number,idList : number){
    const index = this.taches.findIndex(el=>{ return el.id == id});
    this.taches[index].list=idList;
  }

  updateTache(tache : Tache){
    const index = this.taches.findIndex(el=>{ return el.id == tache.id});
    this.taches[index]=tache;
  }

}
