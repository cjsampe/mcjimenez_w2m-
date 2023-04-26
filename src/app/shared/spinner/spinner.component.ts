import { Component } from '@angular/core';

import { SpinnerHandlerService } from './spinner-handler.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  // spinnerActive = true;
  isLoading= this.spinnerHandler.SpinnerObservable;

  constructor(public spinnerHandler: SpinnerHandlerService) {
   
  }

  // showSpinner = (state: boolean): void => {
  //   this.spinnerActive = state;
  // };
}
