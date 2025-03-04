import { Component } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api-method',
  imports: [],
  templateUrl: './get-api-method.component.html',
  styleUrl: './get-api-method.component.css'
})
export class GetApiMethodComponent {

  posts: any[] = [];

  constructor(private apiserivice : GetApiService){}

  ngOnInit(){
    this.apiserivice.getPosts().subscribe((data => {
      this.posts = data;
    }))
  }

}
