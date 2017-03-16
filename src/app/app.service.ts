import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
  private mockedGoals = ['learn components', 'learn directive', 'learn pipes', 'learn router']

  getGoals() {
    return Observable.of(this.mockedGoals);
  }
}
