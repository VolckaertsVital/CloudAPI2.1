import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService }
  from 'angular-6-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login'; 
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

export function socialConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('app-id')
      }
    ]
  );
  return config;
}



  @NgModule({
    declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      CounterComponent,
      FetchDataComponent,
      AirsoftComponent,
      DetailsComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
        { path: '', component: LoginComponent, pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'airsoft', component: AirsoftComponent },
        { path: 'details', component: DetailsComponent },
        { path: 'login', component: LoginComponent }
      ])
    ],
    providers: [AuthService,
      {
        provide: AuthServiceConfig,
        useFactory: socialConfigs
      }],
    bootstrap: [AppComponent]


  })
  export class AppModule { }

