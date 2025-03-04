import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-scoped-service',
  imports: [],
  templateUrl: './scoped-service.component.html',
  styleUrl: './scoped-service.component.css',
  providers:[Notification],
})
export class ScopedServiceComponent {

  constructor(private notificationservice : NotificationService){}

  sendNotification(){
    this.notificationservice.addNotification('new message');
  }

  getNotification(){
    this.notificationservice.getNotification();
  }

}
