import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
  public logged;
  public loggedText;
  
  public logMeIn(login, password){
    if(login=="a" && password=="a"){
      this.logged=true;
      this.loggedText="Witaj "+login;
    }
    else{
      this.loggedText="Błędny login lub hasło!";
    }
  }
  
  public logMeOut(){
    this.logged=false;
    this.loggedText="";
  }
}
