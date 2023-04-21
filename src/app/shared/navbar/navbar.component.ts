import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

interface Lenguages {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  selectLang = 'es';

  selectedValue: string;

  lenguages: Lenguages[] = [
    { value: 'en', viewValue: 'English/Inglés' },
    { value: 'es', viewValue: 'Spanish/Español'}
  ];

  constructor(private translocoService: TranslocoService) {
    this.selectLanguage();
  }

  selectLanguage(LANG: string = this.selectLang) {
    this.translocoService.setActiveLang(LANG);
  }
}
