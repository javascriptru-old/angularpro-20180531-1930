import { Component, OnInit, QueryList, ContentChild, AfterContentInit, ContentChildren, ViewChild, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NestedComponent } from '../nested/nested.component';
import { BannerComponent } from '../banner/banner.component';
import { HostDirective } from '../host.directive';

@Component({
  selector: 'app-item',
  template: `
    <h1>VIEW</h1>
    <ng-content select="h1"></ng-content>
    <ng-content select="main"></ng-content>
    <ng-container *ngTemplateOutlet="t">
    11
    
    1111
    </ng-container>

    <ng-template #t>
       <h1>TEMPLATE</h1>
    </ng-template>

    <ng-container *ngComponentOutlet="myComponentClass"></ng-container>
  `,
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  myComponentClass = BannerComponent;
  // @ViewChild()
  // @ViewChildren()
  @ContentChildren(NestedComponent) nestedElements: QueryList<NestedComponent>;

  @ViewChild(HostDirective) host: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
   private view: ViewContainerRef
  ) { }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    console.log('ngOnInit');

    setTimeout(() => {
      this.myComponentClass = NestedComponent;
    }, 3000);

    //const bannerFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    //this.host.view.createComponent(bannerFactory);
  }

}
