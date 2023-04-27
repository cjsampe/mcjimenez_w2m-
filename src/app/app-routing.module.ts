import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {path: 'home', component: HomeComponent},
  
  {
    path: 'heroes',
    loadChildren: () =>
      import('src/app/heroes/views/heroes/heroes.module').then(
        (m) => m.HeroesModule
      ),
  },
  {
    path: 'heroe/:id',
    loadChildren: () =>
      import('src/app/heroes/views/heroe/heroe.module').then(
        (m) => m.HeroeModule
      ),
  },
  { path: `**`, redirectTo: `home` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
