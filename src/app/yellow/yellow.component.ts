import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() updateValue = new EventEmitter()
  color: string = 'Yellow'


  clickValue() {
    console.log(this.color)
    this.updateValue.emit(this.color)
    
  }
}