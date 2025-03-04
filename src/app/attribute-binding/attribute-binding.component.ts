import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  imports: [],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css'
})
export class AttributeBindingComponent {

  submitbtn:string =  "submit";

  name:string = "text" ; 

  btn:string = "button";
  
  num: any = "number" ;

}
