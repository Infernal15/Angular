import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.scss']
})
export class EventHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showContacts(): void {
    console.log('Some text')
  }

  showContactsOther(ev: any): void {
    console.log(ev.target)
    console.log(ev.target.value) //в данном случае undefined
    console.log(ev.keyCode) //в данном случае undefined
  }
}
