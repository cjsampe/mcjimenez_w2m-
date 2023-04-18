import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoModule } from '@ngneat/transloco';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslocoModule],
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled= fixture.nativeElement;
  });

    //create component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

    //snapshot
  it('must be equal to snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

});
