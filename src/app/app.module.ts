import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment  } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { LoginComponent } from './home/login/login.component'; 
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login.html', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    initializeApp(environment.firebaseConfig);
  }
}


