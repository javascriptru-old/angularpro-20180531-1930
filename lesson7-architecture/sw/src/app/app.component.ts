import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(update: SwUpdate, push: SwPush) {

    // update.available.subscribe()
    // update.checkForUpdate()

    // push.requestSubscription();

  }
}
