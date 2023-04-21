import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { HeroeComponent } from './heroe.component';

import { HttpClientModule } from '@angular/common/http';

import { UppercaseDirective } from 'src/app/shared/directive/uppercase.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroeRoutingModule } from './heroe-routing.module';


@NgModule({
  declarations: [HeroeComponent, UppercaseDirective],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    TranslocoModule,
    MatProgressSpinnerModule,
    HeroeRoutingModule
  ],
})
export class HeroeModule {}
