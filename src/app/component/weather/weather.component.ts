import { Component, OnInit, NgModule } from '@angular/core';
import { WeathersService } from '../../services/weathers.service';

import { Weathers } from 'src/app/models/weathers';
import { MatDialog } from '@angular/material';
import {ButtonComponent } from '../button/button/button.component';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

// import { from } from 'rxjs';

export class Temperature {
  strCityName: string;
  strTemp: string;
// tslint:disable-next-line: ban-types
}

export interface Cartoon {
  id: number;
  name: string;
  checked: boolean;
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

  form: FormGroup;
  cartoonsData: Cartoon[] = [
    { id: 0, name: 'Tom and Jerry', checked: true },
    { id: 1, name: 'Rick and Morty', checked: true },
    { id: 2, name: 'Ben 10', checked: true },
    { id: 3, name: 'Batman: The Animated Series', checked: true }
  ]
  cartoonControl: FormControl[] = [
    new FormControl(true),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false)
  ]
  



  private strName = 'Cong Dan';
  txtCityName = '';
  // thoitiet: Temperature = { strCityName: 'hanoi', strTemp: '12' };

  weathers: Weathers = {txtCityName: '', txtTemp: ''};

  // weathersService: WeathersService;

  constructor(private weatherService: WeathersService,
    private fb: FormBuilder,
   private matDialog: MatDialog) { }

  ngOnInit(): void {


    this.form = this.fb.group({
      name: this.fb.array([true]),
    });

    // console.log(this.cartoonControl);
    
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

  
  onChangeEventFunc(name: string, isChecked: boolean) {
    
    const cartoons = (this.form.controls.name as FormArray);
    
    if (isChecked) {
      cartoons.push(new FormControl(name));
    } else {
      const index = cartoons.controls.findIndex(x => x.value === name);
      cartoons.removeAt(index);
    }
    console.log(this.form.controls.name['controls'].length, isChecked);
  }

  submit() {
    console.log(this.form.value.name);
  }

  validateCheck() {
    console.log('validate');
    
    return this.form.value.name.length > 0
  }
}
