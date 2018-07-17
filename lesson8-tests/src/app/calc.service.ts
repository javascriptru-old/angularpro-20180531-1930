import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  sum(a: number, b: number): number {
    return a + b;
  }

  sumAsync(a: number, b: number): Promise<number> {
    return new Promise(resolve => {
      setTimeout(_ => {
        resolve(a + b);
      }, 1000);
    })
  }
}
