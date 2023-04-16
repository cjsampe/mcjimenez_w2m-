import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { HeroeComponent } from './heroe.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroesRoutingModule } from '../../heroes-routing.module';




@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    TranslocoModule,
    HeroesRoutingModule
  ]
})
export class HeroeModule { }
