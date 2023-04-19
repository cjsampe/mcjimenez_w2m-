import { TestBed } from '@angular/core/testing';

import { HeroesServiceService } from './heroes-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroesServiceService', () => {
  let service: HeroesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HeroesServiceService);
  });

  //created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //get
  it('should bring api information', () => {
    service.getHeroeById('00016H').subscribe((heroe) => {
      expect(heroe.superhero).toBe('WOLVERINE');
    });
  });
});
