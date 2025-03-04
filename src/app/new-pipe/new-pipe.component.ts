import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-pipe',
  imports: [CommonModule],
  templateUrl: './new-pipe.component.html',
  styleUrl: './new-pipe.component.css'
})
export class NewPipeComponent {

  today: Date = new Date();
  price:number =  4576576.464;
  percent:number = 45763;
  message: string = "hello Angular";

  user = {name: "john" , age :22};
  item:any[] = ['react' , 'Angular'];

}
 