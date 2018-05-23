import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public searchName;
  public firstLetter;
  @Input() logged;

  public database = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.refreshDatabase();
  }

  private refreshDatabase() {
    this._apiService.readDatabase().subscribe(data => this.database = data);
  }

  private prepareDatabase(firstLetter = '', searchName = '', sortProp = 'name', sortAsc = true) {
    let data = this.database.sort(function(a, b) {
      if ( sortAsc ) {
        return a[sortProp].localeCompare(b[sortProp]);
      } else {
        return b[sortProp].localeCompare(a[sortProp]);
      }
      // if(asc) return (a[sortProp] > b[sortProp]) ? 1 : ((a[sortProp] < b[sortProp]) ? -1 : 0);
      // else return (b[sortProp] > a[sortProp]) ? 1 : ((b[sortProp] < a[sortProp]) ? -1 : 0);
    });
    data = data.filter(obj => obj.name.includes(searchName));
    if (firstLetter !== '') {
      data = data.filter(obj => obj.name.charAt(0) === firstLetter);
    }
    if (firstLetter !== '' || searchName !== '') {
      return data;
    } else {
      return;
    }
  }

  private alphabet() {
    let letters = [];
    for (const obj of this.database) {
      if (obj.name) {
        letters.push(obj.name.substr(0, 1));
      }
    }
    letters = letters.filter(function (item, index, array) { return array.indexOf(item) === index; } );
    return letters.sort( function(a, b) { return a.localeCompare(b); } );
  }

  private setSearchName(s) {
    this.searchName = s;
  }

  private setFirstLetter(l) {
    this.firstLetter = l;
  }

  private delete(junkId) {
    this._apiService.deleteFromDatabase(junkId).subscribe(
      suc => { },
      err => { },
      () => { this.refreshDatabase(); }
    );
    // this.database = this.database.filter(item => item.name !== junkName);
  }

  public disableLetter(i) {
    return i === this.alphabet().indexOf(this.firstLetter);
  }

}
