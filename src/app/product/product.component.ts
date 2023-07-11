import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from '../models';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductsServiceService} from "../products-service.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  productId?: number;
  product?: Product;
  productB?: Product[];
  subsbcription ? :Subscription
  httpSubscription? : Subscription
  private intervalSubscription?:Subscription

  constructor(private route: ActivatedRoute ,private router:Router, private http :HttpClient,protected prodService : ProductsServiceService) {
    const {id}=route.snapshot.params
    this.productId= id
    this.fetchData(id)
    this.subsbcription=route.params.subscribe(params=> {
      const {id}=route.snapshot.params
      this.productId= id
      this.fetchData(id)
    })
  }
  fetchData(id:number){
    this.httpSubscription?.unsubscribe()
    this.productB=this.prodService.getProd()
    if(this.productB?.length){
       this.product=this.productB?.find(element=>element.id==this.productId)
       console.log("ho preso dati da cache")
    }else {
      this.httpSubscription?.unsubscribe()
      this.httpSubscription= this.http.get<Product>(`https://dummyjson.com/products/${this.productId}`)
       .subscribe(res=>{
         this.product=res
         console.log("con fetch", this.product)

       })
   }

  }

  goToDetails(id:number){
    this.router.navigate(["/products",id])
  }

  ngOnDestroy(){
    this.subsbcription?.unsubscribe()
    this.httpSubscription?.unsubscribe()
  }
}
