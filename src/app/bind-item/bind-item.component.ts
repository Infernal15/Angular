import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bind-item',
  templateUrl: './bind-item.component.html',
  styleUrls: ['./bind-item.component.scss']
})
export class BindItemComponent implements OnInit {

  @Input() name: string = 'Unknown'
  @Output() nameChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  showContactPerson(): void {
    this.name = 'Peter'
    this.nameChange.emit(this.name)
  }
}
