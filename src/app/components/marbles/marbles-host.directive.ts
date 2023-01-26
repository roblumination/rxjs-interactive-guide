import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMarblesHost]',
})
export class MarblesHostDirective {
  constructor(public viewContanerRef: ViewContainerRef) {}
}
