import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  avatar = `assets/icons/avatar_still.png`
  changeAvatar = (string:string)=>{
    this.avatar = `assets/icons/avatar_${string}`
  }

  plate = `assets/icons/plate_still.png`
  changePlate = (string:string)=>{
    this.plate = `assets/icons/plate_${string}`
  }


  ngOnInit(): void {
  }

}
