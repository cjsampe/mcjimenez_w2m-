import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { MatPaginatorModule } from '@angular/material/paginator';



import { AppRoutingModule } from 'src/app/app-routing.module';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HeroesComponent,

  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    //MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule

  ]
})
export class HeroesModule { }
