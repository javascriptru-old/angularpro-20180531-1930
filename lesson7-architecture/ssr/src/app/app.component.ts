import { Component } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private state: TransferState) {

     const data = this.state.get('safsdf')

     if(!data) {
      this.http.get().subscribe(data => {
        this.state.set('safsdf', data)
      })
     }

  }
}
