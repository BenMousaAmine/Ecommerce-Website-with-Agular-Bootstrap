import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor( protected  authService:AuthService) {
  }
  onLogin(e:Event){
    e.preventDefault()
    this.authService.login()
  }
  ngOnInit(): void {
  }

}
