import { Component } from '@angular/core';
import { CrewComponent } from '../crew/crew.component';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [CrewComponent],
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {
  message: string = '';

  receiveMessage(event: string) {
    this.message = event; 
  }
}
