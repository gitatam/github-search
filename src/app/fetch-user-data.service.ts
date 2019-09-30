import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchUserDataService {

  accessToken = environment.token;
  gitUser = 'gitatam';
  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(`https://api.github.com/users/${this.gitUser}?access_token=${this.accessToken}`);
  }

  updateSearch(user: string) {
    this.gitUser = user;
  }

}
