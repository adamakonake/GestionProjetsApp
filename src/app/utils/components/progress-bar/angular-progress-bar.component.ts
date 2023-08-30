import { Component, Input } from '@angular/core';

@Component({
  selector:
      'progress-bar',
  styles: [`
        .progress-outer {
          width: 90%;
          margin: 5px 2%;
          padding: 1px;
          background-color: #f4f4f4;
          border: 1px solid #dcdcdc;
          color: #fff;
          border-radius: 5px;
          text-align: center;
        }
        .progress-inner {
            min-width: 15%;
            min-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            padding: 0;
            border-radius: 5px;
        }
  `],
  template:
  `
  <div class=\"progress-outer\">
    <div class=\"progress-inner\" [style.width]=\"whichProgress(progress) + '%'\" [style.background-color]=\"degraded == null ? color : whichColor(progress.toString())\">
      <ng-container *ngIf="!disabledP">
        {{whichProgress(progress)}}%
      </ng-container>
      <ng-container *ngIf="disabledP">
        {{whichProgress(progress)}}
      </ng-container>
    </div>
  </div>
  `
})
export class ProgressBarComponent {

/** Inputs **/
  @Input('progress') progress!: number;
  @Input('color') color: string;
  @Input('color-degraded') degraded: any;
  @Input('disable-percentage') disabledP: boolean;


constructor() {
  // Default color
  this.color = "#488aff";
  this.disabledP = false;
}

/**
 * Returns a color for a certain percent
 * @param percent The current progress
 */
whichColor(percent: string){
  // Get all entries index as an array
  let k: Array<any> = Object.keys(this.degraded);
  // Convert string to number
  k.forEach((e, i) => k[i] = +e);
  // Sort them by value
  k = k.sort((a, b) => a - b);
  // Percent as number
  let p = +percent
  // Set last by default as the first occurrence
  let last = k[0];
  // Foreach keys
  for(let val of k){
    // if current val is < than percent
    if(val < p){
      last = val;
    }
    // if val >= percent then the val that we could show has been reached
    else if(val >= p -1){
      return this.degraded[last];
    }
  }
  // if its the last one return the last
  return this.degraded[last];
}

whichProgress(progress: number){
  try{
    return Math.round(+progress * 100) / 100;
  }
  catch{
    return progress;
  }
}
}
