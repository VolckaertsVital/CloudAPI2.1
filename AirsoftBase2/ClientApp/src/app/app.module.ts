import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
//import { GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

/*let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("542134881557-2lquhv5al3bbs77in92ejs2bs886m0mn.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}*/



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
    //SocialLoginModule.initialize(config),
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
  providers: [
    /*{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }*/],
  bootstrap: [AppComponent]


})
export class AppModule { }
