import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  constructor() { }

  flag:boolean = true


  apply(value:string){
    this.flag = value == "login"?true : false;
  }

}
