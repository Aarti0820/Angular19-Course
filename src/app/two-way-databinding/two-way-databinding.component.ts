import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-databinding',
  imports: [FormsModule],
  templateUrl: './two-way-databinding.component.html',
  styleUrl: './two-way-databinding.component.css'
})
export class TwoWayDatabindingComponent {

  username : string  = "john";

  // updateusername(event :any){
  //   this.username = event.target.value ;
  // }

}
