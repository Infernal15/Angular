import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-route',
  templateUrl: './one-route.component.html',
  styleUrls: ['./one-route.component.scss']
})
export class OneRouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homePageUrl: string = '/'

  classes: string = 'not-ted'

  isRed: boolean = true

  isHalf: boolean = true
}
