import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigationItems = [
    { link: 'home', label: 'About Me' },
    { link: 'resume', label: 'Resume' },
    { link: 'projects', label: 'Projects' },
    { link: 'chat', label: 'Chat' },
    { link: 'contact', label: 'Contact' },
  ];
}
