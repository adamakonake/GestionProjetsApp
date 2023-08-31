import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Liste } from 'src/app/modele/liste';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  listes : Liste[] = [
    new Liste(1,"A Faire","#4460F1",2,1),
    new Liste(2,"En Cours","#CB8E42",1,1),
    new Liste(3,"A Faire","#4460F1",2,2),
  ];

  constructor() { }

  addListe(liste : Liste){
    this.listes.push(liste);
  }

  getListeByIdProjet(idProjet : number) : Observable<Liste[]>{
    let list : Liste[] = [];
    this.listes.forEach(el =>{
      if(el.projet == idProjet)
        list.push(el);
    });
    list.sort((a,b)=>{return a.position - b.position});
    return new Observable(observer =>{
      observer.next(list);
    })
  }

  getListById(idL : number){
    return this.listes.find(el=> el.id == idL );
  }

  changeListPosition(id : number,position : number){
    // const list = this.listes.find(el=>{el.id == id});
    const index = this.listes.findIndex(el=>{ return el.id == id});
    this.listes[index].position=position;
  }

  getLastId(){
    let list = this.listes;
    list.sort((a,b)=>{
      const result = a.id - b.id;
      return result*-1;
    });
    return list[0].id+1;
  }

  getLastPosition(){
    let list = this.listes;
    list.sort((a,b)=>{
      const result = a.position - b.position;
      return result*-1;
    });
    return list[0].position+1;
  }

}
