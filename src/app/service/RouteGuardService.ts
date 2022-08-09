import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { AuthenticationService } from "./AuthenticationService";

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.isLoggedIn(url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state)
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean {
        let url = `/${route.path}`
        return this.isLoggedIn(url);
    }

    isLoggedIn(url: string): boolean {
        let isAuthenticated: boolean = this.authenticationService.isAuthenticated();
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}