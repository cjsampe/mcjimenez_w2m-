import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroeComponent } from './heroe.component'; 

const route: Routes = [
  {
    path: '',
    component: HeroeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class HeroeRoutingModule {}
