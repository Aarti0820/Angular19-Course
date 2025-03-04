import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-utility-service',
  imports: [],
  templateUrl: './utility-service.component.html',
  styleUrl: './utility-service.component.css'
})
export class UtilityServiceComponent {
  formateDate:string;

  constructor(private utilityservice : UtilityService){
    const sampleDate = new Date();
    this.formateDate = this.utilityservice.formateDate(sampleDate)
  }

}
