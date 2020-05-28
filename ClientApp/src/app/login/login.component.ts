import { Component, OnInit } from '@angular/core';
import { SocialLoginModule, AuthService, GoogleLoginProvider } from 'angular-6-social-login'; 
import { Redirect } from 'auth0-js';
import { Router } from '@angular/router';
import { Data } from '../Services/Data.service';
import { Jwt } from '../classes/Jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SocialLoginModule, AuthService]
})
export class LoginComponent implements OnInit {

  User: any;

  Jwt: Jwt;

  constructor(private _socialAuthServ: AuthService, public router: Router, public _jwt: Jwt) { }

  ngOnInit() {
    
  }


  socialSignIn(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socialAuthServ.signIn(platform).then((Response) => {
      console.log(platform + " logged in user data is =", Response);

      this.User = Response;
      console.log(this.User.idToken);
      this.router.navigate(['/home'], this.User);

      this._jwt = this.User.idToken;
      //console.log(this._jwt);
      
    }
    
  );

  }

  /*get Data(): any{
    return this.data.loginData;
  }
  set _Data(value: any) {
    this.data.loginData = value;
  }*/

  
  signOut(): void {
    this._socialAuthServ.signOut();
    this.User = null;
    this.router.navigate(['/']);
    console.log('User has signed out');
  }
}
