import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:rect
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"></svg:rect>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {
  @Input() box;
  @Input() selected;
}