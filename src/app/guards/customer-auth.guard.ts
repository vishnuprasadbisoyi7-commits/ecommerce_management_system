import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CustomerSignupService } from "../services/customer-signup.service";


@Injectable({
  providedIn: 'root'
})
export class customerAuthGuard implements CanActivate{
  constructor(private customerSignupService: CustomerSignupService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const hasCustomer = !!localStorage.getItem('customer') || this.customerSignupService.isCustomerLoggedIn.value
    if(hasCustomer){
      return true;
    }

    if(localStorage.getItem('admin')){
      return this.router.createUrlTree(['/seller', 'upload'])
    }

    return this.router.createUrlTree(['/'], { queryParams: { redirectUrl: state.url } })
  }
}
