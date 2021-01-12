import { Directive, ElementRef , Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,private _renderer: Renderer2) {
    //console.log(this._elementRef);
    
    //Não usar! atack xxs
    //this._elementRef.nativeElement.style.backgroundColor ='yellow';

    this._renderer.setStyle(_elementRef.nativeElement,
      'backgroundColor',
      'yellow');
   }

}
