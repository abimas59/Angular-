import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 articles = dataFake;

  constructor() { }

  ngOnInit(): void {
  }

}
