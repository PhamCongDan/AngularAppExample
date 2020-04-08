import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weathers } from '../models/weathers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {
  localUrl = 'https://website.com';
  strUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0db2214a4355aa623cc1c8aee6c11e7e&q=';
  strLocalUrl = '/src/assets/weather.json';

  constructor(private httpClient: HttpClient) {
  }

  getJson(cityName: string) {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0db2214a4355aa623cc1c8aee6c11e7e&q='
    + cityName);
  }

}
