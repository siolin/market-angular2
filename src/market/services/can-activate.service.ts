import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class UserToken {
  token: string;

  constructor(
    private authService: AuthService
  ) { }

  getToken() {
    return this.authService.getToken();
  }

}

@Injectable()
export class Permissions {
  canActivate(user: UserToken): boolean {
    return !!user.getToken();
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canActivate(this.currentUser);
  }
}
