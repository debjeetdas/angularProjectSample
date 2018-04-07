import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';


import { GeneralService } from './general.service';
import { SharedService } from './shared.service';
import { ShowLoadingComponent } from './show-loading/show-loading.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ShowLoadingComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [GeneralService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
