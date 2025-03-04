import { Component } from '@angular/core';
import { IfDirectiveComponent } from "../if-directive/if-directive.component";

@Component({
  selector: 'app-counter',
  imports: [IfDirectiveComponent, IfDirectiveComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

   counter  = 0;


   increment() : void {
    this.counter++;
   }

   decrement() : void {
    this.counter--;
   }

}
