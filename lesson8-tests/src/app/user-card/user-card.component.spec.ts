import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { UserCardComponent } from './user-card.component';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let spy: jasmine.Spy;
  let userService: UserService;
  let mockUser;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    mockUser = { name: 'John' };
    spy = spyOn(userService, 'getOne').and.returnValue(of(mockUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
    component.somemethod();
    expect(spy).toHaveBeenCalled();
  });
});
