import { Component } from '@angular/core';
import {LateralbarComponent} from '../lateralbar/lateralbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [LateralbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
