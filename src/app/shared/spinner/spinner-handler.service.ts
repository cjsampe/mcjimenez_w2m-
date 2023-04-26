import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerHandlerService {
  public numberOfRequests = 0;
  private showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public SpinnerObservable = this.showSpinner.asObservable();

  handleRequest = (state = 'minus'): void => {
    this.numberOfRequests =
      state === 'plus' ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);
  };
}
