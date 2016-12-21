import {Directive, HostListener} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Directive({
  selector: '[logout]'
})

export class LogoutDirective {

  constructor(private storage: LocalStorageService) {}

  @HostListener('click') logout() {
    this.storage.clear('token');
  }

}
