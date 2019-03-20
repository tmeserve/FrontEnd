import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
var request = require('request');

interface IApiResponse
{
    usernames: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    ) {
      auth.handleAuthentication();
    }

    ngOnInit()
    {
      if (localStorage.getItem('isLoggedIn') === 'true')
      {
        this.auth.renewTokens();
      }
    }
}
