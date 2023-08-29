export class Tache {
    id! : number;
    titre! : string;
    description! : string;
    dateDebut! : Date;
    dateFin! : Date;
    position! : number;
    projet! : number;
    list! : number;

    constructor(id : number, titre : string, description : string, dateDebut : Date, dateFin : Date, position:number, projet : number, list : number){
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.position = position;
        this.projet = projet;
        this.list = list;
    }

}
