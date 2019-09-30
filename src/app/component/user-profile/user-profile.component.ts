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
  userRepos: any;

  constructor(private service: FetchUserDataService) {}

   gitSearch() {
    this.service.updateSearch(this.userQuery);
    this.service.getUserData().subscribe(response => {
      this.userProfile = response;
    });
    this.service.getGitRepo().subscribe(repoResponse => {
      console.log(repoResponse);
      this.userRepos = repoResponse;
    });
   }

  ngOnInit() {
  }

}
