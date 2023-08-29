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
  constructor(
    id:number,
    nom:string,
    description:string,
    etat:string,
    pourcentage:number,
    membreId:number,
    startDate:string,
    endDate:string, color:string[]) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.etat = etat;
    this.pourcentage = pourcentage;
    this.membreId = membreId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdDate = new Date();
    this.color = color;
  }
}
