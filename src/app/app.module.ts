import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from "./service/ServiceComponent";
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { SohumStepOutCampaignComponent } from './sohum-step-out-campaign/sohum-step-out-campaign.component';
import { HamleysComeAndPlayCampaignComponent } from './hamleys-come-and-play-campaign/hamleys-come-and-play-campaign.component';
import { KittensSpringCampaignComponent } from './kittens-spring-campaign/kittens-spring-campaign.component';
import { SoleheadCampaignDesignComponent } from './solehead-campaign-design/solehead-campaign-design.component';
import { StripMinistryWaxingComponent } from './strip-ministry-waxing/strip-ministry-waxing.component';
import { CommunicationDesignEsenproComponent } from './communication-design-esenpro/communication-design-esenpro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    WorkComponent,
    ContactComponent,
    SohumStepOutCampaignComponent,
    HamleysComeAndPlayCampaignComponent,
    KittensSpringCampaignComponent,
    SoleheadCampaignDesignComponent,
    StripMinistryWaxingComponent,
    CommunicationDesignEsenproComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
