
import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
/*
@Injectable({
  providedIn: 'root'
})
//metodo vecchio
export class AuthGuardService implements CanActivate{

  constructor( private authService:AuthService


               , private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Promise<boolean > {
    return this.authService.isAuthenticated().then(authenticated=>{
      if(authenticated){
        return true
      }else {
        this.router.navigate(['/login'])
        return false
      }
    })
  }




}
*/

//Metodo Recente
export const myCanActivate :CanActivateFn = (route: ActivatedRouteSnapshot,
                                             state: RouterStateSnapshot)=>{
  const authService = inject(AuthService)
  const router = inject(Router)
  return authService.isAuthenticated().then(authenticated=>{
    if(authenticated){
      return true
    }else {
      router.navigate(['/login'])
      return false
    }
  })
}
