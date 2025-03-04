import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-directive',
  imports: [CommonModule],
  templateUrl: './ngclass-directive.component.html',
  styleUrl: './ngclass-directive.component.css'
})
export class NgclassDirectiveComponent {


  isActive : boolean = false;


  toggleState(){
    this.isActive = !this.isActive;
  }

}
