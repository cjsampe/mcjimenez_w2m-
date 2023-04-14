import { Component, OnInit, ViewChild} from '@angular/core';

import { HeroesServiceService } from '../../heroes-service.service';
import { Heroe, HeroeModel } from 'src/app/entity/heroe.entity';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesServiceService]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource: MatTableDataSource<Heroe>;
  search: FormControl= new FormControl('', []);
  time: number; //time by search 
  myGroup: FormGroup;

 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private heroesService: HeroesServiceService){
    


  }
  
  ngOnInit(){

    this.searchHeroes('');
    
    this.myGroup = new FormGroup({
      search: this.search
    });

    this.search.valueChanges.pipe(debounceTime(this.time)).subscribe(data =>{
      this.searchHeroes(data)
    })

    this.time = 600;
  }

  searchHeroes(search:string){
    this.heroesService.getAllHeroesByName(search).subscribe( (resp) => {
      this.heroes = resp;
      //Change of location relative to the Angular material sample model.
      //In the code example included in the ngAfterViewInit(). 
      //Modified to wait for a response from the request and to be able to collect it, otherwise empty.
      this.dataSource = new MatTableDataSource(resp);
      //Change of location relative to the Angular material sample model.
      //In the code example included in the ngAfterViewInit(). 
      //Modified to wait for a response from the request and to be able to collect it, otherwise empty.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });

  }

  deleteHeroe( heroe: HeroeModel){

    //  //PREGUNTA SI ESTÁ SEGURO DE BORRARLO
    //  Swal.fire({
    //   title: `¿Está seguro que quiere borrar a ${ heroe.nombre}?`,
    //   showCancelButton: true,
    //   confirmButtonText: 'Borrar',
    // }).then(resp => {
      
      // if (resp.value) {
        // borrar desde la posición i, 1 posición
        this.heroesService.deleteHeroe( heroe.id! ).subscribe();
        //this.heroes.splice(i, 1); 

  }
        

}



