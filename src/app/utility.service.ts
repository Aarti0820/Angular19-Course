import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }


  formateDate(date:Date) : string{

    return date.toLocaleDateString('en-US' , {year: 'numeric' , month : 'long' , day:'numeric'})
  }
}
