import { Component, OnInit } from '@angular/core';
import { actualCurrency } from '../../shared/services/currencyExchange';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})

export class BodyComponent implements OnInit {
  constructor() {}

  change = actualCurrency().then((data) => {
    data.map((el: any) => {
      return (this.rates[el.cc] = el.rate);
    });
  });
  rates: any = {
    UAH: 1,
  };
  first = 0;
  second:any = 0;
  selectedValue1: string = "UAH";
  selectedValue2: string = "USD";
  firstValue = (e: any) => {
    this.second = this.rates[this.selectedValue2];
    this.first = e.target.value;
    this.second = (this.first * this.rates[this.selectedValue1]) / this.second;
  };
  secondValue = (e: any) => {
    this.first = this.rates[this.selectedValue1];
    this.second = e.target.value;
    this.first = (this.second * this.rates[this.selectedValue2]) / this.first;
  };
  firstPereshitat = () => {
    this.second = this.rates[this.selectedValue2];
    this.second = ((this.first * this.rates[this.selectedValue1]) / this.second);    
  };
  secondPereshitat = () => {
    this.first = this.rates[this.selectedValue1];
    this.first = (this.second * this.rates[this.selectedValue2]) / this.first;
  };

  ngOnInit(): void {}
}
