import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-item',
  templateUrl: './input-output-item.component.html',
  styleUrls: ['./input-output-item.component.scss']
})
export class InputOutputItemComponent implements OnInit {

  @Input() name: string = ''
  @Output() saveContactPerson = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  saveContactPersonItem() {
    this.saveContactPerson.emit('Some name')
  }

}
