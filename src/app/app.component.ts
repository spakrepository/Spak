import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public HideShowMenu:boolean = true;

  screenHeight:number;
  screenWidth:number;

  private blacklinkcolor : string = 'blacklinkcolor'; 
  private whitelinkcolor : string = 'whitelinkcolor'; 
  private setLinkColor:string = 'navbar-nav pl-md-5 ml-auto'; 
  logo:string = './assets/images/spak-brand-marketing-company-mumbai-logo-blue.png';

  footerHeadingClass : boolean = true;
  isCenterCopyWrite : boolean = false;


  constructor(private router :Router) {    
    
    let _currentUrl = window.location.href;
    _currentUrl = _currentUrl.substr(_currentUrl.lastIndexOf('/') + 1);
    
    console.log('Current Url ' + _currentUrl);

    if(_currentUrl == 'home' || _currentUrl == '')
    {
      this.setLinkColor = 'navbar-nav pl-md-5 ml-auto highlightlink';
      this.logo = './assets/images/spak-brand-marketing-company-mumbai-logo-blue.png';
    }
    else
    {
      this.setLinkColor = 'navbar-nav pl-md-5 ml-auto highlightlink';
      this.logo = './assets/images/spak-brand-marketing-company-mumbai-logo-white.png';
    }

  }

  ngOnInit(){
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 767)
    {
      this.HideShowMenu = false;
      this.footerHeadingClass = false;
      this.isCenterCopyWrite = true;
    }
  }


  changeLinkColor(val:any):void{
    if(val == 'samelink')
    {
      this.setLinkColor = 'navbar-nav pl-md-5 ml-auto highlightlink';
      this.logo = './assets/images/spak-brand-marketing-company-mumbai-logo-white.png';
    }
    else
    {
      this.setLinkColor = 'navbar-nav pl-md-5 ml-auto highlightlink';
      this.logo = './assets/images/spak-brand-marketing-company-mumbai-logo-blue.png';
    }
  }

  

  
  closeMobMenu(): void {
    
    if(this.screenWidth <= 767)
    {
      this.HideShowMenu = false;
    }
    else
    {
      this.HideShowMenu = true;      
    }
  }

  toggleMenu(event?: Event): void {
    this.HideShowMenu = !this.HideShowMenu;
  }

}
