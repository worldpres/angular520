import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    login: 'a',
    password: 'a',
    logged: false,
    loggedText: 'Po zalogowaniu uzyskasz prawa do edycji.'
  };

  constructor() { }

  ngOnInit() { }

  private logIn(login, password) {
    if (this.user.login === login && this.user.password === password) {
      this.user.logged = true;
      this.user.loggedText = 'Zalogowany: ' + this.user.login;
    } else {
      this.user.loggedText = 'Błędny login lub hasło!';
    }
  }

  private logOut() {
    this.user.logged = false;
    this.user.loggedText = 'Po zalogowaniu uzyskasz prawa do edycji.';
  }
}
