import { Component, OnInit, Type } from '@angular/core';
import { actualCurrency } from '../../shared/services/currencyExchange';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  constructor() {}

  actualcurrence :any= []

  change = actualCurrency().then((data) => {
    this.actualcurrence=data
    })
  
 
  
  ngOnInit(): void {}
}
