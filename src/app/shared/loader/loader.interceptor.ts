import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { LoaderService } from './loader.service'; 
  import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
  
  @Injectable()
  export class LoaderInterceptor implements HttpInterceptor {
  
    constructor(private loaderService: LoaderService) {
    }
  
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       this.loaderService.show();
  
       return next.handle(request).pipe(
             finalize(() => this.loaderService.hide()),
       );
    }
  }
  