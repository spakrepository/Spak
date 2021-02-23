import { Component, OnInit } from '@angular/core';

declare var $: any;
// (or)
// import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() { 
  }
  
}
