import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // renders the correct name in the div tag 
  name="Spacecraft Operations"; 

  getName(){
    if(!this.name)
    {
      this.name="username";
    }
    return this.name; 
  }

}
