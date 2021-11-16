import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { RouterAuthService } from "../services/RouteGuard/router-auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminAccessGuard implements CanActivate {
  constructor(private routeAuth: RouterAuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    if (this.routeAuth.isAdminAuthenticated()) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
