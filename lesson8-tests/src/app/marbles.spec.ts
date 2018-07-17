import { cold, hot, getTestScheduler, time } from 'jasmine-marbles';
import { interval } from 'rxjs'
import { concat, take, filter, delay} from 'rxjs/operators'

describe('Marbles', () => {
  it('simple', () => {
    const source = 'x-x-x|';
    const expected = 'x-x-x|';

    expect(cold(source)).toBeObservable(cold(expected));
  });

  it('concat', () => {
    const o1 = cold('x-x|');
    const o2 = cold('-y|');
    const expected = cold('x-x-y|');

    expect(o1.pipe(concat(o2))).toBeObservable(expected);
  });



  it('async', () => {
    const o = interval(10, getTestScheduler()).pipe(
      take(5),
      filter(v => v % 2 ===0)
    );

    getTestScheduler().flush();
    expect(o).toBeObservable(cold('-a-b-(c|)', {
      a: 0,
      b: 2,
      c: 4
    }));
  });

  it('delay', () => {
    const t = time('--|');
    const o = cold('a|', { a : 1}).pipe(delay(t, getTestScheduler()));
    expect(o).toBeObservable(cold('--a|', { a : 1 }))
  })


});

/*
- 10ms
| - compelete
^ - subscription
# - error
() - or condition
*/