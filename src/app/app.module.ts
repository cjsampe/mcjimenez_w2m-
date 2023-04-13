import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesModule } from './heroes/views/heroes/heroes.module'; 
import { HeroeModule } from './heroes/views/heroe/heroe.module';
import { NavbarModule } from './shared/navbar/navbar.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroesModule,
    HeroeModule,
    NavbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
