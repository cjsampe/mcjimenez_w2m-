import { Component } from '@angular/core';

import { SpinnerHandlerService } from './spinner-handler.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  spinnerActive = true;

  constructor(public spinnerHandler: SpinnerHandlerService) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };
}
