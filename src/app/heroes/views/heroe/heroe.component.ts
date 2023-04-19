import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/entity/heroe.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesServiceService } from '../../heroes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  formHeroe: FormGroup;

  //loading
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private heroesService: HeroesServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();

    const id = this.route.snapshot.paramMap.get('id') || '';

    this.heroesService.getHeroeById(id).subscribe((resp: any) => {
      this.heroe = resp;
      this.loading = false;
      this.loadData();
    });
  }

  get superheroNoValid() {
    return this.formHeroe.get('superhero');
  }

  get publisherNoValid() {
    return this.formHeroe.get('publisher');
  }

  get alterNoValid() {
    return this.formHeroe.get('alter_ego');
  }

  createForm() {
    this.formHeroe = this.formBuilder.group({
      id: [''],
      superhero: ['', [Validators.required, Validators.minLength(3)]],
      publisher: ['', [Validators.required, Validators.minLength(3)]],
      alter_ego: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  loadData() {
    this.formHeroe.patchValue(this.heroe);
  }

  save() {
    if (this.formHeroe.invalid) {
      return;
    }

    this.heroe = this.formHeroe.value;

    this.loading = true;
    let call: Observable<HeroeModel>;

    if (this.heroe.id) {
      call = this.heroesService.updateHeroe(this.heroe);
    } else {
      call = this.heroesService.createHeroe(this.heroe);
    }

    call.subscribe(() => {
      this.loading = false;
      this.router.navigateByUrl('/heroes');
    });
  }
}
