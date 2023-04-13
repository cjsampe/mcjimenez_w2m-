import { Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HeroesServiceService } from '../../heroes-service.service';
import { HeroeModel } from 'src/app/entity/heroe.entity';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesServiceService]
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  filterPost = '';
  
  
  dataSource = new MatTableDataSource<HeroeModel>(this.heroes);

  constructor( private heroesService: HeroesServiceService){

  }

  ngOnInit(){

    this.heroesService.getAllHeroes().subscribe( (resp) => {
      this.heroes = resp 
      console.log(resp);});
     

      //this.dataSource.paginator = this.paginator;  
      
  }

  deleteHeroe( heroe: HeroeModel, i: number){

    //  //PREGUNTA SI ESTÁ SEGURO DE BORRARLO
    //  Swal.fire({
    //   title: `¿Está seguro que quiere borrar a ${ heroe.nombre}?`,
    //   showCancelButton: true,
    //   confirmButtonText: 'Borrar',
    // }).then(resp => {
      
      // if (resp.value) {
        // borrar desde la posición i, 1 posición
        this.heroes.splice(i, 1); 
    this.heroesService.deleteHeroe( heroe.id! ).subscribe();

  }
}



