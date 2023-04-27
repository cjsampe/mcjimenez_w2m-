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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './shared/loader/loader.interceptor';
import { LoaderComponent } from './shared/loader/loader.component';
@NgModule({
  declarations: [AppComponent, LoaderComponent],
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
    HeroesModule,
    MatProgressSpinnerModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
