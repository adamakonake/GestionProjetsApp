import { Component, Input } from '@angular/core';
import { Tache } from 'src/app/modele/tache';

@Component({
  selector: 'app-card-taches',
  templateUrl: './card-taches.component.html',
  styleUrls: ['./card-taches.component.css'],
})
export class CardTachesComponent {

  @Input("tachee") tache! : Tache;
  @Input("lis") lis! : number;

}
