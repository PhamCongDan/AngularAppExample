import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, MatTreeModule, MatCheckboxModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { ButtonComponent } from './component/button/button/button.component';
import { WeatherComponent } from './component/weather/weather.component';
import { WeathersService} from './services/weathers.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import {} from '@angular/material';
import { DialogWeatherComponent } from './component/dialog-weather/dialog-weather.component';
import { MatTreeComponent } from './component/mat-tree/mat-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonComponent,
    WeatherComponent,
    DialogWeatherComponent,
    MatTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatTreeModule
  ],
  providers: [
    WeathersService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ButtonComponent]
})
export class AppModule { }
