import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NavbarComponent } from './navbar.component';
import { TranslocoModule } from '@ngneat/transloco';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoModule, MatToolbarModule, MatButtonModule],
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  //create component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //snapshot
  it('must be equal to snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  //language
  it('must change language', () => {
    component.selectLanguage('en');
  });
});
