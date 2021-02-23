import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){

      $('.work-strategy > li > a').on('click', function(e){

        e.preventDefault();

        var $this = $(this);
        var _gethref = $this.attr('href');
        _gethref = _gethref.substr(1);
        console.log(_gethref);
        _gethref = '#' + _gethref;

        $(_gethref).slideToggle();
        $(_gethref).siblings('div').slideUp(); 

      });

    });

  }

}
