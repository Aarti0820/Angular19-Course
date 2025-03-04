import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

today: Date = new Date();

price:number = 242342.32;
percentage:number = 938.2387;
message:string = 'hello Angular';
user = {
  name: 'john' , age : 15 , city:'pune'
};
items:string[] = ['Angular ' , 'React' , 'js']
}
