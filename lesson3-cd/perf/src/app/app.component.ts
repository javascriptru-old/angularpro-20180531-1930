import { Component, ChangeDetectionStrategy } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-root',
  template: `
    <svg width="550" height="550"
      (mousedown)="mouseDown($event)"
      (mousemove)="mouseMove($event)"
      (mouseup)="mouseUp($event)"
      >
      <svg:g
        box
        *ngFor="let box of boxes"
        [box]="box"
        [selected]="box.id == currentId"
        ></svg:g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  ngOnInit() {
    for (let i=0; i < 10; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(box);
    }
  }

  mouseDown(event) {
    debugger
    const id = Number(event.target.getAttribute("dataId"));
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(this.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp($event) {
    this.currentId = null;
  }

  updateBox(id, x, y) {
    this.boxes[id] = {
      id,
      x,
      y
    };
  }

}