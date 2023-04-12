import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/views/heroes/heroes.component'; 
import { HeroeComponent } from './heroes/views/heroe/heroe.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/:id', component: HeroeComponent},
  // {path: 'navbar', component: NavbarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
