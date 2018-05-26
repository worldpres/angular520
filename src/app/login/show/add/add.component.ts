import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private added;
  @Input() database;
  @Output() uploaded = new EventEmitter<string>();

  public register = {
    name: '',
    place: '',
    info: ''
  };

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  private add() {
    this._apiService.addToDatabase(this.register.name, this.register.place).subscribe(data => this.added = data);

    // console.log(this.added);
    this.uploaded.emit('complete');

    /*
    let found = false;
    for (const object of this.database) {
      if (object.hasOwnProperty('name') && object.name === this.register.name) {
        found = true;
        this.register.info = 'Podana nazwa już istnieje.';
        break;
      }
    }
    */
    if (this.added) {
      // this.database.push({'name': this.register.name, 'place': this.register.place});
      this.register.name = '';
      this.register.place = '';
      this.register.info = 'Dodano do aplikacji. Nie zapomnij wysłać na serwer.';
    }
  }

  private isDisable() {
    if (this.register.name && this.register.place) { return false; }
    return true;
  }

  registerNameValidation($event) {
    const correct = (/^[a-zA-Z]{1,}[a-zA-Z\s]{0,}$/.test(this.register.name));
    if (!correct) {
      this.register.info = 'Nazwa może zawierać tylko litery.';
    }
    if (correct || this.register.name === '') {
      this.register.info = '';
    }
  }

}
