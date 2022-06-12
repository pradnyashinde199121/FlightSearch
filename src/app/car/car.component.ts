import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  value: number = 50;  
maxvalue: number = 70;  
options: Options = {  
    floor: 0,  
    ceil: 100  
};  
  constructor() { }

  ngOnInit(): void {
    
  }

}
