import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
  ]
})
export class HomeModule { }
