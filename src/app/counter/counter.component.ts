import { Component } from '@angular/core';

const initialCounterValue: number = 0;

@Component({
  // selector es el nombre que le daremos al componente para llamarlo
  selector: 'app-counter',
  // template es como se va a mostrar el componente, ya sea como archivo HTML o como un string HTML
  template: `
    <h3>Counter: {{ counter }}</h3>

    <!-- LLamar un método desde un boton -->
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <br />
    <button (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = initialCounterValue;

  // Definir un método para la clase
  increaseBy(value: number) {
    this.counter += value;
  }
  resetCounter() {
    this.counter = initialCounterValue;
  }
  constructor() {}
}
