import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigationItems = [
    { link: 'home', label: 'Home', icon: 'monetization_on' },
    { link: 'home', label: 'Home', icon: 'monetization_on' },
    { link: 'home', label: 'Home', icon: 'monetization_on' },
    { link: 'home', label: 'Home', icon: 'monetization_on' },
    { link: 'home', label: 'Home', icon: 'monetization_on' },
    { link: 'home', label: 'Home', icon: 'monetization_on' },
    { link: 'home', label: 'Home', icon: 'monetization_on' },
  ];
  title = 'geolud-client';
}
