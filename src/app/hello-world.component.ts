import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template: `<div>{{ counter }}</div>
             <button (click)="increment()">Increment</button>`,

    styles: [`h1{
        color:blue;
    }`]
})

export class HelloWorldComponent {
    counter = false;  // This property holds the state

    increment() {
        this.counter = !this.counter;  // This updates the state
    }


}