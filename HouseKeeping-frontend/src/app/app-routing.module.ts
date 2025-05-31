import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AppComponent } from './app.component';
import { MasterComponent } from '../components/master/master.component';
import { StudentserService } from 'src/services/studentser.service';
import { AdminserService } from 'src/services/adminser.service';
import { MasterserService } from 'src/services/masterser.service';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'master',
    component: MasterComponent,
    canActivate : [MasterserService]
  },
  {
    path: 'allot',
    component: AllotComponent
  },
  {
    path: 'complaints',
    component: ComplaintsComponent,
    canActivate : [AdminserService]
  },
  {
    path: 'dashboardadm',
    component: DashboardadmComponent,
    canActivate : [AdminserService]
  },
  {
    path: 'dashboardstd',
    component: DashboardstdComponent,
    canActivate : [StudentserService]
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate : [StudentserService]
  },
  {
    path: 'registerkeeper',
    component: RegisterkeeperComponent,
    canActivate : [AdminserService]
  },
  {
    path: 'registerstd',
    component: RegisterstdComponent,
    canActivate : [AdminserService]
  },
  {
    path: 'requestser',
    component: RequestserComponent,
    canActivate : [StudentserService]
  },
  {
    path: 'suggestions',
    component: SuggestionsComponent,
    canActivate : [AdminserService]
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
