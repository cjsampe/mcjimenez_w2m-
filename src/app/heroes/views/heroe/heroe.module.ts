import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { HeroeComponent } from './heroe.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    TranslocoModule
  ]
})
export class HeroeModule { }
