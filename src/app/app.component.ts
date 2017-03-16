import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 app';
  description = 'Some description';
  goals$ = this.appService.getGoals();
  showDetails = true;

  constructor(private appService: AppService) {}
}
