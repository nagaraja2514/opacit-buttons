import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Output() updateValue=new EventEmitter()
color:string='red'

  clickValue(){
    console.log(this.color)
    this.updateValue.emit(this.color)
  }
}
