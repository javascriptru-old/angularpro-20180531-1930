import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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



   `,
  styles: []
})
export class AppComponent {
  traffic: FormControl = new FormControl('', [Validators.maxLength(5), myValidator(5)]);
  trafficGroup: FormGroup = new FormGroup({}, [Validators.maxLength(5), myValidator(5)]);




  constructor(private fb: FormBuilder) {
    this.traffic.valueChanges.subscribe(console.log);
  }

}

function myValidator(param: number) {
  return function myValidator(c: AbstractControl) {
    if('error' || param){
      return { error: { message: 'bad response' }}
    }

    return null;
  }
}



/*
FormControl
FormGroup
FormArray

*/