import { Component, OnInit } from '@angular/core';
import { ApiService } from '/Users/jennienguyen/Desktop/CS400/cs400/ps7/src/app/api.service';
import {Weather} from '../weather';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  searchText = new FormControl('', [Validators.required, Validators.minLength(1)]);
  weather: Weather[] = [];
  private headers: string[];
  location: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getWeather() {
    this.api.getWeather()
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

        for (const data of resp.body) {
          this.weather.push(data);
         }
        console.log(this.weather);
    });
  }

}
