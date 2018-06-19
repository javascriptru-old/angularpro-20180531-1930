// import { timer } from 'rxjs';

// timer(0, 1000).subscribe( (n: number) => console.log(n));

const myInput = document.querySelector('input');

// myInput.addEventListener('input', (event: KeyboardEvent) => {
//   console.log((event.target as HTMLInputElement).value);
// });

// function createPromise() {
//   let listener: (event: KeyboardEvent) => void;
//   const p = new Promise(resolve => {
//     listener = (event: KeyboardEvent) => {
//       resolve((event.target as HTMLInputElement).value);
//     }
//     myInput.addEventListener('input', listener);
//   });
//   p.then(value => {
//     console.log(value);

//     fetch(`https://api.github.com/search/repositories?q=${value}`)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response.total_count);
//     })


//     myInput.removeEventListener('input', listener);
//     createPromise();
//   });
// }
// createPromise();

// import { fromEvent } from 'rxjs';
// import { switchMap, debounceTime } from 'rxjs/operators';

// const o = fromEvent(myInput, 'input');
// o.pipe(debounceTime(500), switchMap((event: KeyboardEvent) => {
//   return fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`)
//     .then(response => response.json())
// })).subscribe(response => console.log(response.total_count))

import { timer, interval, range, Observable, Observer, of, from, throwError, empty, Subject } from 'rxjs';

// const o = Observable.create((observer: Observer<string>) => {
//   observer.next('Hello!');
//   observer.next('Hello!');
//   observer.next('Hello!');

//   setInterval(_ => {
//     observer.next('Hi!');
//   }, 1000);

//   setTimeout(_ => {
//     observer.complete();
//   }, 10000);
// });

// const o = of('string', 'string', 'string', 'string')
// const o = from(['string', 'string', 'string', 'string']);
// const o = from(Promise.resolve('string'));

// const o = interval(1000);

//Observable


// let b: Observer<string>;
// const o = Observable.create((observer: Observer<string>) => {
//   b = observer;
//   observer.next('Hello!');
// });

// o.subscribe({
//   next: (value: number) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// b.next('Winner!');

// Subject

// Cold & Hot

// Hot (TV)  -> Subject, fromEvent
// Cold (Youtube) ->


// const s = new Subject();

// s.next('Hello!');

// s.subscribe({
//   next: (value: number) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// s.next('Hi!');

import { first, last, filter, single, ignoreElements } from 'rxjs/operators'
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { throttle, throttleTime } from 'rxjs/operators'
import { audit, auditTime } from 'rxjs/operators'
import { skip, skipLast, skipUntil, skipWhile } from 'rxjs/operators'
import { take, takeLast } from 'rxjs/operators'

// const o = timer(0, 1000).pipe(takeLast(1));


// o.subscribe({
//   next: (value: number) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

import { forkJoin } from 'rxjs';
import { combineLatest, zip } from 'rxjs/operators';
import { concat, merge } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { withLatestFrom } from 'rxjs/operators';
import { pairwise, race } from 'rxjs/operators';

// const o1 = timer(1000, 4000).pipe(take(3));
// const o2 = timer(2000, 4000).pipe(take(3));
// const o3 = timer(3000, 4000).pipe(take(3));

// // const o = o1.pipe(combineLatest(o2, o3));
// // const o = forkJoin(o1, o2, o3);
// const o = o1.pipe(race(o2, o3));


// const subscribtion = o.subscribe({
//   next: (value: number) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

import { tap, finalize, delay, delayWhen, timeout } from 'rxjs/operators';

// const o = range(5, 25).pipe(tap(number => {
//   console.log(number);
// }));

const o = range(1, 10).pipe(delay(3000), timeout(1000), finalize(() => {
  console.log('HERE!')
}));


const subscribtion = o.subscribe({
  next: (value: number) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error', error)
});