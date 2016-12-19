import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {
  public name: string;

  constructor() {
    this.name = 'Anton';
  }
}
