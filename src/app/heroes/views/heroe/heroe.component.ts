import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/entity/heroe.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesServiceService } from '../../heroes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();
  f!: FormGroup;


constructor(private fb: FormBuilder,
            private heroesService: HeroesServiceService,
            private router: Router,
            private route: ActivatedRoute){
  this.createForm();
}

ngOnInit(){
  this.createForm();

    const id = this.route.snapshot.paramMap.get('id') || '';
    

    this.heroesService.getHeroeById(id).subscribe((resp: any) => {
      console.log(resp);
      this.heroe = resp;
      this.heroe.id = id;
      this.loadData();
    });

}

get superheroNoValid() {
  return this.f.get('superhero');
}

get publisherNoValid() {
  return this.f.get('publisher');
}

get alterNoValid() {
  return this.f.get('alter_ego');
}


createForm(){
  this.f = this.fb.group({
    id:[''],
    superhero:['', [Validators.required, Validators.minLength(3)]],
    publisher:['', [Validators.required, Validators.minLength(3)]],
    alter_ego:['', [Validators.required, Validators.minLength(3)]],
  })
}

loadData() {
  this.f.patchValue(this.heroe);
}


save(f: FormGroup){
  this.heroe = this.f.value;

  
  let call: Observable<HeroeModel>;

  if (this.heroe.id){
    call = this.heroesService.updateHeroe( this.heroe );
  }else{
    call = this.heroesService.createHeroe( this.heroe );

  }
  
  call.subscribe ( resp =>{
    resp = this.heroe; //opcional para que no me error

  //   Swal.fire('Tu héroe', 'Se actualizó correctamente', 'info');
  //   Swal.update({
  //   icon: 'success'
  // }); 
  });


  this.router.navigateByUrl('/heroes');
}
}
