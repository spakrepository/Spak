import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from "./service/ServiceComponent";
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import {SohumStepOutCampaignComponent} from './sohum-step-out-campaign/sohum-step-out-campaign.component';
import { HamleysComeAndPlayCampaignComponent } from './hamleys-come-and-play-campaign/hamleys-come-and-play-campaign.component';
import { KittensSpringCampaignComponent } from './kittens-spring-campaign/kittens-spring-campaign.component';
import { SoleheadCampaignDesignComponent } from './solehead-campaign-design/solehead-campaign-design.component';
import { StripMinistryWaxingComponent } from './strip-ministry-waxing/strip-ministry-waxing.component';
import { CommunicationDesignEsenproComponent } from './communication-design-esenpro/communication-design-esenpro.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo :'/home', 
    pathMatch:'full'
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'about', 
    component:AboutComponent
  },
  {
    path:'service', 
    component:ServiceComponent
  },
  {
    path:'work',
    component:WorkComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'sohum-step-out-campaign',
    component:SohumStepOutCampaignComponent
  },
  {
    path:'hamleys-come-and-play-campaign',
    component:HamleysComeAndPlayCampaignComponent
  },
  {
    path:'kittens-spring-campaign',
    component:KittensSpringCampaignComponent
  },
  {
    path:'solehead-campaign-design',
    component:SoleheadCampaignDesignComponent
  },
  {
    path:'strip-ministry-waxing',
    component:StripMinistryWaxingComponent
  },
  {
    path:'communication-design-esenpro',
    component:CommunicationDesignEsenproComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
