import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/weather';

const apiURL = 'http://localhost:3000/ps4/get_weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getWeather(): Observable<HttpResponse<Weather[]>> {
    return this.http.get<Weather[]>(apiURL, { observe: 'response' });
  }
}
