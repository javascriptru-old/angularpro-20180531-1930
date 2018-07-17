import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public user;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  somemethod() {
    this.userService.getOne(1).subscribe(user => this.user = user);
  }

}
