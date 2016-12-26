 // export for convenience.
export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[routerLink]'
})

export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.linkParams;
  }
}
