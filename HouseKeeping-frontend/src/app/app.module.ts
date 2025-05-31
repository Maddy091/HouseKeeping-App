import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { DashboardadmComponent } from 'src/components/dashboardadm/dashboardadm.component';
import { AllotComponent } from 'src/components/allot/allot.component';
import { ComplaintsComponent } from 'src/components/complaints/complaints.component';
import { SuggestionsComponent } from 'src/components/suggestions/suggestions.component';
import { RegisterstdComponent } from 'src/components/registerstd/registerstd.component';
import { RegisterkeeperComponent } from 'src/components/registerkeeper/registerkeeper.component';
import { DashboardstdComponent } from 'src/components/dashboardstd/dashboardstd.component';
import { RequestserComponent } from 'src/components/requestser/requestser.component';
import { FeedbackComponent } from 'src/components/feedback/feedback.component';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MasterComponent } from '../components/master/master.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardadmComponent,
    AllotComponent,
    ComplaintsComponent,
    SuggestionsComponent,
    RegisterstdComponent,
    RegisterkeeperComponent,
    DashboardstdComponent,
    RequestserComponent,
    FeedbackComponent,
    ProfileComponent,
    MasterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
