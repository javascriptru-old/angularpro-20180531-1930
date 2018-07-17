import { LogClickDirective } from './log-click.directive';
import { Component } from '../../node_modules/@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: `<div logClick (changes)="log($event)"></div>`
})
export class ContainerComponent {
  public output;

  log(data){
    this.output = data;
  }
}


describe('LogClickDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent, LogClickDirective ]
    });

    fixture = TestBed.createComponent(ContainerComponent);
    container = fixture.componentInstance;
  });


  it('should create an instance', () => {
    const directive = new LogClickDirective();
    expect(directive).toBeTruthy();
  });

  it('should log click', () => {
    const div = fixture.nativeElement.querySelector('div');
    div.click();
    div.click();
    div.click();
    expect(container.output).toBe(3);
  });
});
