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


import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from 'src/app/pipes/filter.pipe';


@NgModule({
  declarations: [
    HeroesComponent,
    FilterPipe

  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    TranslocoModule,
    MatTableModule,
    ReactiveFormsModule

  ]
})
export class HeroesModule { }
