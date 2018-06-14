import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="">Home</a>
    <a routerLink="user">User</a>

    <a [routerLink]="[{ outlets: { primary: 'user', popup: 'user'}}]">User</a>
    <a [routerLink]="[{ outlets: { popup: null}}]">NO Popup</a>
<br>

<a routerLink="lazy">Lazy</a>

    <router-outlet></router-outlet>

    <router-outlet name="popup"></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
