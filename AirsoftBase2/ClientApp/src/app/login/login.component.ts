import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  

  constructor() { }

  ngOnInit() {
  }

  socialSignIn(): void {
    
    console.log('User has signed ou');
  }

  
  signOut(): void {
   
    console.log('User has signed out');
  }
}
