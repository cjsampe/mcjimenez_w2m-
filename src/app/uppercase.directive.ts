import { Directive, ElementRef, HostListener } from '@angular/core';




@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {


 
  constructor(public ref: ElementRef) { 
  }

  @HostListener('input', ['$event']) onInput(event:any) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
    console.log(event.target.value);
    console.log(event.target.value.toUpperCase());

  }

}



// @Directive({
//   selector: 'input[type=text]',
//   host: {
//       '(input)': 'ref.nativeElement.value=$event.target.value.toUpperCase()',
//   }

// })
// export class UppercaseDirective {
//   constructor(private ref: ElementRef) {
//   }
// }