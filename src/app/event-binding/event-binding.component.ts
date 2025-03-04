import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {


  buttonmessage:string = "";
  inputMessage:string = "";
  name:string ="java";

  onButtonclick(){
    this.buttonmessage = "button is clicked";
  }




  onInputchange(event :any){

    this.inputMessage = `text is:  ${event.target.value} `

  }


}
