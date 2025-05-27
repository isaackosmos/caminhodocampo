import {Routes} from '@angular/router';
import {LogincardComponent} from './components/login/logincard/logincard.component';
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', component: LogincardComponent},
  {path: 'dashboard', component: DashboardComponent}
];
