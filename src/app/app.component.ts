import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color-opacity';

  orange: boolean = false
  yellow: boolean = false
  red: boolean = false

  color: string = ''
  // yellow:boolean=false

  valueChange1(data: any) {
    this.color = data

    this.orange=false
    this.yellow=true
    this.red=true
    // if(this.yellow==!false){
    //   this.yellow=!true
    // }else{
    //   this.yellow=!false
    // }

  //   if (this.orange == true) {
  //     this.orange = false
  //     this.yellow = true
  //     this.red = true
  //   } else if (this.yellow == true) {
  //     this.yellow = false
  //     this.orange = true
  //     this.red = true
  //   } else if (this.red == true) {
  //     this.red = false
  //     this.orange = true
  //     this.yellow = true

  //   }else{
  //     this.red = true
  //     this.orange = true
  //     this.yellow = true
  //   }
 }
 valueChange2(data: any) {
  this.color = data
  
  this.orange=true
    this.yellow=false
    this.red=true

 }

 valueChange3(data: any) {
  this.color = data
  this.orange=true
    this.yellow=true
    this.red=false
 }



}
