import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CrewComponent} from './crew/crew.component';
import {FlightComponent} from './flight/flight.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrewComponent,FlightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crew';
}
