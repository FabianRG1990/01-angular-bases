import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public numero: number = 10;

  increaseBy(value: number): void {
    this.numero += value;
  }

  reset() {
    this.numero = 10;
  }
}
