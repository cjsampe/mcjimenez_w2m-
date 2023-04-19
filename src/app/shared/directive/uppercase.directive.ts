import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    this.ref.nativeElement.value = (<HTMLInputElement>(
      event.target
    )).value.toUpperCase();
  }
}
