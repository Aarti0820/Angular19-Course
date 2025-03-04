import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {

  username:string = "john";

  // updateusername(event :any){

  //   this.username = event.target.value;

  // }

}
