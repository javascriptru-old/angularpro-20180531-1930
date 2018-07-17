import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService]
    });
  });

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  it('should sum', inject([CalcService], (service: CalcService) => {
    expect(service.sum(3, 4)).toBe(7);
  }));

  // it('***', (done) => {
  //   done();
  // });

  it('should sum async', (done: DoneFn) => {

    inject([CalcService], (service: CalcService) => {
      service.sumAsync(3, 4).then((result) => {
        expect(result).toBe(7);
        done();
      })
    })();

  });


  it('should sum', fakeAsync(inject([CalcService], (service: CalcService) => {
    service.sumAsync(3, 4).then((result) => {
      expect(result).toBe(7);
    });
    tick(1000);
  })));


});
