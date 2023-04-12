import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HeroesComponent,

  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    HttpClientModule

  ]
})
export class HeroesModule { }
