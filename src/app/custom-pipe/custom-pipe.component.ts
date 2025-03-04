import { Component } from '@angular/core';
import { } from '@angular/core';
import { ReverseStringPipe } from '../reverse-string.pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-custom-pipe',
  imports: [ReverseStringPipe , CommonModule],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {

}
