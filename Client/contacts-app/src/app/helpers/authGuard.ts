import { Injectable } from '@angular/core';
import JwtHelper from 'src/app/helpers/jwtHelper';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private JwtHelper:JwtHelper) { }
  
    canActivate() {
        if (this.JwtHelper.isTokenExpired()) {
            this.router.navigate(['/auth/login']);
        }
        return true;
    }
  }