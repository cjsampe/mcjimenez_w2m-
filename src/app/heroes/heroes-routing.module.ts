import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroeComponent } from './views/heroe/heroe.component';
import { HeroesComponent } from './views/heroes/heroes.component';



const route: Routes=[
  {
    path:'',
    children: [
      { path: 'heroes', component: HeroesComponent},
      { path: 'heroes/:id', component: HeroeComponent},
      { path: '**', redirectTo: 'heroes'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
