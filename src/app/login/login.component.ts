import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
  public logged;
  public loggedText;
  
  private logMeIn(login, password){
    if(login=="a" && password=="a"){
      this.logged=true;
      this.loggedText="Zalogowany: "+login;
    }
    else{
      this.loggedText="Błędny login lub hasło!";
    }
  }
  
  private logMeOut(){
    this.logged=false;
    this.loggedText="";
  }
}
