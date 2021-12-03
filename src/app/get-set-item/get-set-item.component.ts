import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-set-item',
  templateUrl: './get-set-item.component.html',
  styleUrls: ['./get-set-item.component.scss']
})
export class GetSetItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  _name: string = ''

  @Input() set name(value: string) {
    this._name = value + '*'
  }

  get name(): string {
    return this._name || 'Unknown'
  }
}
