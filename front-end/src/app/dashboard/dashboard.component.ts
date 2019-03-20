import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
var request = require('request');

interface IApiResponse
{
    usernames: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  posts = [''];
  title = 'front-end';
  url = 'http://0.0.0.0:3010/api';
  username = "";
  _usernames: string;
  _asyncResult: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    ) {
      auth.handleAuthentication();
    }

    Backend() {
      console.log("pressed")
    }

    test() {
      console.log('eeee');
      this.router.navigateByUrl('/backend');
    }

    usernames()
    {
      this._usernames = '';
      this.http.get(`${this.url}/usernames`,
      {
          headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.idToken}`)
      }).subscribe(
      data =>
      {
        console.log(data);
        this._usernames = data["name"];
        console.log(this._usernames);
      },
      error =>
      {
        this._usernames = error;
        console.log(this._usernames);
      });
    }
    ngOnInit()
    {
      if (localStorage.getItem('isLoggedIn') === 'true')
      {
        this.auth.renewTokens();
      }
    }
}
