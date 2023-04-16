import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    HttpClientModule,
    TranslocoRootModule,
    HeroesRoutingModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
