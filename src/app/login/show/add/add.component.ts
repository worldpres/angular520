import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() database;
  public name;
  public place;
  public info;

  constructor() { }

  ngOnInit() {
  }

  private add() {
    let found = false;
    for (const object of this.database) {
      if (object.hasOwnProperty('name') && object.name === this.name) {
        found = true;
        this.info = 'Podana nazwa już istnieje.';
        break;
      }
    }
    if (!found) {
      this.database.push({'name': this.name, 'place': this.place});
      this.name = '';
      this.place = '';
      this.info = 'Dodano do aplikacji. Nie zapomnij wysłać na serwer.';
    }
  }

  private isDisable() {
    if (this.name && this.place) { return false; }
    return true;
  }
}
