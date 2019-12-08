import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {
  @Input () location: string;
  @Input() receivedWeather: string;
  elseBlock: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
