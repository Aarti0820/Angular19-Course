import { Component, NgModule } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-injectable-service',
  templateUrl: './injectable-service.component.html',
  styleUrl: './injectable-service.component.css',
  
  
})
export class InjectableServiceComponent {

constructor(private logger : LoggerService){}


logmessage():void {
  this.logger.log('This is Log Message');
} 
 
warnmessage():void {
  this.logger.warn('This is Warn Message');
}

errormessage():void {
  this.logger.error('This is error Message');
}
}
