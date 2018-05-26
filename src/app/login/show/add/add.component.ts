import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() database;
  public register = {
    name: '',
    place: '',
    info: '',
    found: false,
    correct: false,
    added: false
  };
  @Output() uploaded = new EventEmitter<string>();

  constructor(private _apiService: ApiService) { }

  ngOnInit() { }

  registerNameValidation($event) {
    this.register.found = false;
    for (const object of this.database) {
      if (object.hasOwnProperty('name') && object.name === this.register.name) {
        this.register.found = true;
        this.register.info = 'Podana nazwa już istnieje.';
        return;
      }
    }
    this.register.correct = (/^[a-zA-Z]{1,}[a-zA-Z\s]{0,}$/.test(this.register.name));
    if (!this.register.correct) {
      this.register.info = 'Nazwa może zawierać tylko litery.';
    }
    if (this.register.correct || this.register.name === '') {
      this.register.info = '';
    }
  }

  private add() {
    this._apiService.addToDatabase(this.register.name, this.register.place).subscribe(data => {
      if (data) {
        // this.database.push({'name': this.register.name, 'place': this.register.place});
        this.register.name = '';
        this.register.place = '';
        this.register.info = 'Dodano do aplikacji.';
      }
    });
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
  }

  private isDisable() {
    if (this.register.name && this.register.place && !this.register.found && this.register.correct) { return false; }
    return true;
  }

}
