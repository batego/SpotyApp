import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string, url: string): any {
    let val = value.split(':');
    // console.log(val);
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + val[1] + '/' + val[2] );
  }

}
