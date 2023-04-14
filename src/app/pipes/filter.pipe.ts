import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // const Heroes = [];
    // for(const heroes of value){
    //   if(heroes.superhero.toLowerCase().indexOf(arg.toLowerCase()) > -1){
    //     Heroes.push(heroes);
    //     console.log(arg);

    //   }
    // }
    // return Heroes;
  }

}
