import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {
  @Output() updateValue=new EventEmitter()

  
   color='Orange'
  constructor() { }

  ngOnInit(): void {
  }
  clickValue(){
    console.log(this.color)
    this.updateValue.emit(this.color)
  }
}
