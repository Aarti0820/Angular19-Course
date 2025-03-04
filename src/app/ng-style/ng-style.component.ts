import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {


  trafficStatus : String = 'stop'

  settrafficStatus(status : string){

    this.trafficStatus = status;
  }

}
