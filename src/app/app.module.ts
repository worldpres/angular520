import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //because of [(ngModel)]="name" (2way bindings)


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //because of [(ngModel)]="name" (2way bindings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
