import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslocoModule } from '@ngneat/transloco';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from '../../heroes-routing.module';



@NgModule({
  declarations: [
    HeroesComponent

  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    TranslocoModule,
    MatTableModule,
    ReactiveFormsModule,
    HeroesRoutingModule

  ]
})
export class HeroesModule { }
