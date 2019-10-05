import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModalPageComponent } from './profile-modal-page/profile-modal-page.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileModalPageComponent,
    SplashPageComponent
  ],
  entryComponents: [
    SplashPageComponent,
    ProfileModalPageComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
