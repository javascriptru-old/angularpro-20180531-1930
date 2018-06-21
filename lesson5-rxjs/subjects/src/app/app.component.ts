import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  subscriberIndex = 0;
  subscribersValues = [];
  // subject = new Subject<number>();
  // subject = new BehaviorSubject<number>(0);
  // subject = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 1000);
  subject = new AsyncSubject<number>();

  emmitValue() {
    ++this.counter;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);
    this.subject.subscribe(value => subscriberValues.push(value))
  }
}
