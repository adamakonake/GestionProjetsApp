import { Member } from "./Member";

export class Project {
  id!:number;
  nom?:string;
  description?:string;
  etat!:string;
  pourcentage!:number;
  membreId!:number;
  startDate?:string;
  endDate?:string
  createdDate!:Date;
  color! :string[];
  membres? : Member[]
  constructor(
    id:number,
    nom:string,
    description:string,
    pourcentage:number,
    membreId:number,
    startDate:string,
    endDate:string, color:string[], membres : Member[]) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.pourcentage = pourcentage;
    this.membreId = membreId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdDate = new Date();
    this.color = color;
  }
}
