import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{ title }}</h1>

<button (click)="acumular(base)">+ {{ base }}</button>

<span>{{ num }}</span>
<!-- <span>{{ base }}</span> -->

<button (click)="acumular(-base)">- {{ base }}</button>

    `
})

export class CotadorComponent {
  title = 'Hola Mundo';
  num: number = 10;
  base: number = 5


  acumular(value: number) {
    this.num += value;
  }

}