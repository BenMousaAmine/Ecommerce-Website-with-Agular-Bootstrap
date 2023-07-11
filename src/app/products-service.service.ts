import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Product,ProductsRoot} from "./models";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
 public productOb? : Product[]
  public observable: Observable<Product[]>
  httpSubscription? : Subscription
  public id?:string
  public cart: { id: number; title: string; price: number; }[] = [{ id: 0, title: "", price: 0 }];
  constructor(private http :HttpClient) {
    this.observable = new Observable(subscriber => {
      if(!!this.productOb?.length){
        subscriber.next(this.productOb)
        console.log("Dati gia presente in cache",this.productOb)
      }else{
        this.httpSubscription?.unsubscribe()
        this.httpSubscription= this.http.get<ProductsRoot>(`https://dummyjson.com/products`)
          .subscribe(res=>{
            this.productOb= [...res.products]
            subscriber.next(this.productOb)
            console.log("ho preso dati con http.get",this.productOb)
          })
      }
    })
 }
 getProd = () => {
    return this.productOb
  };


}
