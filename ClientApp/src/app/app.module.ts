import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login'; 
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { freeapi } from './Services/freeapi.service';
import { Airsoft } from './Services/Airsoft.service';
import { Jwt } from './classes/Jwt';
import { SignUpComponent } from './sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AddComponent } from './add/add.component';




const google_oauth_client_id: string = "542134881557-2lquhv5al3bbs77in92ejs2bs886m0mn.apps.googleusercontent.com";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
])

export function provideConfig() {
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
      LoginComponent,
      SignUpComponent,
      AddComponent
      
    ],
    imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      SocialLoginModule,
      NgxPaginationModule, 
      FormsModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [{
      provide: AuthServiceConfig, useFactory: provideConfig
    }, freeapi, Airsoft, Jwt],
    bootstrap: [AppComponent]


  })
  export class AppModule { }

