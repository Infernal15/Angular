import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'World'

  printGreeting(): string {
    return 'Hello,' + this.name
  }
}
