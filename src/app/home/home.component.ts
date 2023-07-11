import {Component, OnInit} from '@angular/core';
import {Observable,Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor() {
  const obs = Observable.create((observer: any) => {
      observer.next(Math.random())
    })
obs.subscribe((value:number)=>{
  console.log("Subscription A :"  + value)
})
  obs.subscribe((value:number)=>{
    console.log("Subscription B :"  + value)
  })
  const sbj =new Subject()

  sbj.subscribe((value1)=> {
    console.log("Subject A :"  + value1)
  })
  // @ts-ignore
  sbj.subscribe((value1)=> {
    console.log("Subject B :"  + value1)
  })
  sbj.next(Math.random())
}

}

