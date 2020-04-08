import { Component, OnInit, NgModule } from '@angular/core';
import { WeathersService } from '../../services/weathers.service';

import { Weathers } from 'src/app/models/weathers';
import { MatDialog } from '@angular/material';
import {ButtonComponent } from '../button/button/button.component';

// import { from } from 'rxjs';

export class Temperature {
  strCityName: string;
  strTemp: string;
// tslint:disable-next-line: ban-types
}
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [
    WeathersService
]
})
export class WeatherComponent implements OnInit {
  private strName = 'Cong Dan';
  txtCityName = '';
  // thoitiet: Temperature = { strCityName: 'hanoi', strTemp: '12' };

  weathers: Weathers = {txtCityName: '', txtTemp: ''};

  // weathersService: WeathersService;

  constructor(private weatherService: WeathersService,
   private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.weatherService.getJson(this.txtCityName).subscribe(data => {
// tslint:disable-next-line: no-string-literal
      this.weathers.txtCityName = data['name'];
// tslint:disable-next-line: no-string-literal
      this.weathers.txtTemp = data['main']['temp'];
    });

    // open dialog
    this.matDialog.open(ButtonComponent, {
      width: '1000px',
      height: '600px',
      data: {name: this.strName}
    });
  }
}
