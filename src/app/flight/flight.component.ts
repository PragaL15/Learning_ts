import { Component } from '@angular/core';
import { CrewComponent } from '../crew/crew.component';
@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [CrewComponent],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {

messageAsParent: string = "Hello Pragall"
sayHi : boolean = false

}
