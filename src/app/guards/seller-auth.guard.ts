import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SellerSignupService } from '../services/seller-signup.service';

@Injectable({
  providedIn: 'root',
})
export class sellerAuthGuard implements CanActivate {
  constructor(
    private sellerSignupService: SellerSignupService,
    private router: Router,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const hasAdmin =
      !!localStorage.getItem('admin') ||
      this.sellerSignupService.isSellerLoggedIn.value;
    if (hasAdmin) {
      return true;
      // return this.router.createUrlTree(['/customer', 'shop'])
    }

    if (localStorage.getItem('admin')) {
      return this.router.createUrlTree(['/customer', 'shop']);
    }

    if (localStorage.getItem('customer')) {
      return this.router.createUrlTree(['/customer', 'shop']);
    }

    return this.router.createUrlTree(['/'], {
      queryParams: { redirectUrl: state.url },
    });
  }
}
