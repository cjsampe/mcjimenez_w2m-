import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogModule } from './shared/confirm-dialog/confirm-dialog.module';
import { HomeModule } from './home/home.module';
import { HeroeModule } from './heroes/views/heroe/heroe.module';
import { HeroesModule } from './heroes/views/heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    HttpClientModule,
    TranslocoRootModule,
    MatButtonModule,
    MatDialogModule,
    ConfirmDialogModule,
    HomeModule,
    HeroeModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
