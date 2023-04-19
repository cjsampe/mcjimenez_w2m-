import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe, HeroeModel } from '../entity/heroe.entity';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesServiceService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  createHeroe(heroe: HeroeModel) {
    return this.http.post<HeroeModel>(`${this.url}heroes`, heroe);
  }

  getAllHeroesByName(filter: string) {
    return this.http.get<HeroeModel[]>(`${this.url}heroes`).pipe(
      map((heroes: Heroe[]) => {
        if (filter === '') {
          return heroes;
        } else {
          return heroes.filter((heroeSearch: Heroe) => {
            return (
              heroeSearch.superhero!.toLowerCase().indexOf(filter.toLowerCase()) > -1
            );
          });
        }
      })
    );
  }

  getHeroeById(id: string) {
    return this.http.get<HeroeModel>(`${this.url}heroes/${id}`);
  }

  updateHeroe(heroe: HeroeModel) {
    return this.http.put<HeroeModel>(`${this.url}heroes/${heroe.id}`, heroe);
  }

  deleteHeroe(id: string) {
    return this.http.delete<HeroeModel>(`${this.url}heroes/${id}`);
  }
}
