import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-event-first',
  templateUrl: './user-event-first.component.html',
  styleUrls: ['./user-event-first.component.scss']
})
export class UserEventFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  catchCustomEvent(ev: any): void {
    console.log(ev)
  }
}
