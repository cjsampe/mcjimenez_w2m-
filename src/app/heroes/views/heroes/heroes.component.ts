import { Component, OnInit, ViewChild } from '@angular/core';

import { HeroesServiceService } from '../../heroes-service.service';
import { Heroe, HeroeModel } from 'src/app/entity/heroe.entity';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

//dialog
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesServiceService],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  search: FormControl = new FormControl('', []);
  time: number; //imput search - time since the user stops typing until the start of the search
  myGroup: FormGroup;

  //table
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource: MatTableDataSource<Heroe>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private heroesService: HeroesServiceService,
              public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.searchHeroes('');

    this.myGroup = new FormGroup({
      search: this.search,
    });

    this.time = 600;

    this.search.valueChanges.pipe(debounceTime(this.time)).subscribe((data) => {
      this.searchHeroes(data);
    });

    
  }

  searchHeroes(search: string) {
    this.heroesService.getAllHeroesByName(search).subscribe((resp) => {
      this.heroes = resp;
      //Change of location relative to the Angular material sample model.
      //In the code example included in the constructor().
      //It must be included in the ngOnInit since the data is obtained from the HTTP call. In the example they are declared inside the document.
      
      this.dataSource = new MatTableDataSource(resp);
      //Change of location relative to the Angular material sample model.
      //In the code example included in the ngAfterViewInit().
      //Modified to wait for a response from the request and to be able to collect it, otherwise empty.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteHeroe(heroe: HeroeModel) {
    //  //PREGUNTA SI ESTÁ SEGURO DE BORRARLO
    //  Swal.fire({
    //   title: `¿Está seguro que quiere borrar a ${ heroe.nombre}?`,
    //   showCancelButton: true,
    //   confirmButtonText: 'Borrar',
    // }).then(resp => {

    // if (resp.value) {
    // borrar desde la posición i, 1 posición
    this.heroesService.deleteHeroe(heroe.id!).subscribe();
    this.searchHeroes('');
  }

  openDialog(heroe: HeroeModel){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { width: '350px', data: 'Are you sure deletion this hereoe?'});
    dialogRef.afterClosed().subscribe( res => {
      console.log(res);
      if(res){
        console.log('hola');
        
        this.deleteHeroe(heroe);
        this.searchHeroes('');
      } 
    });
  }
}
