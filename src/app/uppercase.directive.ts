import { Text } from '@angular/compiler';
import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective implements OnInit{

  constructor(private elementRef: ElementRef) {}

   // @Input('appUppercase') text: string;
  
  ngOnInit() {
    this.upper;
  }

  private upper(text:string){
    text = this.elementRef.nativeElement;
    text.toUpperCase();
  }

}
