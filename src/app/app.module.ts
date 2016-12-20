import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyC7uon8iP3eZ-HGprHx2P9sWcGqvayLfFw",
  authDomain: "angularone-d9350.firebaseapp.com",
  databaseURL: "https://angularone-d9350.firebaseio.com",
  storageBucket: "angularone-d9350.appspot.com",
  messagingSenderId: "1050788679244"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
