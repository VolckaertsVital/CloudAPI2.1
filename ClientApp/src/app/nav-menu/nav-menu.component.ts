import { Component } from '@angular/core';
import { SocialLoginModule, AuthService, GoogleLoginProvider } from 'angular-6-social-login'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [SocialLoginModule, AuthService]
})
export class NavMenuComponent {

  constructor(private _socialAuthServ: AuthService, public router: Router) { }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  signOut(): void {
    this._socialAuthServ.signOut();
    this.router.navigate(['/']);
    console.log('User has signed out');
  }
}
