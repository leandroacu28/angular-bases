//component es un decorador que transforma mi clase en un componente
//usando el snipperd de Angular, ponemos a- component y se importa la estructura
import { Component } from '@angular/core';


@Component({
  selector:'app-counter',
  template:`
  <h3>counter: {{counter}}</h3>

  <button (click)="increaseby(+1)">+1</button>
  <button (click)="resetCounter()"> Reset_Number</button>
  <button (click)="increaseby(-1)">-1</button>

  `,
})

export class CounterComponent {
  public counter: number =10; //valor por defecto

  //nuevo metodo que no regresa nada
  increaseby( value:number):void{
    this.counter += value;
  }
  resetCounter():void{
    this.counter=10;
  }
}
