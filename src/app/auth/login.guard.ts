import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from "@angular/router";

import { Observable } from "rxjs";
@Injectable({
	providedIn: "root",
})
export class LoginGuard implements CanActivate {
	constructor(private routes: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
    if (localStorage.getItem("session") != null) {
   
			return true;
    } else {
       console.log("null local storage")
			this.routes.navigate(["/login"]);
      return false;
      
		}
	}
}
