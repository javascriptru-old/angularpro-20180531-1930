import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get one user', inject([UserService, HttpTestingController],
    (service: UserService, backend: HttpTestingController) => {

    const mockUser = { name: 'John' };

    service.getOne(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users/1'
    }).flush(mockUser);

  }));
});
