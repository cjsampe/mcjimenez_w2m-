import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HeroeComponent } from './heroe.component';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule
  ]
})
export class HeroeModule { }
