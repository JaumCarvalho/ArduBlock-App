import {Inject, Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})

export class SafePipe implements PipeTransform{
  constructor(@Inject(DomSanitizer) private sanitizer: DomSanitizer){}

  transform(value: string, type: string): SafeUrl {
    if (type === 'url'){
      return this.sanitizer.bypassSecurityTrustUrl(value);
    }
    console.warn('Tipo não suportado para sanitização', type);
    return value;
  }
}