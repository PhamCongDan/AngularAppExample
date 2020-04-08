import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  
  @Input() public data: any;
  @Input() avatarUrl: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
