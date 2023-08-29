import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'progress-radius-bar',
  templateUrl: './progress-radius-bar.component.html',
  styleUrls: ['./progress-radius-bar.component.scss']
})
export class ProgressRadiusBarComponent implements OnInit{
  @Input() barProperties: any ;
  constructor() { }

  ngOnInit() {
    this.barProperties = {
      barType: 'radial', //or 'radial' for radial bar
      color: "#0e90d2",
      secondColor: "#D3D3D3",
      progress: 66, //between 0 to 100
      linear: {
        depth: 22,
        stripped: true,
        active: true,
        label: {
          enable: true,
          value: "Linear Bar",
          color: "#fff",
          fontSize: 15,
          showPercentage: true,
        }
      },
      radial: {
        depth: 3, //max 8
        size: 9,
        label: {
          enable: true,
          color: "#09608c",
        }
      }
    }
  }
}
