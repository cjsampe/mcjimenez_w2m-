import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../entity/heroe.entity';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  createHeroe(heroe: HeroeModel){
    return this.http.post<HeroeModel>(`${this.url}heroes`, heroe);
  }

  getAllHeroes(){
    return this.http.get<HeroeModel[]>(`${this.url}heroes`);
  }

  getHeroeById(id: string){
    return this.http.get<HeroeModel[]>(`${this.url}heroes/${id}`);
  }

  updateHeroe(heroe: HeroeModel) {
    return this.http.put<HeroeModel>(`${this.url}heroes/${heroe.id}`, heroe);
  }

  deleteHeroe(id: string) {
    return this.http.delete<HeroeModel>(`${this.url}heroes/${id}`);
  }
}

