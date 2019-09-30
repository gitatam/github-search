import { Component, OnInit } from '@angular/core';
import { FetchUserDataService } from 'src/app/fetch-user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userQuery: string;
  userProfile: any;

  constructor(private service: FetchUserDataService) { 
    this.service.getUserData().subscribe(response =>{
      console.log(response);
      this.userProfile = response;
    });
   }

  ngOnInit() {
  }

}
