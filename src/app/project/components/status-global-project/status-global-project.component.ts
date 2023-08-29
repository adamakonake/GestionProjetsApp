import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-global-project',
  templateUrl: './status-global-project.component.html',
  styleUrls: ['./status-global-project.component.css']
})
export class StatusGlobalProjectComponent {
  @Input() value!: number;
  @Input() title!: string;
  @Input() backgroundColor!:string;
  @Input() barColor!:string;

  constructor() {
  }
}
