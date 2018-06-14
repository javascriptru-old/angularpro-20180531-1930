import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

/*
   <ul>
     <li *ngFor="let i of phones.controls">
       <input [formControlName]="i">
     </li>
   </ul>
   */

@Component({
  selector: 'app-root',
  template: `

   <app-traffic [formControl]="traffic"></app-traffic>

   `,
  styles: []
})
export class AppComponent {
  traffic: FormControl = new FormControl();




  constructor(private fb: FormBuilder) {
    this.traffic.valueChanges.subscribe(console.log);
  }

}

/*
FormControl
FormGroup
FormArray

*/