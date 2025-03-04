import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listner',
  imports: [],
  templateUrl: './host-listner.component.html',
  styleUrl: './host-listner.component.css'
})
export class HostListnerComponent {

  bgclr = 'blue';

  @HostListener('mouseenter') onmouseEnter(){

    this.bgclr = 'green';

  }

  @HostListener('mouseleave') onmouseleave(){

    this.bgclr = 'yellow';

  }

  @HostListener('click') onmouseclick(){

    this.bgclr = 'gray';

  }

}
