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
    },
    {
      "name" : "toster2",
      "place" : ["wystawka", "PSZOK"],
    }
  ]

  public sortDatabase(prop, asc=true) {
    return this.database.sort(function(a, b) {
      if(asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    });
  }

  public sortedDatabase = this.sortDatabase('name');

  public alphabet(){
    let letters = [];
    for (const obj of this.database) {
      if(obj.name) letters.push(obj.name.substr(0,1));
    }
    letters = letters.filter(function (item, index, array) {return array.indexOf(item) == index;});
    return letters.sort();
  }

}
