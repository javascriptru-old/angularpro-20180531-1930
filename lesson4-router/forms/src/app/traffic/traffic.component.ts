import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// @Component({
//   selector: 'app-traffic',
//   template: `
//   <div class="trafficlight" tabindex="1">
//   <div class="protector"></div>
//   <div class="protector"></div>
//   <div class="protector"></div>
//   <div class="bulb"
//      *ngFor="let c of ['red', 'yellow', 'green']"
//      ></div>
//   </div>
//   `,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => TrafficComponent),
//       multi: true
//     }
//   ],
//   styles: []
// })
// export class TrafficComponent implements ControlValueAccessor {

//   constructor() { }



// }
