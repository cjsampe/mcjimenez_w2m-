import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslocoModule } from '@ngneat/transloco';
import { ActivatedRoute } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from '../../heroes-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            CommonModule, MatSlideToggleModule, MatButtonModule, MatIconModule,
            MatListModule, MatInputModule, MatTableModule, MatDialogModule,
            MatPaginatorModule, TranslocoModule, HttpClientModule, FormsModule,
            ReactiveFormsModule, HeroesRoutingModule, MatProgressSpinnerModule,
            AppRoutingModule, NgModule, RouterTestingModule, ActivatedRoute 
        ],
      declarations: [HeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
