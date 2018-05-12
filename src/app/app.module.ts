import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //because of [(ngModel)]="name" (2way bindings)


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //because of [(ngModel)]="name" (2way bindings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
