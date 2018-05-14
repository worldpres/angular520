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

  public searchName;

  private database = [
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
      "name" : "śtoster2",
      "place" : ["wystawka", "PSZOK"],
    }
  ]

  private prepareDatabase(searchText='', sortProp='name', sortAsc=true) {
    let data = this.database.sort(function(a, b) {
      if(sortAsc) return a[sortProp].localeCompare(b[sortProp]);
      else return b[sortProp].localeCompare(a[sortProp]);
      //if(asc) return (a[sortProp] > b[sortProp]) ? 1 : ((a[sortProp] < b[sortProp]) ? -1 : 0);
      //else return (b[sortProp] > a[sortProp]) ? 1 : ((b[sortProp] < a[sortProp]) ? -1 : 0);
    });
    return data.filter(obj => obj.name.includes(searchText));
  }

  private alphabet(){
    let letters = [];
    for (const obj of this.database) {
      if(obj.name) letters.push(obj.name.substr(0,1));
    }
    letters = letters.filter(function (item, index, array) {return array.indexOf(item) == index;});
    return letters.sort( function(a, b){ return a.localeCompare(b); } );
  }

}
