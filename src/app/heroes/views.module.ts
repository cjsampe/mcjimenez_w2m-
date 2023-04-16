import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesModule } from './views/heroes/heroes.module';
import { HeroeModule } from './views/heroe/heroe.module';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroesModule,
    HeroeModule,
    HeroesRoutingModule
  ]
})
export class ViewsModule { }
