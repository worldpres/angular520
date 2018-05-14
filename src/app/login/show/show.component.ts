import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public database = [
    {
      "name" : "monitory",
      "place" : ["wystawka"],
    },
    {
      "name" : "toster",
      "place" : ["wystawka", "PSZOK"],
    },
    {
      "name" : "opony od samochodu osobowego",
      "place" : ["wystawka", "PSZOK"],
    }
  ]
}
