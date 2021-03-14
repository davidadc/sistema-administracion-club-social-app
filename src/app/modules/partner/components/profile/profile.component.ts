import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  public editValues:boolean = false
  
  constructor() { }

  ngOnInit() {}
  
  editDates(){
    this.editValues=!this.editValues;
    console.log(this.editValues);
  }


}
