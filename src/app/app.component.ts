import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Forecast', url: '/folder/Forecast', icon: 'sunny' },
    { title: 'Contact', url: '/folder/Contact', icon: 'mail' },
  ];
  public labels = ['Test'];
  constructor() {}
}
