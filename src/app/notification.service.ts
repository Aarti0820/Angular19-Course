import { Injectable } from '@angular/core';

@Injectable(
)
export class NotificationService {

  constructor() { }

  private notification: string[] = [];

  addNotification(message: string){
    this.notification.push(message);
  }

  getNotification(){
    return this.notification;
  }

 
}
