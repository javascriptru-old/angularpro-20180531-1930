import { Directive, ViewContainerRef, TemplateRef, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input() delay: number;

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<ElementRef>
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }

}
