import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective {

  @Input() color = "";

  constructor(private el : ElementRef) { 
    this.el.nativeElement.readOnly=true;
  }

  
  @HostListener('dblclick') onDoubleClick(){
    let couleur = this.color.length == 0 ? "#4460f1" : this.color;
      this.el.nativeElement.readOnly=false;
      this.el.nativeElement.style=`outline: 2px solid ${couleur}; margin-bottom: 3px; border-radius: 5px;`;

  }
  
  @HostListener('focusout') onFocusOut(){

    this.el.nativeElement.readOnly=true;
    this.el.nativeElement.style="outline: none;";

  }
}
