import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  title = 'Hello nested!';

  constructor() { }

  ngOnInit() {
  }

}
