import { Component, OnInit } from '@angular/core';
import { SocialLoginModule, AuthService, GoogleLoginProvider } from 'angular-6-social-login'; 
import { Redirect } from 'auth0-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SocialLoginModule, AuthService]
})
export class LoginComponent implements OnInit {

  User: any;
  loggedIn: boolean;

  constructor(private _socialAuthServ: AuthService) { }

  ngOnInit() {
    
  }

  socialSignIn(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socialAuthServ.signIn(platform).then((Response) => {
      console.log(platform + " logged in user data is =", Response);

      this.User = Response;
      this.loggedIn = true;
      
    }
    
  );

  }

  
  signOut(): void {
    this._socialAuthServ.signOut();
    this.loggedIn = false;
    console.log('User has signed out');
  }
}
