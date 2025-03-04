import { Component } from '@angular/core';
import { AboutButtonComponent } from "../about-button/about-button.component";
import { HomeButtonComponent } from "../home-button/home-button.component";
import { ServiceButtonComponent } from "../service-button/service-button.component";

@Component({
  selector: 'app-header',
  imports: [AboutButtonComponent, HomeButtonComponent, ServiceButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
