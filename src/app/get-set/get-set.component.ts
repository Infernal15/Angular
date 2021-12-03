import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-set',
  templateUrl: './get-set.component.html',
  styleUrls: ['./get-set.component.scss']
})
export class GetSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  contactPerson: string = ''
}
