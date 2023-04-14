import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    TranslocoModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
