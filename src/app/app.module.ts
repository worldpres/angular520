import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // because of [(ngModel)]="name" (2way bindings)
import { HttpClientModule } from '@angular/common/http'; // because of api (rest methods)

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './login/show/show.component';
import { AddComponent } from './login/show/add/add.component';
import { ApiService } from './api.service'; // because of api (rest methods)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // because of [(ngModel)]="name" (2way bindings)
    HttpClientModule // because of api (rest methods)
  ],
  providers: [ApiService], // because of api (rest methods)
  bootstrap: [AppComponent]
})

export class AppModule { }
