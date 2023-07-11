import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {resolve} from "@angular/compiler-cli";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn = false
  constructor( private router:Router) { }



isAuthenticated() {
  return new Promise<boolean>((resolve,reject)=> {
    // in questo modo si click su profile e non sei loggato aspetti 3 secondi e ti manda al login
    if (this.loggedIn) {
      resolve(this.loggedIn)
    } else{
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 3000)
  }
  })
}
login(){
  this.loggedIn=true
  this.router.navigate(['/profile'])
}
logout(){
  this.loggedIn= false
  this.router.navigate(['/login'])
}

}
