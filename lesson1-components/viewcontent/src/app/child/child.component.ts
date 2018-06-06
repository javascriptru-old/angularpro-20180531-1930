import { Component, OnInit } from '@angular/core';
import { NestedComponent } from '../nested/nested.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends NestedComponent implements OnInit {

  title = 'Hello child!';

  ngOnInit() {
  }

}
