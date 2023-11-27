import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p> Counter: {{counter}} </p>
    <button (click)="increseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increseBy(-1)">-1</button>
    `
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    public increseBy( value: number) : void{
      // this.counter = this.counter + 1;
      this.counter += value;
    }

    public resetCounter(): void{
      this.counter = 10;
    }

}