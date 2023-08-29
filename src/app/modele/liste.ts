export class Liste {

    id! : number;
    titre! : string;
    couleur! : string
    position! : number;
    projet! : number;
    
    constructor(id : number, titre : string, couleur : string, position : number, projet : number){
        this.id = id;
        this.titre = titre;
        this.couleur = couleur;
        this.position = position;
        this.projet = projet;
    }
}
