import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-event-second',
  templateUrl: './user-event-second.component.html',
  styleUrls: ['./user-event-second.component.scss']
})
export class UserEventSecondComponent implements OnInit {

  contactPerson = 'Peter'

  @Output() saveContactPerson = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson)
  }
}
