

import { Component } from "@angular/core"

@Component({
  selector: 'app-counter', // Este parametro es el nombre para hacer referencia a este componente desde el codigo html.
  // con <app-counter></app-counter> incrustamos el template del componente dentro del html
  template:`
    <p>
      Counter: {{counter}}
    </p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    <hr>
  `
})
export class CounterComponent{
  public counter:number=10;

  increaseBy(value:number):void{
    this.counter =  this.counter + value;
  }
  resetCounter():void{
    this.counter = 10;
  }
}
