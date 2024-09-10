import { Directive, ElementRef } from '@angular/core';
import { NgStyleComponent } from '../components/ng-style/ng-style.component';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) { 
    console.log("Directiva llamada");
    
  
  }

}
