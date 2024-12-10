import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crew',
  standalone: true,
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {
  @Output() messageEvent = new EventEmitter<string>(); 

  sendMsg() {
    this.messageEvent.emit('Hello Boss'); 
  }
}
