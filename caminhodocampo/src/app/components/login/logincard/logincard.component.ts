import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logincard',
  standalone: true,
  imports: [],
  templateUrl: './logincard.component.html',
  styleUrl: './logincard.component.css'
})
export class LogincardComponent {
  constructor(private router: Router) {}
  onSubmit(event: Event) {
    console.log('submit');
    event.preventDefault();
    this.router.navigate(['/dashboard']);
  }
}
