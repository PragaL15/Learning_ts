import { Component, Input } from '@angular/core';
//import{ FlightComponent} from '../flight/flight.component';
@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
@Input() message: string = ""
@Input() bool : boolean = true
}
